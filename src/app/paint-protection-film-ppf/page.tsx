import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) & Clear Bra",
  description:
    "SunTek Reaction PPF with 12-year warranty in Denver & Centennial, CO. Self-healing clear bra installed in our climate-controlled studio. Front Range Detail Studio.",
};

const whyChooseUs = [
  {
    title: "SunTek Reaction PPF",
    description:
      "Industry-leading protection with a 12-year warranty and advanced self-healing technology.",
  },
  {
    title: "Climate-Controlled Centennial Studio",
    description:
      "No dust, no mess, no mobile installs. Just flawless, professional results every time.",
  },
  {
    title: "Trusted by Drivers Across Denver",
    description:
      "Check out our 5-star reviews from local clients who value quality, honesty, and results.",
  },
];

const whatsIncluded = [
  "Premium SunTek Reaction Paint Protection Film",
  "12-Year Manufacturer Warranty",
  "Professional Installation in a Climate-Controlled Studio",
  "Complimentary Ceramic Boost Top Coat",
  "Wrapped Panel Edges Where Possible",
  "Personalized Aftercare Instructions",
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We evaluate your vehicle, discuss coverage options, and recommend the best protection for your driving needs.",
  },
  {
    step: "02",
    title: "Careful Preparation",
    description:
      "Every surface is thoroughly cleaned and decontaminated for a flawless bond.",
  },
  {
    step: "03",
    title: "Precision Installation",
    description:
      "Our certified technicians apply SunTek Reaction film with meticulous attention to every edge and contour.",
  },
  {
    step: "04",
    title: "Final Check & Delivery",
    description:
      "We perform a detailed inspection and walk you through aftercare instructions before handing over the keys.",
  },
];

const faqItems = [
  {
    question: "How does SunTek Reaction PPF 'self-heal'?",
    answer:
      "The film\u2019s top layer uses advanced polymers that cause light scratches and swirl marks to disappear with heat\u2014either from the sun or warm water.",
  },
  {
    question: "How long does the film last?",
    answer:
      "SunTek Reaction PPF is backed by a 12-year warranty, but many owners see effective protection for even longer with proper care.",
  },
  {
    question: "Can I wash my car as usual?",
    answer:
      "Hand washing or touchless washes are best. Avoid automatic washes with brushes, and wait 7 days after installation before your first wash.",
  },
  {
    question: "Does PPF prevent rock chips?",
    answer:
      "Absolutely. PPF is specifically engineered to absorb and disperse impacts from rocks, gravel, and road debris, dramatically reducing chips and scratches.",
  },
  {
    question: "Will it turn yellow or peel over time?",
    answer:
      "No\u2014SunTek Reaction is warrantied for 12 years against yellowing, cracking, or peeling. Our climate-controlled installation and ceramic boost top coat help it look better, longer.",
  },
  {
    question: "Can I combine PPF with ceramic coating?",
    answer:
      "Yes! In fact, we recommend layering ceramic coating over PPF for ultimate protection, gloss, and ease of maintenance.",
  },
  {
    question: "Is the film removable?",
    answer:
      "Yes. PPF can be professionally removed without damaging the underlying paint, making it a great option for leased vehicles or future resale.",
  },
];

export default function PPFPage() {
  return (
    <>
      <Hero
        image="/images/services/clear-bra-vertical.webp"
        imageAlt="Paint protection film PPF clear bra installation in Denver"
        title="Paint Protection Film (PPF) & Clear Bra in Denver"
        subtitle="Keep Your Car Looking New\u2014No Matter What Colorado Throws At It"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Introduction */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed">
          Living and driving in the Denver metro area means your vehicle faces
          some of the harshest conditions in the country: snow, ice, and road salt
          in winter; loose gravel, construction debris, and unpredictable weather
          year-round; harsh sun and sudden hail every summer. It&apos;s a smarter
          investment&mdash;because prevention always costs less than fixing paint
          later.
        </p>
      </Section>

      {/* Why Choose Us */}
      <Section bg="black">
        <SectionHeading>Why Choose Us?</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="bg-dark-elevated rounded p-6 border-t-2 border-primary"
            >
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="dark">
        <SectionHeading>
          What&apos;s Included With Every PPF Install
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whatsIncluded.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
              <p className="text-white/70 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section bg="black">
        <SectionHeading>
          Our Proven Process: From Consultation to Delivery
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
