import { videos } from "@/data/videos";
import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "RV Detailing & Ceramic Coating",
  description:
    "Professional RV detailing and System X ceramic coating in Denver & Centennial, CO. Wash from $10/ft, oxidation removal $20-35/ft, ceramic coating $100/ft. Front Range Detail Studio.",
};

const servicePackages = [
  {
    title: "RV Exterior Wash & Wheels",
    pricing: "Starting at $10/foot",
    items: [
      "Hand wash (roof to wheels)",
      "Bug/tar removal",
      "High-quality sealant application",
      "Wheel & tire cleaning",
    ],
  },
  {
    title: "Oxidation Removal & Paint Correction",
    pricing: "$20\u2013$35/foot",
    items: [
      "Machine compounding and polishing",
      "Restores faded/chalky fiberglass/gelcoat",
      "System X ceramic top coat included",
    ],
  },
  {
    title: "Ceramic Coating for RVs & Motorhomes",
    pricing: "Starting at $100/foot",
    items: [
      "Multi-stage paint correction",
      "System X MAX G Plus application",
      "3-year warranty for new RVs; 1\u20132 years for older units",
      "Protection against sun/bird droppings/tree sap",
      "Optional wheel/trim/glass coating",
    ],
  },
  {
    title: "Paint Protection Film \u2014 SunTek Reaction",
    pricing: "Call for quote",
    items: [
      "High-impact zone coverage",
      "12-year warranty",
      "Self-healing, hydrophobic, virtually invisible",
    ],
  },
  {
    title: "Roof, Decal, and Specialty Services",
    pricing: "Call for quote",
    items: [
      "Rubber/TPO/fiberglass roof cleaning & UV treatment",
      "Decal removal & replacement",
      "Metal polishing",
      "Window cleaning",
    ],
  },
];

const rvTypes = [
  "Class A Motorhomes",
  "Class B Camper Vans",
  "Class C Motorhomes",
  "Fifth-Wheels",
  "Travel Trailers",
  "Toy Haulers",
  "Custom Vans",
  "Sprinter Vans",
  "Pop-Ups",
  "Diesel Pushers",
];

const faqItems = [
  {
    question: "Do you detail all types of RVs and motorhomes?",
    answer:
      "Yes, from Sprinter vans and pop-ups to large Class A diesel pushers\u2014no rig is too big or too small!",
  },
  {
    question:
      "What\u2019s the difference between wax and ceramic coating for RVs?",
    answer:
      "Wax offers a few months of shine and protection. Our System X ceramic coating provides up to 3 years of real-world defense against UV, oxidation, and environmental contaminants.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most exterior packages take 1\u20133 days depending on the size and condition of your RV.",
  },
  {
    question: "Can you remove heavy oxidation and faded gelcoat?",
    answer:
      "Absolutely. Our multi-stage machine compounding and polishing process restores faded fiberglass and gelcoat to a deep, glossy finish.",
  },
  {
    question: "Do you offer mobile or on-site service?",
    answer:
      "All RV detailing and ceramic coating work is performed at our climate-controlled Centennial studio for the best possible results.",
  },
];

export default function RVDetailingPage() {
  return (
    <>
      <Hero
        image="/images/hero/coach-scaled.jpg"
        imageAlt="RV detailing and ceramic coating in Denver Colorado"
        title="RV Detailing & Ceramic Coating in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines"
        subtitle="Protect your home on wheels with Colorado's most trusted RV detailing experts."
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Intro */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          At Front Range Detail Studio, we use only the industry&apos;s best:
          System X MAX G Plus ceramic coatings and SunTek Reaction paint
          protection film. These are the same premium products trusted on
          high-end cars&mdash;now protecting your RV or motorhome against
          Colorado&apos;s toughest conditions.
        </p>
      </Section>

      {/* Service Packages with Pricing */}
      <Section bg="black" wide>
        <SectionHeading>
          RV Detailing &amp; Protection Packages
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-dark-elevated rounded-lg overflow-hidden"
            >
              <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
                <h3 className="text-base">{pkg.title}</h3>
                <p className="text-primary text-sm font-semibold mt-1">
                  {pkg.pricing}
                </p>
              </div>
              <ul className="px-6 py-4 space-y-2">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* RV Types */}
      <Section bg="dark">
        <SectionHeading>
          Experience with All RV Types
        </SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {rvTypes.map((type) => (
            <div
              key={type}
              className="bg-dark-surface rounded px-4 py-3 text-center text-sm text-white/70"
            >
              {type}
            </div>
          ))}
        </div>
      </Section>

      {/* Cross-link to RV Ceramic Coating */}
      <Section bg="black">
        <SectionHeading>RV Ceramic Coating</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          Looking for comprehensive ceramic coating protection for your RV? Our
          dedicated RV ceramic coating service includes multi-stage paint
          correction, System X MAX G Plus application, and a manufacturer-backed
          warranty.
        </p>
        <Link
          href="/rv-ceramic-coating"
          className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
        >
          RV Ceramic Coating Details
        </Link>
      </Section>

      {/* FAQ */}
      <Section bg="dark">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQ items={faqItems} />
      </Section>

      {/* Reviews */}
      <Section bg="black" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* Contact & Quote */}
      <Section bg="dark" wide id="contact">
        <SectionHeading>
          Serving The Denver Metro And Surrounding Areas
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3>Connect with Us</h3>
            <div className="space-y-3 text-white/70">
              <a
                href="tel:3035208023"
                className="block text-lg text-primary hover:text-primary-light transition-colors"
              >
                (303) 520-8023
              </a>
              <a
                href="mailto:info@frontrangedetailstudio.com"
                className="block hover:text-primary transition-colors"
              >
                info@frontrangedetailstudio.com
              </a>
              <p>12559 E Broncos Pkwy, Centennial, CO 80112</p>
              <p>Monday &ndash; Sunday: By Appointment Only</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
