import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "System X Automotive Ceramic Coatings",
  description:
    "Certified System X ceramic coating installer in Denver, CO. Max G+ lifetime coating, Glass, Renew, Revive, and Interior products. Front Range Detail Studio.",
};

const maxGPackage = [
  "Max G+ over all paintwork",
  "Max G+ on badges, emblems, trim",
  "Max G+ on wheels",
  "Glass on the windshield/windscreen",
  "Interior protection of leather, vinyl, fabric, and carpet",
];

const whyInstall = [
  {
    title: "Guaranteed",
    description:
      "Supported by our unbeatable industry guarantee, the System X paint protection program, expertly installed, ensures that your vehicle will maintain its flawless appearance for as long as you possess it.",
  },
  {
    title: "Made in The USA",
    description:
      "With great pride, our products are meticulously crafted in Thomaston, CT USA. They embody a commitment to excellence and trustworthiness.",
  },
  {
    title: "Top Tier Performance",
    description:
      "System X Max & Diamond are the slickest coatings on the market. Its unique chemistry provides an unparalleled bond for the best long term protection. Super slick properties help contaminants slide right off.",
  },
];

const productLine = [
  {
    title: "System X Glass",
    subtitle: "Clarity and Protection",
    description:
      "Dramatically increases visibility in the rain and makes de-icing in the winter and cleaning summer insect matter a breeze.",
    image: "/images/gallery/System-X-Glass-product-819x1024.webp",
  },
  {
    title: "System X Renew",
    subtitle: "Clarity and Protection",
    description:
      "Can be used as a standalone HYPER gloss coat or as a topper for your professional ceramic coating. Ideal as a stand-alone or a renewal to your existing coating.",
    image: "/images/gallery/System-X-Renew-product-819x1024.webp",
  },
  {
    title: "System X Revive",
    subtitle: "Plastic and Trim",
    description:
      "Protects from future micro-scratches and UV fading while multiplying the surface\u2019s hydrophobic properties.",
    image: "/images/gallery/System-X-Revive-product-819x1024.webp",
  },
  {
    title: "System X Interior",
    subtitle: "Leather, Vinyl, and Fabric",
    description:
      "Protects all your interior surfaces; such as fabric seats, carpet, leather, and vinyl with a single professional coating. Spills and stains clean up easily and quickly.",
    image: "/images/gallery/System-X-Interior-product-819x1024.webp",
  },
];

export default function SystemXPage() {
  return (
    <>
      <Hero
        image="/images/gallery/SystemX-car.png"
        imageAlt="System X Automotive Ceramic Coatings authorized dealer"
        title="System X Automotive Ceramic Coatings"
        subtitle="Owners and collectors of the finest vintage and exotic automobiles worldwide trust System X to consistently provide unmatched slickness, protection, hardness, and brilliance."
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Max G+ Package */}
      <Section bg="dark">
        <SectionHeading>Hyper Gloss 9H Lifetime Coating</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          The Max G+ package is our strongest and most durable protection
          package. Max G+ features a stronger, tougher shell up to four times
          thicker, 2x stronger, and 2x more durable than previous System X
          coatings.
        </p>
        <h3 className="text-lg mb-4">Ultimate Protection Max G+ Package</h3>
        <div className="bg-dark-elevated rounded-lg p-6">
          <ul className="space-y-3">
            {maxGPackage.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span className="text-primary mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why Install System X */}
      <Section bg="black">
        <SectionHeading>
          Why Have Us Install System X On Your Vehicle?
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyInstall.map((item) => (
            <div
              key={item.title}
              className="bg-dark-elevated rounded p-6 border-t-2 border-primary"
            >
              <h3 className="text-lg mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Line */}
      <Section bg="dark" wide>
        <SectionHeading>System X Product Line</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productLine.map((product) => (
            <div
              key={product.title}
              className="bg-dark-elevated rounded-lg overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                <Image
                  src={product.image}
                  alt={`${product.title} product`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="p-5 flex-1">
                <p className="text-xs text-primary uppercase tracking-wide mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-base mb-2">{product.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Product Images */}
      <Section bg="black" wide>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative aspect-square rounded overflow-hidden">
            <Image
              src="/images/gallery/System-X-Max-G-819x1024.png"
              alt="System X MAX G+ product"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-square rounded overflow-hidden">
            <Image
              src="/images/gallery/System-X-Top-Coat-vertical-pic-819x1024.webp"
              alt="System X Top Coat product"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-square rounded overflow-hidden">
            <Image
              src="/images/gallery/SystemX-car.png"
              alt="System X authorized dealer vehicle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <div className="text-center">
          <h2 className="mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-white/70 leading-relaxed mb-6 max-w-xl mx-auto">
            As certified System X installers, we&apos;ll help you choose the right
            coating package for your vehicle and driving conditions.
          </p>
          <Link
            href="/ceramic-coating"
            className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
          >
            View Ceramic Coating Packages
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
