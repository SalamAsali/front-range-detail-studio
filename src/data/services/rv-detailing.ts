import type { ServicePageData } from "@/components/ServicePage";

export const rvDetailingData: ServicePageData = {
  heroImg: "/images/services/Newmar-London-Aire-1024x768.jpg",
  heroImgAlt: "Newmar London Aire RV detailing Denver",
  eyebrow:
    "Protect your home on wheels with Colorado’s most trusted RV detailing experts",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  h1: "RV Detailing & Ceramic Coating",
  h1Cities:
    "in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines",

  /* Image-left/text-right intro block, verbatim from WordPress (eyebrow +
     H2 duplicate the hero's own text, with a trailing period WP adds here
     but not in the hero eyebrow — a legitimate WP content-reuse pattern). */
  introImageSection: {
    image: "/images/services/New-Aire-RV-1024x768.jpg",
    imageAlt: "RV detailing New Aire",
    eyebrow: "we use only the industry’s best",
    h2: "Protect your home on wheels with Colorado’s most trusted RV detailing experts.",
    body: "At Front Range Detail Studio, we use only the industry’s best: System X MAX G Plus ceramic coatings and SunTek Reaction paint protection film. These are the same premium products trusted on high-end cars—now protecting your RV or motorhome against Colorado’s toughest conditions. Our team has worked on everything from luxury Class A motorhomes to Sprinter conversions and classic fifth-wheels. We restore shine, remove oxidation, and preserve your investment using proven, warrantied products from brands you can trust.",
  },

  /* "RV Detailing & Protection Packages" — 5-box grid matching the
     boat-detailing layout, with the exact WordPress content/images/prices.
     Buttons render once at the bottom of the grid, not per box. */
  serviceBoxes: {
    h2: "RV Detailing & Protection Packages",
    body: "All services include a full hand wash, premium decontamination, and thorough inspection using only System X, SunTek, and top professional products.",
    boxes: [
      {
        image: "/images/services/RV-detailing-3-1024x768.jpg",
        imageAlt: "RV detailing Denver",
        eyebrow: "high-quality sealant for lasting shine",
        title: "RV Exterior Wash & Wheels",
        bullets: [
          "Hand wash (roof to wheels)",
          "Bug/tar removal",
          "Application of high-quality sealant for lasting shine",
          "Wheel & tire cleaning",
        ],
        footer: ["Starting at $10/foot"],
      },
      {
        image: "/images/services/RV-ceramic-coating.jpeg",
        imageAlt: "Vienna RV ceramic coating",
        eyebrow: "Restores faded fiberglass",
        title: "Oxidation Removal & Paint Correction",
        bullets: [
          "Machine compounding and polishing using premium compounds",
          "Restores faded or chalky fiberglass/gelcoat",
          "System X ceramic top coat for UV and weather defense",
        ],
        footer: ["Typical investment: $20–$35/foot"],
      },
      {
        image: "/images/services/rv-detailing-1024x768.jpg",
        imageAlt: "RV detailing Denver",
        eyebrow: "Lasting protection",
        title: "Ceramic Coating for RVs & Motorhomes",
        bullets: [
          "Multi-stage paint correction",
          "Application of System X MAX G Plus. New RVs: 3-year warranty – Older RVs: 1–2 years based on surface",
          "Lasting protection against sun, bird droppings, tree sap, and harsh chemicals",
          "Optional wheel, trim, and glass ceramic coating",
        ],
        footer: ["Starting at $100/foot"],
      },
      {
        image: "/images/services/coach-576x1024.jpg",
        imageAlt: "rv detailing denver",
        eyebrow: "12-year warranty",
        title: "Paint Protection Film (PPF) – SunTek Reaction",
        bullets: [
          "SunTek Reaction PPF for high-impact zones: front cap, lower panels, mirrors, headlights",
          "12-year warranty, self-healing, hydrophobic, and virtually invisible",
        ],
        footer: ["Custom quote based on coverage"],
      },
      {
        image: "/images/services/rv-newmar-mountainaire.webp",
        imageAlt: "Newmar Mountainaire RV",
        eyebrow: "Decal removal & replacement",
        title: "Roof, Decal, and Specialty Services",
        bullets: [
          "Rubber, TPO, or fiberglass roof cleaning & UV treatment",
          "Decal removal & replacement",
          "Metal polishing, window cleaning, and more",
        ],
        footer: ["Contact us for a personalized quote"],
      },
    ],
    compact: true,
  },

  /* "Why Choose Front Range for Your RV?" — image-left/text-right,
     same pattern as boat-detailing's "Hyper Gloss 9H Lifetime Coating"
     section. WordPress has no eyebrow caption before this H2. */
  featuresPosition: "afterServiceBoxes",
  featuresEyebrow: "",
  featuresH2: "Why Choose Front Range for Your RV?",
  featuresImage: "/images/gallery/System-X-Max-G-819x1024.png",
  featuresImageAlt: "System X MAX G+ product",
  features: [
    {
      title: "Experience with All RV Types",
      body: "Class A, Class B, Class C, fifth-wheels, travel trailers, toy haulers, and custom vans.",
    },
    {
      title: "Premium Brands",
      body: "System X MAX G Plus Ceramic Coating: 3-year warranty for new RVs/motorhomes—industry-leading gloss and hydrophobic protection. SunTek Reaction Paint Protection Film: 12-year warranty, advanced self-healing, and virtually invisible.",
    },
    {
      title: "Professional Studio Service",
      body: "Detailing, correction, and coatings applied in our climate-controlled Centennial facility—never mobile for full-service jobs.",
    },
    {
      title: "Trusted by Colorado RV Owners",
      body: "See our reviews and actual photos below!",
    },
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
      q: "How long does the process take?",
      a: "Most exterior packages take 1–3 days depending on the size and condition of your RV. We’ll provide a firm timeline with your quote.",
    },
    {
      q: "Can you remove heavy oxidation and faded gelcoat?",
      a: "Absolutely—our multi-step correction process restores shine to even badly faded surfaces.",
    },
    {
      q: "Do you offer mobile or on-site service?",
      a: "For best results and warranty, we recommend our controlled shop environment. Mobile service may be available for select maintenance jobs—ask for details.",
    },
  ],

  /* WordPress's real order is FAQ → Reviews → Partners, with no
     process-steps section to anchor the usual "afterSteps" position. */
  reviewsPosition: "afterFAQ",

  /* WordPress's RV Detailing page has no "Denver's 1st Choice..." CTA and
     no "Connect with Us / Send A Quick Quote Form" section — it ends
     at "Our Partners – Trusted Brands". */
  hideDenverCta: true,
  hideQuoteForm: true,
};
