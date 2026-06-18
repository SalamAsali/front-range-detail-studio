import type { Metadata } from "next";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Quote",
  description:
    "Request a free, no-obligation car detailing quote from Front Range Detail Studio. PPF, ceramic coating, window tinting, vinyl wraps & more in Englewood, CO.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/free-quote/",
  },
  openGraph: {
    title: "Free Quote | Front Range Detail Studio",
    description:
      "Request a free, no-obligation car detailing quote. PPF, ceramic coating, window tinting, vinyl wraps & more in Englewood, CO.",
    url: "https://frontrangedetailstudio.com/free-quote/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Free Quote - Front Range Detail Studio",
      },
    ],
  },
};

export default function FreeQuotePage() {
  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero-sized quote section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(0,188,212,0.15) 0%, #000 40%, #0d0d0d 100%)",
          padding: "clamp(140px, 14vw, 180px) 0 clamp(64px, 8vw, 110px)",
        }}
      >
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", width: "100%" }}>
          <ScrollReveal>
            <div
              style={{
                textAlign: "center",
                marginBottom: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#32EEFF",
                }}
              >
                Free Quote
              </span>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.4px",
                  fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
                  lineHeight: 1.02,
                }}
              >
                Get A Free Quote
              </h1>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Request a Free No Obligation Car Detailing Quote
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <QuoteForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 32,
                textAlign: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1.02rem",
                    color: "#00BCD4",
                  }}
                >
                  Connect with Us
                </h3>
                <a
                  href="tel:+13035208023"
                  style={{ display: "block", fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.7)", textDecoration: "none", marginBottom: 4 }}
                >
                  (303) 520-8023
                </a>
                <a
                  href="mailto:info@frontrangedetailstudio.com"
                  style={{ display: "block", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  info@frontrangedetailstudio.com
                </a>
              </div>
              <div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1.02rem",
                    color: "#00BCD4",
                  }}
                >
                  Business Hours
                </h3>
                <p style={{ margin: 0, fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                  Monday &ndash; Sunday<br />By Appointment Only
                </p>
              </div>
              <div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1.02rem",
                    color: "#00BCD4",
                  }}
                >
                  Denver Location
                </h3>
                <p style={{ margin: 0, fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                  12559 E Broncos Pkwy<br />Centennial, CO 80112
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", textAlign: "center" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
                fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
              }}
            >
              Serving The Denver Metro And Surrounding Areas
            </h2>
            <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px auto 26px" }} />
            <p
              style={{
                margin: 0,
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              We proudly serve Denver and all surrounding cities. From Aurora to Lakewood, Castle Rock
              to Boulder &mdash; our clients trust Front Range Detail Studio for premium vehicle
              protection.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Reviews */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 36 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Testimonials
              </span>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Client Reviews
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <ReviewBadges />
          <ReviewCarousel />
        </div>
      </section>
    </div>
  );
}
