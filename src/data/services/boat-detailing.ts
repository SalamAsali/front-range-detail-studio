import type { ServicePageData } from "@/components/ServicePage";
import { videos } from "@/data/videos";

export const boatDetailingData: ServicePageData = {
  heroImg: "/images/services/boat-2-1024x768.jpg",
  heroImgAlt: "Boat detailing, boat ceramic coating",
  eyebrow: "Professional detailing and System X Marine Ceramic Coating",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  h1: "Boat Detailing & Ceramic Coating",
  h1Line2: "in Denver, CO",
  h1Cities: "Protect Your Watercraft",
  h1CitiesBold: true,
  h1CitiesHiddenPrefix: "\u2013 ",
  introH2: "Keep your boat looking pristine and protected from harsh water elements with professional detailing and System X Marine Ceramic Coating",
  /* WordPress shows "Keep your boat looking pristine..." as a standalone
     centered H2 with no body paragraph — the body text below belongs to
     the "Comprehensive Boat Detailing Services" intro image section instead. */
  introImageSection: {
    image: "/images/services/gold-package-boat.jpg",
    imageAlt: "Boat detailing Gold package",
    eyebrow: "we use only the industry\u2019s best",
    h2: "Comprehensive Boat Detailing Services",
    body: "At Front Range Detail Studio, we specialize in high-quality boat detailing and System X Marine Ceramic Coating to keep your watercraft looking like new. Our services are tailored for boats on Colorado lakes and reservoirs, helping you maintain beauty, value, and protection season after season.",
  },
  /* 5-box grid matching WordPress's "Comprehensive Boat Detailing Services"
     section verbatim (no centered h2 here — it's already in introImageSection
     above). Buttons render once at the bottom of the grid, not per box. */
  serviceBoxes: {
    boxes: [
      {
        image: "/images/gallery/boat-2.webp",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Restore your boat\u2019s shine and defend it from water damage and oxidation",
        title: "Exterior Boat Detailing & Buffing",
        bullets: [
          "Full exterior hand wash (including hull and deck)",
          "Oxidation and water spot removal",
          "Gelcoat buffing and polishing for a deep, glossy finish",
          "Application of premium marine wax or sealant",
          "Stainless steel and chrome polishing",
          "Duration: ~3-5 hours (depending on boat size)",
        ],
      },
      {
        image: "/images/gallery/boat.webp",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Get a fresh, clean interior for your next adventure",
        title: "Interior Boat Detailing",
        bullets: [
          "Vacuum and deep clean all seating, carpets, and upholstery",
          "Vinyl and leather cleaning and conditioning",
          "Mold and mildew treatment",
          "Glass and mirror cleaning",
          "Dashboard and control panel detailing",
          "Duration: ~2-4 hours",
        ],
      },
      {
        image: "/images/services/boat-1.jpg",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Maximize UV protection and maintain a high-gloss look all summer long",
        title: "Annual Boat Waxing",
        bullets: [
          "Gelcoat-safe, high-quality wax applied after buffing",
          "Shields your boat from Colorado\u2019s intense sun and water spots",
          "Recommended every 12 months for best results",
          "Call for more details",
        ],
      },
      {
        image: "/images/services/boat-detailing.jpg",
        imageAlt: "Boat detailing Denver",
        eyebrow: "Restore faded, chalky, or oxidized gelcoat to a like-new gloss",
        title: "Gelcoat Restoration & Oxidation Removal",
        bullets: [
          "Multi-stage machine buffing and polishing to remove oxidation",
          "Revives color, depth, and reflectivity",
          "Protect with marine wax or upgrade to ceramic for longest-lasting shine",
          "Call for more details",
        ],
      },
      {
        image: "/images/services/boat-detailing.jpg",
        imageAlt: "Boat detailing Denver",
        eyebrow: "Upgrade to the ultimate in protection with System X Marine Ceramic Coating",
        title: "Marine Ceramic Coating Packages",
        bullets: [
          "Long-lasting hydrophobic and UV-resistant barrier",
          "Easier cleaning, less staining, and dramatic shine",
          "Coverage for hull, topside, stainless steel, and optional interior protection",
          "Manufacturer-backed warranty",
        ],
        footer: ["Learn more and get full details on our Boat Ceramic Coating page"],
      },
    ],
    compact: true,
  },
  /* "Hyper Gloss 9H Lifetime Coating" image+box section. On WordPress this
     renders right after the 5-box serviceBoxes grid, not before it. Content
     below is verbatim from WordPress (the "Max G+" bullets reference car
     terms like "paintwork"/"badges, emblems, trim"/"windshield" even though
     this is the boat page — kept as-is to match the live site exactly). */
  featuresPosition: "afterServiceBoxes",
  featuresEyebrow: "Hyper Gloss 9H Lifetime Coating",
  featuresH2: "Hyper Gloss 9H Lifetime Coating",
  featuresImage: "/images/gallery/System-X-Max-G-819x1024.webp",
  featuresImageAlt: "System X MAX G+ product",
  featuresIntro:
    "The Max G+\u2122 package is our strongest and most durable protection package. Max G+\u2122 features a stronger, tougher shell up to four times thicker, 2x stronger, and 2x more durable than previous System X coatings.",
  featuresListHeading: "Ultimate Protection Max G+ Package",
  features: [
    { body: "Max G+\u2122 over all paintwork" },
    { body: "Max G+\u2122 on badges, emblems, trim" },
    { body: "Max G+\u2122 on wheels" },
    { body: "Glass\u2122 on the windshield/windscreen" },
    { body: "Interior\u2122 protection of leather, vinyl, fabric, and carpet" },
  ],
  /* Image-left/text-right combo matching WordPress's second "Gelcoat
     Restoration" + "Marine Ceramic Coating Packages" block (distinct from
     the serviceBoxes grid above, which covers the same headings with
     shorter bullet-style copy). */
  imageTextSection: {
    image: "/images/services/boat-detailing.jpg",
    imageAlt: "Boat detailing Denver",
    groups: [
      {
        h2: "Gelcoat Restoration & Oxidation Removal",
        items: [
          {
            body: "Over time, your boat\u2019s gelcoat can oxidize and lose its shine. Our oxidation removal and gelcoat restoration services bring back that deep, glossy finish.",
          },
          {
            body: "Followed by a sealant or System X Marine Ceramic Coating for long-lasting protection.",
          },
          {
            body: "Multi-stage polishing to remove oxidation and chalking.",
          },
          {
            body: "Restore depth, color, and gloss to faded surfaces.",
          },
        ],
      },
      {
        h2: "Marine Ceramic Coating Packages",
        items: [
          {
            title: "1. Standard Marine Coating Package",
            bullets: [
              "Application of System X Marine Ceramic Coating to hull and topside",
              "Hydrophobic protection and enhanced gloss",
              "Warranty-backed protection",
            ],
          },
          {
            title: "2. Full Marine Protection Package",
            lines: [
              "Optional: Interior surfaces treated for added protection",
              "Application of ceramic coating to all exterior surfaces (hull, topside, and glass)",
              "Stainless steel and chrome coated for corrosion resistance",
            ],
          },
        ],
      },
    ],
  },
  /* "Denver's Most Trusted Vehicle Aesthetic Experts" — exact same 3x2
     services grid as the homepage (same cards, images, and hover videos) */
  servicesGrid: {
    h2: "Denver's Most Trusted Vehicle Aesthetic Experts",
    cards: [
      { title: "Paint Protection Film & Clear Bra", subtitle: "10 Year Warranty", image: "/images/services/new-ppf-scaled.jpg", href: "/paint-protection-film-ppf", videoSrc: videos.services.ppf },
      { title: "Window Tinting", subtitle: "Lifetime Warranty", image: "/images/services/new-tint.jpg", href: "/window-tint", videoSrc: videos.services.tint },
      { title: "Ceramic Coating", subtitle: "Lifetime Warranty", image: "/images/services/car-ceramic-1.jpg", href: "/ceramic-coating", videoSrc: videos.services.ceramic },
      { title: "Paint Correction", subtitle: "Multi-Stage Polish", image: "/images/services/paint-correction-new.jpg", href: "/auto-detailing", videoSrc: videos.services.correction },
      { title: "Vinyl Wrap & Decals", subtitle: "200+ Finishes", image: "/images/services/vinylwraps-1920w.webp", href: "/vinyl-wraps", videoSrc: videos.services.wrap },
      { title: "RV & Boat Services", subtitle: "RV \u00b7 Boat \u00b7 Marine", image: "/images/hero/coach-scaled.jpg", href: "/rv-detailing", videoSrc: videos.services.rv },
    ],
  },
  /* WordPress has no "1st Choice in Paint Protection Film" (DenverCTA)
     section on this page — hide it (it renders unconditionally by default). */
  hideDenverCta: true,
  partnersStripPosition: "afterServicesGrid",
  /* The WordPress boat-detailing page ends at "Our Partners – Trusted
     Brands" and goes straight to the sitewide footer — no gallery, FAQ,
     cross-sell, reviews, or quote-form section exists there. */
  hideReviews: true,
  hideQuoteForm: true,
};
