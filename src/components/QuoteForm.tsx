"use client";

import { useState } from "react";

const services = [
  "PPF / Clear Bra",
  "Window Tint",
  "Ceramic Coating",
  "Vinyl Wrap",
  "Paint Correction",
  "Oxidation Removal",
  "Other",
];

const prefs = ["Text", "Call", "Email"];

const inputStyle: React.CSSProperties = {
  background: "#2d2d2d",
  border: "1px solid #3a3a3a",
  borderRadius: 4,
  padding: "13px 14px",
  color: "#fff",
  fontFamily: "'Manrope', sans-serif",
  fontSize: 15,
  outline: "none",
  transition: "border-color .2s ease, box-shadow .2s ease",
  width: "100%",
  boxSizing: "border-box",
};

const labelTextStyle: React.CSSProperties = {
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.55)",
};

function InputField({
  type = "text",
  placeholder,
  label,
  required,
}: {
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={labelTextStyle}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#00BCD4";
          e.currentTarget.style.boxShadow =
            "0 0 0 3px rgba(0,188,212,0.18)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#3a3a3a";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </label>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        style={{
          background: "#161616",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 8,
          padding: "clamp(26px, 3.4vw, 40px)",
          fontFamily: "'Inter', sans-serif",
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            padding: "40px 10px",
          }}
        >
          <div
            style={{
              width: 66,
              height: 66,
              borderRadius: "50%",
              background: "rgba(0,188,212,0.12)",
              border: "1px solid rgba(0,188,212,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#00BCD4",
              fontSize: 30,
            }}
          >
            &#10003;
          </div>
          <h3
            style={{
              margin: 0,
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              fontSize: 24,
              color: "#fff",
            }}
          >
            Request Received
          </h3>
          <p
            style={{
              margin: 0,
              maxWidth: 380,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Thanks &mdash; we&rsquo;ll review your vehicle details and reach out
            shortly to schedule your consultation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: 6,
              fontFamily: "'Michroma', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: 12,
              color: "#00BCD4",
              background: "transparent",
              border: "1px solid #00BCD4",
              borderRadius: "3.125rem",
              padding: "13px 28px",
              cursor: "pointer",
            }}
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#161616",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8,
        padding: "clamp(26px, 3.4vw, 40px)",
        fontFamily: "'Inter', sans-serif",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        {/* Name, Email, Phone */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          <InputField label="Name" placeholder="Your name" />
          <InputField type="email" label="Email" placeholder="you@email.com" />
          <InputField type="tel" label="Phone" placeholder="(303) 000-0000" />
        </div>

        {/* Vehicle info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 16,
          }}
        >
          <InputField label="Vehicle Make" placeholder="e.g. BMW" />
          <InputField label="Model" placeholder="e.g. M5" />
          <InputField label="Year" placeholder="2024" />
        </div>

        {/* Services checkboxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <span style={labelTextStyle}>Services of interest</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 10,
            }}
          >
            {services.map((svc) => (
              <label
                key={svc}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#2d2d2d",
                  border: "1px solid #3a3a3a",
                  borderRadius: 4,
                  padding: "11px 13px",
                  cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    width: 16,
                    height: 16,
                    accentColor: "#00BCD4",
                    cursor: "pointer",
                  }}
                />
                <span>{svc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred contact */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={labelTextStyle}>Preferred contact</span>
          <div style={{ display: "flex", gap: 10 }}>
            {prefs.map((p) => (
              <label
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <input
                  type="radio"
                  name="pref"
                  style={{
                    width: 15,
                    height: 15,
                    accentColor: "#00BCD4",
                    cursor: "pointer",
                  }}
                />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Comments */}
        <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <span style={labelTextStyle}>Comments</span>
          <textarea
            rows={3}
            placeholder="Tell us about your vehicle and what you&#8217;re looking for&#8230;"
            style={{
              ...inputStyle,
              resize: "vertical" as const,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00BCD4";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(0,188,212,0.18)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#3a3a3a";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </label>

        {/* Consent */}
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 11,
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            required
            style={{
              width: 16,
              height: 16,
              accentColor: "#00BCD4",
              marginTop: 2,
              cursor: "pointer",
            }}
          />
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            I consent to be contacted by Front Range Detail Studio regarding my
            request. We never share your information.
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          style={{
            fontFamily: "'Michroma', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: 14,
            color: "#fff",
            background: "#00BCD4",
            border: "none",
            borderRadius: "3.125rem",
            padding: "17px 32px",
            cursor: "pointer",
            alignSelf: "flex-start",
            transition:
              "background .2s ease, transform .2s ease, box-shadow .2s ease",
            boxShadow: "0 8px 26px rgba(0,188,212,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#008AA2";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#00BCD4";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Request My Free Quote
        </button>
      </form>
    </div>
  );
}
