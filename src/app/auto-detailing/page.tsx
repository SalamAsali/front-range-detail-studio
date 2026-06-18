import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Auto Detailing & Paint Correction",
  description:
    "Professional auto detailing and paint correction in Denver & Centennial, CO. Maintenance washes, interior/exterior detailing, swirl removal. Front Range Detail Studio.",
};

const packages = [
  {
    title: "Maintenance Wash & Wax",
    duration: "~2 hours",
    frequency: "Every 1\u20132 months",
    items: [
      "Hand wash with pH-balanced soap",
      "Bug and tar removal",
      "Clay bar treatment to remove surface contaminants",
      "Application of premium wax for added gloss and protection",
      "Tire cleaning and dressing",
      "Windows cleaned inside and out",
    ],
  },
  {
    title: "Full Exterior Detailing",
    duration: "~4\u20135 hours",
    frequency: "Every 3\u20136 months",
    items: [
      "Hand wash and decontamination (clay bar treatment)",
      "Paint correction (light swirl mark and scratch removal)",
      "High-quality polish to restore shine",
      "Application of sealant or ceramic spray for protection",
      "Wheel and tire detailing (including brake dust removal)",
      "Glass cleaning and water repellent application",
    ],
  },
  {
    title: "Full Interior Detailing",
    duration: "~3\u20134 hours",
    frequency: "Every 4\u20136 months",
    items: [
      "Vacuum of seats, carpets, and trunk",
      "Steam cleaning and shampooing of carpets and upholstery",
      "Leather cleaning and conditioning (if applicable)",
      "Deep cleaning of dashboards, vents, and cupholders",
      "Streak-free window cleaning",
      "Odor elimination and air purification",
    ],
  },
  {
    title: "Complete Interior & Exterior",
    duration: "~6\u20138 hours",
    frequency: "Twice a year",
    items: [
      "All services from Full Exterior and Full Interior Detailing",
      "Clay bar treatment and paint correction",
      "Interior steam cleaning and odor elimination",
      "Engine bay cleaning and dressing",
      "Glass water repellent application",
    ],
  },
];

const specializedServices = [
  {
    title: "Paint Correction",
    description:
      "Remove swirl marks, light scratches, and oxidation to restore a flawless finish.",
  },
  {
    title: "Engine Bay Cleaning",
    description:
      "Degrease and detail your engine bay for a clean, showroom look.",
  },
  {
    title: "Headlight Restoration",
    description:
      "Clear cloudy or yellowed headlights for improved visibility and aesthetics.",
  },
  {
    title: "Odor Removal",
    description:
      "Eliminate smoke, pet, or mildew odors using professional-grade ozone treatments.",
  },
];

const whyChoose = [
  {
    title: "Experienced Technicians",
    description:
      "Our team uses only the best tools, products, and techniques to deliver top-quality results.",
  },
  {
    title: "High-Quality Products",
    description:
      "We use premium detailing products that are safe for your car and environmentally friendly.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every crevice, crack, and panel is meticulously cleaned and protected.",
  },
  {
    title: "Appointment-Only Service",
    description:
      "We focus on one vehicle at a time, ensuring every car receives the care it deserves.",
  },
];

export default function AutoDetailingPage() {
  return (
    <>
      <Hero
        image="/images/services/IMG_2236-ceramic.jpg"
        imageAlt="Auto detailing and paint correction in Denver Colorado"
        title="Auto Detailing and Paint Correction"
        subtitle="Colorado's Vehicle Paint Correction and Detailing Experts"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Intro */}
      <Section bg="dark">
        <SectionHeading>From basic maintenance to deep restoration</SectionHeading>
        <p className="text-white/70 leading-relaxed">
          Comprehensive detailing packages to fit every need. Whether your vehicle
          needs a quick maintenance wash or a full interior-and-exterior
          restoration, our team has the expertise and products to make it look
          showroom-new.
        </p>
      </Section>

      {/* 4 Package Cards */}
      <Section bg="black" wide>
        <SectionHeading>Detailing Packages</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
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
      </Section>

      {/* Specialized Services */}
      <Section bg="dark">
        <SectionHeading>Specialized Auto Detailing Services</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {specializedServices.map((service) => (
            <div key={service.title} className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0 rounded" />
              <div>
                <h3 className="text-base mb-1">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose */}
      <Section bg="black">
        <SectionHeading>Why Choose Front Range Detail Studio?</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyChoose.map((reason) => (
            <div
              key={reason.title}
              className="bg-dark-elevated rounded p-5 border-l-2 border-primary"
            >
              <h3 className="text-base mb-1">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
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
