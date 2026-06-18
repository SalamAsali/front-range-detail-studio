# App Structure — Next.js 14 (App Router)

## Target file tree
```
app/
├── layout.tsx                      # <html>, fonts, <Nav/>, {children}, <Footer/>, metadata + og:image
├── globals.css                     # Tailwind directives + body reset + scroll-behavior + [data-reveal] base
├── page.tsx                        # Homepage
├── services/page.tsx               # Services hub
├── ceramic-coating/page.tsx
├── paint-protection-film-ppf/page.tsx
├── window-tint/page.tsx
├── vinyl-wraps/page.tsx
├── auto-detailing/page.tsx
├── paint-correction/page.tsx       # (placeholder — reuse ServicePage shell)
├── rv-detailing/page.tsx
├── rv-ceramic-coating/page.tsx
├── boat-detailing/page.tsx
├── boat-ceramic-coating/page.tsx
├── system-x-automotive-ceramic-coatings/page.tsx
├── detailing-packages/page.tsx
├── tesla-detailing/page.tsx
├── rivian-detailing/page.tsx
├── bmw-detailing/page.tsx
├── porsche-detailing/page.tsx
├── ford-truck-detailing/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── free-quote/page.tsx
├── blog/page.tsx
└── blog/[slug]/page.tsx
components/
├── Navigation.tsx      (client — scroll state + mobile panel)
├── Footer.tsx
├── Hero.tsx            (client — hero video fade-in)
├── ServiceCard.tsx     (client — hover video)
├── ServicePage.tsx     (server shell; accepts a typed `data` prop)
├── Reveal.tsx          (client — Framer Motion whileInView wrapper)
├── ReviewCarousel.tsx  (client) + ReviewBadge.tsx
├── QuoteForm.tsx       (client — form state + server action)
├── FAQ.tsx             (client — accordion)
├── Section.tsx, Heading.tsx, Button.tsx
├── LogoGrid.tsx, VehicleBrandGrid.tsx, ContactInfo.tsx
└── data/services.ts    (per-service content objects — port from each *.dc.html renderVals())
public/
├── logo-inverse.svg
├── images/{hero,services,vehicles,gallery,logos}/...   # download from Drive (see assets-manifest.json)
└── generated/{hero.mp4, ppf.mp4, tint.mp4, ceramic.mp4, correction.mp4, wrap.mp4, rv.mp4,
              ceramic-before-after.mp4, ceramic-process.mp4, og.png, studio.png, contact.png}
```

## Design-reference → React mapping
| Design file (`design-references/`) | Build as |
|---|---|
| `Home.dc.html` | `app/page.tsx` composing `Hero`, services grid (`ServiceCard`), `ReviewCarousel`, `LogoGrid`, `VehicleBrandGrid`, contact + `QuoteForm` |
| `ServicePage.dc.html` | `components/ServicePage.tsx` — typed `data` prop drives conditional sections |
| `Ceramic-Coating / Paint-Protection-Film / Window-Tint / Vinyl-Wraps / Auto-Detailing / RV-Detailing.dc.html` | route `page.tsx` files that pass a content object to `<ServicePage data={...} />` |
| `Services.dc.html` | `app/services/page.tsx` (ServicePage with 6 cards) |
| `BMW-Detailing.dc.html` | `app/bmw-detailing/page.tsx` (ServicePage with 3 service cards) — template for the 4 other vehicle pages |
| `Nav.dc.html` | `components/Navigation.tsx` |
| `Footer.dc.html` | `components/Footer.tsx` |
| `Reviews.dc.html` | `components/ReviewCarousel.tsx` + `ReviewBadge.tsx` |
| `QuoteForm.dc.html` | `components/QuoteForm.tsx` |

## Content porting
Each `*.dc.html` route file's logic class `renderVals()` returns a `data` object with the **exact production copy** (H1, intro, features, included, steps, pricing, FAQs, cross-sell). Copy these objects into `components/data/services.ts` as typed records — they are the source of truth for page content. The reviews (8) and review badges live in `Reviews.dc.html`.

## Remaining pages (not yet designed — extend the same templates)
- Service template covers: `rv-ceramic-coating`, `boat-detailing`, `boat-ceramic-coating`, `system-x-automotive-ceramic-coatings`, `detailing-packages` (use the Pricing tiers section), `auto-detailing`'s `paint-correction` split-out.
- Vehicle template (`bmw-detailing`) covers: `tesla-detailing`, `rivian-detailing`, `porsche-detailing`, `ford-truck-detailing` — swap hero + 3 service-card images (see manifest) and brand-specific copy.
- Unique builds: `about` (use generated studio image + water-bead/atmosphere; optional `<model-viewer>` 3D), `contact` (form + map + generated dusk hero), `free-quote` (hero-sized QuoteForm), `blog` (card grid) + `blog/[slug]` (2 starter posts: Dodge Ram PPF case study, Corvette ceramic maintenance).

## Notes
- Use `next/font/google` for Manrope, Inter, Archivo, Michroma.
- Use `next/image` for photography; plain `<video>` for the generated clips.
- Recreate the `data-reveal` scroll animation with a small `<Reveal>` Framer Motion wrapper (`whileInView`, `once:true`).
- Honor `prefers-reduced-motion` (disable autoplay + reveal transforms).
