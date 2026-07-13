import type { ServicePageData } from "@/components/ServicePage";

export const windowTintData: ServicePageData = {
  heroImg: "/images/vehicles/BMW-3-1024x768.webp",
  heroImgAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
  eyebrow: "Keep Your Car Cool, Private, and Protected—Year Round",
  heroVariant: "homepage",
  h1: "Ceramic Window Tint",
  h1Cities:
    "in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines",
  /* WordPress has no ratings bar on this page. */
  hideRatingsBar: true,
  /* Three standalone image+text+button sections, matching WordPress's
     real layout and images exactly: "Unmatched heat rejection" and
     "What's Included" are both text-left/image-right; "Want maximum
     privacy" is the mirror, image-left/text-right. */
  imageTextSections: [
    {
      image: "/images/vehicles/BMW-5.webp",
      imageAlt: "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "right",
      h2: "Unmatched heat rejection, UV protection, and style",
      items: [
        {
          body: "Colorado’s high-altitude sun, winter glare, and fluctuating weather make quality window tint more than just an upgrade—it’s a must-have for both comfort and protection. Whether you’re driving in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village, or Castle Pines, ceramic window tint from Front Range Detail Studio keeps your interior cooler, shields your skin, and protects your investment.",
        },
      ],
    },
    {
      image: "/images/services/window-tint-vertical.webp",
      imageAlt: "tech applying automotive window tint",
      h2: "Want maximum privacy or a custom look?",
      items: [
        {
          body: "We can tint your windows as dark as you want, so long as you understand the legal ramifications and local regulations. Our team is happy to explain Colorado’s window tint laws (legal limit is 27% VLT for most windows), but the final choice is always yours.",
        },
      ],
    },
    {
      image: "/images/services/window-tint-vertical-pic-1.webp",
      imageAlt: "automotive window tint services",
      imageSide: "right",
      eyebrow: "Next-gen ceramic technology",
      h2: "What’s Included With Every Window Tint Install",
      items: [
        { title: "Suntek Evolve Ceramic Window Film", body: "Industry-leading, next-gen ceramic technology." },
        { title: "Lifetime Warranty", body: "Guaranteed against fading, bubbling, peeling, or discoloration." },
        { title: "Custom Shade Selection", body: "Choose your preferred darkness—we can go as light or as dark as you want, with guidance on Colorado’s 27% legal limit and advice on darker options." },
        { title: "Professional Studio Installation", body: "Flawless, dust-free results every time—never mobile." },
        { title: "Precision Computer-Cut Patterns", body: "Perfect fit, every time, for all cars, trucks, SUVs, and more." },
        { title: "Aftercare Instructions", body: "Easy cleaning tips for long-lasting tint performance." },
      ],
    },
  ],
  stepsH2: "Our Proven Process: From Consultation to Perfection",
  /* WordPress has no eyebrow line above this heading — just the single
     H2. The default "The Process" eyebrow would double up with "Process"
     already in the heading text. */
  stepsEyebrow: "",
  steps: [
    {
      title: "Initial Consultation",
      body: "We review your needs, explain all shade options (including legal limits in Colorado), and help you select the perfect film for your goals.",
    },
    {
      title: "Careful Preparation",
      body: "Every window is meticulously cleaned and prepped for optimal adhesion.",
    },
    {
      title: "Expert Installation",
      body: "Our certified installers apply your chosen Suntek Evolve Ceramic tint with care, using computer-cut patterns for precision and a dust-free studio environment.",
    },
    {
      title: "Final Inspection & Aftercare",
      body: "We inspect every window for perfection, walk you through care instructions, and ensure you love the result.",
    },
  ],
  faqs: [
    {
      q: "Can you make my windows darker than the legal limit?",
      a: "Yes, we can tint your windows as dark as you like, but it’s important to understand that Colorado law requires most vehicle windows to allow at least 27% visible light through. Choosing a darker shade may result in a ticket if stopped by law enforcement. We’re happy to explain your options and help you make an informed decision.",
    },
    {
      q: "What’s special about ceramic window film?",
      a: "Ceramic tint blocks 99% of UV rays and up to 94% of infrared heat, keeping your car dramatically cooler without making it too dark.",
    },
    {
      q: "Can you tint my windshield or sunroof?",
      a: "Absolutely! We offer legal and safe windshield and sunroof tinting—great for reducing glare, protecting your dash, and making your drive more comfortable.",
    },
    {
      q: "Do you offer windshield protection film?",
      a: "Yes! Our windshield protection film helps prevent costly cracks, chips, and pitting—keeping your original, soundproofed windshield intact and saving you from expensive, disruptive replacements.",
    },
  ],
  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" +
     "Detailing Services in Denver..." — page-specific override of the
     shared DenverCTA section, same pattern as boat-ceramic-coating.ts.
     (Default render order already places Partners — Trusted Brands
     immediately before this section, so no position overrides needed.) */
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
  /* WordPress's Window Tint page ends at "Denver's 1st Choice in PPF" —
     no client reviews, no quote form section exists there. */
  hideReviews: true,
  hideQuoteForm: true,
};
