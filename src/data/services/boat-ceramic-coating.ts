import type { ServicePageData } from "@/components/ServicePage";
import { videos } from "@/data/videos";

export const boatCeramicCoatingData: ServicePageData = {
  heroImg: "/images/services/boat-2-1024x768.jpg",
  heroImgAlt: "Boat detailing, boat ceramic coating",
  eyebrow: "Professional detailing and System X Marine Ceramic Coating",
  heroVariant: "homepage",
  h1: "Boat Ceramic Coating & PPF",
  h1Line2: "in Denver, CO",
  h1Cities: "Ultimate Marine Protection",
  h1CitiesBold: true,
  h1CitiesHiddenPrefix: "– ",
  introH2: "Shield your boat from Colorado\u2019s harsh elements with professional ceramic coating and paint protection film (PPF) services",
  introBody:
    "At Front Range Detail Studio, we specialize in applying System X Marine Ceramic Coatings and SunTek Reaction PPF\u2014offering unparalleled defense against UV rays, oxidation, scratches, and water damage.",
  featuresEyebrow: "Hyper Gloss 9H Lifetime Coating",
  featuresH2: "Why Choose Front Range Detail Studio?",
  featuresImage: "/images/gallery/System-X-Max-G-819x1024.webp",
  featuresImageAlt: "System X MAX G+ product",
  features: [
    {
      title: "Certified Installers",
      body: "Our team is factory-trained to apply System X Marine Ceramic Coatings and SunTek Reaction PPF for unmatched results.",
    },
    {
      title: "Comprehensive Services",
      body: "From buffing and annual waxing to interior detailing and clear film installation, we deliver total care for your boat.",
    },
    {
      title: "Tailored Solutions",
      body: "We customize every package to your vessel and boating lifestyle, ensuring the best protection and gloss.",
    },
  ],
  /* "Marine / Boat Ceramic Coating Services" \u2014 centered title + 4 bordered
     service boxes, matching the WordPress layout and content verbatim */
  serviceBoxes: {
    h2: "Marine / Boat Ceramic Coating Services",
    boxes: [
      {
        image: "/images/gallery/boat-2.webp",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Protect your boat with the industry\u2019s leading marine ceramic",
        title: "System X Marine Ceramic Coating",
        bullets: [
          "Hull-Only Coating: Defends against oxidation, algae stains, and waterline buildup",
          "Full Exterior Coating: Maximum hydrophobic protection for hull, deck, topside, and stainless steel",
          "Ultimate Marine Protection Package: Add interior surface coating for vinyl, plastic, and more",
          "3-Year Manufacturer Warranty on new boats (annual top coat required for warranty)",
          "Call us for more details",
        ],
      },
      {
        image: "/images/gallery/boat.webp",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Add a virtually invisible, self-healing layer for scratch and impact protection",
        title: "SunTek Reaction Paint Protection Film (PPF) for Boats",
        bullets: [
          "Hull leading edges (defend against trailer & dock rash)",
          "High-wear swim platforms",
          "Boarding steps and grab rails",
          "Painted or gelcoat areas prone to abrasion",
          "Stainless and aluminum surfaces (optional)",
        ],
        footer: [
          "SunTek Reaction PPF offers a 12-year warranty against yellowing, cracking, and peeling\u2014even in harsh marine environments",
          "Get the same world-class protection trusted by car enthusiasts, now for your boat",
        ],
      },
      {
        image: "/images/services/boat-1.jpg",
        imageAlt: "Boat detailing, boat ceramic coating",
        eyebrow: "Maintain your boat\u2019s luster and protect against sun and water with premium marine wax",
        title: "Annual Boat Waxing",
        bullets: [
          "Applied after buffing or as annual refresh",
          "Shields gelcoat from UV and water spots",
          "Painted or gelcoat areas prone to abrasion",
          "Call us for more details",
        ],
      },
      {
        image: "/images/services/boat-detailing.jpg",
        imageAlt: "Boat detailing Denver",
        eyebrow: "Keep your boat\u2019s interior clean, fresh, and ready for adventure",
        title: "Interior Boat Detailing",
        bullets: [
          "Deep clean all seating, carpets, and upholstery",
          "Vinyl and leather conditioning",
          "Mold and mildew treatment",
          "Glass, dash, and panel detailing",
          "Call us for more details",
        ],
      },
    ],
  },
  /* "Why Choose" (2nd) + "Process" combined into one image-left/text-right
     block, matching the WordPress layout exactly — replaces the old
     separate whyChoose grid and numbered-steps sections for this page */
  imageTextSection: {
    image: "/images/services/boat-detailing.jpg",
    imageAlt: "Boat detailing Denver",
    groups: [
      {
        h2: "Why Choose Front Range Detail Studio?",
        items: [
          {
            title: "Marine Detailing Specialists",
            body: "Our experienced team understands the unique challenges boats face and uses only marine-grade products for superior protection.",
          },
          {
            title: "Certified System X Installers",
            body: "We are certified applicators of System X Marine Ceramic Coating, ensuring professional-grade results.",
          },
          {
            title: "Attention to Detail",
            body: "From hull to topside, we meticulously coat every surface for comprehensive protection.",
          },
          {
            title: "Seasonal, Appointment-Only Service",
            body: "We offer boat ceramic coating services by appointment during the boating season to ensure the highest quality care.",
          },
        ],
      },
      {
        h2: "The Boat Ceramic Coating Process",
        items: [
          {
            title: "Thorough Hand Wash & Decontamination",
            body: "We begin with a deep cleaning to remove algae, grime, and contaminants from the boat’s surface.",
          },
          {
            title: "Oxidation Removal & Gelcoat Correction",
            body: "Any oxidation, scratches, or imperfections are corrected to ensure a flawless base before coating.",
          },
          {
            title: "Ceramic Coating Application",
            body: "System X Marine Ceramic Coating is carefully applied to all designated surfaces, creating a hydrophobic, UV-resistant barrier.",
          },
          {
            title: "Curing & Inspection",
            body: "The coating is allowed to cure, followed by a detailed inspection to ensure complete coverage and a perfect finish.",
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
      { title: "RV & Boat Services", subtitle: "RV · Boat · Marine", image: "/images/hero/coach-scaled.jpg", href: "/rv-detailing", videoSrc: videos.services.rv },
    ],
  },
  denverCtaPosition: "afterServicesGrid",
  partnersStripPosition: "afterServicesGrid",
  /* The WordPress boat-ceramic-coating page ends with "Our Partners –
     Trusted Brands" and goes straight to the sitewide footer — no gallery,
     FAQ, cross-sell, reviews, or quote-form section exists there, so those
     standard ServicePage sections are removed/hidden for this page only. */
  hideReviews: true,
  hideQuoteForm: true,
  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" —
     page-specific override of the shared DenverCTA section, matching the
     WordPress boat-ceramic-coating page's body copy, added H3 blurb, and
     6-image gallery verbatim */
  denverCta: {
    body: "Preserve the pristine condition of your vehicle with our high-quality Paint Protection Film, or Clear Bra. Our warranty backed PPF acts as an invisible shield, guarding your car’s paint against scratches, stone chips, and road debris. With self-healing technology and a ceramic coating layer applied over the film, our PPF service is the clear choice to protect your investment in South Denver, Colorado",
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
};
