import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";

const CYAN = "#00BCD4";

/* Mirrors ServicePage.tsx's heroVariant:"homepage" CTA button styling
   exactly, since Contact is a hand-built page with no ServicePageData. */
const heroCtaBtn: React.CSSProperties = {
  fontFamily: "'Michroma', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontSize: 14,
  color: "#fff",
  background: CYAN,
  borderRadius: "3.125rem",
  padding: "18px 36px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  display: "inline-block",
  boxShadow: "0 10px 34px rgba(0,188,212,0.36)",
};

const heroCtaBtnOutline: React.CSSProperties = {
  ...heroCtaBtn,
  background: "transparent",
  border: `1px solid ${CYAN}`,
  color: CYAN,
  boxShadow: "none",
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Denver's Most Trusted Vehicle Aesthetic Experts",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/contact/",
  },
  openGraph: {
    title: "Contact - Front Range Detail Studio",
    description:
      "Denver's Most Trusted Vehicle Aesthetic Experts",
    url: "https://frontrangedetailstudio.com/contact/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Contact - Front Range Detail Studio",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          marginTop: -82,
          paddingTop: 82,
        }}
      >
        <Image
          src="/images/hero/colorado-package-scaled.jpg"
          alt="PPF Clear Bra Denver Tint Ceramic Coating Paint Correction"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(0,188,212,0.42) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.78) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 42%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 56px) clamp(48px, 6vw, 80px)",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 1080, display: "flex", flexDirection: "column", gap: 26 }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#32EEFF",
                lineHeight: 1.7,
              }}
            >
              Denver&rsquo;s Most Trusted Vehicle Aesthetic Experts
            </span>
            <hr style={{ width: 64, height: 2, background: CYAN, border: "none", margin: 0 }} />
            <h1
              style={{
                margin: 0,
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "-0.5px",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 0.98,
                textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }}
            >
              We Proudly Serve Denver and All Surrounding Cities
            </h1>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
              <Link href="/free-quote" style={heroCtaBtn}>
                Get A Free Quote
              </Link>
              <a href="tel:+13035208023" style={heroCtaBtnOutline}>
                Call (303) 520-8023
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings Bar — copied verbatim from the homepage */}
      <section style={{ background: "#0a0a0a", padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  lineHeight: 1.2,
                }}
              >
                Serving THE Denver Metro And surrounding areas
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px auto 0" }} />
            </div>
          </ScrollReveal>
          <ReviewBadges />
        </div>
      </section>

      {/* Contact / Quote — copied verbatim from the homepage */}
      <section
        id="quote"
        style={{
          background: "#0d0d0d",
          padding: "clamp(64px, 8vw, 110px) 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          scrollMarginTop: 90,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div>
                  <h3 style={{ margin: "0 0 14px", fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: "uppercase", fontSize: "1.05rem", color: "#fff" }}>
                    Connect with Us
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                      Phone: <a href="tel:+13035208023" style={{ color: "#00BCD4", textDecoration: "none", fontWeight: 600 }}>(303) 520-8023</a>
                    </p>
                    <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                      Email: <a href="mailto:info@frontrangedetailstudio.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>info@frontrangedetailstudio.com</a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: "uppercase", fontSize: "1.05rem", color: "#fff" }}>
                    Business Hours
                  </h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                    Monday &ndash; Sunday: By Appointment Only
                  </p>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: "uppercase", fontSize: "1.05rem", color: "#fff" }}>
                    Denver Location
                  </h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                    <a href="https://maps.app.goo.gl/hz9CMdtQmeKYWKKy7" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                      12559 E Broncos Pkwy, Centennial, CO 80112
                    </a>
                  </p>
                </div>
                <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "16/10", background: "#111" }}>
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps?q=12559+E+Broncos+Pkwy+Centennial+CO+80112&output=embed"
                    style={{ width: "100%", height: "100%", border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h2 style={{ margin: "0 0 20px", fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.3px", fontSize: "clamp(1.4rem, 2vw, 1.8rem)", lineHeight: 1.08 }}>
                  Send A Quick Quote Form
                </h2>
                <QuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews — copied verbatim from the homepage */}
      <section style={{ background: "#000", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 820, marginBottom: 48 }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  lineHeight: 1.08,
                }}
              >
                Front Range Detail Studio client Reviews
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ReviewCarousel />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
