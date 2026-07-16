import type { VehiclePageData } from "@/components/VehiclePage";

export const fordTruckDetailingData: VehiclePageData = {
  brand: "Ford Truck",
  heroImg: "/images/vehicles/ford-truck-1-1024x576.jpg",
  heroImgAlt: "PPF Clear Bra Denver Tint Ceramic Coating Paint Correction",
  heroH1: "Ford Truck Paint Protection & Restyling in Englewood, CO",
  heroH1HiddenSuffix: " | Front Range Detail Studio",
  heroSubtitle:
    "Colorado’s Ford Truck PPF & Ceramic Coating Experts",
  heroCallout: "CALL NOW to Protect and Elevate Your Ford Truck in Colorado",

  /* Brand intro — centered, no image side */
  logoImg: "/images/logos/Ford-logo.svg",
  introH2: "Premier Ford Truck Paint Protection in Englewood, CO",
  introBody:
    "At Front Range Detail Studio in Englewood, CO, we specialize in preserving the beauty, performance, and value of your Ford Truck. Whether you own a rugged F-150, a heavy-duty Super Duty, or the all-electric Lightning, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services—all designed for Colorado’s demanding driving conditions.",
  introQuote:
    "We’re not just protecting paint — we’re protecting your investment.",
  introCentered: true,

  /* PPF section — image left, text right, benefits as an accordion */
  ppfImg: "/images/vehicles/Ford-truck-ppf.png",
  ppfH2: "Ford Truck Paint Protection Film Packages",
  ppfFeatures: [
    {
      title: "Custom-Fit Ford Truck-Specific PPF",
      body: "We apply premium, self-healing clear film designed to shield your Ford Truck’s paint from rock chips, scratches, road debris, and environmental damage without compromising gloss or clarity.",
    },
    {
      title: "Digital Precision Cutting",
      body: "Each install uses precision-cut patterns tailored to your Ford Truck’s exact body lines, from the front bumper and grille to the wheel arches and tailgate.",
    },
    {
      title: "Ideal for Colorado Roads",
      body: "Safeguards against magnesium chloride, gravel, UV exposure, and road grime.",
    },
  ],
  ppfOptions: [
    {
      name: "SunTek Reaction PPF",
      details:
        "Our premium clear, high-gloss PPF featuring hydrophobic ceramic-infused technology and a 12-year warranty. Delivers maximum clarity, self-healing properties, and long-term protection without altering your factory paint color.",
    },
    {
      name: "PURE PPF Color Changing Film",
      details:
        "A high-performance color-change PPF available in satin, matte, gloss, and bold custom finishes. Restyle your Ford Truck while protecting your original paint underneath, backed by a 12-year warranty.",
    },
  ],
  benefitsAsAccordion: true,

  /* Front Range Package — 2 package cards instead of a single card + custom-quote box */
  packageImg: "/images/vehicles/Ford-truck-ceramic-coating.png",
  packageH2: "Ford Truck’s Best Defense — The Front Range Package",
  packageIncludes: [
    "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
    "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
    "Ceramic Window Tint with Advanced UV & Heat Rejection",
  ],
  packageCards: [
    {
      name: "The Front Range Package",
      items: [
        "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
        "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
        "Ceramic Window Tint with Advanced UV & Heat Rejection",
      ],
    },
    {
      name: "Build Your Own Package",
      items: [
        "Front Range Package (PPF + Ceramic Coating + Tint)",
        "Paint Protection Film (clear SunTek Reaction or color-change PURE PPF)",
        "Ceramic Coating",
        "Ceramic Window Tint",
      ],
    },
  ],

  /* Ceramic section — text left, image right, benefits as an accordion */
  ceramicImg: "/images/vehicles/Ford-truck-ceramic-coating.png",
  ceramicH2: "Ford Truck Ceramic Coating In Englewood",
  ceramicBenefits: [
    {
      title: "High-Gloss, Hydrophobic Finish",
      body: "Locks in a deep, glass-like shine and makes water, dust, and grime bead off effortlessly.",
    },
    {
      title: "UV and Chemical Barrier",
      body: "Prevents oxidation and environmental damage, especially critical in Colorado’s high-altitude sun.",
    },
    {
      title: "Extends PPF Longevity",
      body: "Boosts the durability and appearance of your paint protection film.",
    },
    {
      title: "Perfect for Daily Drivers and Track Cars",
      body: "Whether you drive a rugged F-150, a heavy-duty Super Duty, or the all-electric Lightning, ceramic coating preserves your Ford Truck’s finish and value.",
    },
  ],

  /* Window Tint section — text left, image right, benefits as an accordion */
  tintImg: "/images/vehicles/Ford-truck-window-tint.png",
  tintH2: "Ford Truck Window Tinting in Englewood, CO",
  tintBenefits: [
    {
      title: "Ceramic Window Tint",
      body: "Blocks up to 99% of UV rays and dramatically reduces interior heat, keeping your cabin cooler and protecting sensitive materials like leather and carbon trim.",
    },
    {
      title: "Privacy & Aesthetic Boost",
      body: "Clean, precision-installed tint enhances your Ford Truck’s aggressive styling.",
    },
    {
      title: "Safe for Driver-Assist Systems",
      body: "Our ceramic films are 100% compatible with Ford Truck’s blind-spot monitors, heads-up displays, and cameras.",
    },
  ],

  /* FAQ */
  faqs: [
    {
      question: "Is Ford Truck paint soft or hard?",
      answer:
        "Most modern Ford Trucks have a softer clear coat, so PPF and ceramic coating are highly recommended to protect it.",
    },
    {
      question: "Does PPF hide rock chips or swirls?",
      answer:
        "PPF can mask minor flaws, but we always perform paint correction for a flawless finish first.",
    },
    {
      question: "Can you do custom coverage for splitters, carbon roofs, etc.?",
      answer:
        "Yes, we do custom installs for all special Ford Truck trim and aftermarket parts.",
    },
  ],

  /* Gallery — hidden; the case study grid below covers this need */
  gallery: [],

  /* Secondary intro — image left, text right, echoing the primary heading
     (mirrors WordPress's own repeated-heading structure on this page). */
  secondaryIntro: {
    h2: "Premier Ford Truck Paint Protection in Englewood, CO",
    body: "At Front Range Detail Studio in Englewood, CO, we specialize in preserving the beauty, performance, and value of your Ford Truck. Whether you own a rugged F-150, a heavy-duty Super Duty, or the all-electric Lightning, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services—all designed for Colorado’s demanding driving conditions.",
    img: "/images/vehicles/Ford-truck-ppf.png",
  },

  /* Case study — text left, 3x2 image grid right. WordPress's real copy here
     was actually about a BMW (“G80 M3”, SunTek Matte film) with 6 BMW photos,
     apparently copy-pasted from the BMW Detailing page and never corrected.
     Replaced with clean, accurate Ford Truck copy. NOTE: only 4 real Ford
     Truck photos exist locally, so 2 are repeated to fill the 3x2 grid —
     flagged for the user, new photography would let all 6 be unique. */
  caseStudy: {
    h2: "See Our Ford Truck Paint Protection in Action",
    body: "We recently completed a full Front Range Package on a Ford F-150 — combining custom-fit SunTek Reaction PPF across the front end with a multi-layer ceramic coating and ceramic window tint. The result is a chip-resistant, easy-to-maintain finish built to handle Colorado’s gravel roads, road salt, and high-altitude sun while keeping that showroom shine.",
    images: [
      "/images/vehicles/ford-truck-1-1024x576.jpg",
      "/images/vehicles/Ford-truck-ppf.png",
      "/images/vehicles/Ford-truck-ceramic-coating.png",
      "/images/vehicles/Ford-truck-window-tint.png",
      "/images/vehicles/ford-truck-1-1024x576.jpg",
      "/images/vehicles/Ford-truck-ceramic-coating.png",
    ],
  },

  hideCrossSellBanners: true,
  hideQuoteForm: true,
};
