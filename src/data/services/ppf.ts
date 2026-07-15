import type { ServicePageData } from "@/components/ServicePage";
import { videos } from "@/data/videos";

export const ppfData: ServicePageData = {
  heroImg: "/images/hero/colorado-package-scaled.jpg",
  heroImgAlt: "PPF Clear Bra Denver Tint Ceramic Coating Paint Correction",
  eyebrow: "Denver’s Most Trusted Vehicle Aesthetic Experts",
  heroVariant: "homepage",
  heroContentMaxWidth: 1200,
  heroH1FontSize: "clamp(2rem, 4vw, 3.5rem)",
  h1: "Paint Protection Film (PPF) & Clear Bra in Denver",

  /* "Paint Protection Film (PPF) & Clear Bra" + nested "Why Choose Us?"
     (H3) — image-left/text-right, verbatim from WordPress including the
     small eyebrow, real bullet list, and bold lead-ins. */
  imageTextSection: {
    image: "/images/services/clear-bra-vertical-pic.webp",
    imageAlt: "Paint protection film (PPF) or clear bra services in the Denver Metro area",
    eyebrow: "Keep Your Car Looking New—No Matter What Colorado Throws At It",
    groups: [
      {
        h2: "Paint Protection Film (PPF) & Clear Bra",
        items: [
          { body: "Paint Protection Film (PPF) & Clear Bra — Serving Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village, & Castle Pines" },
          { body: "Living and driving in the Denver metro area means your vehicle faces some of the harshest conditions in the country:" },
          { bullets: ["Snow, ice, and road salt in winter", "Loose gravel, construction debris, and unpredictable weather year-round", "Harsh sun and sudden hail every summer"] },
          { body: "Even daily drives in Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village, and Castle Pines can result in expensive paint chips, scratches, or permanent stains—unless you protect your car before damage happens." },
          { body: "That’s why so many Colorado car owners trust Paint Protection Film (PPF) and Clear Bra from Front Range Detail Studio." },
          { body: "Our expert PPF installation provides a virtually invisible barrier, stopping rock chips, road rash, and chemical stains before they start. It’s a smarter investment—because prevention always costs less than fixing paint later." },
        ],
      },
      {
        h2: "Why Choose Us?",
        tag: "h3",
        items: [
          {
            bullets: [
              { title: "SunTek Reaction PPF", body: "Industry-leading protection with a 12-year warranty and advanced self-healing technology." },
              { title: "Climate-controlled Centennial studio", body: "No dust, no mess, no mobile installs. Just flawless, professional results every time." },
            ],
          },
          { body: "Trusted by drivers across Denver and surrounding cities — Check out our 5-star reviews from local clients who value quality, honesty, and results." },
          { body: "Don’t let Colorado roads ruin your investment. Protect your paint today and enjoy every mile—worry-free." },
        ],
      },
    ],
  },

  /* "What's Included With Every PPF Install" — image-right/text-left. */
  includedEyebrow: "Every PPF installation at Front Range Detail Studio includes",
  includedH2: "What’s Included With Every PPF Install",
  includedImage: "/images/services/ppf-application-vertical-pic.webp",
  includedImageAlt: "tech applying PPF (paint protection film) / Clear Bra",
  includedImageSide: "right",
  included: [
    { title: "Premium SunTek Reaction Paint Protection Film", body: "Advanced self-healing, hydrophobic film designed for long-lasting protection." },
    { title: "12-Year Manufacturer Warranty", body: "Coverage against yellowing, cracking, peeling, and bubbling." },
    { title: "Professional Installation in a Climate-Controlled Studio", body: "Ensures a dust-free environment for flawless results." },
    { title: "Complimentary Ceramic Boost Top Coat", body: "Enhances gloss, slickness, and ease of cleaning." },
    { title: "Wrapped Panel Edges Where Possible", body: "Provides maximum coverage and a seamless finish." },
    { title: "Personalized Aftercare Instructions", body: "Guidance on maintaining your vehicle’s new protection." },
  ],

  stepsH2: "Our Proven Process: From Consultation to Delivery",
  stepsEyebrow: "",
  steps: [
    {
      title: "Initial Consultation",
      body: "We assess your driving habits and vehicle usage to recommend the ideal PPF coverage.",
    },
    {
      title: "Careful Preparation",
      body: "Your vehicle undergoes a meticulous hand wash and decontamination to ensure a clean surface.",
    },
    {
      title: "Precision Installation",
      body: "Certified installers apply the PPF using computer-cut patterns in our controlled studio",
    },
    {
      title: "Final Check & Delivery",
      body: "A thorough inspection is conducted, and aftercare instructions are provided upon delivery.",
    },
  ],

  /* Reviews render right after the process steps on WordPress, well
     before FAQ/Partners — not in its usual bottom-of-page position. */
  reviewsPosition: "afterSteps",

  faqs: [
    {
      q: 'How does SunTek Reaction PPF "self-heal"?',
      a: "The film’s top layer uses advanced polymers that cause light scratches and swirl marks to disappear with heat—either from the sun or warm water.",
    },
    {
      q: "How long does the film last?",
      a: "SunTek Reaction PPF is backed by a 12-year warranty, but many owners see effective protection for even longer with proper care.",
    },
    {
      q: "Can I wash my car as usual?",
      a: "Yes! Hand washing or touchless washes are best. Avoid automatic washes with brushes, and wait 7 days after installation before your first wash.",
    },
    {
      q: "Does PPF prevent rock chips?",
      a: "Absolutely. PPF is specifically engineered to absorb and disperse impacts from rocks, gravel, and road debris, dramatically reducing chips and scratches.",
    },
    {
      q: "Will it turn yellow or peel over time?",
      a: "No—SunTek Reaction is warrantied for 12 years against yellowing, cracking, or peeling. Our climate-controlled installation and ceramic boost top coat help it look better, longer.",
    },
    {
      q: "Can I combine PPF with ceramic coating?",
      a: "Yes! In fact, we include a complimentary ceramic boost with every install for added shine and easy cleaning.",
    },
    {
      q: "Is the film removable?",
      a: "Yes. If needed, PPF can be safely removed by our team without damaging your paint.",
    },
  ],

  /* Three sections that WordPress places after Partners, near the
     bottom — positioned via imageTextSections[].position "afterPartners"
     so they render after PartnersStrip instead of before Services Grid. */
  imageTextSections: [
    {
      position: "afterPartners",
      h2: "Protect Your Vehicle with Premium Paint Protection Film (PPF)",
      videoSrc: videos.services.ppf,
      imageSide: "right",
      hideButtons: true,
      items: [
        {
          body: "Preserve your vehicle’s flawless finish with our superior Paint Protection Film (PPF), also known as Clear Bra. Designed as an invisible shield, our high-performance PPF defends your car’s paint from scratches, stone chips, and the damaging effects of road debris. With a 10-year warranty and infused ceramic coating, you’ll experience unmatched protection and a brand new look for years to come.",
        },
      ],
    },
    {
      position: "afterPartners",
      h2: "PPF Options",
      image: "/images/services/IMG_2244-1-scaled.jpg",
      imageAlt: "PPF clear bra installation at Front Range Detail Studio",
      imageSide: "left",
      hideButtons: true,
      items: [
        {
          lines: [
            "Whether you choose full body PPF for your show car exotic, or just a full front end clear bra for your daily driver, our technicians are equipped with the best tools, technology, and technical skills to ensure a top-tier installation. With quality and longevity as our goal, your vehicle’s appearance will stand the test of time with our warranty backed paint protection film.",
            "Our arsenal of proven PPF brands offer you the luxury of protecting your ride while expressing your style. Choose from an invisible shield film to maintain your factory appearance, or spice things up with a matte paint protection film for a unique finish that turns heads. And if you are feeling particularly adventurous, Front Range Detail Studio offers a range of colored PPF to restyle your ride to the color of your dreams while adding a protective layer. From a sleek black PPF to a high gloss midnight purple clear bra, we are prepared for all your restyling and paint protection needs.",
            "Every paint protection film installation at Front Range Detail Studio comes with a ceramic coating application to preserve the appearance of the film with maximum shine and self-cleaning, dirt-repelling characteristics.",
          ],
        },
      ],
    },
    {
      position: "afterPartners",
      h2: "Why Choose Paint Protection Film?",
      image: "/images/services/IMG_2243-scaled.jpg",
      imageAlt: "clear bra ppf paint protection film denver centennial englewood",
      imageSide: "right",
      hideButtons: true,
      items: [
        {
          lines: [
            "Colorado’s warm summers and cold, snowy winters can be quite taxing on your vehicle. Not only are we closer to the sun with all it’s harmful UV, but our Colorado vehicles must endure constant rock chips on dry roads, followed by corrosive winter road chemicals when it snows. It’s the perfect recipe to destroy your vehicle’s pristine appearance.",
            "Luckily, our PPF provides the ultimate defense for your paintwork. It not only protects against physical damages and rock chips, but also offers UV resistance, which helps prevent the paint from fading over time.",
            "Our industry-leading clear bra is infused with self-healing technology. Scratches and scuffs heal under the light of the sun to a flawless finish in a matter of seconds.",
            "And with a ceramic coating application on every PPF installation, your vehicle will enjoy a lasting shine and debris resistance that will keep it looking freshly waxed.",
            "Installing Paint Protection Film is an investment in maintaining the aesthetic appeal and resale value of your vehicle. Our professional application ensures precision and durability, with warranty options that give you peace of mind.",
          ],
        },
      ],
    },
  ],

  /* "Denver's 1st Choice in Paint Protection Film and Clear Bra" —
     content and 6-image gallery verbatim from WordPress, same as
     window-tint.ts/system-x.ts. */
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

  /* WordPress's PPF page has no "Connect with Us / Send A Quick Quote
     Form" section at all. */
  hideQuoteForm: true,
};
