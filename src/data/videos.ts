/**
 * Site video and generated-image assets.
 *
 * These were originally hot-linked from the Higgsfield generation CDN
 * (d8j0ntlcm91z4.cloudfront.net). That put the homepage hero, every service
 * card and every page's og:image on third-party URLs outside our control —
 * if they rotated or expired, the site broke with no warning and no fallback.
 *
 * Everything is now self-hosted from /public and re-encoded. The originals
 * totalled ~35 MB; these come to ~4 MB with no visible difference at the
 * sizes they're displayed.
 */

export const videos = {
  // Homepage hero. Desktop-only and preload="none" — see HomeHero.tsx.
  hero: "/video/hero.mp4",

  // Service card hover videos (PPF, Tint, Ceramic, Correction, Wrap, RV).
  services: {
    ppf: "/video/service-ppf.mp4",
    tint: "/video/service-tint.mp4",
    ceramic: "/video/service-ceramic.mp4",
    correction: "/video/service-correction.mp4",
    wrap: "/video/service-wrap.mp4",
    rv: "/video/service-rv.mp4",
  },

  // Ceramic coating page.
  ceramic: {
    motion: "/video/service-ceramic.mp4",
    process: "/video/ceramic-process.mp4",
  },

  // Social preview images. Per-page variants live in /images/og/ and are
  // wired up through pageMetadata() in src/lib/seo.ts.
  images: {
    og: "/images/og/og-default.jpg",
    contact: "/images/og/og-contact.jpg",
  },
} as const;
