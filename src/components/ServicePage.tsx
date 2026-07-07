import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnersStrip } from "@/components/PartnersStrip";
import { DenverCTA } from "@/components/DenverCTA";

export interface ServicePageData {
  heroImg: string;
  heroImgAlt?: string;
  eyebrow: string;
  /** Opt-in bold weight for the hero eyebrow text (default stays regular). */
  eyebrowBold?: boolean;
  h1: string;
  /**
   * Opt-in: when "homepage", the hero's fonts/spacing match HomeHero.tsx
   * (larger H1, homepage eyebrow sizing, Archivo-based subtitle, larger
   * buttons) instead of the default ServicePage hero look. Only affects
   * pages that set this — every other page's hero is unchanged.
   */
  heroVariant?: "homepage";
  /**
   * Only used when heroVariant is "homepage". Overrides the H1's font-size
   * clamp() string for this page — needed because homepage's own size
   * (up to 5.4rem) was tuned for "Front Range Detail Studio" and will wrap
   * longer headlines. Default (when unset) is a size proven to fit
   * "Boat Ceramic Coating & PPF" without wrapping: shorter headlines on
   * future pages can override toward homepage's full clamp(2.6rem, 6vw,
   * 5.4rem); longer ones may need to go smaller still.
   */
  heroH1FontSize?: string;
  /**
   * Only used when heroVariant is "homepage". Overrides the hero content
   * column's max-width in px — same reasoning as heroH1FontSize above.
   * Default (when unset) is 1080, wider than homepage's own 780 for the
   * same wrapping reason.
   */
  heroContentMaxWidth?: number;
  /**
   * Optional trailing portion of the H1 (e.g. the list of cities) that stays
   * inside the <h1> for SEO but is rendered on its own line as a smaller
   * subheader for visual balance. Kept in the H1 so crawlers/Ahrefs still read
   * the city names as part of the page's primary heading.
   */
  h1Cities?: string;
  /** Opt-in bold weight for the h1Cities subtitle text (default stays 500). */
  h1CitiesBold?: boolean;
  /**
   * Optional text inserted into the H1's DOM/text content right before the
   * visible h1Cities text, but visually hidden (e.g. the original "– " that
   * separated the location from the tagline). Keeps the exact original H1
   * text reconstructable for SEO/crawlers without showing on screen.
   */
  h1CitiesHiddenPrefix?: string;
  /**
   * Optional second bold line of the H1 (same size/weight as the first line,
   * separated by a literal line break) — e.g. a location line. Still inside
   * the <h1> for SEO. Distinct from h1Cities, which renders smaller.
   */
  h1Line2?: string;
  introH2?: string;
  introBody?: string;
  videos?: { label: string; src: string; poster?: string }[];
  featuresEyebrow?: string;
  featuresH2?: string;
  features?: { title: string; body: string; image?: string }[];
  /**
   * Optional single shared image for the whole features block, rendered
   * beside the eyebrow/heading/list instead of per-item cards. When set,
   * this replaces the per-item card/image layouts below.
   */
  featuresImage?: string;
  featuresImageAlt?: string;
  /**
   * Centered-title section of bordered service boxes (image on top, eyebrow,
   * H2 title, divider, CTA buttons, chevron bullet list, optional trailing
   * paragraphs) — replicates the WordPress "Marine / Boat Ceramic Coating
   * Services" 2-up card grid. Renders right after the features section.
   */
  serviceBoxes?: {
    h2: string;
    boxes: {
      image: string;
      imageAlt: string;
      eyebrow: string;
      title: string;
      bullets: string[];
      footer?: string[];
    }[];
  };
  includedH2?: string;
  included?: string[];
  stepsH2?: string;
  steps?: { title: string; body: string; image?: string }[];
  cardsH2?: string;
  cards?: { img: string; tag: string; title: string; href: string }[];
  pricingH2?: string;
  pricing?: { title: string; price: string; body: string; image?: string }[];
  gallery?: (string | { src: string; alt: string })[];
  faqs?: { q: string; a: string }[];
  crossTitle?: string;
  crossBody?: string;
  crossHref?: string;
  crossLabel?: string;
  /* --- additional section types --- */
  benefits?: { eyebrow?: string; h2: string; body?: string; items: { title: string; body: string }[] };
  whyChoose?: { h2: string; items: { title: string; body: string }[] };
  crossSell2?: { title: string; body: string; href: string; label: string };
  additionalSections?: { h2: string; body: string; items?: { title: string; body: string }[] }[];
  contentBlocks?: { h2: string; body: string; image: string; imageAlt: string; bullets?: string[] }[];
}

const CYAN = "#00BCD4";
const GUTTER = "clamp(20px, 5vw, 56px)";
const sectionPad = "clamp(56px, 7vw, 96px)";

const archivoBold: React.CSSProperties = {
  fontFamily: "'Archivo', sans-serif",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "-0.3px",
};

const manropeBody: React.CSSProperties = {
  margin: 0,
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 300,
  fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.82)",
};

const heroCtaBtn: React.CSSProperties = {
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

const heroCtaBtnOutline: React.CSSProperties = {
  ...heroCtaBtn,
  background: "transparent",
  border: `1px solid ${CYAN}`,
  color: CYAN,
  boxShadow: "none",
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const d = data;

  /* Check if any features/pricing/steps have images */
  const featuresHaveImages = d.features?.some((f) => f.image) ?? false;
  const pricingHasImages = d.pricing?.some((p) => p.image) ?? false;
  const matchHomepage = d.heroVariant === "homepage";
  const ctaBtnStyle: React.CSSProperties = matchHomepage
    ? { ...heroCtaBtn, fontSize: 14, padding: "18px 36px", boxShadow: "0 10px 34px rgba(0,188,212,0.36)" }
    : heroCtaBtn;
  const ctaBtnOutlineStyle: React.CSSProperties = matchHomepage
    ? { ...heroCtaBtnOutline, fontSize: 14, padding: "18px 36px" }
    : heroCtaBtnOutline;

  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: matchHomepage
            ? "100vh"
            : "clamp(420px, 72vh, 680px)",
          display: "flex",
          alignItems: matchHomepage ? "center" : "flex-end",
          overflow: "hidden",
          marginTop: -82,
          paddingTop: matchHomepage ? 82 : undefined,
        }}
      >
        <Image
          src={d.heroImg}
          alt={d.heroImgAlt || "PPF Clear Bra Denver Tint Ceramic Coating Paint Correction"}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: matchHomepage
              ? "linear-gradient(100deg, rgba(0,188,212,0.42) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.78) 100%)"
              : "linear-gradient(100deg, rgba(0,188,212,0.4) 0%, rgba(0,0,0,0.6) 58%, rgba(0,0,0,0.8) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: matchHomepage
              ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 42%)"
              : "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.15) 55%)",
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
          <div
            style={{
              maxWidth: matchHomepage ? (d.heroContentMaxWidth ?? 1080) : 1000,
              display: "flex",
              flexDirection: "column",
              gap: matchHomepage ? 26 : 18,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: matchHomepage ? "clamp(12px, 1.1vw, 14px)" : 12,
                fontWeight: d.eyebrowBold ? 700 : matchHomepage ? 500 : 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#32EEFF",
                lineHeight: matchHomepage ? 1.7 : undefined,
                maxWidth: undefined,
              }}
            >
              {d.eyebrow}
            </span>
            <hr
              style={{
                width: 64,
                height: 2,
                background: CYAN,
                border: "none",
                margin: 0,
              }}
            />
            <h1
              style={{
                margin: 0,
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: matchHomepage ? "-0.5px" : "-0.4px",
                fontSize: matchHomepage
                  ? d.heroH1FontSize ?? "clamp(2.2rem, 4.6vw, 4rem)"
                  : "clamp(2rem, 4.2vw, 3.6rem)",
                lineHeight: matchHomepage ? 0.98 : 1.02,
                textShadow: matchHomepage
                  ? "0 4px 40px rgba(0,0,0,0.5)"
                  : "0 3px 30px rgba(0,0,0,0.5)",
              }}
            >
              {d.h1}
              {d.h1Line2 && (
                <>
                  {/* Leading space is a real text node (not just visual) so
                      .textContent still has a word-boundary space here — a
                      bare <br> contributes nothing to .textContent. */}
                  {" "}
                  <br />
                  {d.h1Line2}
                </>
              )}
              {d.h1Cities && (
                <>
                  {/* Space preserved so the H1's text content stays a single
                      natural sentence for crawlers, even though the cities
                      render on their own line. */}
                  {" "}
                  {d.h1CitiesHiddenPrefix && (
                    <span
                      style={{
                        position: "absolute",
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0,0,0,0)",
                        whiteSpace: "nowrap",
                        border: 0,
                      }}
                    >
                      {d.h1CitiesHiddenPrefix}
                    </span>
                  )}
                  <span
                    style={{
                      display: "block",
                      marginTop: 14,
                      fontFamily: matchHomepage ? "'Archivo', sans-serif" : "'Manrope', sans-serif",
                      fontWeight: d.h1CitiesBold ? 700 : 500,
                      textTransform: "none",
                      letterSpacing: matchHomepage ? "0.02em" : "0.01em",
                      fontSize: matchHomepage
                        ? "clamp(1rem, 2vw, 1.6rem)"
                        : "clamp(0.95rem, 1.7vw, 1.35rem)",
                      lineHeight: matchHomepage ? 1.5 : 1.4,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {d.h1Cities}
                  </span>
                </>
              )}
            </h1>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
              <Link href="/free-quote" style={ctaBtnStyle}>
                Get A Free Quote
              </Link>
              <a href="tel:+13035208023" style={ctaBtnOutlineStyle}>
                Call (303) 520-8023
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RATINGS BAR */}
      <section style={{ background: "#0a0a0a", padding: "32px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  lineHeight: 1.2,
                }}
              >
                Serving THE Denver Metro And surrounding areas
              </h2>
            </div>
          </ScrollReveal>
          <ReviewBadges />
        </div>
      </section>

      {/* INTRO */}
      {(d.introH2 || d.introBody) && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <ScrollReveal>
            <div
              style={{
                maxWidth: 900,
                margin: "0 auto",
                padding: "0 clamp(20px, 5vw, 56px)",
              }}
            >
              {d.introH2 && (
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
                  {d.introH2}
                </h2>
              )}
              <hr
                style={{
                  width: 96,
                  height: 2,
                  background: "#00BCD4",
                  border: "none",
                  margin: "22px 0 26px",
                }}
              />
              {d.introBody && (
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
                  {d.introBody}
                </p>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* VIDEO SECTION */}
      {d.videos && d.videos.length > 0 && (
        <section style={{ background: "#000", padding: "clamp(40px, 5vw, 72px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 22,
                }}
              >
                {d.videos.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      borderRadius: 8,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      aspectRatio: "16/9",
                      background: "#111",
                    }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={v.poster}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        padding: "18px 20px",
                        zIndex: 2,
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
                        {v.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {d.features && d.features.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            {!d.featuresImage && (
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
                    {d.featuresEyebrow || "Why It Matters"}
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
                    {d.featuresH2 || "Key Features"}
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
            )}
            {d.featuresImage ? (
              /* Single shared image on the left; eyebrow/heading/divider/list on the right */
              <ScrollReveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(28px, 4vw, 56px)",
                    alignItems: "center",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 8, overflow: "hidden" }}>
                    <Image
                      src={d.featuresImage}
                      alt={d.featuresImageAlt || d.featuresH2 || "Front Range Detail Studio"}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#00BCD4",
                      }}
                    >
                      {d.featuresEyebrow || "Why It Matters"}
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
                      {d.featuresH2 || "Key Features"}
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
                    <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                      {d.features!.map((f, i) => (
                        <li key={i} style={{ ...manropeBody, marginBottom: 10 }}>
                          <strong style={{ color: "#fff" }}>{f.title}:</strong> {f.body}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ) : featuresHaveImages ? (
              /* Features with images: 2-column layout per item */
              <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                {d.features!.map((f, i) => (
                  <ScrollReveal key={i}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "clamp(20px, 3vw, 40px)",
                        alignItems: "center",
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        overflow: "hidden",
                      }}
                    >
                      {f.image && (
                        <div style={{ position: "relative", aspectRatio: "4/3", minHeight: 220 }}>
                          <Image src={f.image} alt={f.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                        </div>
                      )}
                      <div style={{ padding: f.image ? "24px 28px 24px 8px" : "28px 26px" }}>
                        <span
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: "rgba(0,188,212,0.12)",
                            border: "1px solid rgba(0,188,212,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#00BCD4",
                            fontFamily: "'Archivo', sans-serif",
                            fontWeight: 700,
                            fontSize: 15,
                            marginBottom: 12,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          style={{
                            margin: "0 0 10px",
                            fontFamily: "'Archivo', sans-serif",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.01em",
                            fontSize: "1.05rem",
                            lineHeight: 1.2,
                            color: "#fff",
                          }}
                        >
                          {f.title}
                        </h3>
                        <p
                          style={{
                            margin: 0,
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
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* Features without images: original grid cards */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 18,
                }}
              >
                {d.features!.map((f, i) => (
                  <ScrollReveal key={i}>
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
                      <span
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(0,188,212,0.12)",
                          border: "1px solid rgba(0,188,212,0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#00BCD4",
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.01em",
                          fontSize: "1.05rem",
                          lineHeight: 1.2,
                          color: "#fff",
                        }}
                      >
                        {f.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
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
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SERVICE BOXES — centered title + 2-up bordered cards (WP parity) */}
      {d.serviceBoxes && (
        <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            <ScrollReveal>
              <div style={{ textAlign: "center", marginBottom: 42 }}>
                <h2
                  style={{
                    ...archivoBold,
                    margin: 0,
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                    lineHeight: 1.12,
                  }}
                >
                  {d.serviceBoxes.h2}
                </h2>
                <hr
                  style={{
                    width: 96,
                    height: 2,
                    background: CYAN,
                    border: "none",
                    margin: "20px auto 0",
                  }}
                />
              </div>
            </ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
                gap: 18,
              }}
            >
              {d.serviceBoxes.boxes.map((box, i) => (
                <ScrollReveal key={i}>
                  <div
                    style={{
                      border: "1px solid rgba(255,255,255,0.16)",
                      borderRadius: 4,
                      overflow: "hidden",
                      background: "#111",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "4/3" }}>
                      <Image
                        src={box.image}
                        alt={box.imageAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                    <div style={{ padding: "clamp(16px, 1.6vw, 22px)", display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {box.eyebrow}
                      </span>
                      <h2
                        style={{
                          ...archivoBold,
                          margin: 0,
                          fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
                          lineHeight: 1.15,
                        }}
                      >
                        {box.title}
                      </h2>
                      <hr
                        style={{
                          width: 96,
                          height: 2,
                          background: CYAN,
                          border: "none",
                          margin: 0,
                        }}
                      />
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {box.bullets.map((b, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <svg
                              viewBox="0 0 24 24"
                              width={20}
                              height={20}
                              aria-hidden="true"
                              style={{ flexShrink: 0, marginTop: 2, fill: CYAN }}
                            >
                              <path d="M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z" />
                            </svg>
                            <span style={{ ...manropeBody, fontSize: "15px", lineHeight: 1.55 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {box.footer?.map((f, j) => (
                        <p key={j} style={{ ...manropeBody, fontSize: "15px", lineHeight: 1.55 }}>
                          {f}
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: 42,
                }}
              >
                <Link href="/free-quote" style={heroCtaBtn}>
                  Get A Free Quote
                </Link>
                <a href="tel:+13035208023" style={heroCtaBtnOutline}>
                  Call (303) 520-8023
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* INCLUDED CHECKLIST */}
      {d.included && d.included.length > 0 && (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  {d.includedH2 || "What\u2019s Included"}
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
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 14,
                }}
              >
                {d.included.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 6,
                      padding: "18px 20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#00BCD4",
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
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* PROCESS STEPS */}
      {d.steps && d.steps.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  marginBottom: 42,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#00BCD4",
                  }}
                >
                  The Process
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
                  {d.stepsH2 || "How It Works"}
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 18,
              }}
            >
              {d.steps.map((s, i) => (
                <ScrollReveal key={i}>
                  <div
                    style={{
                      position: "relative",
                      background: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 6,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {s.image && (
                      <div style={{ position: "relative", aspectRatio: "16/9", flexShrink: 0 }}>
                        <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 25vw" />
                      </div>
                    )}
                    <div style={{ padding: "30px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 900,
                          fontSize: "3.2rem",
                          lineHeight: 0.8,
                          color: "rgba(0,188,212,0.18)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.01em",
                          fontSize: "1.02rem",
                          lineHeight: 1.2,
                          color: "#fff",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 300,
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICE CARDS */}
      {d.cards && d.cards.length > 0 && (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  {d.cardsH2 || "Services"}
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {d.cards.map((c, i) => (
                <ScrollReveal key={i}>
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
                      style={{
                        objectFit: "cover",
                        transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.05) 60%)",
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
      )}

      {/* PRICING */}
      {d.pricing && d.pricing.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  {d.pricingH2 || "Pricing"}
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
            {pricingHasImages ? (
              /* Pricing with images: image on top, text below */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 22,
                }}
              >
                {d.pricing!.map((p, i) => (
                  <ScrollReveal key={i}>
                    <div
                      style={{
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      {p.image && (
                        <div style={{ position: "relative", aspectRatio: "4/3", flexShrink: 0 }}>
                          <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 33vw" />
                        </div>
                      )}
                      <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                        <h3
                          style={{
                            margin: 0,
                            fontFamily: "'Archivo', sans-serif",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            fontSize: "1.02rem",
                            lineHeight: 1.2,
                            color: "#fff",
                          }}
                        >
                          {p.title}
                        </h3>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: "1.5rem",
                            color: "#00BCD4",
                          }}
                        >
                          {p.price}
                        </span>
                        <p
                          style={{
                            margin: 0,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 300,
                            fontSize: 14,
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* Pricing without images: original text-only cards */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: 18,
                }}
              >
                {d.pricing!.map((p, i) => (
                  <ScrollReveal key={i}>
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
                          fontSize: "1.02rem",
                          lineHeight: 1.2,
                          color: "#fff",
                        }}
                      >
                        {p.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: "1.5rem",
                          color: "#00BCD4",
                        }}
                      >
                        {p.price}
                      </span>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 300,
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {p.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {d.gallery && d.gallery.length > 0 && (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  Recent Work
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
                  From The Studio
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
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 14,
                }}
              >
                {d.gallery.map((g, i) => {
                  const src = typeof g === "string" ? g : g.src;
                  const alt = typeof g === "string" ? "Gallery image from Front Range Detail Studio" : g.alt;
                  return (
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
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {d.benefits && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div style={{ marginBottom: 42, maxWidth: 680 }}>
                {d.benefits.eyebrow && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#00BCD4",
                    }}
                  >
                    {d.benefits.eyebrow}
                  </span>
                )}
                <h2
                  style={{
                    margin: d.benefits.eyebrow ? "12px 0 0" : 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                  }}
                >
                  {d.benefits.h2}
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
                {d.benefits.body && (
                  <p
                    style={{
                      margin: "20px 0 0",
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {d.benefits.body}
                  </p>
                )}
              </div>
            </ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 18,
              }}
            >
              {d.benefits.items.map((b, i) => (
                <ScrollReveal key={i}>
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
                        letterSpacing: "0.01em",
                        fontSize: "1.02rem",
                        lineHeight: 1.2,
                        color: "#00BCD4",
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE */}
      {d.whyChoose && (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  {d.whyChoose.h2}
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {d.whyChoose.items.map((w, i) => (
                <ScrollReveal key={i}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 6,
                      padding: "22px 24px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                        color: "#00BCD4",
                      }}
                    >
                      {w.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 300,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {w.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTENT BLOCKS - alternating image+text */}
      {d.contentBlocks && d.contentBlocks.length > 0 && (
        d.contentBlocks.map((block, i) => (
          <section key={i} style={{ background: i % 2 === 0 ? "#0d0d0d" : "#000", padding: `${sectionPad} 0` }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${GUTTER}` }}>
              <ScrollReveal>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(28px, 4vw, 56px)",
                  alignItems: "center",
                }}>
                  {/* Image - left on odd, right on even */}
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 8, overflow: "hidden" }}>
                      <Image src={block.image} alt={block.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                    </div>
                  </div>
                  {/* Text */}
                  <div>
                    <h2 style={{ ...archivoBold, fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)", margin: "0 0 12px" }}>{block.h2}</h2>
                    <hr style={{ width: 96, height: 2, background: CYAN, border: "none", margin: "0 0 20px" }} />
                    <p style={{ ...manropeBody }}>{block.body}</p>
                    {block.bullets && (
                      <ul style={{ margin: "16px 0 0", padding: "0 0 0 20px", listStyle: "disc" }}>
                        {block.bullets.map((b, j) => (
                          <li key={j} style={{ ...manropeBody, marginBottom: 8 }}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        ))
      )}

      {/* ADDITIONAL SECTIONS */}
      {d.additionalSections && d.additionalSections.length > 0 &&
        d.additionalSections.map((sec, i) => (
          <section
            key={i}
            style={{
              background: i % 2 === 0 ? "#0d0d0d" : "#000",
              padding: "clamp(56px, 7vw, 96px) 0",
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  maxWidth: sec.items ? 1280 : 900,
                  margin: "0 auto",
                  padding: "0 clamp(20px, 5vw, 56px)",
                }}
              >
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
                  {sec.h2}
                </h2>
                <hr
                  style={{
                    width: 96,
                    height: 2,
                    background: "#00BCD4",
                    border: "none",
                    margin: "22px 0 26px",
                  }}
                />
                {sec.body && (
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
                    {sec.body}
                  </p>
                )}
                {sec.items && sec.items.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: 18,
                      marginTop: sec.body ? 28 : 0,
                    }}
                  >
                    {sec.items.map((item, j) => (
                      <div
                        key={j}
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
                            letterSpacing: "0.01em",
                            fontSize: "1.05rem",
                            lineHeight: 1.2,
                            color: "#00BCD4",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 300,
                            fontSize: "14.5px",
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </section>
        ))}

      {/* FAQ */}
      {d.faqs && d.faqs.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  FAQ
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
                  Frequently Asked Questions
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
            <ScrollReveal>
              <FAQ
                items={d.faqs.map((q) => ({
                  question: q.q,
                  answer: q.a,
                }))}
              />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CROSS SELL */}
      {d.crossTitle && (
        <section style={{ background: "#000", padding: "clamp(40px, 5vw, 72px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                  <h2
                    style={{
                      margin: "0 0 10px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                      color: "#fff",
                    }}
                  >
                    {d.crossTitle}
                  </h2>
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
                    {d.crossBody}
                  </p>
                </div>
                <Link
                  href={d.crossHref || "#"}
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
                    whiteSpace: "nowrap",
                    transition: "background .2s ease, transform .2s ease",
                  }}
                >
                  {d.crossLabel || "Learn More"}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CROSS SELL 2 */}
      {d.crossSell2 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(40px, 5vw, 72px) 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
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
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                      color: "#fff",
                    }}
                  >
                    {d.crossSell2.title}
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
                    {d.crossSell2.body}
                  </p>
                </div>
                <Link
                  href={d.crossSell2.href}
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
                    whiteSpace: "nowrap",
                    transition: "background .2s ease, transform .2s ease",
                  }}
                >
                  {d.crossSell2.label}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* PARTNERS */}
      <PartnersStrip />

      {/* DENVER CTA */}
      <DenverCTA />

      {/* REVIEWS */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 56px)",
          }}
        >
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
                Front Range Detail Studio client Reviews
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
          <ReviewBadges />
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA / QUOTE */}
      <section
        id="quote"
        style={{
          background: "#0d0d0d",
          padding: "clamp(64px, 8vw, 110px) 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          scrollMarginTop: 90,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 56px)",
          }}
        >
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
                  gap: 28,
                }}
              >
                {/* Connect with Us */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 14px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Connect with Us
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <a
                      href="tel:+13035208023"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.3rem",
                        color: "#00BCD4",
                        textDecoration: "none",
                      }}
                    >
                      (303) 520-8023
                    </a>
                    <a
                      href="mailto:info@frontrangedetailstudio.com"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      info@frontrangedetailstudio.com
                    </a>
                  </div>
                </div>
                {/* Business Hours */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Business Hours
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Monday &ndash; Sunday: By Appointment Only
                  </p>
                </div>
                {/* Denver Location */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Denver Location
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    12559 E Broncos Pkwy, Centennial, CO 80112
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h2
                  style={{
                    margin: "0 0 20px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Send A Quick Quote Form
                </h2>
                <QuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
