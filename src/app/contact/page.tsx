import type { Metadata } from "next";
import Image from "next/image";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Front Range Detail Studio in Englewood, CO. Call (303) 520-8023 or request a free quote for PPF, ceramic coating, window tinting & more.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(420px, 72vh, 680px)",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          marginTop: -82,
        }}
      >
        <Image
          src="/images/hero/colorado-package-scaled.jpg"
          alt="Front Range Detail Studio"
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
              "linear-gradient(100deg, rgba(0,188,212,0.4) 0%, rgba(0,0,0,0.6) 58%, rgba(0,0,0,0.8) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.15) 55%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 56px) clamp(48px, 6vw, 80px)",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 880, display: "flex", flexDirection: "column", gap: 18 }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#32EEFF",
              }}
            >
              Contact Us
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
                textShadow: "0 3px 30px rgba(0,0,0,0.5)",
              }}
            >
              Contact Front Range Detail Studio
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Info + Quote */}
      <section style={{ background: "#0d0d0d", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 42 }}>
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
                We Proudly Serve Denver and All Surrounding Cities
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {/* Connect */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Connect with Us
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <a
                      href="tel:+13035208023"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "#00BCD4",
                        textDecoration: "none",
                      }}
                    >
                      (303) 520-8023
                    </a>
                    <a
                      href="mailto:info@frontrangedetailstudio.com"
                      style={{
                        fontWeight: 400,
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      info@frontrangedetailstudio.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Business Hours
                  </h3>
                  <p style={{ margin: 0, fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}>
                    Monday &ndash; Sunday: By Appointment Only
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Denver Location
                  </h3>
                  <p style={{ margin: "0 0 16px", fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}>
                    12559 E Broncos Pkwy<br />
                    Centennial, CO 80112
                  </p>
                  <div
                    style={{
                      borderRadius: 6,
                      overflow: "hidden",
                      aspectRatio: "16/9",
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.5!2d-104.848!3d39.598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1700000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Front Range Detail Studio location"
                    />
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Follow Us
                  </h3>
                  <div style={{ display: "flex", gap: 16 }}>
                    {[
                      { label: "Instagram", href: "https://www.instagram.com/frontrangedetailing/" },
                      { label: "YouTube", href: "https://youtube.com/@FrontRangeDetailing303" },
                      { label: "Facebook", href: "https://m.facebook.com/people/Front-Range-Mobile-Detailing-RV-Boat-Auto/100088512754242/" },
                      { label: "Yelp", href: "https://www.yelp.com/biz/front-range-detail-studio-denver" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 13,
                          color: "rgba(255,255,255,0.5)",
                          textDecoration: "none",
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
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
            <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 26px" }} />
            <p
              style={{
                margin: 0,
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Front Range Detail Studio proudly serves clients across the Denver metro area and beyond.
              Whether you&rsquo;re in Denver, Aurora, Lakewood, Centennial, Englewood, Littleton,
              Highlands Ranch, Parker, Castle Rock, or anywhere along the Front Range, our studio is
              conveniently located and ready to protect your vehicle.
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
