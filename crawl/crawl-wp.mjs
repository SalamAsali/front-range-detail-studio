import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = 'https://frontrangedetailstudio.com';
const OUT_DIR = new URL('.', import.meta.url).pathname;

const PAGES = [
  { slug: 'homepage', path: '/' },
  { slug: 'services', path: '/services/' },
  { slug: 'ceramic-coating', path: '/ceramic-coating/' },
  { slug: 'ppf', path: '/paint-protection-film-ppf/' },
  { slug: 'window-tint', path: '/window-tint/' },
  { slug: 'vinyl-wraps', path: '/vinyl-wraps/' },
  { slug: 'auto-detailing', path: '/auto-detailing/' },
  { slug: 'rv-detailing', path: '/rv-detailing/' },
  { slug: 'rv-ceramic-coating', path: '/rv-ceramic-coating/' },
  { slug: 'boat-detailing', path: '/boat-detailing/' },
  { slug: 'boat-ceramic-coating', path: '/boat-ceramic-coating/' },
  { slug: 'system-x', path: '/system-x-automotive-ceramic-coatings/' },
  { slug: 'detailing-packages', path: '/detailing-packages/' },
  { slug: 'tesla-detailing', path: '/tesla-detailing/' },
  { slug: 'bmw-detailing', path: '/bmw-detailing/' },
  { slug: 'porsche-detailing', path: '/porsche-detailing/' },
  { slug: 'rivian-detailing', path: '/rivian-detailing/' },
  { slug: 'ford-truck-detailing', path: '/ford-truck-detailing/' },
  { slug: 'about', path: '/about/' },
  { slug: 'contact', path: '/contact/' },
  { slug: 'free-quote', path: '/free-quote/' },
  { slug: 'blog', path: '/blog/' },
  { slug: 'blog-post-dodge-ram', path: '/2025-dodge-ram-1500-etorque-hemi-limited-protected-with-the-front-range-package-centennial-co/' },
  { slug: 'blog-post-corvette', path: '/2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver/' },
];

const extractPage = () => {
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(el => ({
    tag: el.tagName,
    text: el.textContent.trim()
  }));

  const images = [...document.querySelectorAll('img')].map(el => ({
    src: el.getAttribute('src') || '',
    alt: el.alt || '(none)',
    width: el.naturalWidth,
    height: el.naturalHeight,
  }));

  const jsonld = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map(el => { try { return JSON.parse(el.textContent); } catch { return el.textContent; } });

  const paragraphs = [...document.querySelectorAll('p')]
    .map(el => el.textContent.trim())
    .filter(t => t.length > 5);

  const listItems = [...document.querySelectorAll('li')]
    .map(el => el.textContent.trim())
    .filter(t => t.length > 3);

  const links = [...document.querySelectorAll('a[href]')].map(el => ({
    text: el.textContent.trim().slice(0, 80),
    href: el.getAttribute('href'),
  }));

  const title = document.title;
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '(none)';
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '(none)';
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '(none)';
  const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '(none)';
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '(none)';

  // Get the full body inner HTML for exact text matching
  const bodyHTML = document.querySelector('body')?.innerHTML || '';

  return {
    title, metaDesc, canonical, ogTitle, ogDesc, ogImage,
    headings, paragraphs, listItems, images, links, jsonld,
    bodyHTML,
  };
};

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  for (const { slug, path } of PAGES) {
    const url = `${BASE}${path}`;
    console.log(`Crawling: ${url}`);
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1000); // let lazy content load

      const data = await page.evaluate(extractPage);

      // Save structured data (without bodyHTML for readability)
      const { bodyHTML, ...structured } = data;
      writeFileSync(
        join(OUT_DIR, `wp-${slug}.json`),
        JSON.stringify(structured, null, 2)
      );

      // Save raw HTML separately
      writeFileSync(
        join(OUT_DIR, `wp-${slug}.html`),
        bodyHTML
      );

      console.log(`  ✓ ${slug}: ${structured.headings.length} headings, ${structured.images.length} images, ${structured.jsonld.length} JSON-LD blocks`);
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDone. Files saved to:', OUT_DIR);
}

main().catch(console.error);
