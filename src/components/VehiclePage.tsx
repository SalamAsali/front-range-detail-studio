"use client";

import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnerLogo } from "@/components/PartnerLogo";

/* ------------------------------------------------------------------ */
/*  Data interface                                                     */
/* ------------------------------------------------------------------ */

export interface VehiclePageData {
  brand: string;
  heroImg: string;
  heroH1: string;
  heroSubtitle: string;

  /* Brand intro */
  logoImg: string;
  introH2: string;
  introBody: string;
  introQuote?: string;

  /* PPF section */
  ppfImg: string;
  ppfH2: string;
  ppfFeatures: { title: string; body: string }[];
  ppfOptions: { name: string; details: string }[];

  /* Front Range Package */
  packageImg: string;
  packageH2: string;
  packageIncludes: string[];

  /* Ceramic section */
  ceramicImg: string;
  ceramicH2: string;
  ceramicBenefits: { title: string; body: string }[];

  /* Window Tint section */
  tintImg: string;
  tintH2: string;
  tintBenefits: { title: string; body: string }[];

  /* FAQ */
  faqs: { question: string; answer: string }[];

  /* Gallery */
  gallery: string[];

  /* Case study (optional) */
  caseStudy?: {
    h2: string;
    body: string;
    images: string[];
  };
}

/* ------------------------------------------------------------------ */
/*  Shared style tokens                                                */
/* ------------------------------------------------------------------ */

const MAX_W = 1280;
const GUTTER = "clamp(20px, 5vw, 56px)";
const CYAN = "#00BCD4";
const CYAN_BRIGHT = "#32EEFF";
const CARD_BG = "#1a1a1a";
const CARD_BORDER = "1px solid rgba(255,255,255,0.06)";

const sectionPad = "clamp(56px, 7vw, 96px)";

const archivoBold: React.CSSProperties = {
  fontFamily: "'Archivo', sans-serif",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "-0.3px",
};

const manropeBody: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 300,
  fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.82)",
};

const interEyebrow: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: CYAN,
};

const cyanDivider: React.CSSProperties = {
  width: 96,
  height: 2,
  background: CYAN,
  border: "none",
  margin: "20px 0 0",
};

const ctaBtn: React.CSSProperties = {
  fontFamily: "'Michroma', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontSize: 13,
  color: "#fff",
  background: CYAN,
  borderRadius: "3.125rem",
  padding: "16px 30px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  display: "inline-block",
  boxShadow: "0 4px 24px rgba(0,188,212,0.25)",
};

const ctaBtnOutline: React.CSSProperties = {
  ...ctaBtn,
  background: "transparent",
  border: `1px solid ${CYAN}`,
  color: CYAN,
  boxShadow: "none",
};

const wrap = (maxWidth = MAX_W): React.CSSProperties => ({
  maxWidth,
  margin: "0 auto",
  padding: `0 ${GUTTER}`,
  width: "100%",
});

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function VehiclePage({ data: d }: { data: VehiclePageData }) {
  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* ============================================================ */}
      {/* 1. HERO                                                      */}
      {/* ============================================================ */}
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
          src={d.heroImg}
          alt={`${d.brand} detailing at Front Range Detail Studio`}
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
            ...wrap(),
          }}
        >
          <div
            style={{
              maxWidth: 880,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              paddingBottom: "clamp(48px, 6vw, 80px)",
            }}
          >
            <span style={{ ...interEyebrow, color: CYAN_BRIGHT }}>
              {d.brand} Specialists
            </span>
            <h1
              style={{
                margin: 0,
                ...archivoBold,
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
                lineHeight: 1.02,
                textShadow: "0 3px 30px rgba(0,0,0,0.5)",
              }}
            >
              {d.heroH1}
            </h1>
            <p
              style={{
                margin: 0,
                ...manropeBody,
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                maxWidth: 600,
              }}
            >
              {d.heroSubtitle}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 8 }}>
              <Link href="/free-quote" style={ctaBtn}>
                Get A Free Quote
              </Link>
              <a href="tel:+13035208023" style={ctaBtnOutline}>
                Call (303) 520-8023
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SERVICE AREA + REVIEW BADGES                              */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <p
              style={{
                textAlign: "center",
                margin: "0 0 32px",
                ...interEyebrow,
                fontSize: 13,
              }}
            >
              Serving the Denver Metro and Surrounding Areas
            </p>
          </ScrollReveal>
          <ReviewBadges />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. BRAND INTRO WITH LOGO                                     */}
      {/* ============================================================ */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Logo + text side */}
              <div>
                <div style={{ marginBottom: 24 }}>
                  <Image
                    src={d.logoImg}
                    alt={`${d.brand} logo`}
                    width={120}
                    height={48}
                    style={{
                      height: 48,
                      width: "auto",
                      maxWidth: 120,
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                      opacity: 0.8,
                    }}
                  />
                </div>
                <h2
                  style={{
                    margin: 0,
                    ...archivoBold,
                    fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)",
                    lineHeight: 1.12,
                  }}
                >
                  {d.introH2}
                </h2>
                <hr style={cyanDivider} />
                <p
                  style={{
                    ...manropeBody,
                    margin: "26px 0 0",
                  }}
                >
                  {d.introBody}
                </p>
                {d.introQuote && (
                  <blockquote
                    style={{
                      margin: "28px 0 0",
                      padding: "0 0 0 20px",
                      borderLeft: `3px solid ${CYAN}`,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 300,
                      fontStyle: "italic",
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {d.introQuote}
                  </blockquote>
                )}
              </div>
              {/* Image side */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={d.ppfImg}
                  alt={`${d.brand} paint protection film`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PPF PACKAGES SECTION                                      */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "start",
              }}
            >
              {/* Image left */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={d.ppfImg}
                  alt={`${d.brand} PPF installation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Text right */}
              <div>
                <span style={interEyebrow}>{d.brand} PPF</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.ppfH2}
                </h2>
                <hr style={cyanDivider} />

                {/* Feature cards */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  {d.ppfFeatures.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD_BG,
                        border: CARD_BORDER,
                        borderRadius: 6,
                        padding: "22px 24px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          ...archivoBold,
                          fontSize: "1.02rem",
                          lineHeight: 1.2,
                          color: "#fff",
                        }}
                      >
                        {f.title}
                      </h3>
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 300,
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* PPF Options list */}
                <div style={{ marginTop: 28 }}>
                  <h3
                    style={{
                      margin: 0,
                      ...archivoBold,
                      fontSize: "1.05rem",
                      color: CYAN,
                    }}
                  >
                    Paint Protection Film Options
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      marginTop: 18,
                    }}
                  >
                    {d.ppfOptions.map((opt, i) => (
                      <div key={i}>
                        <h4
                          style={{
                            margin: 0,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: 15,
                            color: "#fff",
                          }}
                        >
                          {opt.name}
                        </h4>
                        <p
                          style={{
                            margin: "6px 0 0",
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 300,
                            fontSize: 14,
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {opt.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  <Link href="/free-quote" style={ctaBtn}>
                    Get A Free Quote
                  </Link>
                  <a href="tel:+13035208023" style={ctaBtnOutline}>
                    Call (303) 520-8023
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FRONT RANGE PACKAGE                                       */}
      {/* ============================================================ */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Text left */}
              <div>
                <span style={interEyebrow}>Best Value</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.packageH2}
                </h2>
                <hr style={cyanDivider} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    marginTop: 28,
                  }}
                >
                  {d.packageIncludes.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        background: "#141414",
                        border: CARD_BORDER,
                        borderRadius: 6,
                        padding: "16px 20px",
                      }}
                    >
                      <span
                        style={{
                          color: CYAN,
                          fontSize: 18,
                          lineHeight: 1.3,
                          flex: "none",
                        }}
                      >
                        &#10003;
                      </span>
                      <span
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    ...manropeBody,
                    fontSize: "0.95rem",
                    margin: "24px 0 0",
                  }}
                >
                  The complete protection package built specifically for{" "}
                  {d.brand} owners in Colorado.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    marginTop: 24,
                  }}
                >
                  <Link href="/free-quote" style={ctaBtn}>
                    Get A Free Quote
                  </Link>
                  <a href="tel:+13035208023" style={ctaBtnOutline}>
                    Call (303) 520-8023
                  </a>
                </div>
              </div>
              {/* Image right */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={d.packageImg}
                  alt={`${d.brand} Front Range Package`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CUSTOM QUOTE CTA                                          */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
        <div style={wrap(900)}>
          <ScrollReveal>
            <div
              style={{
                background: "linear-gradient(110deg, #0e2a30, #0d0d0d)",
                border: "1px solid rgba(0,188,212,0.25)",
                borderRadius: 10,
                padding: "clamp(32px, 4vw, 48px)",
              }}
            >
              <h2
                style={{
                  ...archivoBold,
                  margin: 0,
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                }}
              >
                Get a Custom {d.brand} Paint Protection Quote
              </h2>
              <hr style={{ ...cyanDivider, margin: "18px 0 22px" }} />
              <p
                style={{
                  ...manropeBody,
                  fontSize: "0.95rem",
                  margin: "0 0 12px",
                }}
              >
                Which services are you interested in:
              </p>
              <ul
                style={{
                  margin: "0 0 24px",
                  padding: "0 0 0 20px",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {[
                  "Front Range Package (PPF + Ceramic Coating + Tint)",
                  "Paint Protection Film (clear SunTek Reaction or color-change PURE PPF)",
                  "Ceramic Coating",
                  "Ceramic Window Tint",
                ].map((s, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span style={{ color: CYAN, fontSize: 14, flex: "none" }}>
                      &#9679;
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/free-quote" style={ctaBtn}>
                Get A Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CERAMIC COATING SECTION                                   */}
      {/* ============================================================ */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "start",
              }}
            >
              {/* Text left */}
              <div>
                <span style={interEyebrow}>Ceramic Protection</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.ceramicH2}
                </h2>
                <hr style={cyanDivider} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  {d.ceramicBenefits.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD_BG,
                        border: CARD_BORDER,
                        borderRadius: 6,
                        padding: "22px 24px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          ...archivoBold,
                          fontSize: "1.02rem",
                          lineHeight: 1.2,
                          color: CYAN,
                        }}
                      >
                        {b.title}
                      </h3>
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 300,
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  <Link href="/free-quote" style={ctaBtn}>
                    Get A Free Quote
                  </Link>
                  <a href="tel:+13035208023" style={ctaBtnOutline}>
                    Call (303) 520-8023
                  </a>
                </div>
              </div>
              {/* Image right */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={d.ceramicImg}
                  alt={`${d.brand} ceramic coating`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. WINDOW TINTING SECTION                                    */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "start",
              }}
            >
              {/* Image left */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={d.tintImg}
                  alt={`${d.brand} window tinting`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Text right */}
              <div>
                <span style={interEyebrow}>Window Tint</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.tintH2}
                </h2>
                <hr style={cyanDivider} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  {d.tintBenefits.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD_BG,
                        border: CARD_BORDER,
                        borderRadius: 6,
                        padding: "22px 24px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          ...archivoBold,
                          fontSize: "1.02rem",
                          lineHeight: 1.2,
                          color: CYAN,
                        }}
                      >
                        {b.title}
                      </h3>
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 300,
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    marginTop: 28,
                  }}
                >
                  <Link href="/free-quote" style={ctaBtn}>
                    Get A Free Quote
                  </Link>
                  <a href="tel:+13035208023" style={ctaBtnOutline}>
                    Call (303) 520-8023
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FAQ                                                       */}
      {/* ============================================================ */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div style={wrap(880)}>
          <ScrollReveal>
            <div style={{ marginBottom: 36 }}>
              <span style={interEyebrow}>FAQ</span>
              <h2
                style={{
                  ...archivoBold,
                  margin: "12px 0 0",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Frequently Asked Questions
              </h2>
              <hr style={cyanDivider} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={d.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. CLIENT REVIEWS                                           */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div style={{ marginBottom: 36 }}>
              <span style={interEyebrow}>Testimonials</span>
              <h2
                style={{
                  ...archivoBold,
                  margin: "12px 0 0",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Front Range Detail Studio Client Reviews
              </h2>
              <hr style={cyanDivider} />
            </div>
          </ScrollReveal>
          <ReviewBadges />
          <ReviewCarousel />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. CASE STUDY / PORTFOLIO                                   */}
      {/* ============================================================ */}
      {d.caseStudy && (
        <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
          <div style={wrap()}>
            <ScrollReveal>
              <div style={{ marginBottom: 36 }}>
                <span style={interEyebrow}>Recent Work</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.caseStudy.h2}
                </h2>
                <hr style={cyanDivider} />
              </div>
              <p style={{ ...manropeBody, margin: "0 0 32px" }}>
                {d.caseStudy.body}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 14,
                }}
              >
                {d.caseStudy.images.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 6,
                      aspectRatio: "4/3",
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${d.brand} project at Front Range Detail Studio`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 12. GALLERY GRID                                             */}
      {/* ============================================================ */}
      {d.gallery.length > 0 && (
        <section
          style={{
            background: d.caseStudy ? "#0d0d0d" : "#000",
            padding: `${sectionPad} 0`,
          }}
        >
          <div style={wrap()}>
            <ScrollReveal>
              <div style={{ marginBottom: 36 }}>
                <span style={interEyebrow}>Gallery</span>
                <h2
                  style={{
                    ...archivoBold,
                    margin: "12px 0 0",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  From The Studio
                </h2>
                <hr style={cyanDivider} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 14,
                }}
              >
                {d.gallery.map((g, i) => (
                  <div
                    key={i}
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
                      src={g}
                      alt={`${d.brand} gallery image from Front Range Detail Studio`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 13. PARTNER LOGOS                                            */}
      {/* ============================================================ */}
      <section style={{ background: "#0d0d0d", padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <span style={interEyebrow}>Our Partners</span>
              <h2
                style={{
                  ...archivoBold,
                  margin: "12px 0 0",
                  fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                }}
              >
                Trusted Brands
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(24px, 4vw, 48px)",
              }}
            >
              <PartnerLogo
                src="/images/logos/Rupes-Logo.webp"
                alt="Rupes"
              />
              <PartnerLogo
                src="/images/logos/glidecoat-pro-logo.svg"
                alt="Glidecoat Pro"
              />
              <PartnerLogo
                src="/images/logos/eastman-logo-inverse.png"
                alt="Eastman"
              />
              <PartnerLogo
                src="/images/logos/suntek-logo.svg"
                alt="SunTek"
              />
              <PartnerLogo
                src="/images/logos/system-x-logo.svg"
                alt="System X"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. PPF CROSS-SELL BANNER                                    */}
      {/* ============================================================ */}
      <section style={{ background: "#000", padding: "clamp(40px, 5vw, 72px) 0" }}>
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                background: "linear-gradient(110deg, #0e2a30, #0d0d0d)",
                border: "1px solid rgba(0,188,212,0.25)",
                borderRadius: 10,
                padding: "clamp(32px, 4vw, 48px)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    ...archivoBold,
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    color: "#fff",
                  }}
                >
                  Denver&rsquo;s 1st Choice in Paint Protection Film
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Preserve the pristine condition of your vehicle with our
                  high-quality Paint Protection Film, or Clear Bra. Our
                  warranty-backed PPF acts as an invisible shield, guarding your
                  car&rsquo;s paint against scratches, stone chips, and road
                  debris.
                </p>
              </div>
              <Link href="/paint-protection-film-ppf" style={ctaBtn}>
                Explore PPF
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. DETAILING CROSS-SELL BANNER                              */}
      {/* ============================================================ */}
      <section
        style={{ background: "#0d0d0d", padding: "clamp(40px, 5vw, 72px) 0" }}
      >
        <div style={wrap()}>
          <ScrollReveal>
            <div
              style={{
                background: "linear-gradient(110deg, #0e2a30, #0d0d0d)",
                border: "1px solid rgba(0,188,212,0.25)",
                borderRadius: 10,
                padding: "clamp(32px, 4vw, 48px)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    ...archivoBold,
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    color: "#fff",
                  }}
                >
                  Detailing Services in Denver, Colorado
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Our clients have one thing in common: they love their vehicle.
                  From the Class A motorhome to the two-door convertible, our
                  team of detail specialists are equipped and experienced to
                  handle all detailing needs anywhere in Metro Denver.
                </p>
              </div>
              <Link href="/auto-detailing" style={ctaBtn}>
                Explore Detailing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA / QUOTE FORM                                            */}
      {/* ============================================================ */}
      <section
        id="quote"
        style={{
          background: "#000",
          padding: "clamp(64px, 8vw, 110px) 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          scrollMarginTop: 90,
        }}
      >
        <div style={wrap()}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <span style={interEyebrow}>Free Quote</span>
                <h2
                  style={{
                    margin: 0,
                    ...archivoBold,
                    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Ready To Protect Your Investment?
                </h2>
                <hr
                  style={{ ...cyanDivider, margin: 0 }}
                />
                <p
                  style={{
                    margin: 0,
                    ...manropeBody,
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: 420,
                  }}
                >
                  Tell us about your vehicle and we&rsquo;ll recommend the right
                  protection &mdash; no upsells, no hard sell. Appointment-only
                  studio in Centennial, CO.
                </p>
                <a
                  href="tel:+13035208023"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    color: CYAN,
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
