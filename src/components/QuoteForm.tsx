"use client";

import { useState, useRef } from "react";

const serviceOptions = [
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
  name,
}: {
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
  name: string;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={labelTextStyle}>{label}</span>
      <input
        type={type}
        name={name}
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const loadedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const form = formRef.current!;
      const fd = new FormData(form);

      const checkedServices = Array.from(
        form.querySelectorAll<HTMLInputElement>('input[name="services"]:checked')
      ).map((el) => el.value);

      const payload = {
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: fd.get("phone") as string,
        make: fd.get("make") as string,
        model: fd.get("model") as string,
        year: fd.get("year") as string,
        services: checkedServices,
        contact: fd.get("pref") as string,
        comments: fd.get("comments") as string,
        website: fd.get("website") as string,
        _t: loadedAt.current,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

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
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        {/* Honeypot - hidden from humans, bots will fill it */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Name, Email, Phone */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          <InputField name="name" label="Name" placeholder="Your name" required />
          <InputField name="email" type="email" label="Email" placeholder="you@email.com" required />
          <InputField name="phone" type="tel" label="Phone" placeholder="(303) 000-0000" />
        </div>

        {/* Vehicle info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 16,
          }}
        >
          <InputField name="make" label="Vehicle Make" placeholder="e.g. BMW" />
          <InputField name="model" label="Model" placeholder="e.g. M5" />
          <InputField name="year" label="Year" placeholder="2024" />
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
            {serviceOptions.map((svc) => (
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
                  name="services"
                  value={svc}
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
                  value={p}
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
            name="comments"
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

        {error && (
          <p style={{ margin: 0, color: "#f44336", fontSize: 14 }}>{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            fontFamily: "'Michroma', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: 14,
            color: "#fff",
            background: submitting ? "#666" : "#00BCD4",
            border: "none",
            borderRadius: "3.125rem",
            padding: "17px 32px",
            cursor: submitting ? "not-allowed" : "pointer",
            alignSelf: "flex-start",
            transition:
              "background .2s ease, transform .2s ease, box-shadow .2s ease",
            boxShadow: submitting ? "none" : "0 8px 26px rgba(0,188,212,0.3)",
          }}
          onMouseEnter={(e) => {
            if (!submitting) {
              e.currentTarget.style.background = "#008AA2";
              e.currentTarget.style.transform = "translateY(-2px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!submitting) {
              e.currentTarget.style.background = "#00BCD4";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          {submitting ? "Sending..." : "Request My Free Quote"}
        </button>
      </form>
    </div>
  );
}
