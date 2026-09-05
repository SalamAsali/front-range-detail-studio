import { fetchGoogleReviews } from "@/lib/reviews/googlePlaces";
import { SiteGraphSchemaClient } from "./SiteGraphSchema";

export const BASE = "https://frontrangedetailstudio.com";

/** trailingSlash: true is on, so every canonical/schema URL must end in "/". */
export function abs(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p.endsWith("/") ? p : `${p}/`}`;
}

/**
 * Person+Organization, WebSite and WebPage nodes, mirroring the @graph the
 * old Rank Math install emitted so Google sees a continuous entity through
 * the migration.
 *
 * The WebPage node has to reflect the page it is actually on — rendered from
 * the layout with no props it used to claim every URL was the homepage — so
 * that half is a thin client component reading the route. See SiteGraphSchema.tsx.
 */
export function SiteGraphSchema() {
  return <SiteGraphSchemaClient />;
}

/**
 * Sitewide LocalBusiness. Async so the rating comes from the same Google
 * Places response that feeds the on-page review badge — a hardcoded count
 * drifts away from the visible number within weeks, and markup that
 * disagrees with the page is what disqualifies a review snippet.
 */
export async function LocalBusinessSchema() {
  const { rating, totalReviews } = await fetchGoogleReviews();

  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoBodyShop", "LocalBusiness"],
    "@id": `${BASE}/#localbusiness`,
    name: "Front Range Detail Studio",
    // Raster only — Google does not accept SVG for logo/image.
    image: `${BASE}/images/og/og-default.jpg`,
    logo: `${BASE}/icon-512.png`,
    url: `${BASE}/`,
    telephone: "+1-303-520-8023",
    email: "info@frontrangedetailstudio.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12559 E Broncos Pkwy",
      addressLocality: "Englewood",
      addressRegion: "CO",
      postalCode: "80112",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.5797933,
      longitude: -104.8422241,
    },
    hasMap: "https://maps.app.goo.gl/hz9CMdtQmeKYWKKy7",
    /* Deliberately no openingHoursSpecification: the site states "By
       Appointment Only" and the Google Business Profile is the source of
       truth for hours. Asserting 08:00–18:00 here contradicted both. */
    sameAs: [
      "https://www.instagram.com/frontrangedetailing/",
      "https://youtube.com/@FrontRangeDetailing303",
      "https://m.facebook.com/people/Front-Range-Mobile-Detailing-RV-Boat-Auto/100088512754242/",
      "https://www.yelp.com/biz/front-range-detail-studio-denver",
      "https://denvermobiledetailing.com",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(rating),
      reviewCount: String(totalReviews),
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Denver" },
      { "@type": "City", name: "Englewood" },
      { "@type": "City", name: "Centennial" },
      { "@type": "City", name: "Lone Tree" },
      { "@type": "City", name: "Castle Rock" },
      { "@type": "City", name: "Greenwood Village" },
      { "@type": "City", name: "Castle Pines" },
      { "@type": "City", name: "Parker" },
      { "@type": "City", name: "Lakewood" },
      { "@type": "City", name: "Aurora" },
      { "@type": "City", name: "Highlands Ranch" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle Protection & Detailing Services",
      itemListElement: [
        ["Paint Protection Film (Clear Bra)", "/paint-protection-film-ppf/"],
        ["Ceramic Coating", "/ceramic-coating/"],
        ["Ceramic Window Tint", "/window-tint/"],
        ["Vinyl Wraps", "/vinyl-wraps/"],
        ["Auto Detailing & Paint Correction", "/auto-detailing/"],
        ["RV Detailing", "/rv-detailing/"],
        ["RV Ceramic Coating", "/rv-ceramic-coating/"],
        ["Boat Detailing", "/boat-detailing/"],
        ["Boat Ceramic Coating", "/boat-ceramic-coating/"],
      ].map(([name, url]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, url: abs(url) },
      })),
    },
    paymentAccepted: "Cash, Credit Card, Apple Pay",
    currenciesAccepted: "USD",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(url)}#service`,
    serviceType: name,
    name,
    description,
    url: abs(url),
    provider: { "@id": `${BASE}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Denver" },
      { "@type": "City", name: "Englewood" },
      { "@type": "City", name: "Centennial" },
      { "@type": "City", name: "Lone Tree" },
      { "@type": "City", name: "Castle Rock" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  articleSection,
  image,
}: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  articleSection: string;
  image?: string;
}) {
  const pageUrl = abs(url);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#richSnippet`,
    headline,
    description,
    datePublished,
    dateModified,
    articleSection,
    inLanguage: "en-US",
    author: { "@id": `${BASE}/#person` },
    publisher: { "@id": `${BASE}/#person` },
    isPartOf: { "@id": `${pageUrl}#webpage` },
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    ...(image && {
      image: { "@type": "ImageObject", url: abs(image) },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.url),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
