import type { ServicePageData } from "@/components/ServicePage";
import { videos } from "@/data/videos";

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
  /* WordPress has no ratings bar on this page. */
  hideRatingsBar: true,
  introH2: "Colorado’s Vehicle Paint Correction and Detailing Experts",
  /* WordPress shows this H2 standalone with no body paragraph beneath it —
     the packages grid follows immediately. */
  /* "Auto Detailing Packages" — 4 bordered cards in a horizontal row
     (image, tagline, title, divider, bullet list, duration/frequency
     footer), one shared CTA button row below the whole grid — matching
     the Boat Detailing / Boat Ceramic Coating serviceBoxes treatment. No
     h2 here since the intro heading above already carries it. */
  serviceBoxes: {
    boxes: [
      {
        image: "/images/vehicles/Rivian.webp",
        imageAlt: "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
        eyebrow: "Perfect for regular upkeep and protection.",
        title: "Maintenance Wash & Wax",
        bullets: [
          "Hand wash with pH-balanced soap",
          "Bug and tar removal",
          "Clay bar treatment to remove surface contaminants",
          "Application of premium wax for added gloss and protection",
          "Tire cleaning and dressing",
          "Windows cleaned inside and out",
        ],
        footer: ["Duration: ~2 hours", "Recommended Frequency: Every 1-2 months"],
      },
      {
        image: "/images/vehicles/GMC-truck.jpg",
        imageAlt: "GMC trucks car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
        eyebrow: "Restore and protect your car’s paint for a flawless finish.",
        title: "Full Exterior Detailing",
        bullets: [
          "Hand wash and decontamination (clay bar treatment)",
          "Paint correction (light swirl mark and scratch removal)",
          "High-quality polish to restore shine",
          "Application of sealant or ceramic spray for protection",
          "Wheel and tire detailing (including brake dust removal)",
          "Glass cleaning and water repellent application",
        ],
        footer: ["Duration: ~4-5 hours", "Recommended Frequency: Every 3-6 months"],
      },
      {
        image: "/images/gallery/audi-interior-detailing-1024x768.jpg",
        imageAlt: "Audi interior detailing",
        eyebrow: "Deep clean your car’s interior for a fresh, like-new feel.",
        title: "Full Interior Detailing",
        bullets: [
          "Vacuum of seats, carpets, and trunk",
          "Steam cleaning and shampooing of carpets and upholstery",
          "Leather cleaning and conditioning (if applicable)",
          "Deep cleaning of dashboards, vents, and cupholders",
          "Streak-free window cleaning",
          "Odor elimination and air purification",
        ],
        footer: ["Duration: ~3-4 hours", "Recommended Frequency: Every 4-6 months"],
      },
      {
        image: "/images/vehicles/BMW-1.jpg",
        imageAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
        eyebrow: "Our most comprehensive package — for vehicles that need full restoration.",
        title: "Complete Interior & Exterior",
        bullets: [
          "All services from Full Exterior and Full Interior Detailing",
          "Clay bar treatment and paint correction",
          "Interior steam cleaning and odor elimination",
          "Engine bay cleaning and dressing",
          "Glass water repellent application",
        ],
        footer: ["Duration: ~6-8 hours", "Recommended Frequency: Twice a year"],
      },
    ],
  },
  /* Two standalone image+text+button sections, matching WordPress's real
     layout and images exactly: "Specialized Auto Detailing Services" has
     its text on the left with the image on the right; "Why Choose Front
     Range Detail Studio?" is the mirror — image on the left, text on the
     right. */
  imageTextSections: [
    {
      image: "/images/gallery/System-X-Top-Coat-vertical-pic-819x1024.webp",
      imageAlt: "SystemX TopCoat product on table Chevrolet car in the background",
      imageSide: "right",
      h2: "Specialized Auto Detailing Services",
      items: [
        { title: "Paint Correction", body: "Remove swirl marks, light scratches, and oxidation to restore a flawless finish." },
        { title: "Engine Bay Cleaning", body: "Degrease and detail your engine bay for a clean, showroom look." },
        { title: "Headlight Restoration", body: "Clear cloudy or yellowed headlights for improved visibility and aesthetics." },
        { title: "Odor Removal", body: "Eliminate smoke, pet, or mildew odors using professional-grade ozone treatments." },
      ],
    },
    {
      image: "/images/gallery/BMW-vertical-pic-2.webp",
      imageAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      eyebrow: "Long-term protection and making maintenance a breeze",
      h2: "Why Choose Front Range Detail Studio?",
      items: [
        { title: "Experienced Technicians", body: "Our team uses only the best tools, products, and techniques to deliver top-quality results." },
        { title: "High-Quality Products", body: "We use premium detailing products that are safe for your car and environmentally friendly." },
        { title: "Attention to Detail", body: "Every crevice, crack, and panel is meticulously cleaned and protected." },
        { title: "Appointment-Only Service", body: "We focus on one vehicle at a time, ensuring every car receives the care it deserves." },
      ],
    },
  ],
  /* "Denver's Most Trusted Vehicle Aesthetic Experts" — exact same 3x2
     services grid as the homepage and Boat Detailing (same cards, images,
     and hover videos). */
  servicesGrid: {
    h2: "Denver's Most Trusted Vehicle Aesthetic Experts",
    cards: [
      { title: "Paint Protection Film & Clear Bra", subtitle: "10 Year Warranty", image: "/images/services/new-ppf-scaled.jpg", href: "/paint-protection-film-ppf", videoSrc: videos.services.ppf },
      { title: "Window Tinting", subtitle: "Lifetime Warranty", image: "/images/services/new-tint.jpg", href: "/window-tint", videoSrc: videos.services.tint },
      { title: "Ceramic Coating", subtitle: "Lifetime Warranty", image: "/images/services/car-ceramic-1.jpg", href: "/ceramic-coating", videoSrc: videos.services.ceramic },
      { title: "Paint Correction", subtitle: "Multi-Stage Polish", image: "/images/services/paint-correction-new.jpg", href: "/auto-detailing", videoSrc: videos.services.correction },
      { title: "Vinyl Wrap & Decals", subtitle: "200+ Finishes", image: "/images/services/vinylwraps-1920w.webp", href: "/vinyl-wraps", videoSrc: videos.services.wrap },
      { title: "RV & Boat Services", subtitle: "RV · Boat · Marine", image: "/images/hero/coach-scaled.jpg", href: "/rv-detailing", videoSrc: videos.services.rv },
    ],
  },
  /* Moves Partners ("Our Partners – Trusted Brands") to render right after
     the services grid, which in turn puts the "Protection For All
     Brands..." section (below) right after Partners — matching the
     order requested and how the homepage places it. */
  partnersStripPosition: "afterServicesGrid",
  /* Matches the homepage's "Protection For All Brands and Models..."
     section verbatim, including its vehicle brand logo grid (same
     VehicleTile component/logo list as the homepage). */
  additionalSections: [
    {
      h2: "Protection For All Brands and Models Including Tesla, Rivian, Porsche, BMW, Mercedes Benz and More",
      body: "At Front Range Detail Studio, we protect all brands and models including Tesla, Rivian, Porsche, BMW, Mercedes Benz and more. Protect your vehicle with ceramic coatings, paint protection film, window tinting, paint correction and more.",
      vehicleLogos: [
        "Mercedes-Benz-Logo-1.svg", "Porsche-new-Logo.png", "Ford-logo.svg",
        "Jaguar-white-Logo.webp", "Lamborghini-Logo.svg", "Audi-white-Logo.png",
        "BMW-logo.svg", "LandRover-logo.svg", "Ferrari-Logo.svg",
        "Rivian-white-logo.png", "McLaren-Automotive-logo.svg", "Tesla-Motors-logo.svg",
        "Rolls-royce.svg", "Cadillac-logo.svg",
      ],
    },
  ],
  /* WordPress's Auto Detailing page ends at "Protection For All Brands" —
     no "1st Choice in PPF" CTA, no client reviews, no quote form section
     exist there (verified against the live site's raw HTML). */
  hideDenverCta: true,
  hideReviews: true,
  hideQuoteForm: true,
};
