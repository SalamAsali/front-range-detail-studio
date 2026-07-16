import type { ServicePageData } from "@/components/ServicePage";

export const vinylWrapsData: ServicePageData = {
  heroImg: "/images/vehicles/Rivian.webp",
  heroImgAlt:
    "Rivian car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
  eyebrow: "Full Color Changes & Custom Graphics",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  h1: "Denver Metro Premier Choice in Vinyl Wraps Application",

  /* Three image+text sections, in WordPress order, with the image side the
     user explicitly asked for (Transform/Options: image right; Why Choose:
     image left — the last one flips WordPress's own text-left/image-right
     layout per the user's direction). */
  imageTextSections: [
    {
      h2: "Transform Your Ride with Custom Vinyl Wraps",
      image: "/images/vehicles/Grenadier.jpg",
      imageAlt:
        "Grenadier car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "right",
      items: [
        {
          body: "Full color changes, custom graphics, and stylish accents — professionally installed for a flawless finish. Looking to give your car a fresh new look? Whether you’re after a full color change, custom graphics, or subtle accents, our premium vinyl wrap services provide the ultimate makeover — without the cost of a new paint job. At Front Range Detail Studio, we use top-of-the-line materials and expert installation techniques to transform your vehicle’s appearance while also offering an extra layer of paint protection.",
        },
      ],
    },
    {
      h2: "Why Choose Vinyl Wraps?",
      eyebrow: "Wide range of colors, textures, and finishes",
      image: "/images/gallery/BMW-i4-vertical-pic.webp",
      imageAlt:
        "BMW car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "left",
      items: [
        {
          body: "Vinyl wraps offer endless possibilities for customization while protecting your original paint.",
        },
        {
          title: "Key Benefits:",
          bullets: [
            { title: "Quick Turnaround", body: "Most full wraps are completed in 3-5 days, depending on complexity." },
            { title: "Full Customization", body: "Choose from a wide range of colors, textures, and finishes — from matte and gloss to metallic and satin." },
            { title: "Non-Permanent", body: "Easily removable without damaging your original paint, perfect for leased vehicles or style changes." },
            { title: "Paint Protection", body: "Acts as a barrier against minor scratches, sun damage, and road debris." },
            { title: "Cost-Effective Alternative to Paint", body: "Get a fresh look at a fraction of the cost of a custom paint job." },
          ],
        },
      ],
    },
    {
      h2: "Vinyl Wrap Options",
      eyebrow: "Transform the entire look of your car",
      image: "/images/gallery/GMC-truck-vertical-pic.webp",
      imageAlt:
        "GMC trucks car detailing including paint protection film (PPF) or clear bra, window tinting, ceramic coating, vinyl wraps and more",
      imageSide: "right",
      items: [
        { title: "1. Full Vehicle Color Change", lines: ["Transform the entire look of your car with a full-color wrap."] },
        { bullets: ["Matte, gloss, satin, metallic, or chrome finishes", "Over 200+ color options", "Completely reversible without damaging paint"] },
        { title: "2. Partial Wraps & Graphics", lines: ["Add a custom touch without wrapping the entire vehicle."] },
        { bullets: ["Racing stripes", "Hood, roof, or trunk wraps", "Two-tone color designs", "Custom graphics & branding"] },
        { title: "3. Commercial & Fleet Wraps", lines: ["Turn your vehicle into a moving billboard."] },
        { bullets: ["Custom branding for company vehicles", "Eye-catching graphics and logos", "High-quality materials built for daily driving"] },
        { title: "4. Accent Wraps & Details", lines: ["Subtle touches for a more unique style."] },
        { bullets: ["Carbon fiber accents (mirrors, spoilers, hoods)", "Chrome deletes", "Roof wraps"] },
      ],
    },
  ],

  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" — content
     and 6-image gallery verbatim from WordPress, same as ppf.ts/window-tint.ts/
     system-x.ts (this boilerplate section is reused sitewide by WordPress). */
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

  /* WordPress's Vinyl Wraps page has no FAQ, Reviews/testimonials, or
     "Connect with Us / Send A Quick Quote Form" section — it ends at
     "Denver's 1st Choice in Paint Protection Film and Clear Bra". */
  hideReviews: true,
  hideQuoteForm: true,
};
