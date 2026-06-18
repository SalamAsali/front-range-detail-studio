import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Boat Ceramic Coating & PPF",
  description:
    "System X Marine ceramic coating and SunTek PPF for boats in Denver, CO. 5-year warranty on new boats. Hull, deck, and interior protection. Front Range Detail Studio.",
};

const whyChoose = [
  {
    title: "Certified System X & SunTek Installers",
    description:
      "Our team is factory-trained to apply System X Marine Ceramic Coatings and SunTek Reaction PPF for unmatched results.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From buffing and annual waxing to interior detailing and clear film installation, we deliver total care for your boat.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We customize every package to your vessel and boating lifestyle, ensuring the best protection and gloss.",
  },
];

const ceramicPackages = [
  {
    title: "Hull-Only Coating",
    description:
      "Defends against oxidation, algae stains, and waterline buildup.",
  },
  {
    title: "Full Exterior Coating",
    description:
      "Maximum hydrophobic protection for hull, deck, topside, and stainless steel.",
  },
  {
    title: "Ultimate Marine Protection Package",
    description:
      "Add interior surface coating for vinyl, plastic, and more. Complete coverage inside and out.",
  },
];

const ppfAreas = [
  "Hull leading edges (defend against trailer & dock rash)",
  "High-wear swim platforms",
  "Boarding steps and grab rails",
  "Painted or gelcoat areas prone to abrasion",
  "Stainless and aluminum surfaces (optional)",
];

const processSteps = [
  {
    step: "01",
    title: "Thorough Hand Wash & Decontamination",
    description:
      "Complete cleaning of all surfaces to remove salt, grime, and contaminants.",
  },
  {
    step: "02",
    title: "Oxidation Removal & Gelcoat Correction",
    description:
      "Multi-stage machine polishing restores depth and clarity to weathered surfaces.",
  },
  {
    step: "03",
    title: "Ceramic Coating Application",
    description:
      "System X Marine coating is applied by hand to every surface for even, durable protection.",
  },
  {
    step: "04",
    title: "Curing & Inspection",
    description:
      "The coating cures in a controlled environment, then we inspect every inch before delivery.",
  },
];

const whyChooseExtended = [
  {
    title: "Marine Detailing Specialists",
    description:
      "Our experienced team understands the unique challenges boats face and uses only marine-grade products for superior protection.",
  },
  {
    title: "Certified System X Installers",
    description:
      "We are certified applicators of System X Marine Ceramic Coating, ensuring professional-grade results.",
  },
  {
    title: "Attention to Detail",
    description:
      "From hull to topside, we meticulously coat every surface for comprehensive protection.",
  },
  {
    title: "Seasonal, Appointment-Only Service",
    description:
      "We offer boat ceramic coating services by appointment during the boating season to ensure the highest quality care.",
  },
];

export default function BoatCeramicCoatingPage() {
  return (
    <>
      <Hero
        image="/images/services/boat-detailing.jpg"
        imageAlt="Boat ceramic coating and PPF in Denver Colorado"
        title="Boat Ceramic Coating & PPF in Denver, CO &mdash; Ultimate Marine Protection"
        subtitle="Shield your boat from Colorado's harsh elements with professional ceramic coating and paint protection film (PPF) services"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Introduction */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          At Front Range Detail Studio, we specialize in applying System X Marine
          Ceramic Coatings and SunTek Reaction PPF&mdash;offering unparalleled
          defense against UV rays, oxidation, scratches, and water damage.
        </p>
      </Section>

      {/* Why Choose Us */}
      <Section bg="black">
        <SectionHeading>Why Choose Front Range Detail Studio?</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChoose.map((item) => (
            <div
              key={item.title}
              className="bg-dark-elevated rounded p-6 border-t-2 border-primary"
            >
              <h3 className="text-base mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ceramic Coating Packages */}
      <Section bg="dark">
        <SectionHeading>System X Marine Ceramic Coating</SectionHeading>
        <div className="space-y-4 mb-6">
          {ceramicPackages.map((pkg) => (
            <div key={pkg.title} className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0 rounded" />
              <div>
                <h3 className="text-base mb-1">{pkg.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-dark-elevated border border-primary/30 rounded p-5">
          <p className="text-sm text-white/80">
            <span className="text-primary font-semibold">Warranty:</span>{" "}
            5-year manufacturer warranty on new boats (annual top coat required
            for warranty). 3-year warranty available for used boats in good
            condition.
          </p>
        </div>
      </Section>

      {/* PPF for Boats */}
      <Section bg="black">
        <SectionHeading>
          SunTek Reaction Paint Protection Film (PPF) for Boats
        </SectionHeading>
        <div className="bg-dark-elevated rounded-lg p-6 mb-6">
          <ul className="space-y-3">
            {ppfAreas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span className="text-primary mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white/60 text-sm">
          SunTek Reaction PPF offers a 12-year warranty against yellowing,
          cracking, and peeling&mdash;even in harsh marine environments.
        </p>
      </Section>

      {/* Process */}
      <Section bg="dark">
        <SectionHeading>The Boat Ceramic Coating Process</SectionHeading>
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

      {/* Why Choose Extended */}
      <Section bg="black">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyChooseExtended.map((item) => (
            <div
              key={item.title}
              className="bg-dark-elevated rounded p-5 border-l-2 border-primary"
            >
              <h3 className="text-base mb-1">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Link to Boat Detailing */}
      <Section bg="dark">
        <p className="text-white/70 leading-relaxed mb-6">
          Need full boat detailing services including buffing, interior cleaning,
          and annual waxing?
        </p>
        <Link
          href="/boat-detailing"
          className="inline-block px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
        >
          View Boat Detailing Services
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
