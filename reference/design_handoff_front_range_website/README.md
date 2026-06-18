# Handoff: Front Range Detail Studio — Marketing Website

## Overview
A dark, cinematic marketing website for **Front Range Detail Studio**, a premium auto / RV / boat detailing studio in Centennial, CO (ceramic coating, paint protection film, window tint, vinyl wrap, paint correction). The design target is **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

This bundle delivers a **complete, navigable design** of the homepage, the services hub, all six service pages, and a representative vehicle page, plus AI-generated cinematic video/imagery.

## About the Design Files
The files in `design-references/` are **design references created as streaming HTML "Design Components" (`*.dc.html`)** — high-fidelity prototypes showing the intended look, motion, and behavior. They are **not** production code to copy verbatim. Your task is to **recreate these designs in a real Next.js 14 App Router codebase** using its conventions (Server/Client Components, the Next `<Image>`/`<video>`, Tailwind, Framer Motion). The `.dc.html` files use inline styles and a small custom runtime; translate them into idiomatic React components + Tailwind classes.

To preview a reference: open any `*.dc.html` in a browser (they reference a sibling `support.js` runtime and the shared child components `Nav.dc.html`, `Footer.dc.html`, `Reviews.dc.html`, `QuoteForm.dc.html`, `ServicePage.dc.html`).

## Fidelity
**High-fidelity.** Final colors, typography, spacing, motion, and copy are all production-intent. Recreate pixel-faithfully. All tokens are in `tailwind.config.ts` and the "Design Tokens" section below.

## Tech Stack & File Structure
See `app-structure.md` for the full route tree and a component-by-component mapping from the design references to suggested React components.

## Important: Images & Generated Media

### Photography (Google Drive)
All studio photography lives in the client's Google Drive. The design references load them through `https://lh3.googleusercontent.com/d/<FILE_ID>=w1920`, which **only works while the Drive folder is shared "Anyone with the link → Viewer."** For production you should **download each file and commit it to `/public/images/...`** (do not hot-link Drive). `assets-manifest.json` maps every Drive `FILE_ID` → its filename → the `/public` path it should live at.

### AI-Generated Video & Imagery (Higgsfield)
Cinematic videos and images were generated with Higgsfield and are hosted on a CloudFront CDN. **These URLs are not permanent** — download each and commit to `/public/generated/`. Full list with prompts in `assets-manifest.json` under `generated`.

Embedding pattern (background video):
```tsx
<video autoPlay muted loop playsInline preload="metadata"
  poster="/images/hero/colorado-package-scaled.jpg"
  className="absolute inset-0 h-full w-full object-cover">
  <source src="/generated/hero.mp4" type="video/mp4" />
</video>
```
- Hover videos on service cards: `preload="none"`, load + `play()` on `onMouseEnter`, `pause()` + hide on `onMouseLeave`.
- Always provide a static `poster` fallback and honor `@media (prefers-reduced-motion: reduce)` → show poster only.

## Screens / Views

### Global — Navigation (`Nav.dc.html`)
- **Layout:** sticky top bar, `z-index:100`, padding `18px clamp(20px,5vw,64px)`, flex space-between. Logo left (`/public/logo-inverse.svg`, height 46px), links + CTA right.
- **Transparent → solid:** at top, `background: linear-gradient(to bottom, rgba(0,0,0,.55), transparent)`, no blur. After `scrollY > 40`: `background: rgba(0,0,0,.9)`, `backdrop-filter: blur(14px)`, 1px bottom border `rgba(255,255,255,.08)`. Transition `.35s`.
- **Links** (Inter 500, 14px, uppercase, `letter-spacing:.04em`, `rgba(255,255,255,.9)`, hover/active → `#00BCD4`): Services, Vehicles, About, Blog, Contact.
- **CTA:** "Get A Free Quote" — Michroma 12.5px uppercase, fill `#00BCD4`, white text, pill radius `3.125rem`, padding `14px 26px`, shadow `0 6px 22px rgba(0,188,212,.28)`; hover → `#008AA2`, `translateY(-2px)`.
- **Mobile (≤880px):** desktop links + CTA hidden; hamburger (3 bars → animates to X). Slide-in panel from right `min(82vw,340px)`, `background:#0a0a0a`, transform `translateX(105%)→0` over `.38s cubic-bezier(.4,0,.2,1)`, dimmed overlay behind. Panel: logo + close, stacked Archivo links, CTA, phone.

### Global — Footer (`Footer.dc.html`)
- **Background `#0d0d0d`**, top border `rgba(255,255,255,.07)`. Max-width 1280, 4-column auto-fit grid (`minmax(210px,1fr)`), gap `clamp(32px,4vw,56px)`.
- **Col 1:** logo (52px), tagline "Over 15 years experience in the automotive detailing industry.", 4 round social buttons (40px, 1px border, hover fill `#00BCD4` + lift) labeled IG / YT / FB / YP (replace with real icons — Lucide or brand SVGs).
- **Col 2 Services / Col 3 Vehicle Brands / Col 4 Contact:** Archivo 700 13px uppercase headings; Manrope links `rgba(255,255,255,.62)` hover `#00BCD4`. Contact: phone `(303) 520-8023` (cyan, 18px, 600), `info@frontrangedetailstudio.com`, `12559 E Broncos Pkwy, Centennial, CO 80112`, "Hours: By Appointment Only".
- **Bottom bar:** `© 2026 Front Range Detail Studio. All rights reserved.` + Privacy Policy link.

### Homepage (`Home.dc.html`, route `/`)
1. **Hero** — full-viewport (`min-height:100vh`), background `<img>` (`colorado-package-scaled.jpg`) + autoplay/muted/loop hero video on top (fades in on `canplay`). Two gradient overlays: `linear-gradient(100deg, rgba(0,188,212,.42), rgba(0,0,0,.62) 60%, rgba(0,0,0,.78))` and a bottom `linear-gradient(to top, rgba(0,0,0,.92), transparent 42%)`. Content max-width 780: eyebrow (Inter 500, uppercase, `.18em`, `#32EEFF`) "Crafting Radiance. Preserving Elegance. / Colorado's One Stop Shop…"; H1 (Archivo 800 uppercase, `clamp(2.6rem,6vw,5.4rem)`, line-height .98) "Front Range Detail Studio"; subtitle (Manrope 300) "RV, Boat, Auto. Paint Protection Film, Ceramic Coating, Tint, Vinyl Wrap."; two buttons — cyan "Get A Free Quote" (→`#quote`) + outline "Call (303) 520-8023". Bottom-center scroll cue.
2. **Services grid** — bg `#0d0d0d`. Eyebrow "Our Services" + H2 "Denver's Most Trusted Vehicle Aesthetic Experts" + 96×2px cyan rule. 6 cards, auto-fit `minmax(300px,1fr)`, gap 22px, `aspect-ratio:4/3`, radius 6px. Each: cover `<img>` + hidden hover `<video>` + bottom gradient + cyan tag + Archivo 700 title. **Hover:** card `translateY(-8px)` + deeper shadow, image `scale(1.07)`, hover video fades/plays. Cards → PPF, Window Tint, Ceramic, Auto Detailing, Vinyl Wraps, RV.
3. **Reviews** (`Reviews.dc.html`) — bg `#0a0a0a`. H2 "Front Range Detail Studio Client Reviews" + rule. 3 platform badges (cards `#1e1e1e`, 4px radius, colored 4px top border: Google `#e7711b` 106, Yelp `#c41200` 2, Facebook `#3c5b9b` 170, gold stars). Horizontal scroll-snap carousel of 8 testimonial cards (`#1e1e1e`, cyan stars, Manrope quote, cyan avatar monogram). Prev/next round buttons scroll the track.
4. **Partners** — bg `#0d0d0d`, centered. Eyebrow + H2 "Our Partners" + rule. Row of 5 partner logos rendered monochrome via `filter:brightness(0) invert(1)`, opacity .55 → 1 on hover. (Rupes, Glidecoat Pro, Eastman, SunTek, System X.)
5. **Vehicle Brands** — bg `#000`. H2 "Protection For All Brands Including Tesla, Rivian, Porsche, BMW, Mercedes-Benz & More" + rule. 14-logo grid (`minmax(130px,1fr)`, 1px gaps forming hairline dividers, tiles `#0d0d0d` aspect 3/2, logos monochrome white opacity .65 → 1, tile bg lightens on hover).
6. **Contact / Quote** (`id="contact"`, `id="quote"`) — bg `#0d0d0d` over a faint fixed dusk image. H2 "Serving The Denver Metro & Surrounding Areas" + rule. Two columns: left = contact info (phone/email/studio/hours) + embedded Google Map (`grayscale invert` filter for dark theme); right = `QuoteForm`.

### Quote Form (`QuoteForm.dc.html`)
Card `#161616`, 8px radius, padding `clamp(26px,3.4vw,40px)`, shadow `0 24px 60px rgba(0,0,0,.45)`. Fields: Name / Email / Phone (3-col auto-fit); Vehicle Make / Model / Year (3-col); Services-of-interest checkbox grid (PPF · Clear Bra, Window Tint, Ceramic Coating, Vinyl Wrap, Paint Correction, Oxidation Removal, Other); Preferred contact radios (Text / Call / Email); Comments textarea; consent checkbox; submit "Request My Free Quote" (Michroma, cyan pill). Inputs `#2d2d2d` bg, `#3a3a3a` border, **focus** → border `#00BCD4` + ring `0 0 0 3px rgba(0,188,212,.18)`, `accent-color:#00BCD4`. On submit → success state with cyan check, "Request Received", "Send Another" button. (Wire to real endpoint / server action in production.)

### Service Page template (`ServicePage.dc.html`) — used by all service & vehicle routes
Driven by a `data` object (see each route file's `renderVals()` for exact copy). Sections, all conditional: **Hero** (cover image + dual gradient + eyebrow + H1, `min-height:clamp(420px,72vh,680px)`), **Intro** (H2 + rule + body, 900px column), optional **Video** band (looping cinematic clips, e.g. Ceramic before/after + process), **Features** (numbered cards `#1a1a1a`), **Included** checklist (cyan ✓ rows), **Process steps** (big ghost numerals `rgba(0,188,212,.18)`), optional **Service Cards** (vehicle pages, 3 image cards), optional **Pricing** tiers, **Gallery** (`3/4` image grid, hover zoom), **FAQ** accordion (single-open, `+`→45° rotate, `max-height` transition), **Cross-sell** banner (cyan-tinted gradient), **Reviews**, **CTA/Quote** (`id="quote"`), **Footer**.

### Routes built (recreate these; see `app-structure.md` for the full 21-route plan)
`/` · `/services` · `/ceramic-coating` · `/paint-protection-film-ppf` · `/window-tint` · `/vinyl-wraps` · `/auto-detailing` · `/rv-detailing` · `/bmw-detailing` (representative vehicle page).

## Interactions & Behavior
- **Scroll reveals:** elements with `data-reveal` start `opacity:0; translateY(34px)` and animate to visible via `IntersectionObserver` (threshold .12). In React use Framer Motion `whileInView` with `{ opacity:[0,1], y:[34,0] }`, `transition: { duration:.8, ease:[.2,.7,.2,1] }`, `viewport:{ once:true }`.
- **Nav scroll state:** listen to `scroll`, toggle solid past 40px.
- **Service card hover:** lift + image zoom + lazy-load & play hover video.
- **FAQ:** single-open accordion.
- **Carousel:** `scrollBy` on prev/next; CSS `scroll-snap-type:x mandatory`.
- **Reduced motion:** disable autoplay videos and reveal transforms.
- All transitions `.2s`/`.3s`/`.6s` ease-out; button hover `translateY(-2px)`; card hover up to `-8px`.

## State Management
Mostly local component state: nav `{ scrolled, open }`, FAQ `{ openIndex }`, quote form `{ sent }` + field values, carousel ref. No global store required. Quote submission → server action / API route (currently a client-side success state).

## Design Tokens
**Colors** — cyan `#00BCD4` (accent/CTA/links/rules), cyan-dark `#008AA2` (pressed), cyan-light `#32EEFF` (hover glow/eyebrows), cyan-icon `#04A8CB` (logo). Neutrals: `#000` (hero/deep), `#0a0a0a`, `#0d0d0d` (page), `#161616`/`#1a1a1a`/`#1e1e1e` (cards), `#2d2d2d` (form fields), `#3a3a3a` (field border), gray `#686868`. Review platforms: Google `#e7711b`, Yelp `#c41200`, Facebook `#3c5b9b`. White text; secondary `rgba(255,255,255,.62)`.
**Gradients** — hero `linear-gradient(100deg, rgba(0,188,212,.6), rgba(0,0,0,.6))` (design uses .42/.62/.78 variant); card overlay `linear-gradient(to top, rgba(0,0,0,.7), transparent 60%)`.
**Type** — Archivo (700/800, uppercase) headings & card titles; Manrope (300) body; Inter (500) eyebrows/labels/contact; Michroma (uppercase, `.05em`) buttons only. Global line-height 1.4, `letter-spacing:-0.1px`. Fluid H1 `clamp(2.15rem,1.5vw+1.775rem,3rem)` (hero larger), H2 `clamp(1.75rem,.5vw+1.625rem,2rem)`.
**Radius** — 3px sm / 4px cards & tiles / 6px service cards / 8px forms / 16px / pill `3.125rem` buttons.
**Shadow** — Material elevation `0 3px 3px -2px rgba(0,0,0,.4), 0 3px 4px 0 rgba(0,0,0,.28)`; large `0 24px 60px rgba(0,0,0,.45)`; cyan glow `0 8px 30px rgba(0,188,212,.35)`.
**Spacing** — 4px base; section vertical rhythm `clamp(56px,7vw,96px)` (hero/large `clamp(64px,8vw,110px)`); content column 840–900px, wide 1280px, gutters `clamp(20px,5vw,56px)`.
**Motion** — fast .2s / normal .3s, ease-out; image zoom `scale(1.06–1.07)`; card lift up to −8px; button lift −2px; cyan focus ring.

Full design system: the client's design-system project (tokens in `tokens/*.css`, README brand guide). Fonts load from Google Fonts (Manrope, Inter, Archivo, Michroma).

## Assets
- **Logo:** `public/logo-inverse.svg` (cyan mountain mark + white wordmark, on-dark). Included in this bundle.
- **Photography:** Google Drive `assets/images/{hero,services,vehicles,gallery,logos}` — see `assets-manifest.json` for IDs and target paths.
- **Partner & brand logos:** Drive `assets/images/logos/` (SVG/PNG/WebP) — rendered monochrome via CSS filter.
- **Generated media (Higgsfield):** 1 hero video, 6 service hover videos, 2 ceramic videos (before/after + process), 3 images (OG, studio interior, contact dusk). URLs + prompts in `assets-manifest.json`.

## Files
- `design-references/*.dc.html` — the design prototypes (open in a browser).
- `tailwind.config.ts` — token-mapped Tailwind theme.
- `app-structure.md` — route tree + component map + remaining 21-page plan.
- `assets-manifest.json` — Drive IDs → public paths, and all generated-media URLs/prompts.
- `public/logo-inverse.svg` — brand logo.
