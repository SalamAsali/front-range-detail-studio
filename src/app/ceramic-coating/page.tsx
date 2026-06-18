import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { videos } from "@/data/videos";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Ceramic Coating",
  description:
    "System X MAX G Plus ceramic coating in Denver & Centennial, CO. Lifetime warranty, professional studio-only application, hydrophobic protection. Front Range Detail Studio.",
};

const keyFeatures = [
  {
    title: "System X MAX G Plus",
    description:
      "Industry-leading ceramic technology for the deepest gloss, extreme hydrophobicity, and maximum chemical resistance.",
  },
  {
    title: "Lifetime Warranty for Cars",
    description:
      "Registered on your CarFax and fully transferable, with annual maintenance and top coat reapplication required to keep the warranty valid.",
  },
  {
    title: "Professional, Studio-Only Application",
    description:
      "All coating is performed in our climate-controlled Centennial facility for flawless, dust-free results\u2014never mobile.",
  },
  {
    title: "Custom Packages for Boats & RVs",
    description:
      "Get up to 5 years of warranty on brand new boats and 3 years on new RVs and motorhomes.",
  },
  {
    title: "Honest, Local Experts",
    description:
      "No hype, no hard sell\u2014just honest advice, clear communication, and the best products for Colorado conditions.",
  },
];

const whatsIncluded = [
  {
    title: "System X MAX G Plus Professional Coating",
    description:
      "The most advanced, high-solids ceramic coating for lasting shine and protection.",
  },
  {
    title: "Lifetime Warranty on Cars",
    description:
      "Registered to your VIN and CarFax, fully transferable, with annual maintenance and top coat reapplication required for warranty coverage.",
  },
  {
    title: "Meticulous Paint Preparation",
    description:
      "Full decontamination, multi-stage machine polishing, and defect removal to create a flawless surface before coating.",
  },
  {
    title: "Optional Add-Ons",
    description:
      "Wheels, Trim, and Glass Coating; Interior Ceramic Coating (leather, fabric, vinyl, plastics).",
  },
  {
    title: "Personalized Aftercare Guide",
    description:
      "Detailed instructions for maintaining your coating\u2019s performance and appearance.",
  },
  {
    title: "Annual Maintenance Program",
    description:
      "Return once a year for a professional inspection, maintenance wash, and fresh application of a ceramic top coat.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We assess your vehicle\u2019s condition, discuss your expectations, and recommend the right package for your needs.",
  },
  {
    step: "02",
    title: "Paint Correction & Prep",
    description:
      "Every ceramic job starts with a full wash, clay bar, and machine polish to remove swirls and bring out maximum gloss.",
  },
  {
    step: "03",
    title: "Expert Coating Application",
    description:
      "We apply multiple layers of System X MAX G Plus by hand, ensuring even, durable coverage over all painted surfaces.",
  },
  {
    step: "04",
    title: "Curing & Final Inspection",
    description:
      "After curing, we inspect every inch of your car and walk you through the results and care instructions.",
  },
];

const ceramicBenefits = [
  { title: "Ease of Cleaning", icon: "\u2728" },
  { title: "Hydrophobic Properties", icon: "\uD83D\uDCA7" },
  { title: "UV Protection", icon: "\u2600\uFE0F" },
  { title: "Enhanced Gloss & Depth", icon: "\uD83D\uDD25" },
  { title: "Chemical Resistance", icon: "\uD83D\uDEE1\uFE0F" },
];

const systemXBenefits = [
  {
    title: "Long-Lasting Protection",
    description:
      "Our System X coatings are designed to last up to 9 years, depending on the package selected.",
  },
  {
    title: "Unmatched Hydrophobic Effect",
    description:
      "Watch water bead and roll off your paint, reducing water spots and dirt buildup.",
  },
  {
    title: "UV & Oxidation Resistance",
    description:
      "Protects your car\u2019s paint from sun damage, oxidation, and fading.",
  },
  {
    title: "Scratch & Chemical Resistance",
    description:
      "The hardened ceramic layer adds protection against micro-scratches and environmental contaminants.",
  },
  {
    title: "Warranty-Backed",
    description:
      "All of our System X coatings come with manufacturer-backed warranties for peace of mind.",
  },
];

const whyChoose = [
  "Certified System X Installers",
  "Experienced Technicians",
  "High-Quality Products",
  "Warranty-Backed Coatings",
  "Appointment-Only Studio",
];

const faqItems = [
  {
    question:
      "What makes System X MAX G Plus different from wax or sealant?",
    answer:
      "System X MAX G Plus creates a permanent, glass-like layer that\u2019s far more durable than wax or traditional sealants. It protects against UV, chemicals, road salts, and environmental fallout\u2014delivering a deeper shine and easier maintenance.",
  },
  {
    question:
      "Is the lifetime warranty real? What are the requirements?",
    answer:
      "Yes! Your ceramic coating is registered on CarFax and with System X. To maintain your lifetime warranty, you must return annually for a maintenance wash and a fresh ceramic top coat application, performed by us. This keeps your protection at peak performance and your warranty active.",
  },
  {
    question: "Will ceramic coating prevent scratches or rock chips?",
    answer:
      "Ceramic coating is extremely scratch-resistant, but it won\u2019t stop rock chips like PPF. For complete protection, many customers combine both.",
  },
  {
    question: "Can I coat over PPF?",
    answer:
      "Absolutely! In fact, we recommend it\u2014ceramic coating on top of PPF makes your protected car even easier to clean and enhances the gloss.",
  },
  {
    question:
      "Can I ceramic coat every surface on my vehicle\u2014including the interior?",
    answer:
      "Yes! We offer professional ceramic coatings for virtually every part of your vehicle. This includes wheels, brake calipers, plastic trim, glass, and all interior surfaces (leather, fabric, vinyl, and plastics). Ceramic coating your interior helps repel stains, makes cleaning easier, and protects against UV fading.",
  },
  {
    question: "Can you ceramic coat matte paint or satin finishes?",
    answer:
      "Definitely. We use a dedicated matte/satin ceramic coating that preserves the non-glossy look of matte finishes while offering the same high level of protection and the same warranty. Matte vehicles, wraps, and PPF benefit just as much from ceramic protection\u2014without changing the appearance.",
  },
  {
    question: "How do I maintain my ceramic coating?",
    answer:
      "Hand wash or use a touchless wash only. Avoid harsh chemicals. We\u2019ll give you a personalized care guide at delivery and invite you to join our annual maintenance program.",
  },
  {
    question: "Do you offer ceramic coating for boats and RVs?",
    answer:
      "Yes! We offer System X MAX G Plus with a 5-year warranty for new boats and a 3-year warranty for new RVs and motorhomes.",
  },
];

export default function CeramicCoatingPage() {
  return (
    <>
      <Hero
        image="/images/vehicles/Corvette-2.webp"
        imageAlt="Ceramic coating application on Corvette at Front Range Detail Studio"
        videoSrc={videos.services.ceramic}
        title="Ceramic Coating in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines"
        subtitle="Ultimate Protection and Lasting Gloss for Colorado Drivers"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Main Value Proposition */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          Owning a vehicle in the Denver metro area means dealing with harsh sun,
          heavy snow, mag-chloride, road salt, and unpredictable weather&mdash;all
          of which can quickly dull and damage your paint. System X MAX G Plus
          ceramic coating from Front Range Detail Studio is the best way to keep
          your car looking new, reduce maintenance, and protect your investment
          with confidence.
        </p>
      </Section>

      {/* 5 Key Features */}
      <Section bg="black">
        <SectionHeading>Industry-leading ceramic technology</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-elevated rounded p-6 border-l-2 border-primary"
            >
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="dark">
        <SectionHeading>
          What&apos;s Included With Every Ceramic Coating Install
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whatsIncluded.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0 rounded" />
              <div>
                <h3 className="text-base mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4-Step Process */}
      <Section bg="black">
        <SectionHeading>
          Our Proven Process: From Consultation to Perfection
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="text-primary text-3xl font-bold mb-3">
                {step.step}
              </div>
              <h3 className="text-base mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What is Ceramic Coating + Benefits Grid */}
      <Section bg="dark">
        <SectionHeading>What is Ceramic Coating?</SectionHeading>
        <p className="text-white/70 leading-relaxed mb-8">
          Ceramic coating is a liquid polymer applied to the exterior surfaces of
          your vehicle. Once cured, it forms a durable, hydrophobic layer that
          bonds to the paint, offering long-term protection and making maintenance
          a breeze.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {ceramicBenefits.map((b) => (
            <div
              key={b.title}
              className="bg-dark-surface rounded p-4 text-center"
            >
              <div className="text-2xl mb-2">{b.icon}</div>
              <p className="text-sm text-white/80">{b.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* System X Benefits */}
      <Section bg="black">
        <SectionHeading>System X Ceramic Coating Benefits</SectionHeading>
        <div className="space-y-4">
          {systemXBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-dark-elevated rounded p-5 flex gap-4 items-start"
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-base mb-1">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="dark">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQ items={faqItems} />
      </Section>

      {/* Why Choose */}
      <Section bg="black">
        <SectionHeading>Why Choose Front Range Detail Studio?</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {whyChoose.map((reason) => (
            <div
              key={reason}
              className="bg-dark-elevated rounded p-5 text-center"
            >
              <p className="text-sm font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cross-sell PPF */}
      <Section bg="dark">
        <SectionHeading>
          Denver&apos;s 1st Choice in Paint Protection Film and Clear Bra
        </SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          Preserve the pristine condition of your vehicle with our high-quality
          Paint Protection Film, or Clear Bra. Our warranty backed PPF acts as an
          invisible shield, guarding your car&apos;s paint against scratches, stone
          chips, and road debris. With self-healing technology and a ceramic
          coating layer applied over the film, our PPF service is the clear choice
          to protect your investment in South Denver, Colorado.
        </p>
        <Link
          href="/paint-protection-film-ppf"
          className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
        >
          Explore PPF Services
        </Link>
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
