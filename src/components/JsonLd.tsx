/**
 * Replicates the Rank Math @graph schema from the WordPress site.
 * Outputs: Person+Organization, WebSite (with SearchAction), WebPage.
 * This ensures Google sees the same entity structure during migration.
 */
export function SiteGraphSchema({ pageUrl, pageTitle, pageDatePublished, pageDateModified }: {
  pageUrl?: string;
  pageTitle?: string;
  pageDatePublished?: string;
  pageDateModified?: string;
}) {
  const BASE = "https://frontrangedetailstudio.com";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": `${BASE}/#person`,
        name: "Front Range Detail Studio",
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE}/#logo`,
          url: `${BASE}/logo-inverse.svg`,
          contentUrl: `${BASE}/logo-inverse.svg`,
          caption: "Front Range Detail Studio",
          inLanguage: "en-US",
        },
        image: {
          "@type": "ImageObject",
          "@id": `${BASE}/#logo`,
          url: `${BASE}/logo-inverse.svg`,
          contentUrl: `${BASE}/logo-inverse.svg`,
          caption: "Front Range Detail Studio",
          inLanguage: "en-US",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "Front Range Detail Studio",
        publisher: { "@id": `${BASE}/#person` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl || BASE}/#webpage`,
        url: pageUrl || `${BASE}/`,
        name: pageTitle || "Front Range Detail Studio - PPF Clear Bra Ceramic Coating Window Tinting",
        ...(pageDatePublished && { datePublished: pageDatePublished }),
        ...(pageDateModified && { dateModified: pageDateModified }),
        about: { "@id": `${BASE}/#person` },
        isPartOf: { "@id": `${BASE}/#website` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoBodyShop", "LocalBusiness"],
    "@id": "https://frontrangedetailstudio.com/#localbusiness",
    name: "Front Range Detail Studio",
    image: "https://frontrangedetailstudio.com/logo-inverse.svg",
    url: "https://frontrangedetailstudio.com",
    telephone: "+1-303-520-8023",
    email: "info@frontrangedetailstudio.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12559 E Broncos Pkwy",
      addressLocality: "Centennial",
      addressRegion: "CO",
      postalCode: "80112",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.5797,
      longitude: -104.8508,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/frontrangedetailing/",
      "https://youtube.com/@FrontRangeDetailing303",
      "https://m.facebook.com/people/Front-Range-Mobile-Detailing-RV-Boat-Auto/100088512754242/",
      "https://www.yelp.com/biz/front-range-detail-studio-denver",
      "https://denvermobiledetailing.com",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "106",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Denver" },
      { "@type": "City", name: "Centennial" },
      { "@type": "City", name: "Englewood" },
      { "@type": "City", name: "Lone Tree" },
      { "@type": "City", name: "Castle Rock" },
      { "@type": "City", name: "Greenwood Village" },
      { "@type": "City", name: "Castle Pines" },
      { "@type": "City", name: "Parker" },
      { "@type": "City", name: "Lakewood" },
      { "@type": "City", name: "Aurora" },
      { "@type": "City", name: "Highlands Ranch" },
    ],
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
    serviceType: name,
    name,
    description,
    url: `https://frontrangedetailstudio.com${url}`,
    provider: {
      "@id": "https://frontrangedetailstudio.com/#localbusiness",
    },
    areaServed: [
      { "@type": "City", name: "Denver" },
      { "@type": "City", name: "Centennial" },
      { "@type": "City", name: "Englewood" },
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

export function FAQSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
      item: `https://frontrangedetailstudio.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
