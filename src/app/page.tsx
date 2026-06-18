import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HomeHero } from "@/components/HomeHero";
import { PartnerLogo } from "@/components/PartnerLogo";
import { VehicleTile } from "@/components/VehicleTile";
import { videos } from "@/data/videos";

const serviceCards = [
  {
    title: "Paint Protection Film & Clear Bra",
    subtitle: "10 Year Warranty",
    image: "/images/services/new-ppf-scaled.jpg",
    href: "/paint-protection-film-ppf",
    videoSrc: videos.services.ppf,
  },
  {
    title: "Window Tinting",
    subtitle: "Lifetime Warranty",
    image: "/images/services/new-tint.jpg",
    href: "/window-tint",
    videoSrc: videos.services.tint,
  },
  {
    title: "Ceramic Coating",
    subtitle: "Lifetime Warranty",
    image: "/images/services/car-ceramic-1.jpg",
    href: "/ceramic-coating",
    videoSrc: videos.services.ceramic,
  },
  {
    title: "Paint Correction",
    subtitle: "Multi-Stage Polish",
    image: "/images/services/paint-correction-new.jpg",
    href: "/auto-detailing",
    videoSrc: videos.services.correction,
  },
  {
    title: "Vinyl Wrap & Decals",
    subtitle: "200+ Finishes",
    image: "/images/services/vinylwraps-1920w.webp",
    href: "/vinyl-wraps",
    videoSrc: videos.services.wrap,
  },
  {
    title: "RV & Boat Services",
    subtitle: "RV \u00B7 Boat \u00B7 Marine",
    image: "/images/hero/coach-scaled.jpg",
    href: "/rv-detailing",
    videoSrc: videos.services.rv,
  },
];

const partnerLogos = [
  { src: "/images/logos/Rupes-Logo.webp", alt: "Rupes logo" },
  { src: "/images/logos/glidecoat-pro-logo.svg", alt: "Glidecoat authorized dealer" },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar logo" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

const vehicleLogos = [
  "Mercedes-Benz-Logo-1.svg", "Porsche-Logo.svg", "Ford-logo.svg",
  "Logo-della-Jaguar.svg", "Lamborghini-Logo.svg", "Audi-logo.svg",
  "BMW-logo.svg", "LandRover-logo.svg", "Ferrari-Logo.svg",
  "rivian-logo.svg", "McLaren-Automotive-logo.svg", "Tesla-Motors-logo.svg",
  "Rolls-royce.svg", "Cadillac-logo.svg",
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Services Grid */}
      <section id="services" style={{ background: "#0d0d0d", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 820, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Our Services
              </span>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  lineHeight: 1.08,
                }}
              >
                Denver&apos;s Most Trusted Vehicle Aesthetic Experts
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 22,
            }}
          >
            {serviceCards.map((card) => (
              <ScrollReveal key={card.href}>
                <ServiceCard {...card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "#0a0a0a", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 820, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
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
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  lineHeight: 1.08,
                }}
              >
                Front Range Detail Studio Client Reviews
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ReviewBadges />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ReviewCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 90px) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 44, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Trusted Brands
              </span>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Our Partners
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "clamp(30px, 5vw, 72px)" }}>
              {partnerLogos.map((logo) => (
                <PartnerLogo key={logo.src} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vehicle Brands */}
      <section style={{ background: "#000", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 880, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Every Make &amp; Model
              </span>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Protection For All Brands and Models Including Tesla, Rivian, Porsche, BMW, Mercedes Benz and More
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {vehicleLogos.map((logo) => (
                <VehicleTile key={logo} logo={logo} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact / Quote */}
      <section
        id="contact"
        style={{
          position: "relative",
          background: "linear-gradient(rgba(11,11,11,0.92), rgba(11,11,11,0.97)), url('/images/generated/contact-dusk.png') center/cover fixed",
          padding: "clamp(64px, 8vw, 110px) 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 760, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Get In Touch
              </span>
              <h2
                id="quote"
                style={{
                  margin: "12px 0 0",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.1,
                  scrollMarginTop: 100,
                }}
              >
                Serving The Denver Metro &amp; Surrounding Areas
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            {/* Contact Info */}
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                      Call Us
                    </span>
                    <a href="tel:+13035208023" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", color: "#00BCD4", textDecoration: "none" }}>
                      (303) 520-8023
                    </a>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                      Email
                    </span>
                    <a href="mailto:info@frontrangedetailstudio.com" style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "1.05rem", color: "#fff", textDecoration: "none", wordBreak: "break-word" }}>
                      info@frontrangedetailstudio.com
                    </a>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                      Studio
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.55, color: "rgba(255,255,255,0.85)" }}>
                      12559 E Broncos Pkwy<br />Centennial, CO 80112
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                      Hours
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
                      By Appointment Only
                    </span>
                  </div>
                </div>
                {/* Map */}
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
            {/* Quote Form */}
            <ScrollReveal>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

