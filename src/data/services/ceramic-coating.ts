import type { ServicePageData } from "@/components/ServicePage";

export const ceramicCoatingData: ServicePageData = {
  heroImg: "/images/vehicles/Rivian-6.webp",
  heroImgAlt: "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
  eyebrow: "Ultimate Protection and Lasting Gloss for Colorado Drivers",
  heroVariant: "homepage",
  h1: "Ceramic Coating",
  h1Cities:
    "in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines",

  /* "Ultimate Protection..." intro — image-right/text-left, renders right
     after the ratings bar. WordPress's own two paragraphs here are out of
     order in the source (one starts mid-sentence, the other picks up
     where it left off) — combined into one coherent paragraph below. */
  imageTextSections: [
    {
      position: "top",
      h2: "Ultimate Protection and Lasting Gloss for Colorado Drivers",
      image: "/images/gallery/System-X-Top-Coat-vertical-pic.webp",
      imageAlt: "SystemX TopCoat product on table Chevrolet car in the background",
      imageSide: "right",
      items: [
        {
          body: "Owning a vehicle in the Denver metro area means dealing with harsh sun, heavy snow, mag-chloride, road salt, and unpredictable weather—all of which can quickly dull and damage your paint. System X MAX G Plus ceramic coating from Front Range Detail Studio is the best way to keep your car looking new, reduce maintenance, and protect your investment with confidence.",
        },
      ],
    },
    /* "What is Ceramic Coating?" — image-left/text-right, with the nested
       "System X Ceramic Coating Benefits" H3 preserved as its own
       subheading (bullets for the intro list, plain bold-lead paragraphs
       for the benefits, matching WordPress's real structure). */
    {
      position: "afterFAQ",
      h2: "What is Ceramic Coating?",
      eyebrow: "Long-term protection and making maintenance a breeze",
      image: "/images/gallery/BMW-vertical-pic-2.webp",
      imageAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "left",
      items: [
        {
          body: "Ceramic coating is a liquid polymer applied to the exterior surfaces of your vehicle. Once cured, it forms a durable, hydrophobic layer that bonds to the paint, offering long-term protection and making maintenance a breeze.",
        },
        {
          bullets: [
            { title: "Ease of Cleaning", body: "Dirt and grime are less likely to stick, making washing faster and easier." },
            { title: "Hydrophobic Properties", body: "Water, dirt, and grime slide off the surface." },
            { title: "UV Protection", body: "Shields your paint from harmful UV rays, preventing fading and oxidation." },
            { title: "Enhanced Gloss & Depth", body: "Achieve a deep, mirror-like finish." },
            { title: "Chemical Resistance", body: "Protects against acidic contaminants, bird droppings, and bug splatter." },
          ],
        },
        { heading: "System X Ceramic Coating Benefits" },
        { title: "Long-Lasting Protection", body: "Our System X coatings are designed to last up to 9 years, depending on the package selected." },
        { title: "Unmatched Hydrophobic Effect", body: "Watch water bead and roll off your paint, reducing water spots and dirt buildup." },
        { title: "UV & Oxidation Resistance", body: "Protects your car’s paint from sun damage, oxidation, and fading." },
        { title: "Scratch & Chemical Resistance", body: "The hardened ceramic layer adds protection against micro-scratches and environmental contaminants." },
        { title: "Warranty-Backed", body: "All of our System X coatings come with manufacturer-backed warranties for peace of mind." },
      ],
    },
    /* "The Ceramic Coating Process" — image-right/text-left, with the
       nested "Why Choose Front Range Detail Studio?" H3 preserved as its
       own subheading. */
    {
      position: "afterFAQ",
      h2: "The Ceramic Coating Process",
      eyebrow: "Flawless, high-gloss finish.",
      image: "/images/gallery/BMW-i4-vertical-pic.webp",
      imageAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "right",
      items: [
        { title: "Thorough Hand Wash", body: "We start with a full exterior wash to remove dirt and grime." },
        { title: "Paint Decontamination", body: "A clay bar treatment removes embedded contaminants, ensuring a clean surface." },
        { title: "Paint Correction (If Needed)", body: "We correct any swirl marks, light scratches, or oxidation to ensure a flawless base." },
        { title: "Ceramic Coating Application", body: "System X Ceramic Coating is carefully applied and leveled for an even finish." },
        { title: "Curing", body: "The coating is left to cure, bonding directly to your vehicle’s paintwork." },
        { title: "Final Inspection", body: "A detailed inspection ensures a flawless, high-gloss finish." },
        { heading: "Why Choose Front Range Detail Studio?" },
        { title: "Certified System X Installers", body: "Professional application ensures the best results." },
        { title: "Experienced Technicians", body: "We treat your vehicle with the care it deserves." },
        { title: "High-Quality Products", body: "We only use premium ceramic coatings with proven durability." },
        { title: "Warranty-Backed Coatings", body: "Peace of mind with manufacturer-backed warranties." },
        { title: "Appointment-Only Studio", body: "Dedicated time and care for every vehicle." },
      ],
    },
  ],

  /* "Send A Quick Quote Form" (shared Connect with Us/Business Hours/
     Denver Location + form component) renders right after the intro. */
  quoteFormPosition: "afterIntro",

  /* "Why Choose System X MAX G Plus Ceramic Coating..." — image-left/
     text-right, same Max G pattern as boat-detailing's Hyper Gloss section. */
  featuresEyebrow: "Industry-leading ceramic technology",
  featuresH2: "Why Choose System X MAX G Plus Ceramic Coating From Front Range Detail Studio?",
  featuresImage: "/images/gallery/System-X-Max-G.webp",
  featuresImageAlt: "System X MAX G+ product",
  features: [
    {
      title: "System X MAX G Plus",
      body: "Industry-leading ceramic technology for the deepest gloss, extreme hydrophobicity, and maximum chemical resistance.",
    },
    {
      title: "Lifetime Warranty for Cars",
      body: "Registered on your CarFax and fully transferable, with annual maintenance and top coat reapplication required to keep the warranty valid.",
    },
    {
      title: "Professional, Studio-Only Application",
      body: "All coating is performed in our climate-controlled Centennial facility for flawless, dust-free results—never mobile.",
    },
    {
      title: "Custom Packages for Boats & RVs",
      body: "Get up to 5 years of warranty on brand new boats and 3 years on new RVs and motorhomes.",
    },
    {
      title: "Honest, Local Experts",
      body: "No hype, no hard sell—just honest advice, clear communication, and the best products for Colorado conditions.",
    },
  ],

  /* "What's Included With Every Ceramic Coating Install" — image-right/
     text-left. */
  includedH2: "What’s Included With Every Ceramic Coating Install",
  includedImage: "/images/vehicles/toyota-suv-1024x768.jpg",
  includedImageAlt: "Toyota SUV",
  includedImageSide: "right",
  included: [
    { title: "System X MAX G Plus Professional Coating", body: "The most advanced, high-solids ceramic coating for lasting shine and protection." },
    { title: "Lifetime Warranty on Cars", body: "Registered to your VIN and CarFax, fully transferable, with annual maintenance and top coat reapplication required for warranty coverage." },
    { title: "Meticulous Paint Preparation", body: "Full decontamination, multi-stage machine polishing, and defect removal to create a flawless surface before coating." },
    { title: "Optional Add-On: Wheels, Trim, and Glass Coating", body: "Complete exterior protection." },
    { title: "Optional Add-On: Interior Ceramic Coating", body: "Upgrade your experience! Protects leather, fabric, vinyl, and plastics from stains, spills, and UV fading, making interiors easier to clean and keeping them looking like new." },
    { title: "Personalized Aftercare Guide", body: "We make caring for your new coating easy with simple, straightforward maintenance tips." },
    { title: "Annual Maintenance Program", body: "Return once a year for a professional inspection, maintenance wash, and fresh application of a ceramic top coat—keeping your warranty intact and your car at its best." },
  ],

  /* "Our Proven Process: From Consultation to Perfection" — same pattern
     as PPF/Window Tint's process steps, no eyebrow (WordPress has none). */
  stepsH2: "Our Proven Process: From Consultation to Perfection",
  stepsEyebrow: "",
  steps: [
    {
      title: "Initial Consultation",
      body: "We assess your vehicle’s condition, discuss your expectations, and recommend the right package for your needs.",
    },
    {
      title: "Paint Correction & Prep",
      body: "Every ceramic job starts with a full wash, clay bar, and machine polish to remove swirls and bring out maximum gloss.",
    },
    {
      title: "Expert Coating Application",
      body: "We apply multiple layers of System X MAX G Plus by hand, ensuring even, durable coverage over all painted surfaces.",
    },
    {
      title: "Curing & Final Inspection",
      body: "After curing, we inspect every inch of your car and walk you through the results and care instructions.",
    },
  ],

  faqs: [
    {
      q: "What makes System X MAX G Plus different from wax or sealant?",
      a: "System X MAX G Plus creates a permanent, glass-like layer that’s far more durable than wax or traditional sealants. It protects against UV, chemicals, road salts, and environmental fallout—delivering a deeper shine and easier maintenance.",
    },
    {
      q: "Is the lifetime warranty real? What are the requirements?",
      a: "Yes! Your ceramic coating is registered on CarFax and with System X. To maintain your lifetime warranty, you must return annually for a maintenance wash and a fresh ceramic top coat application, performed by us. This keeps your protection at peak performance and your warranty active.",
    },
    {
      q: "Will ceramic coating prevent scratches or rock chips?",
      a: "Ceramic coating is extremely scratch-resistant, but it won’t stop rock chips like PPF. For complete protection, many customers combine both.",
    },
    {
      q: "Can I coat over PPF?",
      a: "Absolutely! In fact, we recommend it—ceramic coating on top of PPF makes your protected car even easier to clean and enhances the gloss.",
    },
    {
      q: "Can I ceramic coat every surface on my vehicle—including the interior?",
      a: "Yes! We offer professional ceramic coatings for virtually every part of your vehicle. This includes wheels, brake calipers, plastic trim, glass, and all interior surfaces (leather, fabric, vinyl, and plastics). Ceramic coating your interior helps repel stains, makes cleaning easier, and protects against UV fading.",
    },
    {
      q: "Can you ceramic coat matte paint or satin finishes?",
      a: "Definitely. We use a dedicated matte/satin ceramic coating that preserves the non-glossy look of matte finishes while offering the same high level of protection and the same warranty. Matte vehicles, wraps, and PPF benefit just as much from ceramic protection—without changing the appearance.",
    },
    {
      q: "How do I maintain my ceramic coating?",
      a: "Hand wash or use a touchless wash only. Avoid harsh chemicals. We’ll give you a personalized care guide at delivery and invite you to join our annual maintenance program.",
    },
    {
      q: "Do you offer ceramic coating for boats and RVs?",
      a: "Yes! We offer System X MAX G Plus with a 5-year warranty for new boats and a 3-year warranty for new RVs and motorhomes.",
    },
  ],

  /* Reviews render right after the two "afterFAQ" image+text sections
     above (What is Ceramic Coating? / The Ceramic Coating Process),
     matching WordPress's real FAQ → those sections → Reviews order. */
  reviewsPosition: "afterFAQ",

  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" — content
     and 6-image gallery verbatim from WordPress, same as ppf.ts/vinyl-wraps.ts. */
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
