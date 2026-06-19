import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const galleryImages = [
  { src: "/images/services/new-ppf-scaled.jpg", alt: "denver ppf clear bra paint protection" },
  { src: "/images/services/new-tint.jpg", alt: "denver window tinting ceramic tint" },
  { src: "/images/services/car-ceramic-1.jpg", alt: "denver ceramic coating lifetime warranty" },
  { src: "/images/services/paint-correction-new.jpg", alt: "denver paint correction detailing" },
  { src: "/images/services/vinylwraps-1920w.webp", alt: "denver vinyl wrap paint protection film ceramic coating" },
  { src: "/images/hero/coach-scaled.jpg", alt: "rv detailing denver" },
];

export function DenverCTA() {
  return (
    <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        <ScrollReveal>
          <div style={{ maxWidth: 880, marginBottom: 32 }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
                fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                lineHeight: 1.12,
              }}
            >
              Denver&apos;s 1st Choice in Paint Protection Film and Clear Bra
            </h2>
            <hr
              style={{
                width: 96,
                height: 2,
                background: "#00BCD4",
                border: "none",
                margin: "20px 0 24px",
              }}
            />
            <p
              style={{
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Preserve the pristine condition of your vehicle with our high-quality Paint Protection Film, or Clear Bra. Our warranty backed PPF acts as an invisible shield, guarding your car&apos;s paint against scratches, stone chips, and road debris. With advanced self-healing technology and ceramic coating, your vehicle stays looking brand new. Protect your investment with our expert application.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link
                href="/free-quote"
                style={{
                  fontFamily: "'Michroma', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: 13,
                  color: "#fff",
                  background: "#00BCD4",
                  borderRadius: "3.125rem",
                  padding: "16px 30px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get A Free Quote
              </Link>
              <a
                href="tel:+13035208023"
                style={{
                  fontFamily: "'Michroma', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: 13,
                  color: "#00BCD4",
                  marginLeft: 24,
                  textDecoration: "none",
                }}
              >
                Call (303) 520-8023
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
              marginTop: 20,
            }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.src}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 6,
                  aspectRatio: "3/4",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
