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

  /* Front Range Package — serviceBoxes-style card row (boat-detailing pattern).
     Card 1 = WordPress's real "The Front Range Package" section, including
     its intro/closing sentences (previously missing). Card 2 = WordPress's
     "custom quote" checkbox box, restyled as a package card instead of a
     form-like box, also including its real intro/closing sentences. */
  packageImg: "/images/vehicles/Ford-truck-ceramic-coating.png",
  packageH2: "Ford Truck’s Best Defense — The Front Range Package",
  packageIncludes: [
    "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
    "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
    "Ceramic Window Tint with Advanced UV & Heat Rejection",
  ],
  packageCards: [
    {
      image: "/images/vehicles/ford-truck-1-1024x576.jpg",
      imageAlt: "Ford detailing",
      eyebrow: "Ford Truck’s Best Defense",
      title: "The Front Range Package",
      intro:
        "Our exclusive Front Range Package is engineered for Colorado’s unique road hazards. It combines:",
      bullets: [
        "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
        "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
        "Ceramic Window Tint with Advanced UV & Heat Rejection",
      ],
      footer: [
        "Designed specifically for luxury performance vehicles like Ford Trucks, this package is the best way to protect against chips, scratches, UV damage, and road chemicals—while enhancing gloss, depth, and ease of maintenance.",
      ],
    },
    {
      image: "/images/vehicles/ford-truck-1-1024x576.jpg",
      imageAlt: "Ford detailing",
      eyebrow: "Get a Custom Ford Truck Paint Protection Quote",
      title: "custom quote",
      intro:
        "Ready to safeguard and elevate your Ford Truck? Request a custom quote today and tell us what you need. Which services you’re interested in:",
      bullets: [
        "Front Range Package (PPF + Ceramic Coating + Tint)",
        "Paint Protection Film (clear SunTek Reaction or color-change PURE PPF)",
        "Ceramic Coating",
        "Ceramic Window Tint",
      ],
      footer: [
        "Our team will review your request and get back to you promptly with an expert recommendation and quote tailored for your car and driving habits in Colorado.",
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

  /* Secondary intro — image left, text right, echoing the primary heading.
     WordPress genuinely repeats this exact heading a second time later on
     the page (id="ppf-options"), with the same eyebrow kicker, the same
     hero photo (not Ford-truck-ppf.png — corrected below), a body
     paragraph, the pull-quote, and CTA buttons — all restored here. */
  secondaryIntro: {
    eyebrow: "Colorado’s Ford Truck PPF & Ceramic Coating Experts",
    h2: "Premier Ford Truck Paint Protection in Englewood, CO",
    body: "At Front Range Detail Studio in Englewood, CO, we specialize in preserving the beauty, performance, and value of your Ford Truck. Whether you own a rugged F-150, a heavy-duty Super Duty, or the all-electric Lightning, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services—all designed for Colorado’s demanding driving conditions.",
    quote:
      "We’re not just protecting paint — we’re protecting your investment.",
    img: "/images/vehicles/ford-truck-1-1024x576.jpg",
  },

  /* Case study — text left, image grid right. Images are WordPress's exact
     real sources for this section — note these are actually 6 BMW photos
     (WP's own copy here was also about a BMW, "G80 M3"/SunTek Matte film,
     apparently copy-pasted from the BMW Detailing page and never corrected
     for this Ford Truck page). Body copy replaced with accurate Ford Truck
     text, matching WP's real 2-sentence structure (main narrative + bolded
     "The result?" line), since the images are the only piece pulled
     verbatim from WP per instruction. */
  caseStudy: {
    h2: "See Our Ford Truck Paint Protection in Action",
    body: "We recently completed a full Front Range Package on a Ford F-150 — featuring a custom-fit SunTek Reaction PPF install across the front end, completely shielding it from rock chips and road debris. We followed up with a multi-layer ceramic coating on all painted surfaces and wheels, then finished it off with full ceramic window tint for heat rejection and UV protection.",
    resultLine:
      "The result? A bold, head-turning, chip-resistant, and maintenance-friendly Ford Truck built to thrive on Colorado roads and look flawless doing it.",
    images: [
      "/images/vehicles/bmw-i4-1-768x1024.jpg",
      "/images/vehicles/BMW-X5-front-1024x768.jpg",
      "/images/vehicles/BMW-M50i-1024x768.jpg",
      "/images/vehicles/BMW-green-1024x768.jpg",
      "/images/vehicles/BMW-2-1024x768.jpg",
      "/images/vehicles/BMW-6-1024x576.jpg",
    ],
  },

  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" — content
     and 6-image gallery verbatim from WordPress, same pattern and same
     reused gallery as ceramic-coating.ts/ppf.ts/vinyl-wraps.ts. */
  denverCta: {
    body: "Preserve the pristine condition of your vehicle with our high-quality Paint Protection Film, or Clear Bra. Our warranty backed PPF acts as an invisible shield, guarding your car’s paint against scratches, stone chips, and road debris.",
    h3: "Detailing Services in Denver, Colorado and All Surrounding Cities",
    h3Body:
      "Our clients have one thing in common: they love their vehicle. From the Class A motorhome to the two-door convertible, our team of detail specialists are equipped and experienced to handle all detailing needs anywhere in Metro Denver.",
    images: [
      { src: "/images/gallery/Audi-car-detailing.webp", alt: "Corvette car detailing and ceramic coating" },
      { src: "/images/gallery/boat-1.webp", alt: "Boat detailing, boat ceramic coating" },
      { src: "/images/gallery/audi-interior-detailing-1024x768.jpg", alt: "Audi interior detailing" },
      { src: "/images/gallery/audi-1-1024x1024.jpg", alt: "Audi Quattro detailing Denver" },
      { src: "/images/gallery/mercedes-benz-maybach-1024x768.jpg", alt: "Mercedes Benz detailing Denver" },
      {
        src: "/images/gallery/Rivian-ceramic-coatin-vertical-pic.webp",
        alt: "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      },
    ],
  },

  hideCrossSellBanners: true,
  hideQuoteForm: true,
};
