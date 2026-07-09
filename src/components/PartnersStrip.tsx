"use client";

import { PartnerLogo } from "@/components/PartnerLogo";
import { ScrollReveal } from "@/components/ScrollReveal";

const partnerLogos = [
  { src: "/images/logos/Rupes-Logo.webp", alt: "Rupes logo" },
  { src: "/images/logos/glidecoat-pro-logo.svg", alt: "Glidecoat logo, authorized Glidecoat dealer in Denver" },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo inverse" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

export function PartnersStrip() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        padding: "clamp(56px, 7vw, 90px) 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        <ScrollReveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: 44,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <hr
              style={{
                width: 96,
                height: 2,
                background: "#00BCD4",
                border: "none",
                margin: "20px 0 0",
              }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(30px, 5vw, 72px)",
            }}
          >
            {partnerLogos.map((logo) => (
              <PartnerLogo key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
