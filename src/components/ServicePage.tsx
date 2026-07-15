import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnersStrip } from "@/components/PartnersStrip";
import { DenverCTA } from "@/components/DenverCTA";
import { ServiceCard } from "@/components/ServiceCard";
import { VehicleTile } from "@/components/VehicleTile";

export interface ServicePageData {
  heroImg: string;
  heroImgAlt?: string;
  eyebrow: string;
  /**
   * Opt-out: when true, hides the sitewide "Serving the Denver Metro..."
   * ratings bar that normally renders unconditionally right after the
   * hero. Set this for pages where WordPress has no such section (e.g.
   * Auto Detailing). Default (unset) keeps every other page unchanged.
   */
  hideRatingsBar?: boolean;
  /** Opt-in bold weight for the hero eyebrow text (default stays regular). */
  eyebrowBold?: boolean;
  h1: string;
  /**
   * Opt-in: when "homepage", the hero's fonts/spacing match HomeHero.tsx
   * (larger H1, homepage eyebrow sizing, Archivo-based subtitle, larger
   * buttons) instead of the default ServicePage hero look. Only affects
   * pages that set this — every other page's hero is unchanged.
   *
   * "split" replaces the full-bleed image-cover hero entirely with a plain
   * two-column layout (optional logo + H1 + heroH3 + heroIntroBody + CTA
   * buttons on the left, a plain contained photo on the right, no dark
   * gradient overlay) — for pages like System X whose WordPress source has
   * no traditional cover-image hero at all.
   */
  heroVariant?: "homepage" | "split";
  /** heroVariant "split" only: optional logo image rendered above the H1. */
  heroLogo?: string;
  heroLogoAlt?: string;
  /** heroVariant "split" only: overrides the H1's text color (default "#fff"). */
  heroH1Color?: string;
  /** heroVariant "split" only: real H3 subheading rendered directly below the H1. */
  heroH3?: string;
  /** heroVariant "split" only: intro paragraph rendered below heroH3. */
  heroIntroBody?: string;
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
   * Opt-in: suppresses the automatic word-boundary space normally inserted
   * before h1CitiesHiddenPrefix/h1Cities (correct for a separator like an
   * em dash that needs a space on both sides). Set this when the hidden
   * prefix must sit directly against the preceding text instead (e.g. a
   * period that closes the previous sentence) — bake the trailing space
   * into h1CitiesHiddenPrefix itself in that case. Default (unset) keeps
   * every other page's spacing unchanged.
   */
  h1CitiesNoLeadingSpace?: boolean;
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
  /** Optional paragraph rendered between the divider and the bullet list
   * (featuresImage layout only) — for WordPress content that opens with
   * intro prose before the list. */
  featuresIntro?: string;
  /** Optional small bold heading rendered between featuresIntro and the
   * bullet list (featuresImage layout only). */
  featuresListHeading?: string;
  features?: { title?: string; body: string; image?: string }[];
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
    /** Optional centered title above the grid. Omit when the page's own
     * intro section (e.g. introImageSection) already carries this heading. */
    h2?: string;
    /** Optional centered paragraph rendered between the h2/divider and the
     * boxes grid — for WordPress intro copy that precedes the card grid. */
    body?: string;
    boxes: {
      image: string;
      imageAlt: string;
      eyebrow: string;
      title: string;
      bullets: string[];
      footer?: string[];
    }[];
    /** Opt-in: when true, uses a narrower per-card minimum width so 5
     * boxes fit on one row at desktop widths instead of wrapping a lone
     * box onto its own row. Still wraps gracefully on narrower viewports.
     * Default (unset) keeps the wider minimum, correct for counts that
     * already divide evenly into a row (e.g. 4). */
    compact?: boolean;
  };
  /**
   * Large image on one side, one or more stacked heading+list groups on the
   * other (each group: H2, divider, "Title: body" items), with CTA buttons
   * at the bottom of the text column — replicates the WordPress pattern
   * used for combined "Why Choose" + "Process" sections. Renders right
   * after serviceBoxes.
   */
  imageTextSection?: {
    image: string;
    imageAlt: string;
    /** Optional small uppercase caption above the first group's heading. */
    eyebrow?: string;
    groups: {
      h2: string;
      /** Heading tag for this group (default "h2") — set "h3" for a
       * subheading nested under a preceding group's H2, matching WordPress's
       * real heading level (e.g. "Why Choose Us?" under the intro H2). */
      tag?: "h2" | "h3";
      /**
       * Each item renders one of three ways, in priority order:
       * - `bullets`: a `<ul>` list (WordPress content with a real bullet list).
       *   Each bullet is either a plain string, or `{ title, body }` to bold
       *   a lead-in phrase before the rest of the bullet's text.
       * - `lines`: consecutive plain paragraphs, one per string (WordPress
       *   content with several separate, non-bulleted lines)
       * - `body` (with optional `title`): a single paragraph, bolded
       *   "Title:" prefix when title is set — the original flowing-prose
       *   format.
       */
      items: { title?: string; body?: string; bullets?: (string | { title: string; body: string })[]; lines?: string[] }[];
    }[];
  };
  /**
   * Repeatable version of imageTextSection — one image + one heading + a
   * list of items + CTA buttons per entry, with independently choosable
   * image placement per entry (unlike imageTextSection, which always
   * grid-places its image first/left and supports multiple *grouped*
   * headings sharing that one image). Use this when a page needs two or
   * more standalone image+text+button sections with different images and
   * alternating sides (e.g. Auto Detailing's "Specialized Auto Detailing
   * Services" — text left/image right — immediately followed by "Why
   * Choose Front Range Detail Studio?" — image left/text right). Renders
   * right after imageTextSection, in array order.
   */
  imageTextSections?: {
    image?: string;
    imageAlt?: string;
    /** Renders an autoplaying, muted, looping video instead of the static
     * Image — for WordPress sections that embed a video instead of a
     * photo (e.g. "Protect Your Vehicle..."). Takes priority over `image`. */
    videoSrc?: string;
    /** Default "left" (image first/left, text second/right). */
    imageSide?: "left" | "right";
    /** Optional small uppercase caption above the H2 (WordPress renders
     * this with two small chevron icons before it — omitted here as the
     * text alone carries the same meaning). */
    eyebrow?: string;
    h2: string;
    items: { title?: string; body?: string; bullets?: (string | { title: string; body: string })[]; lines?: string[] }[];
    /** Opt-out: hides the "Get A Free Quote"/"Call" buttons this section
     * renders by default — for WordPress sections lower on a page that
     * repeat the same CTA redundantly. Default (unset) keeps buttons shown. */
    hideButtons?: boolean;
    /** Opt-in: when "afterPartners", this entry renders in a second batch
     * right after the PARTNERS section instead of its default position
     * before SERVICES GRID — for pages (like PPF) whose WordPress source
     * has some image+text sections early and others much further down,
     * after Reviews/FAQ/Partners. Unset (default) keeps every other page's
     * ordering unchanged. */
    position?: "afterPartners";
  }[];
  /**
   * Image-left / text-right intro block (eyebrow, H2, single body
   * paragraph, no CTA buttons) — replicates the WordPress pattern used to
   * introduce a section before a serviceBoxes grid. Renders right before
   * serviceBoxes.
   */
  introImageSection?: {
    image: string;
    imageAlt: string;
    eyebrow?: string;
    h2: string;
    body: string;
  };
  /**
   * Reuses the homepage's "Denver's Most Trusted Vehicle Aesthetic Experts"
   * services grid (same H2/divider treatment, same ServiceCard component
   * with hover-video behavior) on a service page. Renders right after
   * imageTextSection.
   */
  servicesGrid?: {
    h2: string;
    cards: { title: string; subtitle?: string; image: string; href: string; videoSrc?: string }[];
  };
  /**
   * Optional page-specific override for the shared DenverCTA section
   * (body copy, an extra h3+paragraph, and/or the 6-image gallery).
   * Unset fields fall back to DenverCTA's own generic defaults, so pages
   * that don't set this render exactly as before.
   */
  denverCta?: {
    body?: string;
    h3?: string;
    h3Body?: string;
    images?: { src: string; alt: string }[];
  };
  /**
   * Opt-in: when "afterServicesGrid", the DenverCTA section renders
   * immediately after servicesGrid instead of its default position near
   * the bottom of the page. Unset (default) keeps DenverCTA where it's
   * always been, so every other page is unaffected.
   */
  denverCtaPosition?: "afterServicesGrid";
  /**
   * Opt-out: when true, hides the DenverCTA section entirely. Unlike
   * denverCtaPosition, this fully removes it — for pages (like WordPress's
   * boat-detailing) that have no "1st Choice in Paint Protection Film"
   * section at all. Default (unset) keeps it shown on every other page.
   */
  hideDenverCta?: boolean;
  /**
   * Opt-in: when "afterServiceBoxes", the FEATURES section (featuresImage/
   * featuresEyebrow/featuresH2/features) renders immediately after
   * serviceBoxes instead of its default position before it. Unset (default)
   * keeps every other page's ordering unchanged.
   */
  featuresPosition?: "afterServiceBoxes";
  /**
   * Opt-in: when "afterServicesGrid", the PartnersStrip section renders
   * immediately after DenverCTA (which must also be positioned there)
   * instead of its default position near the bottom of the page. Unset
   * (default) keeps PartnersStrip where it's always been, so every other
   * page is unaffected.
   */
  partnersStripPosition?: "afterServicesGrid";
  includedH2?: string;
  /** Optional small uppercase caption above includedH2. */
  includedEyebrow?: string;
  /** Optional companion image — switches the section from a centered
   * checklist grid to a 2-column image+text layout (bold title + separate
   * description paragraph per item), matching WordPress's real "What's
   * Included" layout. Default (unset) keeps the checklist-grid layout. */
  includedImage?: string;
  includedImageAlt?: string;
  /** Default "right" when includedImage is set. */
  includedImageSide?: "left" | "right";
  included?: (string | { title: string; body: string })[];
  stepsH2?: string;
  /**
   * Overrides the process section's small uppercase eyebrow (default
   * "The Process"). Pass an empty string to suppress it entirely — for
   * pages like WordPress's Window Tint, whose real steps section has no
   * eyebrow line at all and reads oddly with "The Process" stacked right
   * above a heading that already contains the word "Process".
   */
  stepsEyebrow?: string;
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
  additionalSections?: {
    h2: string;
    body: string;
    items?: { title: string; body: string }[];
    /**
     * Optional grid of vehicle brand logo tiles below the body copy —
     * replicates the homepage's "Protection For All Brands and Models..."
     * section verbatim (same VehicleTile component/styling, same 1280
     * container width with an 880-wide heading/body column). Pass logo
     * filenames exactly as used on the homepage (e.g. "BMW-logo.svg"),
     * resolved against /public/images/logos/.
     */
    vehicleLogos?: string[];
  }[];
  /**
   * Opt-out: when true, hides the standard Reviews section (unlike most
   * fields above, Reviews normally renders unconditionally). Default
   * (unset) keeps every other page's Reviews section unchanged.
   */
  hideReviews?: boolean;
  /**
   * Opt-in: when "afterSteps", the Reviews section renders immediately
   * after PROCESS STEPS instead of its default position near the bottom of
   * the page — for pages (like PPF) whose WordPress source shows reviews
   * right after the process steps, well before FAQ/Partners. Unset
   * (default) keeps every other page's ordering unchanged.
   */
  reviewsPosition?: "afterSteps" | "afterFAQ";
  /**
   * Opt-out: when true, hides the standard "Send A Quick Quote Form"
   * section (unlike most fields above, it normally renders
   * unconditionally). Default (unset) keeps every other page unchanged.
   */
  hideQuoteForm?: boolean;
  /**
   * Opt-in: when "afterContentBlocks", the CTA/QUOTE section (Connect with
   * Us/Business Hours/Denver Location + Send A Quick Quote Form) renders
   * immediately after contentBlocks instead of its default position at the
   * very bottom of the page. Unset (default) keeps every other page's
   * ordering unchanged.
   */
  quoteFormPosition?: "afterContentBlocks";
  contentBlocks?: { h2: string; body: string; image: string; imageAlt: string; bullets?: string[] }[];
  /**
   * Centered logo + H2 + a horizontal row of bordered icon cards —
   * replicates WordPress's "Why Have Us Install System X On Your Vehicle?"
   * section. Renders right after the FEATURES section.
   */
  iconCardsLogo?: string;
  iconCardsLogoAlt?: string;
  iconCardsH2?: string;
  iconCards?: { icon: "medal" | "flag" | "spray"; title: string; body: string }[];
  /**
   * Symmetrical product-grid section — two stacked text+image pairs on the
   * left, a large centered photo, two stacked image+text pairs on the
   * right. Replicates WordPress's System X product layout (Glass/Renew on
   * the left, a car photo in the middle, Revive/Interior on the right).
   * Renders right after CONTENT BLOCKS.
   */
  productShowcase?: {
    centerImage: string;
    centerImageAlt: string;
    leftItems: { h2: string; h3?: string; body: string; image: string; imageAlt: string }[];
    rightItems: { h2: string; h3?: string; body: string; image: string; imageAlt: string }[];
  };
}

const ICON_PATHS: Record<string, string> = {
  medal:
    "m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z",
  spray:
    "M320-80q-33 0-56.5-23.5T240-160v-172q0-74 21-142.5T327-611q-38-9-62.5-41T240-724v-42q0-48 41.5-80.5T368-874l356 35q17 2 26.5 13.5T760-799v119q0 15-10.5 26.5T724-640l-36 4q14 49 37 88t55 56l-40 70q-53-31-82-85.5T612-629l-44 4q8 50 30.5 101t45.5 92q18 32 27 67t9 71v134q0 33-23.5 56.5T600-80H320Zm0-676v32q0 18 13 29t31 9l316-30v-48l-316-30q-18-2-31 9t-13 29Zm0 596h280v-134q0-26-6.5-51T574-393q-31-54-54-111.5T488-617l-60 5-26 34q-40 53-61 116.5T320-332v172Zm0 0h280-280Z",
};

function IconCardIcon({ icon }: { icon: "medal" | "flag" | "spray" }) {
  if (icon === "flag") {
    return (
      <svg viewBox="0 0 7410 3900" width={56} height={30} aria-hidden="true">
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path stroke="#fff" strokeWidth={300} d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 -960 960 960" width={40} height={40} fill="#c22929" aria-hidden="true">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}

const CYAN = "#00BCD4";
const GUTTER = "clamp(20px, 5vw, 56px)";
const sectionPad = "clamp(56px, 7vw, 96px)";

/** Renders a bullet's content — a plain string, or a bold lead-in phrase
 * followed by the rest of the bullet's text (WordPress's "**Title** —
 * body" bullet pattern). */
function BulletContent({ bullet }: { bullet: string | { title: string; body: string } }) {
  if (typeof bullet === "string") return <>{bullet}</>;
  return (
    <>
      <strong style={{ color: "#fff", fontWeight: 700 }}>{bullet.title}</strong> — {bullet.body}
    </>
  );
}

function ImageTextSectionsList({ sections }: { sections: NonNullable<ServicePageData["imageTextSections"]> }) {
  return (
    <>
      {sections.map((sec, si) => {
        const media = sec.videoSrc ? (
          <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={sec.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={sec.image!}
            alt={sec.imageAlt || ""}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width:768px) 100vw, 50vw"
          />
        );
        return (
          <section key={si} style={{ background: si % 2 === 0 ? "#0d0d0d" : "#000", padding: `${sectionPad} 0` }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
              <ScrollReveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(28px, 4vw, 56px)",
                    alignItems: "stretch",
                  }}
                >
                  {sec.imageSide !== "right" && (
                    <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
                      {media}
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
                    {sec.eyebrow && (
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "#00BCD4",
                        }}
                      >
                        {sec.eyebrow}
                      </span>
                    )}
                    <h2
                      style={{
                        ...archivoBold,
                        margin: 0,
                        fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
                        lineHeight: 1.15,
                      }}
                    >
                      {sec.h2}
                    </h2>
                    <hr style={{ width: 96, height: 2, background: CYAN, border: "none", margin: 0 }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {sec.items.map((item, ii) =>
                        item.bullets || item.lines ? (
                          <div key={ii}>
                            {item.title && (
                              <p style={{ ...manropeBody, margin: "0 0 8px" }}>
                                <strong style={{ color: "#fff", fontWeight: 700 }}>{item.title}</strong>
                              </p>
                            )}
                            {item.bullets ? (
                              <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                                {item.bullets.map((b, bi) => (
                                  <li key={bi} style={{ ...manropeBody, marginBottom: 6 }}><BulletContent bullet={b} /></li>
                                ))}
                              </ul>
                            ) : (
                              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {item.lines!.map((l, li) => (
                                  <p key={li} style={manropeBody}>{l}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <p key={ii} style={manropeBody}>
                            {item.title ? (
                              <>
                                <strong style={{ color: "#fff", fontWeight: 700 }}>{item.title}:</strong>
                                <br />
                              </>
                            ) : null}
                            {item.body}
                          </p>
                        )
                      )}
                    </div>
                    {!sec.hideButtons && (
                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
                        <Link href="/free-quote" style={heroCtaBtn}>
                          Get A Free Quote
                        </Link>
                        <a href="tel:+13035208023" style={heroCtaBtnOutline}>
                          Call (303) 520-8023
                        </a>
                      </div>
                    )}
                  </div>
                  {sec.imageSide === "right" && (
                    <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
                      {media}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}
    </>
  );
}

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
  fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
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

  /* Reviews. Rendered near the bottom of the page by default, or right
     after PROCESS STEPS when reviewsPosition is "afterSteps". */
  const reviewsSection = (
    <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
      <div
        style={{
          maxWidth: 1440,
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
                fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
        <ReviewCarousel />
      </div>
    </section>
  );

  /* Connect with Us/Business Hours/Denver Location + Send A Quick Quote
     Form. Rendered at the bottom of the page by default, or right after
     CONTENT BLOCKS when quoteFormPosition is "afterContentBlocks". */
  const quoteFormSection = (
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
          maxWidth: 1440,
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
  );

  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      {/* HERO */}
      {d.heroVariant === "split" ? (
        <section
          style={{
            position: "relative",
            marginTop: -82,
            paddingTop: "clamp(120px, 14vw, 160px)",
            paddingBottom: sectionPad,
            background: "#000",
          }}
        >
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}`, width: "100%" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(28px, 4vw, 56px)",
                alignItems: "center",
              }}
            >
              <div>
                {d.heroLogo && (
                  <div style={{ position: "relative", width: 180, height: 70, marginBottom: 4 }}>
                    <Image src={d.heroLogo} alt={d.heroLogoAlt || ""} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
                  </div>
                )}
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "-0.4px",
                    fontSize: "clamp(2.4rem, 5vw, 4rem)",
                    lineHeight: 1,
                    color: d.heroH1Color || "#fff",
                  }}
                >
                  {d.h1}
                </h1>
                {d.heroH3 && (
                  <h3
                    style={{
                      margin: "6px 0 0",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
                      lineHeight: 1,
                      color: "#fff",
                    }}
                  >
                    {d.heroH3}
                  </h3>
                )}
                {d.heroIntroBody && (
                  <p style={{ ...manropeBody, margin: "20px 0 0", color: "rgba(255,255,255,0.85)" }}>{d.heroIntroBody}</p>
                )}
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
                  <Link href="/free-quote" style={heroCtaBtn}>Get A Free Quote</Link>
                  <a href="tel:+13035208023" style={heroCtaBtnOutline}>Call (303) 520-8023</a>
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "1/1", minHeight: 320, borderRadius: 8, overflow: "hidden" }}>
                <Image src={d.heroImg} alt={d.heroImgAlt || ""} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>
      ) : (
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
            maxWidth: 1440,
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
                      render on their own line. Skippable via
                      h1CitiesNoLeadingSpace for separators (e.g. a period)
                      that must sit directly against the preceding text —
                      bake the trailing space into h1CitiesHiddenPrefix
                      itself in that case. */}
                  {!d.h1CitiesNoLeadingSpace && " "}
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
      )}

      {/* RATINGS BAR */}
      {!d.hideRatingsBar && (
      <section style={{ background: "#0a0a0a", padding: "32px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
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
      )}

      {/* INTRO */}
      {(d.introH2 || d.introBody) && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <ScrollReveal>
            <div
              style={{
                maxWidth: 980,
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
                    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
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
              maxWidth: 1440,
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
      {d.featuresPosition !== "afterServiceBoxes" && d.features && d.features.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            {!d.featuresImage && (
              <ScrollReveal>
                <div style={{ marginBottom: 42, maxWidth: 760 }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#00BCD4",
                    }}
                  >
                    {d.featuresEyebrow !== "" && (d.featuresEyebrow || "Why It Matters")}
                  </span>
                  <h2
                    style={{
                      margin: "12px 0 0",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "-0.3px",
                      fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                  <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
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
                      {d.featuresEyebrow !== "" && (d.featuresEyebrow || "Why It Matters")}
                    </span>
                    <h2
                      style={{
                        margin: "12px 0 0",
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "-0.3px",
                        fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                    {d.featuresIntro && (
                      <p style={{ ...manropeBody, margin: "0 0 20px" }}>{d.featuresIntro}</p>
                    )}
                    {d.featuresListHeading && (
                      <p style={{ ...manropeBody, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
                        {d.featuresListHeading}
                      </p>
                    )}
                    <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                      {d.features!.map((f, i) => (
                        <li key={i} style={{ ...manropeBody, marginBottom: 10 }}>
                          {f.title ? <strong style={{ color: "#fff" }}>{f.title}: </strong> : null}
                          {f.body}
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
                          <Image src={f.image} alt={f.title || "Front Range Detail Studio"} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
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

      {/* ICON CARDS — centered logo + H2 + horizontal row of bordered icon cards */}
      {d.iconCards && d.iconCards.length > 0 && (
        <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            <ScrollReveal>
              <div style={{ textAlign: "center", marginBottom: 44 }}>
                {d.iconCardsLogo && (
                  <div style={{ position: "relative", width: 200, height: 80, margin: "0 auto 20px" }}>
                    <Image src={d.iconCardsLogo} alt={d.iconCardsLogoAlt || ""} fill style={{ objectFit: "contain" }} />
                  </div>
                )}
                {d.iconCardsH2 && (
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "-0.3px",
                      fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                    }}
                  >
                    {d.iconCardsH2}
                  </h2>
                )}
              </div>
            </ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {d.iconCards.map((card, i) => (
                <ScrollReveal key={i}>
                  <div
                    style={{
                      border: `1px solid ${CYAN}`,
                      borderRadius: 4,
                      padding: "clamp(28px, 3vw, 48px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 14,
                      height: "100%",
                    }}
                  >
                    <IconCardIcon icon={card.icon} />
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "1.05rem",
                        color: "#fff",
                      }}
                    >
                      {card.title}
                    </p>
                    <p style={{ ...manropeBody, fontSize: "0.95rem" }}>{card.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICE BOXES — centered title + 2-up bordered cards (WP parity) */}
      {/* INTRO IMAGE SECTION — image one side, eyebrow/H2/body the other, no buttons */}
      {d.introImageSection && (
        <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(28px, 4vw, 56px)",
                  alignItems: "stretch",
                }}
              >
                <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
                  <Image
                    src={d.introImageSection.image}
                    alt={d.introImageSection.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {d.introImageSection.eyebrow && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#00BCD4",
                      }}
                    >
                      {d.introImageSection.eyebrow}
                    </span>
                  )}
                  <h2
                    style={{
                      ...archivoBold,
                      margin: d.introImageSection.eyebrow ? "12px 0 0" : 0,
                      fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
                      lineHeight: 1.15,
                    }}
                  >
                    {d.introImageSection.h2}
                  </h2>
                  <hr
                    style={{
                      width: 96,
                      height: 2,
                      background: CYAN,
                      border: "none",
                      margin: "20px 0",
                    }}
                  />
                  <p style={manropeBody}>{d.introImageSection.body}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {d.serviceBoxes && (
        <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            {d.serviceBoxes.h2 && (
            <ScrollReveal>
              <div style={{ textAlign: "center", marginBottom: 42 }}>
                <h2
                  style={{
                    ...archivoBold,
                    margin: 0,
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
            )}
            {d.serviceBoxes.body && (
              <ScrollReveal>
                <p
                  style={{
                    ...manropeBody,
                    maxWidth: 760,
                    margin: "0 auto 32px",
                    textAlign: "center",
                    fontSize: "16px",
                    lineHeight: 1.7,
                  }}
                >
                  {d.serviceBoxes.body}
                </p>
              </ScrollReveal>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${d.serviceBoxes.compact ? 160 : 270}px), 1fr))`,
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


      {d.featuresPosition === "afterServiceBoxes" && d.features && d.features.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            {!d.featuresImage && (
              <ScrollReveal>
                <div style={{ marginBottom: 42, maxWidth: 760 }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#00BCD4",
                    }}
                  >
                    {d.featuresEyebrow !== "" && (d.featuresEyebrow || "Why It Matters")}
                  </span>
                  <h2
                    style={{
                      margin: "12px 0 0",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "-0.3px",
                      fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                  <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
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
                      {d.featuresEyebrow !== "" && (d.featuresEyebrow || "Why It Matters")}
                    </span>
                    <h2
                      style={{
                        margin: "12px 0 0",
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "-0.3px",
                        fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                    {d.featuresIntro && (
                      <p style={{ ...manropeBody, margin: "0 0 20px" }}>{d.featuresIntro}</p>
                    )}
                    {d.featuresListHeading && (
                      <p style={{ ...manropeBody, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
                        {d.featuresListHeading}
                      </p>
                    )}
                    <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                      {d.features!.map((f, i) => (
                        <li key={i} style={{ ...manropeBody, marginBottom: 10 }}>
                          {f.title ? <strong style={{ color: "#fff" }}>{f.title}: </strong> : null}
                          {f.body}
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
                          <Image src={f.image} alt={f.title || "Front Range Detail Studio"} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
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

      {/* IMAGE + TEXT SECTION — large image one side, stacked heading/list groups + CTA the other */}
      {d.imageTextSection && (
        <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(28px, 4vw, 56px)",
                  alignItems: "stretch",
                }}
              >
                <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
                  <Image
                    src={d.imageTextSection.image}
                    alt={d.imageTextSection.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {d.imageTextSection.eyebrow && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#00BCD4",
                        marginBottom: -16,
                      }}
                    >
                      {d.imageTextSection.eyebrow}
                    </span>
                  )}
                  {d.imageTextSection.groups.map((group, gi) => {
                    const HeadingTag = group.tag === "h3" ? "h3" : "h2";
                    return (
                    <div key={gi}>
                      <HeadingTag
                        style={{
                          ...archivoBold,
                          margin: 0,
                          fontSize: group.tag === "h3" ? "clamp(1.2rem, 1.7vw, 1.5rem)" : "clamp(1.4rem, 2vw, 1.8rem)",
                          lineHeight: 1.2,
                        }}
                      >
                        {group.h2}
                      </HeadingTag>
                      <hr
                        style={{
                          width: 96,
                          height: 2,
                          background: CYAN,
                          border: "none",
                          margin: "12px 0 20px",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {group.items.map((item, ii) =>
                          item.bullets || item.lines ? (
                            <div key={ii}>
                              {item.title && (
                                <p style={{ ...manropeBody, margin: "0 0 8px" }}>
                                  <strong style={{ color: "#fff", fontWeight: 700 }}>{item.title}</strong>
                                </p>
                              )}
                              {item.bullets ? (
                                <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                                  {item.bullets.map((b, bi) => (
                                    <li key={bi} style={{ ...manropeBody, marginBottom: 6 }}><BulletContent bullet={b} /></li>
                                  ))}
                                </ul>
                              ) : (
                                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  {item.lines!.map((l, li) => (
                                    <p key={li} style={manropeBody}>{l}</p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <p key={ii} style={manropeBody}>
                              {item.title ? (
                                <>
                                  <strong style={{ color: "#fff", fontWeight: 700 }}>{item.title}:</strong>
                                  <br />
                                </>
                              ) : null}
                              {item.body}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                    );
                  })}
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
                    <Link href="/free-quote" style={heroCtaBtn}>
                      Get A Free Quote
                    </Link>
                    <a href="tel:+13035208023" style={heroCtaBtnOutline}>
                      Call (303) 520-8023
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* REPEATABLE IMAGE + TEXT SECTIONS — same visual language as
          imageTextSection above, but one image+heading+items+buttons per
          array entry with independently choosable image side. */}
      {d.imageTextSections && (
        <ImageTextSectionsList sections={d.imageTextSections.filter((sec) => sec.position !== "afterPartners")} />
      )}

      {/* SERVICES GRID (reused verbatim from the homepage) */}
      {d.servicesGrid && (
        <section style={{ background: "#0d0d0d", padding: "clamp(64px, 8vw, 110px) 0" }}>
          {/* Container intentionally kept at 1280 (not the sitewide 1440) so this
              grid stays a 3x2 layout matching the homepage exactly. */}
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${GUTTER}` }}>
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
                  {d.servicesGrid.h2}
                </h2>
                <hr style={{ width: 96, height: 2, background: CYAN, border: "none", margin: "22px 0 0" }} />
              </div>
            </ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 22,
              }}
            >
              {d.servicesGrid.cards.map((card) => (
                <ScrollReveal key={card.href}>
                  <ServiceCard {...card} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {!d.hideDenverCta && d.denverCtaPosition === "afterServicesGrid" && <DenverCTA {...d.denverCta} />}
      {d.partnersStripPosition === "afterServicesGrid" && <PartnersStrip />}

      {/* INCLUDED CHECKLIST */}
      {d.included && d.included.length > 0 && (
        d.includedImage ? (
          <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
              <ScrollReveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(28px, 4vw, 56px)",
                    alignItems: "stretch",
                  }}
                >
                  {d.includedImageSide !== "left" && (
                    <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden", order: 1 }}>
                      <Image src={d.includedImage} alt={d.includedImageAlt || ""} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, order: d.includedImageSide !== "left" ? 0 : 1 }}>
                    {d.includedEyebrow && (
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "#00BCD4",
                        }}
                      >
                        {d.includedEyebrow}
                      </span>
                    )}
                    <h2
                      style={{
                        ...archivoBold,
                        margin: 0,
                        fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
                        lineHeight: 1.15,
                      }}
                    >
                      {d.includedH2 || "What\u2019s Included"}
                    </h2>
                    <hr style={{ width: 96, height: 2, background: CYAN, border: "none", margin: 0 }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {d.included.map((item, i) =>
                        typeof item === "string" ? (
                          <p key={i} style={manropeBody}>{item}</p>
                        ) : (
                          <p key={i} style={manropeBody}>
                            <strong style={{ color: "#fff", fontWeight: 700 }}>{item.title}:</strong>
                            <br />
                            {item.body}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  {d.includedImageSide === "left" && (
                    <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
                      <Image src={d.includedImage} alt={d.includedImageAlt || ""} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>
        ) : (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1100,
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
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                      {typeof item === "string" ? item : `${item.title}: ${item.body}`}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
        )
      )}

      {/* PROCESS STEPS */}
      {d.steps && d.steps.length > 0 && (
        <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
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
                  marginBottom: 42,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {d.stepsEyebrow !== "" && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#00BCD4",
                    }}
                  >
                    {d.stepsEyebrow || "The Process"}
                  </span>
                )}
                <h2
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                <ScrollReveal key={i} className="h-full">
                  <div
                    style={{
                      position: "relative",
                      background: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 6,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
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
                          minHeight: "2.4em",
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

      {!d.hideReviews && d.reviewsPosition === "afterSteps" && reviewsSection}

      {/* SERVICE CARDS */}
      {d.cards && d.cards.length > 0 && (
        <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
          <div
            style={{
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div style={{ marginBottom: 42, maxWidth: 760 }}>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div style={{ marginBottom: 42, maxWidth: 760 }}>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
              maxWidth: 1440,
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
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(20px, 5vw, 56px)",
            }}
          >
            <ScrollReveal>
              <div style={{ marginBottom: 42, maxWidth: 760 }}>
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
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
              maxWidth: 1100,
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
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
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
                    <h2 style={{ ...archivoBold, fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)", margin: "0 0 12px" }}>{block.h2}</h2>
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

      {/* PRODUCT SHOWCASE — symmetrical 3-column layout: two stacked
          text+image pairs on the left, a large centered photo, two stacked
          image+text pairs on the right (System X's product grid). */}
      {d.productShowcase && (
        <section style={{ background: "#0d0d0d", padding: `${sectionPad} 0` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${GUTTER}` }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(32px, 4vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Left column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
                {d.productShowcase.leftItems.map((item, i) => (
                  <ScrollReveal key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center" }}>
                      <div>
                        <h2 style={{ ...archivoBold, fontSize: "1.4rem", margin: "0 0 8px" }}>{item.h2}</h2>
                        {item.h3 && (
                          <h3 style={{ margin: "0 0 10px", fontFamily: "'Archivo', sans-serif", fontWeight: 500, textTransform: "uppercase", fontSize: "0.95rem", color: CYAN }}>
                            {item.h3}
                          </h3>
                        )}
                        <p style={{ ...manropeBody, fontSize: "0.95rem" }}>{item.body}</p>
                      </div>
                      <div style={{ position: "relative", width: 110, height: 140, flexShrink: 0 }}>
                        <Image src={item.image} alt={item.imageAlt} fill style={{ objectFit: "contain" }} sizes="110px" />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Center photo */}
              <ScrollReveal>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image src={d.productShowcase.centerImage} alt={d.productShowcase.centerImageAlt} fill style={{ objectFit: "contain" }} sizes="(max-width:768px) 100vw, 33vw" />
                </div>
              </ScrollReveal>

              {/* Right column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
                {d.productShowcase.rightItems.map((item, i) => (
                  <ScrollReveal key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "center" }}>
                      <div style={{ position: "relative", width: 110, height: 140, flexShrink: 0 }}>
                        <Image src={item.image} alt={item.imageAlt} fill style={{ objectFit: "contain" }} sizes="110px" />
                      </div>
                      <div>
                        <h2 style={{ ...archivoBold, fontSize: "1.4rem", margin: "0 0 8px" }}>{item.h2}</h2>
                        {item.h3 && (
                          <h3 style={{ margin: "0 0 10px", fontFamily: "'Archivo', sans-serif", fontWeight: 500, textTransform: "uppercase", fontSize: "0.95rem", color: CYAN }}>
                            {item.h3}
                          </h3>
                        )}
                        <p style={{ ...manropeBody, fontSize: "0.95rem" }}>{item.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {!d.hideQuoteForm && d.quoteFormPosition === "afterContentBlocks" && quoteFormSection}

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
                  maxWidth: sec.items || sec.vehicleLogos ? 1280 : 900,
                  margin: "0 auto",
                  padding: "0 clamp(20px, 5vw, 56px)",
                }}
              >
              <div style={sec.vehicleLogos ? { maxWidth: 880, marginBottom: 48 } : undefined}>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                      fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {sec.body}
                  </p>
                )}
              </div>
                {sec.vehicleLogos && sec.vehicleLogos.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                      gap: 1,
                    }}
                  >
                    {sec.vehicleLogos.map((logo) => (
                      <VehicleTile key={logo} logo={logo} />
                    ))}
                  </div>
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
                    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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

      {!d.hideReviews && d.reviewsPosition === "afterFAQ" && reviewsSection}

      {/* CROSS SELL */}
      {d.crossTitle && (
        <section style={{ background: "#000", padding: "clamp(40px, 5vw, 72px) 0" }}>
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
              maxWidth: 1440,
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
      {d.partnersStripPosition !== "afterServicesGrid" && <PartnersStrip />}

      {/* IMAGE + TEXT SECTIONS positioned after Partners (see imageTextSections[].position) */}
      {d.imageTextSections && (
        <ImageTextSectionsList sections={d.imageTextSections.filter((sec) => sec.position === "afterPartners")} />
      )}

      {/* DENVER CTA */}
      {!d.hideDenverCta && d.denverCtaPosition !== "afterServicesGrid" && <DenverCTA {...d.denverCta} />}

      {/* REVIEWS */}
      {!d.hideReviews && d.reviewsPosition !== "afterSteps" && d.reviewsPosition !== "afterFAQ" && reviewsSection}

      {/* CTA / QUOTE */}
      {!d.hideQuoteForm && d.quoteFormPosition !== "afterContentBlocks" && quoteFormSection}
    </div>
  );
}
