import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const DIR = fileURLToPath(new URL('.', import.meta.url));

const SLUGS = [
  'homepage', 'services', 'ceramic-coating', 'ppf', 'window-tint',
  'vinyl-wraps', 'auto-detailing', 'rv-detailing', 'rv-ceramic-coating',
  'boat-detailing', 'boat-ceramic-coating', 'system-x', 'detailing-packages',
  'tesla-detailing', 'bmw-detailing', 'porsche-detailing', 'rivian-detailing',
  'ford-truck-detailing', 'about', 'contact', 'free-quote',
];

// Normalize text for comparison — collapse whitespace, trim, lowercase
function norm(s) {
  return s.replace(/[\s\u00a0]+/g, ' ').trim().toLowerCase()
    .replace(/['']/g, "'").replace(/[""]/g, '"').replace(/[–—]/g, '-');
}

function diffPage(slug) {
  const wp = JSON.parse(readFileSync(join(DIR, `wp-${slug}.json`), 'utf8'));
  const nj = JSON.parse(readFileSync(join(DIR, `nj-${slug}.json`), 'utf8'));
  const issues = [];

  // 1. TITLE TAG
  if (norm(wp.title) !== norm(nj.title)) {
    issues.push({ type: 'TITLE', severity: 'HIGH', wp: wp.title, nj: nj.title });
  }

  // 2. META DESCRIPTION
  if (wp.metaDesc !== '(none)' && norm(wp.metaDesc) !== norm(nj.metaDesc)) {
    issues.push({ type: 'META_DESC', severity: 'MEDIUM', wp: wp.metaDesc, nj: nj.metaDesc });
  }

  // 3. HEADINGS — compare by tag+text, check for missing/extra/reordered
  const wpHeadings = wp.headings.filter(h => {
    // Skip footer headings (H6 with known footer text)
    const t = h.text.toLowerCase();
    return !(h.tag === 'H6' && (
      t.includes('front range studio location') ||
      t.includes('follow us') || t.includes('quick links') ||
      t.includes('vehicle brands') || t.includes('services') ||
      t.includes('over 15 years')
    ));
  });

  const njHeadings = nj.headings.filter(h => {
    const t = h.text.toLowerCase();
    return !(h.tag === 'H6' && (
      t.includes('front range studio location') ||
      t.includes('follow us') || t.includes('quick links') ||
      t.includes('vehicle brands') || t.includes('services') ||
      t.includes('over 15 years')
    ));
  });

  // Find WP headings missing from NJ
  const njHeadingTexts = new Set(njHeadings.map(h => norm(h.text)));
  const wpHeadingTexts = new Set(wpHeadings.map(h => norm(h.text)));

  for (const h of wpHeadings) {
    const n = norm(h.text);
    if (n.length < 5) continue; // skip tiny headings
    if (!njHeadingTexts.has(n)) {
      // Check if text exists with different tag
      const sameTextDiffTag = njHeadings.find(nh => norm(nh.text) === n);
      if (sameTextDiffTag) {
        issues.push({ type: 'HEADING_TAG_CHANGE', severity: 'MEDIUM',
          wp: `${h.tag}: "${h.text}"`, nj: `${sameTextDiffTag.tag}: "${sameTextDiffTag.text}"` });
      } else {
        issues.push({ type: 'HEADING_MISSING', severity: 'HIGH',
          wp: `${h.tag}: "${h.text}"`, nj: '(not found)' });
      }
    }
  }

  // Find NJ headings not in WP (additions — lower severity)
  for (const h of njHeadings) {
    const n = norm(h.text);
    if (n.length < 5) continue;
    if (!wpHeadingTexts.has(n)) {
      const sameTextDiffTag = wpHeadings.find(wh => norm(wh.text) === n);
      if (!sameTextDiffTag) {
        issues.push({ type: 'HEADING_ADDED', severity: 'LOW',
          wp: '(not on WP)', nj: `${h.tag}: "${h.text}"` });
      }
    }
  }

  // 4. PARAGRAPH TEXT — find WP paragraphs missing from NJ
  // Use first 60 chars as fingerprint (exact match is too brittle for whitespace)
  for (const wpP of wp.paragraphs) {
    if (wpP.length < 20) continue;
    const wpNorm = norm(wpP);
    // Check if any NJ paragraph contains this text (or starts similarly)
    const found = nj.paragraphs.some(njP => {
      const njNorm = norm(njP);
      // Match if first 50 chars are the same, or one contains the other
      return njNorm.includes(wpNorm.slice(0, 50)) || wpNorm.includes(njNorm.slice(0, 50));
    });
    if (!found) {
      issues.push({ type: 'TEXT_MISSING', severity: 'HIGH',
        wp: wpP.length > 120 ? wpP.slice(0, 120) + '...' : wpP, nj: '(not found)' });
    }
  }

  // 5. SCHEMA — compare types present
  const wpSchemaTypes = new Set();
  for (const ld of wp.jsonld) {
    if (ld['@graph']) {
      for (const item of ld['@graph']) {
        const t = Array.isArray(item['@type']) ? item['@type'].join('+') : item['@type'];
        wpSchemaTypes.add(t);
      }
    } else if (ld['@type']) {
      const t = Array.isArray(ld['@type']) ? ld['@type'].join('+') : ld['@type'];
      wpSchemaTypes.add(t);
    }
  }
  const njSchemaTypes = new Set();
  for (const ld of nj.jsonld) {
    if (ld['@graph']) {
      for (const item of ld['@graph']) {
        const t = Array.isArray(item['@type']) ? item['@type'].join('+') : item['@type'];
        njSchemaTypes.add(t);
      }
    } else if (ld['@type']) {
      const t = Array.isArray(ld['@type']) ? ld['@type'].join('+') : ld['@type'];
      njSchemaTypes.add(t);
    }
  }

  for (const t of wpSchemaTypes) {
    if (!njSchemaTypes.has(t)) {
      issues.push({ type: 'SCHEMA_MISSING', severity: 'MEDIUM', wp: t, nj: '(not present)' });
    }
  }
  for (const t of njSchemaTypes) {
    if (!wpSchemaTypes.has(t)) {
      issues.push({ type: 'SCHEMA_ADDED', severity: 'LOW', wp: '(not on WP)', nj: t });
    }
  }

  return issues;
}

// Run diff on all pages
const report = {};
let totalIssues = 0;
let highCount = 0;

for (const slug of SLUGS) {
  try {
    const issues = diffPage(slug);
    if (issues.length > 0) {
      report[slug] = issues;
      totalIssues += issues.length;
      highCount += issues.filter(i => i.severity === 'HIGH').length;
    }
  } catch (err) {
    report[slug] = [{ type: 'ERROR', severity: 'HIGH', wp: err.message, nj: '' }];
  }
}

// Output report
let output = `# WordPress → Next.js Diff Report\n\n`;
output += `**Total issues: ${totalIssues}** (${highCount} HIGH, ${totalIssues - highCount} MEDIUM/LOW)\n\n`;

for (const [slug, issues] of Object.entries(report)) {
  const highIssues = issues.filter(i => i.severity === 'HIGH');
  const medIssues = issues.filter(i => i.severity === 'MEDIUM');
  const lowIssues = issues.filter(i => i.severity === 'LOW');

  output += `## /${slug === 'homepage' ? '' : slug + '/'}\n\n`;

  if (highIssues.length) {
    output += `### HIGH\n`;
    for (const i of highIssues) {
      output += `- **${i.type}**\n  - WP: \`${i.wp}\`\n  - NJ: \`${i.nj}\`\n`;
    }
    output += `\n`;
  }
  if (medIssues.length) {
    output += `### MEDIUM\n`;
    for (const i of medIssues) {
      output += `- **${i.type}**\n  - WP: \`${i.wp}\`\n  - NJ: \`${i.nj}\`\n`;
    }
    output += `\n`;
  }
  if (lowIssues.length) {
    output += `### LOW (additions)\n`;
    for (const i of lowIssues) {
      output += `- **${i.type}**: \`${i.nj}\`\n`;
    }
    output += `\n`;
  }
}

writeFileSync(join(DIR, 'DIFF-REPORT.md'), output);
console.log(output);
console.log(`\nReport saved to: ${join(DIR, 'DIFF-REPORT.md')}`);
