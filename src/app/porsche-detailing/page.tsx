import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Porsche Detailing - PPF, Ceramic Coating & Window Tint",
  description:
    "Colorado's Porsche PPF & ceramic coating experts. Paint protection film, ceramic coating, and window tint for 911, Cayenne, Macan & all Porsche models in Englewood, CO.",
};

const serviceCards = [
  {
    title: "Porsche Ceramic Coating",
    image: "/images/vehicles/porsche-ceramic-coating.png",
    href: "/ceramic-coating",
  },
  {
    title: "Porsche Paint Protection Film",
    image: "/images/vehicles/porsche-ppf.png",
    href: "/paint-protection-film-ppf",
  },
  {
    title: "Porsche Window Tint",
    image: "/images/vehicles/porsche-window-tint.png",
    href: "/window-tint",
  },
];

const faqItems = [
  {
    question: "Is Porsche paint soft or hard?",
    answer:
      "Porsche uses high-quality paint, but it can still be susceptible to rock chips and swirl marks, especially on high-performance models. PPF and ceramic coating are highly recommended for preserving the factory finish.",
  },
  {
    question: "Does PPF hide rock chips or swirls?",
    answer:
      "PPF can mask minor flaws, but we always perform paint correction for a flawless finish first. This ensures the best adhesion and a perfect final result under the film.",
  },
  {
    question:
      "Can you do custom coverage for splitters, carbon roofs, etc.?",
    answer:
      "Yes, we do custom installs for all special Porsche trim and aftermarket parts. Whether it's a GT3 front splitter, carbon fiber roof, or sport exhaust surrounds, we can create precision-cut PPF patterns for complete coverage.",
  },
];

export default function PorscheDetailingPage() {
  return (
    <>
      <Hero
        image="/images/vehicles/911-Targa-4S-1024x768.jpg"
        imageAlt="911 Targa 4S with Manual Transmission protected with System X ceramic coating"
        title="Colorado's Porsche PPF & Ceramic Coating Experts"
        subtitle="Porsche Paint Protection & Restyling in Englewood, CO"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Intro */}
      <Section bg="dark">
        <SectionHeading>
          Protect and Elevate Your Porsche in Colorado
        </SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          At Front Range Detail Studio in Englewood, CO, we specialize in
          preserving the beauty, performance, and value of your Porsche. Whether
          you own a legendary 911, a versatile Cayenne, or a sporty Macan, our
          dedicated team offers precision paint protection film (PPF), ceramic
          coatings, and ceramic window tint services&mdash;all designed for
          Colorado&apos;s demanding driving conditions. We&apos;re not just
          protecting paint &mdash; we&apos;re protecting your investment.
        </p>
      </Section>

      {/* Service Cards */}
      <Section bg="black" wide>
        <SectionHeading>Porsche Paint Protection Film Packages</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {serviceCards.map((card) => (
            <ServiceCard key={card.href} {...card} />
          ))}
        </div>
      </Section>

      {/* PPF Details */}
      <Section bg="dark">
        <SectionHeading>
          Premier Porsche Paint Protection in Englewood, CO
        </SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="text-primary mb-3">
              Custom-Fit Porsche-Specific PPF
            </h3>
            <p className="text-white/70 leading-relaxed">
              Custom-fit patterns tailored to your Porsche&apos;s exact body
              lines, from wide GT bumpers to sculpted fenders. Our precision
              digital cutting ensures seamless coverage for every Porsche model.
            </p>
          </div>

          <div>
            <h3 className="text-primary mb-3">Digital Precision Cutting</h3>
            <p className="text-white/70 leading-relaxed">
              We use advanced digital plotters to cut PPF patterns specific to
              your Porsche, ensuring perfect fitment with minimal seams.
            </p>
          </div>

          <div>
            <h3 className="text-primary mb-3">Ideal for Colorado Roads</h3>
            <p className="text-white/70 leading-relaxed">
              Safeguards against magnesium chloride, gravel, UV exposure, and
              road grime that Colorado drivers face year-round.
            </p>
          </div>

          <div>
            <h3 className="text-primary mb-3">Paint Protection Film Options</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">&#9670;</span>
                <span>
                  <strong className="text-white">SunTek Reaction PPF</strong>{" "}
                  &mdash; premium clear, high-gloss PPF with hydrophobic
                  ceramic-infused technology and a 12-year warranty
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">&#9670;</span>
                <span>
                  <strong className="text-white">
                    PURE PPF Color Changing Film
                  </strong>{" "}
                  &mdash; high-performance color-change PPF in satin, matte,
                  gloss, and bold custom finishes, 12-year warranty
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Front Range Package */}
      <Section bg="black">
        <SectionHeading>
          Porsche&apos;s Best Defense &mdash; The Front Range Package
        </SectionHeading>
        <div className="bg-dark-elevated rounded-lg p-6 lg:p-8 space-y-4">
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">&#10003;</span>
              <span>
                Full-Front PPF (bumper, hood, fenders, mirrors, headlights,
                rockers)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">&#10003;</span>
              <span>
                Level-2 Paint Correction &amp; Multi-Layer Ceramic Coating
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">&#10003;</span>
              <span>
                Ceramic Window Tint with Advanced UV &amp; Heat Rejection
              </span>
            </li>
          </ul>
          <div className="pt-4">
            <Link
              href="/free-quote"
              className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
            >
              Get A Custom Porsche Quote
            </Link>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section bg="dark">
        <SectionHeading>
          See Our Porsche Paint Protection in Action
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Image
            src="/images/vehicles/Porsche-Cayenne-Turbo-S-PPF-1024x768.jpg"
            alt="Porsche Cayenne Turbo S paint protection film front side view"
            width={1024}
            height={768}
            className="rounded w-full"
          />
          <Image
            src="/images/vehicles/911-Targa-4S-1024x768.jpg"
            alt="911 Targa 4S with Manual Transmission protected with System X ceramic Max G+"
            width={1024}
            height={768}
            className="rounded w-full"
          />
        </div>
      </Section>

      {/* Ceramic Coating */}
      <Section bg="black">
        <SectionHeading>Porsche Ceramic Coating In Englewood</SectionHeading>
        <div className="space-y-6">
          <div>
            <h3 className="text-primary mb-3">
              High-Gloss, Hydrophobic Finish
            </h3>
            <p className="text-white/70 leading-relaxed">
              Locks in a deep, glass-like shine and makes water, dust, and grime
              bead off effortlessly. Perfect for keeping your Porsche looking
              showroom-fresh.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">UV and Chemical Barrier</h3>
            <p className="text-white/70 leading-relaxed">
              Prevents oxidation and environmental damage, especially critical
              in Colorado&apos;s high-altitude sun. Ceramic coating acts as a
              sacrificial layer that protects your Porsche&apos;s paint for
              years.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Extends PPF Longevity</h3>
            <p className="text-white/70 leading-relaxed">
              Boosts the durability and appearance of your paint protection film,
              extending the life of your investment.
            </p>
          </div>
        </div>
      </Section>

      {/* Window Tinting */}
      <Section bg="dark">
        <SectionHeading>
          Porsche Window Tinting in Englewood, CO
        </SectionHeading>
        <div className="space-y-6">
          <div>
            <h3 className="text-primary mb-3">Ceramic Window Tint</h3>
            <p className="text-white/70 leading-relaxed">
              Blocks up to 99% of UV rays and dramatically reduces interior
              heat. Essential for protecting Porsche&apos;s premium leather
              interiors and panoramic roof glass.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Privacy &amp; Aesthetic Boost</h3>
            <p className="text-white/70 leading-relaxed">
              Enhances the sleek, aggressive look of your Porsche while
              providing privacy and reducing glare for a more comfortable
              driving experience.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">
              Safe for Driver-Assist Systems
            </h3>
            <p className="text-white/70 leading-relaxed">
              100% compatible with Porsche&apos;s driver-assist systems,
              including lane departure, adaptive cruise, and parking sensors.
              Our ceramic tint won&apos;t interfere with any of your
              vehicle&apos;s safety technology.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="black">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQ items={faqItems} />
      </Section>

      {/* Reviews */}
      <Section bg="dark" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* CTA */}
      <Section bg="black" wide id="contact">
        <SectionHeading>
          Get a Custom Porsche Paint Protection Quote
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed">
              Whether you drive a 911, Cayenne, Macan, Taycan, or any other
              Porsche model, we&apos;ll create a custom protection package
              tailored to your vehicle. Contact us today for a free,
              no-obligation quote.
            </p>
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
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
