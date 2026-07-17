import type { ServicePageData } from "@/components/ServicePage";

export const rvCeramicCoatingData: ServicePageData = {
  heroImg: "/images/services/Newmar-London-Aire-1024x768.jpg",
  heroImgAlt: "Newmar London Aire RV detailing Dnver",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  eyebrow: "Safeguard your RV from UV rays, oxidation, and road grime",
  h1: "RV Ceramic Coating in Denver, CO",
  h1CitiesHiddenPrefix: "– ",
  h1Cities: "Protect Your Home on Wheels",

  /* Three image+text blocks, all pinned to render right after the ratings
     bar (in array order) so the 4-package serviceBoxes grid below can sit
     between them and the closing "Hyper Gloss" Max G+ block. */
  imageTextSections: [
    /* Image left / text right — verbatim WP intro block, eyebrow included. */
    {
      position: "top",
      image: "/images/services/New-Aire-RV-1024x768.jpg",
      imageAlt: "New Aire RV detailing and ceramic coating",
      eyebrow: "Protect your RV from the elements",
      h2: "Premium RV Ceramic Coating for Lasting Protection",
      items: [
        {
          body: "Your RV is more than just a vehicle — it’s your home on the road. Protect it from the elements and keep it looking new with our professional System X Ceramic Coating services. At Front Range Detail Studio, we specialize in high-quality ceramic coatings for all types of RVs and motorhomes, ensuring long-lasting protection against UV rays, oxidation, and the wear and tear of the open road.",
        },
      ],
    },
    /* Max G+ style block, image left / text right — same layout as the
       Hyper Gloss block below and the boat pages' own Max G+ sections,
       just with "Why Choose System X..." content. Benefit items kept as
       standalone title/body entries (not a bullets array) so the bold
       lead-in keeps WP's real colon punctuation instead of an em dash. */
    {
      position: "top",
      image: "/images/gallery/System-X-Max-G.webp",
      imageAlt: "System X MAX G+ product",
      eyebrow: "Industry-leading ceramic technology",
      h2: "Why Choose System X Ceramic Coating for Your RV?",
      items: [
        {
          body: "Your RV faces constant exposure to harsh environments — from the sun’s intense UV rays to road salt, dirt, and grime. System X Ceramic Coating creates a durable, hydrophobic barrier that protects your RV’s exterior and makes maintenance easier than ever.",
        },
        { heading: "Key Benefits:" },
        {
          title: "Warranty Protection",
          body: "All System X Ceramic Coatings come with a manufacturer-backed warranty for long-lasting peace of mind.",
        },
        {
          title: "Prevents Oxidation & Fading",
          body: "The ceramic coating shields your RV’s paint from UV damage, oxidation, and fading, keeping it looking vibrant for years.",
        },
        {
          title: "Hydrophobic Properties",
          body: "Water, dirt, and grime slide right off the surface, reducing buildup and making washing a breeze.",
        },
      ],
    },
    /* Image RIGHT / text left — matches WP's real column order for this
       section. Process steps keep their real WP formatting: 4 of the 5
       have a bold lead-in phrase before a colon, "Paint Correction" has
       none (kept plain, matching WP exactly). The nested "Service
       Packages & Pricing" H3 and its plain, non-bulleted price lines are
       WP's real sub-section sharing this same image/column. */
    {
      position: "top",
      imageSide: "right",
      image: "/images/gallery/New-Aire-RV-vertical-pic.webp",
      imageAlt: "New Aire RV detailing and ceramic coating",
      eyebrow: "System X Ceramic Coating",
      h2: "Our Ceramic Coating Process",
      items: [
        {
          title: "Comprehensive Inspection",
          body: "We begin with a thorough assessment of your RV’s exterior to identify any areas needing special attention.",
        },
        {
          title: "Surface Preparation",
          body: "Our team performs a meticulous wash and decontamination process to remove all impurities.",
        },
        {
          body: "Paint Correction: We address any imperfections, such as swirl marks or oxidation, to ensure a flawless surface.",
        },
        {
          title: "Ceramic Coating Application",
          body: "System X Ceramic Coating is carefully applied to all exterior surfaces, including paint, fiberglass, gel coat, windows, and wheels.",
        },
        {
          title: "Curing",
          body: "The coating is allowed to cure properly, forming a strong bond that offers long-lasting protection.",
        },
        { heading: "Service Packages & Pricing" },
        {
          lines: [
            "Exterior Wash & Wax: Starting at $10/foot",
            "Oxidation Removal & Paint Correction: $20–$35/foot",
            "System X Ceramic Coating Application: Starting at $100/foot",
          ],
        },
        {
          body: "Note: Prices may vary based on the size and condition of the RV.",
        },
      ],
    },
  ],

  /* 4-package grid — same serviceBoxes carousel-card-row layout used on
     the brand detailing pages, boat detailing, and boat ceramic coating,
     with WP's real photos/eyebrows/bullets for each package. No shared H2
     above the grid — WP doesn't have one here either. */
  serviceBoxes: {
    boxes: [
      {
        image: "/images/services/freedom-elite.jpg",
        imageAlt: "Freedom Elite RV detailing",
        eyebrow: "Exterior, Windows, Wheels, Trim",
        title: "Deluxe RV Protection",
        bullets: [
          "All features of the Full Exterior + Windows Package",
          "Optional ceramic coating for wheels and trim",
          "Add-on: Ceramic coating for RV roof for maximum protection against weather elements",
        ],
      },
      {
        image: "/images/services/super-c-motorhome.jpg",
        imageAlt: "Super C Motorhome RV detailing",
        eyebrow: "Request a Quote",
        title: "Custom Packages",
        bullets: [],
        footer: [
          "Protect Your RV with System X Ceramic Coating",
          "Keep your RV looking like new while making cleaning and maintenance easier than ever — all backed by a warranty.",
        ],
      },
      {
        image: "/images/services/New-Aire-RV.webp",
        imageAlt: "New Aire RV detailing and ceramic coating",
        eyebrow: "Exterior",
        title: "Exterior Ceramic Coating",
        bullets: [
          "Complete wash and decontamination",
          "Application of System X Ceramic Coating to all painted surfaces",
          "Hydrophobic protection and enhanced gloss",
          "Warranty-backed protection",
        ],
      },
      {
        image: "/images/services/RV-2.jpg",
        imageAlt: "RV Detailing",
        eyebrow: "Exterior and Windows",
        title: "Full Exterior + Windows",
        bullets: [
          "All features of the Exterior Package",
          "Ceramic coating applied to exterior windows for added clarity and ease of cleaning",
          "Enhanced UV protection for interior fabrics and materials",
        ],
      },
    ],
  },

  /* "Hyper Gloss 9H Lifetime Coating" — same Max G+ featuresImage layout
     used verbatim on boat-detailing.ts/boat-ceramic-coating.ts, positioned
     right after the package grid to match WP's real order. */
  featuresPosition: "afterServiceBoxes",
  featuresEyebrow: "Hyper Gloss 9H Lifetime Coating",
  featuresH2: "Hyper Gloss 9H Lifetime Coating",
  featuresImage: "/images/gallery/System-X-Max-G-819x1024.webp",
  featuresImageAlt: "System X MAX G+ product",
  featuresIntro:
    "The Max G+™ package is our strongest and most durable protection package. Max G+™ features a stronger, tougher shell up to four times thicker, 2x stronger, and 2x more durable than previous System X coatings.",
  featuresListHeading: "Ultimate Protection Max G+ Package",
  features: [
    { body: "Max G+™ over all paintwork" },
    { body: "Max G+™ on badges, emblems, trim" },
    { body: "Max G+™ on wheels" },
    { body: "Glass™ on the windshield/windscreen" },
    { body: "Interior™ protection of leather, vinyl, fabric, and carpet" },
  ],

  faqs: [
    {
      q: "Do you detail all types of RVs and motorhomes?",
      a: "Yes, from Sprinter vans and pop-ups to large Class A diesel pushers — no rig is too big or too small!",
    },
    {
      q: "What’s the difference between wax and ceramic coating?",
      a: "Wax offers a few months of shine and protection. Our System X ceramic coating provides up to 3 years of real-world defense and makes cleaning much easier.",
    },
    {
      q: "Can you remove heavy oxidation and faded gelcoat?",
      a: "Absolutely — our multi-step correction process restores shine to even badly faded surfaces.",
    },
    {
      q: "How long does the process take?",
      a: "Most exterior packages take 1–3 days depending on the size and condition of your RV. We’ll provide a firm timeline with your quote.",
    },
    {
      q: "Do you offer mobile or on-site service?",
      a: "For best results and warranty, we recommend our controlled shop environment. Mobile service may be available for select maintenance jobs — ask for details.",
    },
  ],

  /* WordPress's real order is FAQ → Reviews → Partners, with no
     process-steps section left to anchor the usual "afterSteps" position
     (the process content now lives inside the imageTextSections block
     above). */
  reviewsPosition: "afterFAQ",

  /* WordPress's RV Ceramic Coating page has no "Denver's 1st Choice..."
     CTA and no cross-sell/quote-form section — it ends at
     "Our Partners – Trusted Brands". */
  hideDenverCta: true,
  hideQuoteForm: true,
};
