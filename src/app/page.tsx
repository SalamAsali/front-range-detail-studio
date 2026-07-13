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
  { src: "/images/logos/glidecoat-pro-logo.svg", alt: "Glidecoat logo, authorized Glidecoat dealer in Denver" },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo inverse" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

const vehicleLogos = [
  "Mercedes-Benz-Logo-1.svg", "Porsche-new-Logo.png", "Ford-logo.svg",
  "Jaguar-white-Logo.webp", "Lamborghini-Logo.svg", "Audi-white-Logo.png",
  "BMW-logo.svg", "LandRover-logo.svg", "Ferrari-Logo.svg",
  "Rivian-white-logo.png", "McLaren-Automotive-logo.svg", "Tesla-Motors-logo.svg",
  "Rolls-royce.svg", "Cadillac-logo.svg",
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* 1. Services Grid — H2 "Denver's Most Trusted Vehicle Aesthetic Experts" */}
      <section id="services" style={{ background: "#0d0d0d", padding: "clamp(64px, 8vw, 110px) 0" }}>
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

      {/* 2. Ratings Bar — H2 "Serving THE Denver Metro And surrounding areas" */}
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

      {/* 3. Contact / Quote — H3 Connect with Us, Business Hours, Denver Location + H2 Send A Quick Quote Form */}
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

      {/* 4. Reviews — H2 "Front Range Detail Studio client Reviews" */}
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

      {/* 5. Partners — H2 "Our Partners – Trusted Brands" */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 90px) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 44, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Our Partners &ndash; Trusted Brands
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

      {/* 6. Vehicle Brands — H2 "Protection For All Brands and Models..." */}
      <section style={{ background: "#000", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 880, marginBottom: 48 }}>
              <h2
                style={{
                  margin: 0,
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
              <p style={{ margin: "20px 0 0", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                At Front Range Detail Studio, we protect all brands and models including Tesla, Rivian, Porsche, BMW, Mercedes Benz and more. Protect your vehicle with ceramic coatings, paint protection film, window tinting, paint correction and more.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 1,
              }}
            >
              {vehicleLogos.map((logo) => (
                <VehicleTile key={logo} logo={logo} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
