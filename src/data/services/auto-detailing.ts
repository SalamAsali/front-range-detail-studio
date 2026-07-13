import type { ServicePageData } from "@/components/ServicePage";

export const autoDetailingData: ServicePageData = {
  heroImg: "/images/vehicles/Rivian-6.webp",
  heroImgAlt: "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
  eyebrow: "From basic maintenance to deep restoration",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  h1: "Auto Detailing and Paint Correction",
  /* Hidden period+space reconstructs WP's exact H1 text content for SEO
     ("...Correction. comprehensive...") without showing the mid-sentence
     period on screen — same technique used for the boat pages' hidden
     "– " prefix. h1CitiesNoLeadingSpace drops the component's usual
     leading word-boundary space since the period must sit directly
     against "Correction" (the space belongs after the period instead). */
  h1CitiesNoLeadingSpace: true,
  h1CitiesHiddenPrefix: ". ",
  h1Cities: "Comprehensive Detailing Packages To Fit Every Need",
  introH2: "Colorado\u2019s Vehicle Paint Correction and Detailing Experts",
  introBody:
    "Front Range Detail Studio offers comprehensive auto detailing and paint correction services for all makes and models. From basic maintenance washes to full interior and exterior detailing, our experienced technicians use only the best tools, products, and techniques to deliver top-quality results.",
  pricingH2: "Auto Detailing Packages",
  pricing: [
    {
      title: "Maintenance Wash & Wax",
      price: "~2 hours",
      body: "Every 1\u20132 months. Hand wash with pH-balanced soap, bug and tar removal, clay bar treatment to remove surface contaminants, application of premium wax for added gloss and protection, tire cleaning and dressing, windows cleaned inside and out.",
      image: "/images/vehicles/Rivian.webp",
    },
    {
      title: "Full Exterior Detailing",
      price: "~4\u20135 hours",
      body: "Every 3\u20136 months. Hand wash and decontamination (clay bar treatment), paint correction (light swirl mark and scratch removal), high-quality polish to restore shine, application of sealant or ceramic spray for protection, wheel and tire detailing (including brake dust removal), glass cleaning and water repellent application.",
      image: "/images/vehicles/GMC-truck.jpg",
    },
    {
      title: "Full Interior Detailing",
      price: "~3\u20134 hours",
      body: "Every 4\u20136 months. Vacuum of seats, carpets, and trunk, steam cleaning and shampooing of carpets and upholstery, leather cleaning and conditioning (if applicable), deep cleaning of dashboards, vents, and cupholders, streak-free window cleaning, odor elimination and air purification.",
      image: "/images/gallery/audi-interior-detailing-1024x768.jpg",
    },
    {
      title: "Complete Interior & Exterior",
      price: "~6\u20138 hours",
      body: "Twice a year. All services from Full Exterior and Full Interior Detailing, clay bar treatment and paint correction, interior steam cleaning and odor elimination, engine bay cleaning and dressing, glass water repellent application.",
      image: "/images/vehicles/BMW-1.jpg",
    },
  ],
  includedH2: "Specialized Auto Detailing Services",
  included: [
    "Paint Correction: Remove swirl marks, light scratches, and oxidation to restore a flawless finish.",
    "Engine Bay Cleaning: Degrease and detail your engine bay for a clean, showroom look.",
    "Headlight Restoration: Clear cloudy or yellowed headlights for improved visibility and aesthetics.",
    "Odor Removal: Eliminate smoke, pet, or mildew odors using professional-grade ozone treatments.",
  ],
  whyChoose: {
    h2: "Why Choose Front Range Detail Studio?",
    items: [
      {
        title: "Experienced Technicians",
        body: "Our team uses only the best tools, products, and techniques to deliver top-quality results.",
      },
      {
        title: "High-Quality Products",
        body: "We use premium detailing products that are safe for your car and environmentally friendly.",
      },
      {
        title: "Attention to Detail",
        body: "Every crevice, crack, and panel is meticulously cleaned and protected.",
      },
      {
        title: "Appointment-Only Service",
        body: "We focus on one vehicle at a time, ensuring every car receives the care it deserves.",
      },
    ],
  },
  cardsH2: "Explore Our Services",
  cards: [
    {
      tag: "10 Year Warranty",
      title: "Paint Protection Film & Clear Bra",
      img: "/images/services/new-ppf-scaled.jpg",
      href: "/paint-protection-film-ppf",
    },
    {
      tag: "\u2013 Lifetime Warranty",
      title: "Window Tinting",
      img: "/images/services/new-tint.jpg",
      href: "/window-tint",
    },
    {
      tag: "\u2013 Lifetime Warranty",
      title: "Ceramic Coating",
      img: "/images/services/car-ceramic-1.jpg",
      href: "/ceramic-coating",
    },
    {
      tag: "Multi-Stage Polish",
      title: "Paint Correction",
      img: "/images/services/paint-correction-new.jpg",
      href: "/auto-detailing",
    },
    {
      tag: "200+ Finishes",
      title: "Vinyl Wrap & Decals",
      img: "/images/services/vinylwraps-1920w.webp",
      href: "/vinyl-wraps",
    },
    {
      tag: "RV \u00B7 Boat \u00B7 Marine",
      title: "RV & Boat Services",
      img: "/images/services/rv-detailing.jpg",
      href: "/rv-detailing",
    },
  ],
  additionalSections: [
    {
      h2: "Protection For All Brands and Models Including Tesla, Rivian, Porsche, BMW, Mercedes Benz and More",
      body: "At Front Range Detail Studio, we protect all brands and models including Tesla, Rivian, Porsche, BMW, Mercedes Benz and more. Protect your vehicle with ceramic coatings, paint protection film, window tinting, paint correction and more.",
    },
  ],
};
