import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Detailing Packages",
  description:
    "Auto detailing and ceramic coating packages in Denver, CO. Bronze (1yr), Silver (3yr), Gold (6yr), Platinum (9yr) ceramic tiers plus full detailing services. Front Range Detail Studio.",
};

const detailingPackages = [
  {
    title: "Maintenance Wash & Wax",
    duration: "~2 hours",
    frequency: "Every 1\u20132 months",
    items: [
      "Hand wash with pH-balanced soap",
      "Bug and tar removal",
      "Clay bar treatment",
      "Premium wax application",
      "Tire cleaning and dressing",
      "Windows cleaned inside and out",
    ],
  },
  {
    title: "Full Exterior Detailing",
    duration: "~4\u20135 hours",
    frequency: "Every 3\u20136 months",
    items: [
      "Hand wash and decontamination",
      "Paint correction (swirl and scratch removal)",
      "High-quality polish",
      "Sealant or ceramic spray",
      "Wheel and tire detailing",
      "Glass cleaning and water repellent",
    ],
  },
  {
    title: "Full Interior Detailing",
    duration: "~3\u20134 hours",
    frequency: "Every 4\u20136 months",
    items: [
      "Vacuum seats, carpets, and trunk",
      "Steam cleaning and shampooing",
      "Leather cleaning and conditioning",
      "Dashboard, vents, and cupholders",
      "Streak-free window cleaning",
      "Odor elimination",
    ],
  },
  {
    title: "Complete Interior & Exterior",
    duration: "~6\u20138 hours",
    frequency: "Twice a year",
    items: [
      "All exterior and interior services",
      "Clay bar treatment and paint correction",
      "Interior steam cleaning",
      "Engine bay cleaning and dressing",
      "Glass water repellent application",
    ],
  },
];

const ceramicTiers = [
  {
    title: "Bronze Package",
    warranty: "1-Year Warranty",
    description:
      "Entry-level ceramic protection for daily drivers. System X coating with basic paint preparation and a 1-year manufacturer warranty.",
    featured: false,
  },
  {
    title: "Silver Package",
    warranty: "3-Year Warranty",
    description:
      "Enhanced ceramic protection with thorough paint correction. System X coating with a 3-year manufacturer warranty and annual maintenance program.",
    featured: false,
  },
  {
    title: "Gold Package",
    warranty: "6-Year Warranty",
    description:
      "Premium ceramic protection with multi-stage paint correction. System X MAX G Plus coating with a 6-year manufacturer warranty, wheels, and trim coating included.",
    featured: true,
  },
  {
    title: "Platinum Package",
    warranty: "9-Year Warranty",
    description:
      "The ultimate ceramic protection package. Full multi-stage paint correction, System X MAX G Plus on all surfaces including wheels, trim, glass, and interior. 9-year manufacturer warranty.",
    featured: false,
  },
];

export default function DetailingPackagesPage() {
  return (
    <>
      <Hero
        image="/images/hero/colorado-package-scaled.jpg"
        imageAlt="Auto detailing and ceramic coating packages in Denver Colorado"
        title="Denver, CO Leader in Complete Professional Car Care"
        subtitle="Unmatched protection and style for your vehicle"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Intro */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          Front Range Detail Studio, conveniently located in South Denver, has
          been Colorado&apos;s leading provider of immaculate auto, watercraft,
          motorcoach, and RV detailing services.
        </p>
      </Section>

      {/* Auto Detailing Packages */}
      <Section bg="black" wide>
        <SectionHeading>
          Colorado&apos;s Vehicle Auto Detailing Packages
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {detailingPackages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-dark-elevated rounded-lg overflow-hidden"
            >
              <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
                <h3 className="text-lg">{pkg.title}</h3>
                <div className="flex gap-4 mt-1">
                  <span className="text-xs text-primary">{pkg.duration}</span>
                  <span className="text-xs text-white/40">{pkg.frequency}</span>
                </div>
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
        <div className="mt-6 text-center">
          <Link
            href="/auto-detailing"
            className="inline-block px-8 py-3.5 border border-primary text-primary text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary hover:text-white transition-colors"
          >
            View Full Detailing Details
          </Link>
        </div>
      </Section>

      {/* Ceramic Coating Tiers */}
      <Section bg="dark" wide>
        <SectionHeading>
          Colorado&apos;s Vehicle Ceramic Coating Packages
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ceramicTiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-lg overflow-hidden flex flex-col ${
                tier.featured
                  ? "bg-dark-elevated border-2 border-primary"
                  : "bg-dark-elevated border border-gray-border/20"
              }`}
            >
              {tier.featured && (
                <div className="bg-primary text-center py-1.5">
                  <span className="text-xs uppercase tracking-widest font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg mb-1">{tier.title}</h3>
                <p className="text-primary text-sm font-semibold mb-3">
                  {tier.warranty}
                </p>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {tier.description}
                </p>
                <Link
                  href="/free-quote"
                  className="mt-4 block text-center py-3 bg-primary/10 text-primary text-xs uppercase tracking-widest rounded font-[var(--font-button)] hover:bg-primary hover:text-white transition-colors"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/ceramic-coating"
            className="inline-block px-8 py-3.5 border border-primary text-primary text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary hover:text-white transition-colors"
          >
            Learn More About Ceramic Coating
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
