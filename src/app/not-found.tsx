import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Front Range Detail Studio" },
  description:
    "That page doesn't exist. Browse our paint protection film, ceramic coating, window tint and detailing services, or get in touch.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Paint Protection Film", href: "/paint-protection-film-ppf" },
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Window Tint", href: "/window-tint" },
  { label: "Auto Detailing", href: "/auto-detailing" },
  { label: "RV & Boat Services", href: "/rv-detailing" },
  { label: "All Services", href: "/services" },
];

export default function NotFound() {
  return (
    <div
      style={{
        background: "#000",
        fontFamily: "var(--font-body)",
        minHeight: "78vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(120px, 12vw, 160px) 20px clamp(64px, 8vw, 96px)",
      }}
    >
      <div style={{ maxWidth: 620, textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#00BCD4",
          }}
        >
          Error 404
        </span>
        <h1
          style={{
            margin: "16px 0 14px",
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.5px",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.05,
            color: "#fff",
          }}
        >
          This page doesn&rsquo;t exist
        </h1>
        <p
          style={{
            margin: "0 0 30px",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          The link may be out of date, or the page may have moved when we
          rebuilt the site. Here&rsquo;s where most people are headed:
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 34,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 4,
                padding: "10px 16px",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <Link
            href="/free-quote"
            style={{
              fontFamily: "var(--font-button)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: 12,
              color: "#0d0d0d",
              background: "#00BCD4",
              borderRadius: "3.125rem",
              padding: "14px 30px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Get A Free Quote
          </Link>
          <a
            href="tel:+13035208023"
            style={{
              fontFamily: "var(--font-button)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: 12,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "3.125rem",
              padding: "14px 30px",
              textDecoration: "none",
            }}
          >
            Call (303) 520-8023
          </a>
        </div>
      </div>
    </div>
  );
}
