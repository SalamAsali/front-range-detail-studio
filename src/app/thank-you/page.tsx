import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You - Front Range Detail Studio",
  description:
    "Thanks for contacting us! We will get in touch with you shortly.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/thank-you/",
  },
  openGraph: {
    title: "Thank You - Front Range Detail Studio",
    description:
      "Thanks for contacting us! We will get in touch with you shortly.",
    url: "https://frontrangedetailstudio.com/thank-you/",
  },
};

export default function ThankYouPage() {
  return (
    <div
      style={{
        background: "#000",
        fontFamily: "'Manrope', sans-serif",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "clamp(60px, 10vw, 120px) clamp(20px, 5vw, 56px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(0,188,212,0.12)",
            border: "1px solid rgba(0,188,212,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00BCD4",
            fontSize: 36,
          }}
        >
          &#10003;
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.5px",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            lineHeight: 1.1,
          }}
        >
          Thank You For Contacting Us
        </h1>
        <p
          style={{
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 300,
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 420,
            lineHeight: 1.6,
          }}
        >
          Thanks for contacting us! We will get in touch with you shortly.
        </p>
        <a
          href="tel:+13035208023"
          style={{
            fontFamily: "'Michroma', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: 14,
            color: "#fff",
            background: "#00BCD4",
            borderRadius: "3.125rem",
            padding: "18px 36px",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 10px 34px rgba(0,188,212,0.36)",
            marginTop: 8,
          }}
        >
          Call (303) 520-8023
        </a>
      </div>
    </div>
  );
}
