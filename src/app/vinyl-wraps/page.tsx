import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Vinyl Wraps",
  description:
    "Custom vinyl wraps in Denver & Centennial, CO. Full color change, partial wraps, commercial fleet wraps, accent details. 200+ colors. Front Range Detail Studio.",
};

const keyBenefits = [
  {
    title: "Quick Turnaround",
    description: "Most full wraps are completed in 3\u20135 days.",
  },
  {
    title: "Full Customization",
    description:
      "Choose from a wide range of colors, textures, and finishes.",
  },
  {
    title: "Non-Permanent",
    description: "Easily removable without damaging paint.",
  },
  {
    title: "Paint Protection",
    description:
      "Acts as a barrier against minor scratches, sun damage, and road debris.",
  },
  {
    title: "Cost-Effective Alternative to Paint",
    description:
      "Get a completely new look without the cost and commitment of a full paint job.",
  },
];

const serviceOptions = [
  {
    title: "Full Vehicle Color Change",
    description:
      "Matte, gloss, satin, metallic, or chrome finishes. Over 200+ color options to completely transform your ride.",
  },
  {
    title: "Partial Wraps & Graphics",
    description:
      "Racing stripes, hood/roof/trunk wraps, and custom graphics for a unique look without wrapping the entire vehicle.",
  },
  {
    title: "Commercial & Fleet Wraps",
    description:
      "Professional branding and advertising wraps for company vehicles and fleets. Turn your vehicles into mobile billboards.",
  },
  {
    title: "Accent Wraps & Details",
    description:
      "Subtle accent treatments\u2014mirror caps, spoilers, trim pieces, and other details to add contrast and personality.",
  },
];

export default function VinylWrapsPage() {
  return (
    <>
      <Hero
        image="/images/services/vinylwraps-1920w.webp"
        imageAlt="Custom vinyl wrap application in Denver Colorado"
        title="Denver Metro Premier Choice in Vinyl Wraps Application"
        subtitle="Transform Your Ride with Custom Vinyl Wraps"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Main Value Proposition */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          Looking to give your car a fresh new look? Whether you&apos;re after a
          full color change, custom graphics, or subtle accents, our premium vinyl
          wrap services provide the ultimate makeover&mdash;without the cost of a
          new paint job.
        </p>
      </Section>

      {/* Key Benefits */}
      <Section bg="black">
        <SectionHeading>Why Choose Vinyl Wraps?</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {keyBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-dark-elevated rounded p-5 border-t-2 border-primary"
            >
              <h3 className="text-base mb-2">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Options */}
      <Section bg="dark">
        <SectionHeading>Vinyl Wrap Options</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceOptions.map((option) => (
            <div key={option.title} className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0 rounded" />
              <div>
                <h3 className="text-base mb-2">{option.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
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
