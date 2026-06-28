import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

const BASE = 'http://localhost:3000';
const OUT_DIR = new URL('.', import.meta.url).pathname;

const PAGES = [
  { slug: 'homepage', path: '/' },
  { slug: 'services', path: '/services' },
  { slug: 'ceramic-coating', path: '/ceramic-coating' },
  { slug: 'ppf', path: '/paint-protection-film-ppf' },
  { slug: 'window-tint', path: '/window-tint' },
  { slug: 'vinyl-wraps', path: '/vinyl-wraps' },
  { slug: 'auto-detailing', path: '/auto-detailing' },
  { slug: 'rv-detailing', path: '/rv-detailing' },
  { slug: 'rv-ceramic-coating', path: '/rv-ceramic-coating' },
  { slug: 'boat-detailing', path: '/boat-detailing' },
  { slug: 'boat-ceramic-coating', path: '/boat-ceramic-coating' },
  { slug: 'system-x', path: '/system-x-automotive-ceramic-coatings' },
  { slug: 'detailing-packages', path: '/detailing-packages' },
  { slug: 'tesla-detailing', path: '/tesla-detailing' },
  { slug: 'bmw-detailing', path: '/bmw-detailing' },
  { slug: 'porsche-detailing', path: '/porsche-detailing' },
  { slug: 'rivian-detailing', path: '/rivian-detailing' },
  { slug: 'ford-truck-detailing', path: '/ford-truck-detailing' },
  { slug: 'about', path: '/about' },
  { slug: 'contact', path: '/contact' },
  { slug: 'free-quote', path: '/free-quote' },
];

const extractPage = () => {
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(el => ({
    tag: el.tagName,
    text: el.textContent.trim()
  }));
  const images = [...document.querySelectorAll('img')].map(el => ({
    src: el.getAttribute('src') || '',
    alt: el.alt || '(none)',
  }));
  const jsonld = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map(el => { try { return JSON.parse(el.textContent); } catch { return el.textContent; } });
  const paragraphs = [...document.querySelectorAll('p')]
    .map(el => el.textContent.trim())
    .filter(t => t.length > 5);
  const listItems = [...document.querySelectorAll('li')]
    .map(el => el.textContent.trim())
    .filter(t => t.length > 3);
  const title = document.title;
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '(none)';
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '(none)';
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '(none)';
  const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '(none)';
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '(none)';
  return { title, metaDesc, canonical, ogTitle, ogDesc, ogImage, headings, paragraphs, listItems, images, jsonld };
};

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  for (const { slug, path } of PAGES) {
    const url = `${BASE}${path}`;
    console.log(`Crawling: ${url}`);
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(500);
      const data = await page.evaluate(extractPage);
      writeFileSync(join(OUT_DIR, `nj-${slug}.json`), JSON.stringify(data, null, 2));
      console.log(`  ✓ ${slug}: ${data.headings.length} headings, ${data.images.length} images, ${data.jsonld.length} JSON-LD`);
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }
  await browser.close();
  console.log('\nDone.');
}

main().catch(console.error);
