import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Front Range Detail Studio in Englewood, CO. Call (303) 520-8023 or request a free quote for PPF, ceramic coating, window tinting & more.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/hero/colorado-package-scaled.jpg"
        imageAlt="Front Range Detail Studio"
        title="Contact Front Range Detail Studio"
        subtitle="Denver's Most Trusted Vehicle Aesthetic Experts"
        cta={{ label: "Call (303) 520-8023", href: "tel:3035208023" }}
      />

      {/* Contact Info + Quote Form */}
      <Section bg="dark" wide>
        <SectionHeading>
          We Proudly Serve Denver and All Surrounding Cities
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            {/* Connect */}
            <div>
              <h3 className="mb-4">Connect with Us</h3>
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
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-4">Business Hours</h3>
              <p className="text-white/70">
                Monday &ndash; Sunday: By Appointment Only
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-4">Denver Location</h3>
              <p className="text-white/70 mb-4">
                12559 E Broncos Pkwy
                <br />
                Centennial, CO 80112
              </p>
              {/* Google Maps embed placeholder */}
              <div className="bg-dark-elevated rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.5!2d-104.848!3d39.598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Front Range Detail Studio location"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/frontrangedetailing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com/@FrontRangeDetailing303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors text-sm"
                >
                  YouTube
                </a>
                <a
                  href="https://m.facebook.com/people/Front-Range-Mobile-Detailing-RV-Boat-Auto/100088512754242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors text-sm"
                >
                  Facebook
                </a>
                <a
                  href="https://www.yelp.com/biz/front-range-detail-studio-denver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors text-sm"
                >
                  Yelp
                </a>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Section>

      {/* Service Area */}
      <Section bg="black">
        <SectionHeading>
          Serving The Denver Metro And Surrounding Areas
        </SectionHeading>
        <p className="text-white/70 leading-relaxed">
          Front Range Detail Studio proudly serves clients across the Denver
          metro area and beyond. Whether you&apos;re in Denver, Aurora,
          Lakewood, Centennial, Englewood, Littleton, Highlands Ranch, Parker,
          Castle Rock, or anywhere along the Front Range, our studio is
          conveniently located and ready to protect your vehicle.
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
