import { videos } from "@/data/videos";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Ceramic Window Tint",
  description:
    "Professional ceramic window tinting in Denver & Centennial, CO. Blocks 99% UV and up to 94% infrared heat. Colorado-legal tint. Front Range Detail Studio.",
};

const whatsIncluded = [
  "Premium ceramic window film",
  "99% UV ray rejection",
  "Up to 94% infrared heat rejection",
  "Professional installation in a climate-controlled studio",
  "Colorado-legal tint options (27% VLT minimum compliance)",
  "Personalized aftercare instructions",
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We discuss your goals\u2014heat rejection, privacy, aesthetics\u2014and explain Colorado tint laws to help you choose the right shade.",
  },
  {
    step: "02",
    title: "Careful Preparation",
    description:
      "All glass surfaces are meticulously cleaned and prepped to ensure a flawless, bubble-free application.",
  },
  {
    step: "03",
    title: "Expert Installation",
    description:
      "Our certified technicians precision-cut and apply the film in our dust-free studio for seamless results.",
  },
  {
    step: "04",
    title: "Final Inspection & Aftercare",
    description:
      "We inspect every window, verify clarity and adhesion, and walk you through care instructions.",
  },
];

const faqItems = [
  {
    question: "Can you make my windows darker than the legal limit?",
    answer:
      "Colorado law requires most vehicle windows to allow at least 27% visible light through (27% VLT). We always ensure your tint meets legal requirements while maximizing heat rejection and UV protection. Medical exemptions may allow darker tint with proper documentation.",
  },
  {
    question: "What\u2019s special about ceramic window film?",
    answer:
      "Ceramic tint blocks 99% of UV rays and up to 94% of infrared heat, keeping your car dramatically cooler without making it too dark. Unlike dyed or metallic films, ceramic won\u2019t fade, bubble, or interfere with electronics.",
  },
  {
    question: "Can you tint my windshield or sunroof?",
    answer:
      "Yes! We offer windshield tint strips and full sunroof tinting. Windshield tint is available in lighter shades to meet Colorado regulations while still providing heat and UV protection.",
  },
  {
    question: "Do you offer windshield protection film?",
    answer:
      "Yes. In addition to tint, we offer clear windshield protection film that helps guard against rock chips and cracks\u2014an ideal companion to window tinting for full glass protection.",
  },
];

export default function WindowTintPage() {
  return (
    <>
      <Hero
        image="/images/services/window-tint-vertical.webp"
        imageAlt="Ceramic window tint installation in Denver Colorado"
        videoSrc={videos.services.tint}
        title="Ceramic Window Tint in Denver, Centennial, Lone Tree, Castle Rock, Englewood, Greenwood Village & Castle Pines"
        subtitle="Unmatched heat rejection, UV protection, and style"
        cta={{ label: "Get A Free Quote", href: "/free-quote" }}
        ctaSecondary={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Main Messaging */}
      <Section bg="dark">
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Keep Your Car Cool, Private, and Protected&mdash;Year Round.
          Colorado&apos;s high-altitude sun, winter glare, and fluctuating weather
          make quality window tint more than just an upgrade&mdash;it&apos;s a
          must-have for both comfort and protection.
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Ceramic tint blocks 99% of UV rays and up to 94% of infrared heat,
          keeping your car dramatically cooler without making it too dark.
        </p>
        {/* Legal Note */}
        <div className="bg-dark-elevated border border-primary/30 rounded p-5">
          <p className="text-sm text-white/80">
            <span className="text-primary font-semibold">Colorado Law:</span>{" "}
            Colorado law requires most vehicle windows to allow at least 27%
            visible light through (27% VLT). We ensure all installs are
            compliant.
          </p>
        </div>
      </Section>

      {/* Privacy & Custom Look */}
      <Section bg="black">
        <SectionHeading>
          Want maximum privacy or a custom look?
        </SectionHeading>
        <p className="text-white/70 leading-relaxed">
          We offer a range of ceramic film shades and finishes to match your
          style&mdash;from barely-there UV protection to the darkest
          Colorado-legal tint. Whether you drive a luxury sedan, an SUV, or a
          truck, we&apos;ll help you choose the perfect balance of privacy, heat
          rejection, and visibility.
        </p>
      </Section>

      {/* What's Included */}
      <Section bg="dark">
        <SectionHeading>
          What&apos;s Included With Every Window Tint Install
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
