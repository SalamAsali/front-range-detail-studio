import type { VehiclePageData } from "@/components/VehiclePage";

export const teslaDetailingData: VehiclePageData = {
  brand: "Tesla",
  heroImg: "/images/vehicles/tesla-ceramic-coating.png",
  heroImgAlt: "PPF Clear Bra Denver Tint Ceramic Coating Paint Correction",
  heroH1: "Tesla Paint Protection & Restyling in Englewood, CO. Front Range Detail Studio",
  heroSubtitle:
    "Tesla Paint Protection & Restyling in Englewood, CO. Front Range Detail Studio.",

  /* Brand intro */
  logoImg: "/images/logos/Tesla-Motors-logo.svg",
  introH2: "Premier Tesla Paint Protection in Englewood, CO",
  introBody:
    "At Front Range Detail Studio in Englewood, CO, we specialize in preserving the beauty, performance, and value of your Tesla. Whether you own a Model 3, a Model Y, or a cutting-edge Model S, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services \u2014 all designed for Colorado\u2019s demanding driving conditions. We\u2019re not just protecting paint \u2014 we\u2019re protecting your investment.",
  introQuote:
    "We\u2019re not just protecting paint \u2014 we\u2019re protecting your investment.",

  /* PPF section */
  ppfImg: "/images/vehicles/tesla-ppf.png",
  ppfH2: "Tesla Paint Protection Film Packages",
  ppfFeatures: [
    {
      title: "Custom-Fit Tesla-Specific PPF",
      body: "We apply premium, self-healing clear film designed to shield your Tesla\u2019s paint from rock chips, scratches, road debris, and environmental damage without compromising gloss or clarity.",
    },
    {
      title: "Digital Precision Cutting",
      body: "Each install uses precision-cut patterns tailored to your Tesla\u2019s exact body lines, from aerodynamic bumpers to flush door handles.",
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
        "A high-performance color-change PPF available in satin, matte, gloss, and bold custom finishes. Restyle your Tesla while protecting your original paint underneath, backed by a 12-year warranty.",
    },
  ],

  /* Front Range Package */
  packageImg: "/images/vehicles/tesla-ceramic-coating.png",
  packageH2: "Tesla\u2019s Best Defense \u2014 The Front Range Package",
  packageIncludes: [
    "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
    "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
    "Ceramic Window Tint with Advanced UV & Heat Rejection",
  ],

  /* Ceramic section */
  ceramicImg: "/images/vehicles/tesla-ceramic-coating.png",
  ceramicH2: "Tesla Ceramic Coating in Englewood",
  ceramicBenefits: [
    {
      title: "High-Gloss, Hydrophobic Finish",
      body: "Locks in a deep, glass-like shine and makes water, dust, and grime bead off effortlessly.",
    },
    {
      title: "UV and Chemical Barrier",
      body: "Prevents oxidation and environmental damage, especially critical in Colorado\u2019s high-altitude sun.",
    },
    {
      title: "Extends PPF Longevity",
      body: "Boosts the durability and appearance of your paint protection film.",
    },
    {
      title: "Perfect for Daily Drivers and Performance Models",
      body: "Whether you drive a Model 3 Performance or a Model Y Long Range, ceramic coating preserves your Tesla\u2019s finish and value.",
    },
  ],

  /* Window Tint section */
  tintImg: "/images/vehicles/tesla-window-tint.png",
  tintH2: "Tesla Window Tinting in Englewood, CO",
  tintBenefits: [
    {
      title: "Ceramic Window Tint",
      body: "Blocks up to 99% of UV rays and dramatically reduces interior heat, keeping your cabin cooler and protecting sensitive materials like leather and the touchscreen display.",
    },
    {
      title: "Privacy & Aesthetic Boost",
      body: "Clean, precision-installed tint enhances your Tesla\u2019s sleek styling.",
    },
    {
      title: "Safe for Driver-Assist Systems",
      body: "Our ceramic films are 100% safe for Tesla\u2019s Autopilot cameras, driver-assist systems, and connectivity.",
    },
  ],

  /* FAQ */
  faqs: [
    {
      question: "Which Tesla models do you work on?",
      answer:
        "All of them \u2014 Model 3, Model Y, Model S, Model X, and Cybertruck. Every package is tailored to your specific model.",
    },
    {
      question: "Is Tesla paint soft? Should I protect it right away?",
      answer:
        "Yes. Most modern Teslas have a softer clear coat. PPF and ceramic coating are highly recommended to protect the paint from day one.",
    },
    {
      question: "Does PPF hide rock chips or swirls?",
      answer:
        "PPF can mask minor flaws, but we always perform paint correction for a flawless finish first.",
    },
    {
      question: "Can you do custom coverage for Tesla trim and aftermarket parts?",
      answer:
        "Yes, we do custom installs for all special Tesla trim and aftermarket parts.",
    },
    {
      question: "Can you coat Tesla matte or satin wraps?",
      answer:
        "Absolutely. We offer coatings formulated for matte and satin finishes that preserve the look while adding protection.",
    },
    {
      question: "Do you tint Tesla EVs?",
      answer:
        "Yes \u2014 our non-metallic ceramic tint rejects heat and UV without interfering with the sensors and connectivity in Tesla vehicles.",
    },
  ],

  /* Gallery */
  gallery: [
    "/images/vehicles/tesla-ppf.png",
    "/images/vehicles/tesla-window-tint.png",
    "/images/vehicles/tesla-ceramic-coating.png",
  ],

  caseStudy: {
    h2: "See Our Tesla Paint Protection in Action",
    body: "We recently completed a full Front Range Package on a Tesla Model 3 — featuring premium paint protection film using SunTek PPF, shielding it from rock chips and road debris. We followed up with a lifetime warranty ceramic coating on all painted surfaces, glass, and wheels, then finished it off with full ceramic window tint for heat rejection and UV protection. The result? A sleek, chip-resistant Tesla built to thrive on Colorado roads and look flawless doing it.",
    images: [
      "/images/vehicles/tesla-ppf.png",
      "/images/vehicles/tesla-ceramic-coating.png",
      "/images/vehicles/tesla-window-tint.png",
      "/images/gallery/sports-car-1-819x1024.webp",
      "/images/vehicles/Rivian-1024x768.webp",
      "/images/vehicles/GMC-truck.jpg",
    ],
  },
};
