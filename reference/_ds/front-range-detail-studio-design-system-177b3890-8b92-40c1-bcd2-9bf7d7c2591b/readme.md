# Front Range Detail Studio — Design System

Premium auto detailing studio in **Englewood, CO**. Ceramic coating, paint protection film (PPF), window tinting, vinyl wraps, and paint correction — performed in a climate-controlled studio. The brand is **dark, cinematic, and luxury**: a high-end showroom crossed with a precision studio. It conveys meticulous craftsmanship, a controlled environment, certified expertise, and premium results.

**Tagline:** *Crafting Radiance. Preserving Elegance.*

## Sources
This system was built from materials provided by the client:
- **Codebase:** `front-range-design-system/` (local mount) — a React token + component starter:
  `src/tokens.json`, `src/Button.jsx`, `src/Heading.jsx`, `src/ServiceCard.jsx`, `src/Section.jsx`, `src/ReviewBadge.jsx`, plus `DESIGN-SYSTEM-NOTES.md`.
- **Logo:** `uploads/logo-inverse.svg` → copied to `assets/logo-inverse.svg`.
- **Brand notes:** detailed color/type/component spec supplied with the request (mirrored in `front-range-design-system/DESIGN-SYSTEM-NOTES.md`).

The tokens, components, and voice here are a faithful translation of those sources into a compiler-readable design system.

---

## Content Fundamentals

How Front Range writes.

- **Voice:** professional but approachable; confident, never arrogant. Educational — it explains *why* something matters (e.g. why a climate-controlled cure matters) rather than just listing features. Direct and honest, with **no hard-sell**.
- **Person:** speaks as **"we"** (the studio) to **"you/your vehicle"** (the customer). Warm and consultative: *"Tell us about your vehicle and we'll recommend the right protection."*
- **Casing:** display headings are **UPPERCASE** (Archivo). Buttons are **UPPERCASE** (Michroma). Body copy is sentence case. Labels/eyebrows are uppercase with wide tracking.
- **Tone examples:**
  - Hero: *"Crafting Radiance. Preserving Elegance."*
  - Value prop: *"No dust, no heat, no humidity. Coatings cure exactly as engineered — every time."*
  - Honesty: *"We explain what your vehicle actually needs — no upsells, no hard-sell, no shortcuts."*
- **Specifics over fluff:** name the certifications and brands (System X, Xpel, SunTek, STEK), the real address, the real review counts (5.0, 126 reviews). Credibility comes from concrete detail.
- **Emoji:** none. The brand never uses emoji. Iconography is restrained (stars for reviews, a check for confirmation). Em dashes and the registered ★ glyph appear; otherwise punctuation is clean.
- **Numerals:** real and specific — phone `(303) 520-8023`, `9H` hardness, package tiers Bronze → Platinum.

---

## Visual Foundations

The look is **dark luxury, cinematic, cyan-accented**.

- **Color:** an inverted dark theme. Backgrounds step down a near-black ladder — `#000` (hero/deep) → `#111` (page) → `#1a1a1a` (elevated) → `#1e1e1e` (cards) → `#2d2d2d` (forms). The single accent is **cyan `#00BCD4`**, used for CTAs, links, accent rules, focus rings, and the hero gradient. `#008AA2` is the pressed/active cyan, `#32EEFF` the hover glow. Text is white on dark; gray `#686868` for secondary/metadata. New colors should be avoided — lean on the cyan + dark ladder.
- **Type:** four families, each with one job. **Archivo 700 uppercase** = headings & card titles. **Manrope 300** = body. **Inter 500** = display/contact/labels. **Michroma uppercase** = buttons *only* (wide `0.05em` tracking). Fira Code for any mono/code. Headings are fluid (`clamp`). Global line-height 1.4, letter-spacing −0.1px.
- **Backgrounds & imagery:** full-bleed photography is central. Heroes are large vehicle/studio photos under the signature **hero gradient** — `linear-gradient(100deg, rgba(0,188,212,0.6), rgba(0,0,0,0.6))` — often with an added bottom black fade for text legibility. Imagery is **cool, deep, and rich** (cyan-leaning), not warm or grainy. Service tiles use a bottom-to-top black gradient (`rgba(0,0,0,0.7)` → transparent) so white titles read.
- **Cards:** dark surface (`#1e1e1e`/`#2d2d2d`), **4px radius**, Material elevation shadow (`0 3px 3px -2px …` triple-layer). Subtle border on neutral surfaces (`rgba(255,255,255,0.07)`). No heavy rounding, no colored left-border accents.
- **Buttons:** **pill** (`3.125rem` radius), Michroma uppercase. Primary = cyan fill / white text; secondary = `#111` with gray border; outline = transparent with cyan border; ghost = text only.
- **Section dividers:** the signature accent under H2 headings — a **96px × 2px cyan rule**, 24px gap below.
- **Corners & radii:** 3px (sm) / **4px (default cards/tiles)** / 8px / 16px / pill buttons. Restrained, mostly square.
- **Shadows:** Material elevation ladder (sm / md / lg). A cyan glow (`0 8px 30px rgba(0,188,212,0.35)`) is available for hero/feature emphasis.
- **Spacing:** 4px base scale (4 → 96px). Sections breathe with fluid vertical rhythm — `clamp(50px, 7vw, 90px)` default. Content column 840px, wide 1440px, max 1920px, 20px gutters.
- **Motion:** fast `0.2s` / normal `0.3s`, `ease-out`. Signature interactions: **image zoom `scale(1.06)`** on service tiles, **card lift** on hover (up to −20px; buttons −2px), cyan focus rings on inputs. Planned production layer: GSAP scroll reveals + Lenis smooth scroll, AI-generated video hero backgrounds (Higgsfield). No bounces, no decorative loops.
- **Hover/press:** hover lifts and (for primary buttons) darkens to `#008AA2`; images zoom; cards raise their shadow. Focus = cyan border + soft cyan ring. Transparency + blur appear on the sticky nav (`rgba(0,0,0,0.82)` + `backdrop-filter: blur(12px)`).

---

## Iconography

Front Range is **icon-light by design** — the aesthetic leans on photography and type, not an icon set.

- **No icon font / sprite** ships in the source codebase. There are no PNG/SVG icon assets beyond the logo.
- **Glyphs used as icons:** Unicode stars `★★★★★` for ratings (tinted to the review platform's brand color), a check `✓` for success/confirmation states, and `✕` for close. These are intentional and sufficient — do not introduce a heavy icon set.
- **Emoji:** never.
- **Logo:** `assets/logo-inverse.svg` — the inverse (on-dark) lockup: a cyan (`#04A8CB`) mountain-range mark above a white wordmark. Use on black/dark backgrounds. This is the primary brand asset.
- **If icons are genuinely needed** (e.g. a future feature grid), substitute a thin-stroke set such as **Lucide** (CDN) to match the minimal, precise feel — and flag the substitution. None is bundled here because the brand doesn't use one today.

---

## Index / Manifest

**Root**
- `styles.css` — global entry (consumers link this one file; `@import`s only).
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills wrapper.
- `assets/logo-inverse.svg` — primary logo (on-dark).

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — Google Fonts import (Manrope, Inter, Archivo, Michroma, Fira Code). *See caveat.*
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Components** (React, `window.FrontRangeDetailStudioDesignSystem_177b38.*`)
- `components/core/` — **Button**, **Heading**, **Card**, **Badge**
- `components/media/` — **ServiceCard**
- `components/layout/` — **Section**
- `components/feedback/` — **ReviewBadge**
- `components/forms/` — **Input**

**Foundation cards** (`guidelines/`) — Colors (primary, neutral, functional, gradients), Type (families, display, body), Spacing (scale, radii, shadows), Brand (logo).

**UI kits**
- `ui_kits/website/` — interactive marketing **homepage** (`index.html`): hero, services grid, why-us, reviews, contact form, sticky nav, booking modal. Also registered as a **Starting Point**.

---

## Caveat — Fonts
The original site fonts were **not provided as files**. Manrope, Inter, Archivo, Michroma, and Fira Code are all available on **Google Fonts**, so `tokens/fonts.css` loads them from there — these are the correct families, not look-alike substitutes. If you have licensed/self-hosted font binaries, drop them in and swap the `@import` for `@font-face` rules.
