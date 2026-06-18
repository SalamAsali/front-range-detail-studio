import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Quote",
  description:
    "Request a free, no-obligation car detailing quote from Front Range Detail Studio. PPF, ceramic coating, window tinting, vinyl wraps & more in Englewood, CO.",
};

export default function FreeQuotePage() {
  return (
    <>
      {/* Hero-sized quote section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/20 via-black to-black pt-24 pb-16">
        <div className="relative z-10 max-w-[840px] mx-auto px-5 w-full">
          <div className="text-center mb-10">
            <h1 className="text-white mb-4">Get A Free Quote</h1>
            <p className="text-lg text-white/70 font-[var(--font-display)]">
              Request a Free No Obligation Car Detailing Quote
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Contact Info */}
      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-primary mb-3">Connect with Us</h3>
            <a
              href="tel:3035208023"
              className="block text-white/70 hover:text-primary transition-colors mb-1"
            >
              (303) 520-8023
            </a>
            <a
              href="mailto:info@frontrangedetailstudio.com"
              className="block text-white/70 hover:text-primary transition-colors text-sm"
            >
              info@frontrangedetailstudio.com
            </a>
          </div>
          <div>
            <h3 className="text-primary mb-3">Business Hours</h3>
            <p className="text-white/70">
              Monday &ndash; Sunday
              <br />
              By Appointment Only
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-3">Denver Location</h3>
            <p className="text-white/70">
              12559 E Broncos Pkwy
              <br />
              Centennial, CO 80112
            </p>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section bg="black">
        <SectionHeading>
          Serving The Denver Metro And Surrounding Areas
        </SectionHeading>
        <p className="text-white/70 leading-relaxed text-center">
          We proudly serve Denver and all surrounding cities. From Aurora to
          Lakewood, Castle Rock to Boulder&mdash;our clients trust Front Range
          Detail Studio for premium vehicle protection.
        </p>
      </Section>

      {/* Reviews */}
      <Section bg="dark" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>
    </>
  );
}
