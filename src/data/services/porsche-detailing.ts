import type { VehiclePageData } from "@/components/VehiclePage";

export const porscheDetailingData: VehiclePageData = {
  brand: "Porsche",
  heroImg: "/images/vehicles/Porsche-Cayenne-Turbo-S-PPF-1024x768.jpg",
  heroImgAlt: "Porsche Cayenne Turbo S paint protection film font side view",
  heroH1: "Porsche Paint Protection & Restyling in Englewood, CO",
  heroH1HiddenSuffix: ".  Front Range Detail Studio",
  heroSubtitle:
    "Colorado’s Porsche PPF & Ceramic Coating Experts",
  heroCallout: "Protect and Elevate Your Porsche in Colorado",

  /* Brand intro — centered, logo at top. Content is already genuinely
     Porsche-specific on WP (911/Cayenne/Taycan), no bleed to fix here. */
  logoImg: "/images/logos/Porsche-new-Logo.png",
  introH2: "Premier Porsche Paint Protection in Englewood, CO",
  introBody:
    "At Front Range Detail Studio in Englewood, CO, we specialize in protecting the beauty, performance, and long-term value of your Porsche, whether it’s a classic 911, a powerful Cayenne, or a sleek Taycan, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services—all designed for Colorado’s demanding driving conditions.",
  introQuote:
    "We’re not just protecting paint — we’re protecting your investment.",
  introCentered: true,

  /* PPF section — image left, text right, benefits as an accordion */
  ppfImg: "/images/vehicles/porsche-ppf.png",
  ppfH2: "Porsche Paint Protection Film Packages",
  ppfFeatures: [
    {
      title: "Custom-Fit Porsche-Specific PPF",
      body: "We apply premium, self-healing clear film designed to shield your Porsche’s paint from rock chips, scratches, road debris, and environmental damage without compromising gloss or clarity.",
    },
    {
      title: "Digital Precision Cutting",
      body: "Each install uses precision-cut patterns tailored to your Porsche’s exact body lines, from the front bumper and fascia to the mirrors and rocker panels.",
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
        "A high-performance color-change PPF available in satin, matte, gloss, and bold custom finishes. Restyle your Porsche while protecting your original paint underneath, backed by a 12-year warranty.",
    },
  ],
  benefitsAsAccordion: true,

  /* Front Range Package — serviceBoxes-style card row (Ford Truck/Tesla/
     Rivian/BMW pattern). Card 1 = WordPress's real "The Front Range
     Package" section, card 2 = WordPress's "custom quote" checkbox box
     restyled as a package card, both including their real intro/closing
     sentences. Images are WP's exact real, correctly-branded Porsche
     photos for both cards. */
  packageImg: "/images/vehicles/porsche-ceramic-coating.png",
  packageH2: "Porsche’s Best Defense — The Front Range Package",
  packageIncludes: [
    "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
    "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
    "Ceramic Window Tint with Advanced UV & Heat Rejection",
  ],
  packageCards: [
    {
      image: "/images/vehicles/Porsche-Cayenne-Turbo-S-PPF-1024x768.jpg",
      imageAlt: "Porsche Cayenne Turbo S paint protection film font side view",
      eyebrow: "Porsche’s Best Defense",
      title: "The Front Range Package",
      intro:
        "Our exclusive Front Range Package is engineered for Colorado’s unique road hazards. It combines:",
      bullets: [
        "Full-Front PPF (bumper, hood, fenders, mirrors, headlights, rockers)",
        "Level-2 Paint Correction & Multi-Layer Ceramic Coating",
        "Ceramic Window Tint with Advanced UV & Heat Rejection",
      ],
      footer: [
        "Designed specifically for luxury performance vehicles like Porsches, this package is the best way to protect against chips, scratches, UV damage, and road chemicals—while enhancing gloss, depth, and ease of maintenance.",
      ],
    },
    {
      image: "/images/vehicles/Porsche-Cayenne-Turbo-S-PPF-1-1024x768.jpg",
      imageAlt: "Porsche Cayenne Turbo S ppf sie view",
      eyebrow: "Get a Custom Porsche Paint Protection Quote",
      title: "custom quote",
      intro:
        "Ready to safeguard and elevate your Porsche? Request a custom quote today and tell us what you need. Which services you’re interested in:",
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
  ceramicImg: "/images/vehicles/porsche-ceramic-coating.png",
  ceramicH2: "Porsche Ceramic Coating In Englewood",
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
      body: "Whether you drive a 911, a powerful Cayenne, or a sleek Taycan, ceramic coating preserves your Porsche’s finish and value.",
    },
  ],

  /* Window Tint section — image left, text right, benefits as an accordion */
  tintImg: "/images/vehicles/porsche-window-tint.png",
  tintH2: "Porsche Window Tinting in Englewood, CO",
  tintBenefits: [
    {
      title: "Ceramic Window Tint",
      body: "Blocks up to 99% of UV rays and dramatically reduces interior heat, keeping your cabin cooler and protecting sensitive materials like leather and carbon trim.",
    },
    {
      title: "Privacy & Aesthetic Boost",
      body: "Clean, precision-installed tint enhances your Porsche’s aggressive styling.",
    },
    {
      title: "Safe for Driver-Assist Systems",
      body: "Our ceramic films are 100% compatible with Porsche’s blind-spot monitors, heads-up displays, and cameras.",
    },
  ],

  /* FAQ */
  faqs: [
    {
      question: "Is Porsche paint soft or hard?",
      answer:
        "Most modern Porsches have a softer clear coat, so PPF and ceramic coating are highly recommended to protect it.",
    },
    {
      question: "Does PPF hide rock chips or swirls?",
      answer:
        "PPF can mask minor flaws, but we always perform paint correction for a flawless finish first.",
    },
    {
      question: "Can you do custom coverage for splitters, carbon roofs, etc.?",
      answer:
        "Yes, we do custom installs for all special Porsche trim and aftermarket parts.",
    },
  ],

  /* Gallery — hidden; the case study grid below covers this need */
  gallery: [],

  /* Secondary intro — image left, text right, echoing the primary heading.
     WordPress genuinely repeats this exact heading a second time later on
     the page (id="ppf-options"), with the same eyebrow kicker, a decorative
     photo, a body paragraph, the pull-quote, and CTA buttons. WP's real
     body text here was bled from the BMW page ("sharp M3, a bold X7, a
     cutting-edge i4") — corrected to match the primary intro's real
     Porsche-specific phrasing. The photo itself is genuinely Porsche's own
     real 911 Targa image, not bled. */
  secondaryIntro: {
    eyebrow: "Colorado’s Porsche PPF & Ceramic Coating Experts",
    h2: "Premier Porsche Paint Protection in Englewood, CO",
    body: "At Front Range Detail Studio in Englewood, CO, we specialize in preserving the beauty, performance, and value of your Porsche. Whether you own a classic 911, a powerful Cayenne, or a sleek Taycan, our dedicated team offers precision paint protection film (PPF), ceramic coatings, and ceramic window tint services—all designed for Colorado’s demanding driving conditions.",
    quote:
      "We’re not just protecting paint — we’re protecting your investment.",
    img: "/images/vehicles/911-Targa-4S-1024x768.jpg",
  },

  /* Case study — text left, image grid right. WP's own copy here was
     bled from the BMW page ("G80 M3"/SunTek Matte film) — corrected to a
     real Porsche model (Cayenne Turbo S, matching the package-card
     photos). Images are WP's exact real 6 sources in order (all BMW
     photos — WP's own case-study grid for this page has no real Porsche
     photos of its own, kept verbatim per WP parity). */
  caseStudy: {
    h2: "See Our Porsche Paint Protection in Action",
    body: "We recently completed a full Front Range Package on a Porsche Cayenne Turbo S — featuring a custom-fit SunTek Reaction PPF install across the front end, completely shielding it from rock chips and road debris. We followed up with a lifetime warranty ceramic coating on all painted surfaces, glass, and wheels, then finished it off with full ceramic window tint for heat rejection and UV protection.",
    resultLine:
      "The result? A bold, head-turning, chip-resistant, and maintenance-friendly Porsche built to thrive on Colorado roads and look flawless doing it.",
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
     reused gallery as every other rebuilt page. */
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
