import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Over 15 years of automotive detailing experience. System X & SunTek certified. Climate-controlled studio in Englewood, CO serving the Denver Metro area.",
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

const partnerLogos = [
  { src: "/images/logos/Rupes-Logo.webp", alt: "Rupes logo" },
  {
    src: "/images/logos/glidecoat-pro-logo.svg",
    alt: "Glidecoat authorized dealer",
  },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar logo" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/images/hero/colorado-package-scaled.jpg"
        imageAlt="Front Range Detail Studio climate-controlled facility"
        title="About Front Range Detail Studio"
        subtitle="Denver's Most Trusted Vehicle Aesthetic Experts"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Intro / Story */}
      <Section bg="dark">
        <SectionHeading>
          Denver&apos;s Most Trusted Vehicle Aesthetic Experts
        </SectionHeading>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p>
            With over 15 years of experience in the automotive detailing
            industry, Front Range Detail Studio has built a reputation as
            Colorado&apos;s premier destination for vehicle protection and
            enhancement. From cars and trucks to semi trucks, SUVs, RVs, boats
            and watercraft&mdash;we handle it all with the same level of care
            and precision.
          </p>
          <p>
            Our clients have one thing in common: they love their vehicle. That
            shared passion drives everything we do. Whether it&apos;s a
            brand-new Tesla getting its first coat of ceramic protection or a
            cherished classic receiving a full paint correction, we treat every
            vehicle as if it were our own.
          </p>
        </div>
      </Section>

      {/* Certifications */}
      <Section bg="black">
        <SectionHeading>Certified &amp; Trusted</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-elevated rounded-lg p-6">
            <h3 className="text-primary mb-3">System X Certified</h3>
            <p className="text-white/70 leading-relaxed">
              We are authorized System X ceramic coating installers, using only
              genuine System X products backed by manufacturer warranties. Our
              team undergoes rigorous training to ensure every coating is applied
              to factory specifications.
            </p>
          </div>
          <div className="bg-dark-elevated rounded-lg p-6">
            <h3 className="text-primary mb-3">SunTek Certified</h3>
            <p className="text-white/70 leading-relaxed">
              As certified SunTek installers, we offer premium paint protection
              film and window tint products with industry-leading warranties.
              SunTek&apos;s Reaction PPF and Evolve ceramic window tint are our
              go-to solutions for Colorado drivers.
            </p>
          </div>
        </div>
      </Section>

      {/* Climate-Controlled Studio */}
      <Section bg="dark">
        <SectionHeading>Climate-Controlled Studio</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          Our state-of-the-art, climate-controlled studio in Englewood ensures
          every installation is performed under optimal conditions. Temperature
          and humidity control are critical for PPF adhesion, ceramic coating
          curing, and achieving flawless results&mdash;something a mobile
          service or open-air shop simply cannot guarantee.
        </p>
      </Section>

      {/* Services Grid */}
      <Section bg="black" wide>
        <SectionHeading>Our Services</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((card) => (
            <ServiceCard key={card.href} {...card} />
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section bg="dark">
        <SectionHeading>Serving the Denver Metro Area</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          Located at 12559 E Broncos Pkwy in Centennial, CO 80112, we proudly
          serve Denver and all surrounding cities. Our clients come from across
          the Front Range&mdash;from Boulder to Castle Rock, Aurora to
          Lakewood&mdash;because they trust our expertise and commitment to
          quality.
        </p>
      </Section>

      {/* Partners */}
      <Section bg="black" wide>
        <SectionHeading>Our Partners &mdash; Trusted Brands</SectionHeading>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {partnerLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity object-contain h-10"
            />
          ))}
        </div>
      </Section>

      {/* All Brands */}
      <Section bg="dark">
        <SectionHeading>
          Protection For All Brands and Models
        </SectionHeading>
        <p className="text-white/70 leading-relaxed">
          At Front Range Detail Studio, we protect all brands and models
          including Tesla, Rivian, Porsche, BMW, Mercedes Benz and more. Protect
          your vehicle with ceramic coatings, paint protection film, window
          tinting, paint correction and more.
        </p>
      </Section>

      {/* Reviews */}
      <Section bg="black" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* CTA */}
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
