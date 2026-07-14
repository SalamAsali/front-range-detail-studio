import type { ServicePageData } from "@/components/ServicePage";

export const systemXData: ServicePageData = {
  /* Hero replacement — WordPress has no traditional cover-image hero here,
     just a plain two-column intro: logo + H1 + H3 + body + buttons on the
     left, the SystemX-car.png photo on the right. */
  heroVariant: "split",
  heroImg: "/images/gallery/SystemX-car.png",
  heroImgAlt: "SystemX authorized dealer",
  heroLogo: "/images/logos/system-x-logo.png",
  heroLogoAlt: "system X Ceramic Protection logo",
  heroH1Color: "#c22929",
  eyebrow: "System X",
  h1: "System X",
  heroH3: "Automotive Ceramic Coatings",
  heroIntroBody:
    "Owners and collectors of the finest vintage and exotic automobiles worldwide trust System X® to consistently provide unmatched slickness, protection, hardness, and brilliance.",
  hideRatingsBar: true,
  hideReviews: true,

  /* "Hyper Gloss 9H Lifetime Coating" — verbatim from WordPress, same
     fields/content as boat-detailing.ts's equivalent section. */
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

  /* "Why Have Us Install System X® On Your Vehicle?" — 3 bordered icon
     cards, matching WordPress's logo + heading + card row exactly. */
  iconCardsLogo: "/images/logos/system-x-logo.svg",
  iconCardsLogoAlt: "System X logo",
  iconCardsH2: "Why Have Us Install System X® On Your Vehicle?",
  iconCards: [
    {
      icon: "medal",
      title: "Guaranteed",
      body: "Supported by our unbeatable industry guarantee, the System X® paint protection program, expertly installed, ensures that your vehicle will maintain its flawless appearance for as long as you possess it.",
    },
    {
      icon: "flag",
      title: "Made in The USA",
      body: "With great pride, our products are meticulously crafted in Thomaston, CT USA. They embody a commitment to excellence and trustworthiness. Rest assured, the premium coating applied to your vehicle not only enhances its appearance but also provides unparalleled protection.",
    },
    {
      icon: "spray",
      title: "Top Tier Performance",
      body: "System X Max & Diamond™ are the slickest coatings on the market. Its unique chemistry provides an unparalleled bond for the best long term protection. Super slick properties help contaminants slide right off.",
    },
  ],

  /* Product blocks — Glass/Renew (image right), a full-bleed sports-car
     banner, then Revive/Interior (image left), matching WordPress's exact
     layout and alternation. */
  contentBlocks: [
    {
      h2: "System X Glass",
      h3: "Clarity and Protection",
      body: "System X Glass™ dramatically increases visibility in the rain and makes de-icing in the winter and cleaning summer insect matter.",
      image: "/images/gallery/System-X-Glass-product-819x1024.webp",
      imageAlt: "System X Glass product",
      imageSide: "right",
    },
    {
      h2: "System X Renew",
      h3: "Clarity and Protection",
      body: "Renew™ can be used as a standalone HYPER gloss coat or as a topper for your professional ceramic coating. Ideal as a stand-alone or a renewal to your existing coating.",
      image: "/images/gallery/System-X-Renew-product-819x1024.webp",
      imageAlt: "System X Renew product",
      imageSide: "right",
      bannerAfter: {
        image: "/images/gallery/sports-car-1-819x1024.webp",
        imageAlt: "red sports car",
      },
    },
    {
      h2: "System X Revive",
      h3: "Plastic and Trim",
      body: "System X® Revive™ protects from future micro-scratches and UV fading while multiplying the surface’s hydrophobic properties.",
      image: "/images/gallery/System-X-Revive-product-819x1024.webp",
      imageAlt: "System X Revive product",
      imageSide: "left",
    },
    {
      h2: "System X Interior",
      h3: "Leather, Vinyl, and Fabric",
      body: "System X Interior™ protects all your interior surfaces; such as fabric seats, carpet, leather, and vinyl with a single professional coating. Spills and stains clean up easily and quickly.",
      image: "/images/gallery/System-X-Interior-product-819x1024.webp",
      imageAlt: "System X Interior product",
      imageSide: "left",
    },
  ],

  /* Connect with Us/Business Hours/Denver Location + Send A Quick Quote
     Form renders right after the content blocks on WordPress, not at the
     very bottom of the page like most other service pages. */
  quoteFormPosition: "afterContentBlocks",

  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" —
     content and 6-image gallery verbatim from WordPress's System X page. */
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
      { src: "/images/gallery/Rivian-ceramic-coatin-vertical-pic.webp", alt: "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more" },
    ],
  },
};
