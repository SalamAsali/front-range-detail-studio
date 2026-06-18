import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Boat Detailing",
  description:
    "Professional boat detailing in Denver, CO. Exterior buffing, interior cleaning, gelcoat restoration, marine ceramic coating. System X certified. Front Range Detail Studio.",
};

const services = [
  {
    title: "Exterior Boat Detailing & Buffing",
    duration: "~3\u20135 hours",
    items: [
      "Full exterior hand wash (including hull and deck)",
      "Oxidation and water spot removal",
      "Gelcoat buffing and polishing for deep, glossy finish",
      "Premium marine wax or sealant application",
      "Stainless steel and chrome polishing",
    ],
  },
  {
    title: "Interior Boat Detailing",
    duration: "~2\u20134 hours",
    items: [
      "Vacuum and deep clean seating, carpets, upholstery",
      "Vinyl and leather cleaning and conditioning",
      "Mold and mildew treatment",
      "Glass and mirror cleaning",
      "Dashboard and control panel detailing",
    ],
  },
  {
    title: "Annual Boat Waxing",
    duration: "Recommended every 12 months",
    items: [
      "Gelcoat-safe, high-quality wax",
      "Shields from Colorado\u2019s intense sun and water spots",
      "Restores and preserves factory-fresh shine",
    ],
  },
  {
    title: "Gelcoat Restoration & Oxidation Removal",
    duration: "Varies by condition",
    items: [
      "Multi-stage machine buffing and polishing",
      "Revives color, depth, and reflectivity",
      "Protect with marine wax or ceramic coating",
    ],
  },
];

const ceramicCoatingFeatures = [
  "Long-lasting hydrophobic and UV-resistant barrier",
  "Easier cleaning, less staining, dramatic shine",
  "Coverage for hull, topside, stainless steel",
  "Optional interior protection",
  "Manufacturer-backed warranty",
];

export default function BoatDetailingPage() {
  return (
    <>
      <Hero
        image="/images/services/boat-detailing.jpg"
        imageAlt="Boat detailing and ceramic coating in Denver Colorado"
        title="Boat Detailing & Ceramic Coating in Denver, CO &mdash; Protect Your Watercraft"
        subtitle="Keep your boat looking pristine and protected from harsh water elements"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Introduction */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          Keep your boat looking pristine and protected from harsh water elements
          with professional detailing and System X Marine Ceramic Coating from
          Front Range Detail Studio.
        </p>
      </Section>

      {/* Comprehensive Services */}
      <Section bg="black" wide>
        <SectionHeading>Comprehensive Boat Detailing Services</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-dark-elevated rounded-lg overflow-hidden"
            >
              <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
                <h3 className="text-base">{service.title}</h3>
                <p className="text-xs text-white/40 mt-1">{service.duration}</p>
              </div>
              <ul className="px-6 py-4 space-y-2">
                {service.items.map((item) => (
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

      {/* Marine Ceramic Coating */}
      <Section bg="dark">
        <SectionHeading>Marine Ceramic Coating Packages</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          Take your boat&apos;s protection to the next level with System X Marine
          Ceramic Coating. Our coatings provide a durable, hydrophobic barrier
          that keeps your watercraft looking brilliant season after season.
        </p>
        <div className="bg-dark-elevated rounded-lg p-6">
          <ul className="space-y-3">
            {ceramicCoatingFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span className="text-primary mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link
            href="/boat-ceramic-coating"
            className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
          >
            Boat Ceramic Coating Details
          </Link>
        </div>
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
