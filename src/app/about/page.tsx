import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Over 15 years of automotive detailing experience. System X & SunTek certified. Climate-controlled studio in Englewood, CO serving the Denver Metro area.",
};

const serviceCards = [
  {
    title: "Paint Protection Film & Clear Bra",
    tag: "12 Year Warranty",
    img: "/images/services/ppf-card.jpg",
    href: "/paint-protection-film-ppf",
  },
  {
    title: "Window Tinting",
    tag: "Lifetime Warranty",
    img: "/images/services/tint-card.jpg",
    href: "/window-tint",
  },
  {
    title: "Ceramic Coating",
    tag: "Lifetime Warranty",
    img: "/images/services/ceramic-card.jpg",
    href: "/ceramic-coating",
  },
  {
    title: "Paint Correction",
    tag: "Multi-Stage Polish",
    img: "/images/services/detailing-card.jpg",
    href: "/auto-detailing",
  },
  {
    title: "Vinyl Wrap & Decals",
    tag: "200+ Finishes",
    img: "/images/services/wrap-card.jpg",
    href: "/vinyl-wraps",
  },
  {
    title: "RV & Boat Services",
    tag: "RV \u00B7 Boat \u00B7 Marine",
    img: "/images/services/rv-card.jpg",
    href: "/rv-detailing",
  },
];

const partnerLogos = [
  { src: "/images/logos/Rupes-Logo.webp", alt: "Rupes logo" },
  { src: "/images/logos/glidecoat-pro-logo.svg", alt: "Glidecoat authorized dealer" },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar logo" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

export default function AboutPage() {
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
          alt="Front Range Detail Studio climate-controlled facility"
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
              About Us
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
              About Front Range Detail Studio
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
                fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)",
                lineHeight: 1.12,
              }}
            >
              Denver&rsquo;s Most Trusted Vehicle Aesthetic Experts
            </h2>
            <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 26px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: 300,
                  fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                With over 15 years of experience in the automotive detailing industry, Front Range Detail
                Studio has built a reputation as Colorado&rsquo;s premier destination for vehicle protection
                and enhancement. From cars and trucks to semi trucks, SUVs, RVs, boats and watercraft &mdash;
                we handle it all with the same level of care and precision.
              </p>
              <p
                style={{
                  margin: 0,
                  fontWeight: 300,
                  fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                Our clients have one thing in common: they love their vehicle. That shared passion drives
                everything we do. Whether it&rsquo;s a brand-new Tesla getting its first coat of ceramic
                protection or a cherished classic receiving a full paint correction, we treat every vehicle
                as if it were our own.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Certifications */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 42, maxWidth: 680 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Certifications
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
                Certified & Trusted
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1.05rem",
                    lineHeight: 1.2,
                    color: "#00BCD4",
                  }}
                >
                  System X Certified
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 300,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  We are authorized System X ceramic coating installers, using only genuine System X products
                  backed by manufacturer warranties. Our team undergoes rigorous training to ensure every
                  coating is applied to factory specifications.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1.05rem",
                    lineHeight: 1.2,
                    color: "#00BCD4",
                  }}
                >
                  SunTek Certified
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 300,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  As certified SunTek installers, we offer premium paint protection film and window tint
                  products with industry-leading warranties. SunTek&rsquo;s Reaction PPF and Evolve ceramic
                  window tint are our go-to solutions for Colorado drivers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
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
              Climate-Controlled Studio
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
              Our state-of-the-art, climate-controlled studio in Englewood ensures every installation is
              performed under optimal conditions. Temperature and humidity control are critical for PPF
              adhesion, ceramic coating curing, and achieving flawless results &mdash; something a mobile
              service or open-air shop simply cannot guarantee.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Service Cards */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 42, maxWidth: 680 }}>
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
                Our Services
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {serviceCards.map((c) => (
              <ScrollReveal key={c.href}>
                <Link
                  href={c.href}
                  style={{
                    position: "relative",
                    display: "block",
                    overflow: "hidden",
                    borderRadius: 6,
                    aspectRatio: "4/3",
                    textDecoration: "none",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.05) 60%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: 24,
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#32EEFF",
                      }}
                    >
                      {c.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "1.3rem",
                        lineHeight: 1.1,
                        color: "#fff",
                      }}
                    >
                      {c.title}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 36 }}>
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
                Our Partners &mdash; Trusted Brands
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(32px, 4vw, 48px)",
              }}
            >
              {partnerLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  style={{ opacity: 0.6, objectFit: "contain", height: 40, width: "auto" }}
                />
              ))}
            </div>
          </ScrollReveal>
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
              Serving the Denver Metro Area
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
              Located at 12559 E Broncos Pkwy in Centennial, CO 80112, we proudly serve Denver and all
              surrounding cities. Our clients come from across the Front Range &mdash; from Boulder to
              Castle Rock, Aurora to Lakewood &mdash; because they trust our expertise and commitment to
              quality.
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

      {/* CTA / Quote */}
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#00BCD4",
                  }}
                >
                  Free Quote
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Ready To Protect Your Investment?
                </h2>
                <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: 0 }} />
                <p
                  style={{
                    margin: 0,
                    fontWeight: 300,
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: 420,
                  }}
                >
                  Tell us about your vehicle and we&rsquo;ll recommend the right protection &mdash; no
                  upsells, no hard sell. Appointment-only studio in Centennial, CO.
                </p>
                <a
                  href="tel:+13035208023"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    color: "#00BCD4",
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                >
                  (303) 520-8023
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
