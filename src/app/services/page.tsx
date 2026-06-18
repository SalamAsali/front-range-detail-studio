import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Colorado's trusted source for lifetime ceramic coatings, PPF, window tinting, vinyl wraps, paint correction, and RV & boat detailing. Front Range Detail Studio in Centennial, CO.",
};

const serviceCards = [
  {
    title: "Paint Protection Film & Clear Bra — 10 Year Warranty",
    image: "/images/services/new-ppf-scaled.jpg",
    href: "/paint-protection-film-ppf",
  },
  {
    title: "Window Tinting — Lifetime Warranty",
    image: "/images/services/new-tint.jpg",
    href: "/window-tint",
  },
  {
    title: "Ceramic Coating — Lifetime Warranty",
    image: "/images/services/car-ceramic-1.jpg",
    href: "/ceramic-coating",
  },
  {
    title: "Paint Correction",
    image: "/images/services/paint-correction-new.jpg",
    href: "/auto-detailing",
  },
  {
    title: "Vinyl Wrap & Decals",
    image: "/images/services/vinylwraps-1920w.webp",
    href: "/vinyl-wraps",
  },
  {
    title: "RV & Boat Services",
    image: "/images/hero/coach-scaled.jpg",
    href: "/rv-detailing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/images/hero/colorado-package-scaled.jpg"
        imageAlt="Front Range Detail Studio services — PPF, ceramic coating, tinting, wraps"
        title="Our Services"
        subtitle="Colorado's Trusted Source for Lifetime Ceramic Coatings and Premium Detailing."
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Services Grid */}
      <Section bg="dark" wide>
        <SectionHeading>
          Denver&apos;s Most Trusted Vehicle Aesthetic Experts
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((card) => (
            <ServiceCard key={card.href} {...card} />
          ))}
        </div>
      </Section>

      {/* Maintenance Copy */}
      <Section bg="black">
        <SectionHeading>
          Professional Ceramic Coating &amp; Paint Correction
        </SectionHeading>
        <p className="text-white/70 leading-relaxed">
          The highest caliber treatment for protecting your prized vehicle.
          Maintain your ceramic coating and retain your warranty through periodic
          maintenance washes. Ceramic top coat applied to boost existing coating
          and extend longevity.
        </p>
      </Section>

      {/* Reviews */}
      <Section bg="dark" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* Contact & Quote */}
      <Section bg="black" wide id="contact">
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
