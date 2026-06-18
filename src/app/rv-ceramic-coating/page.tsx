import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "RV Ceramic Coating",
  description:
    "Professional RV ceramic coating in Denver, CO. System X MAX G Plus with up to 3-year warranty. Protect your motorhome from UV, oxidation, and road salt. Front Range Detail Studio.",
};

const processSteps = [
  {
    step: "01",
    title: "Comprehensive Inspection",
    description:
      "We evaluate your RV\u2019s condition, note existing damage, and plan the best approach for your unit.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description:
      "Full hand wash, decontamination, and removal of surface contaminants to create a clean bonding surface.",
  },
  {
    step: "03",
    title: "Paint Correction",
    description:
      "Multi-stage machine polishing to remove swirls, oxidation, and imperfections from the fiberglass or gelcoat.",
  },
  {
    step: "04",
    title: "Ceramic Coating Application",
    description:
      "System X MAX G Plus is applied by hand across all exterior surfaces, building durable protection layer by layer.",
  },
  {
    step: "05",
    title: "Curing",
    description:
      "The coating cures in our controlled environment for maximum hardness and longevity.",
  },
];

const keyBenefits = [
  "Warranty Protection",
  "Prevents Oxidation & Fading",
  "Hydrophobic Properties",
  "UV & Environmental Defense",
  "Easier Cleaning & Maintenance",
];

const maxGPackage = [
  "Max G+ over all paintwork",
  "Max G+ on badges, emblems, trim",
  "Max G+ on wheels",
  "Glass on the windshield/windscreen",
  "Interior protection of leather, vinyl, fabric, carpet",
];

const pricingTiers = [
  {
    title: "Exterior Wash & Wax",
    price: "Starting at $10/foot",
  },
  {
    title: "Oxidation Removal & Paint Correction",
    price: "$20\u2013$35/foot",
  },
  {
    title: "System X Ceramic Coating Application",
    price: "Starting at $100/foot",
  },
];

const faqItems = [
  {
    question: "Do you detail all types of RVs and motorhomes?",
    answer:
      "Yes, from Sprinter vans and pop-ups to large Class A diesel pushers\u2014no rig is too big or too small!",
  },
  {
    question:
      "What\u2019s the difference between wax and ceramic coating?",
    answer:
      "Wax offers a few months of shine and protection. Our System X ceramic coating provides up to 3 years of real-world defense against UV, oxidation, and environmental contaminants.",
  },
  {
    question: "Can you remove heavy oxidation and faded gelcoat?",
    answer:
      "Absolutely. Our multi-stage machine compounding and polishing process restores faded fiberglass and gelcoat to a deep, glossy finish before coating.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most RV ceramic coating projects take 3\u20135 days depending on the size and condition of your unit.",
  },
  {
    question: "Do you offer mobile or on-site service?",
    answer:
      "All ceramic coating work is performed at our climate-controlled Centennial studio for the best possible results.",
  },
];

export default function RVCeramicCoatingPage() {
  return (
    <>
      <Hero
        image="/images/services/RV-ceramic-coating.jpeg"
        imageAlt="RV ceramic coating application in Denver Colorado"
        title="RV Ceramic Coating in Denver, CO &mdash; Protect Your Home on Wheels"
        subtitle="Premium RV Ceramic Coating for Lasting Protection"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Introduction */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed mb-4">
          Your RV is more than just a vehicle&mdash;it&apos;s your home on the road.
          Protect it from the elements and keep it looking new with our
          professional System X Ceramic Coating services.
        </p>
        <p className="text-white/70 leading-relaxed">
          Your RV faces constant exposure to harsh environments&mdash;from the
          sun&apos;s intense UV rays to road salt, dirt, and grime. System X
          Ceramic Coating creates a durable, hydrophobic barrier that protects
          your RV&apos;s exterior and makes maintenance easier than ever.
        </p>
      </Section>

      {/* Why Choose System X */}
      <Section bg="black">
        <SectionHeading>
          Why Choose System X Ceramic Coating for Your RV?
        </SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {keyBenefits.map((benefit) => (
            <div
              key={benefit}
              className="bg-dark-elevated rounded px-4 py-4 text-center"
            >
              <p className="text-sm text-white/80">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section bg="dark">
        <SectionHeading>Our Ceramic Coating Process</SectionHeading>
        <div className="space-y-6">
          {processSteps.map((step) => (
            <div key={step.step} className="flex gap-5">
              <div className="text-primary text-2xl font-bold flex-shrink-0 w-10">
                {step.step}
              </div>
              <div>
                <h3 className="text-base mb-1">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ultimate Protection Package */}
      <Section bg="black">
        <SectionHeading>
          Ultimate Protection Max G+ Package
        </SectionHeading>
        <p className="text-white/70 leading-relaxed mb-6">
          The Max G+ package is our strongest and most durable protection
          package. Max G+ features a stronger, tougher shell up to four times
          thicker, 2x stronger, and 2x more durable than previous System X
          coatings.
        </p>
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

      {/* Pricing */}
      <Section bg="dark">
        <SectionHeading>Service Packages &amp; Pricing</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className="bg-dark-surface rounded-lg p-6 text-center border border-primary/20"
            >
              <h3 className="text-base mb-3">{tier.title}</h3>
              <p className="text-primary text-lg font-semibold">{tier.price}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Link to full RV Detailing */}
      <Section bg="black">
        <p className="text-white/70 leading-relaxed mb-6">
          Looking for a full range of RV detailing services including exterior
          wash, oxidation removal, PPF, and specialty services?
        </p>
        <Link
          href="/rv-detailing"
          className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
        >
          View All RV Services
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
