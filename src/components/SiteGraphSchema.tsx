"use client";

import { usePathname } from "next/navigation";

const BASE = "https://frontrangedetailstudio.com";

/**
 * The Person+Organization / WebSite / WebPage @graph.
 *
 * This is a client component purely so the WebPage node can read the current
 * route. Rendered from the layout as a server component it received no props,
 * so every page on the site emitted a WebPage node with the homepage's @id,
 * url and name — telling Google that all 26 URLs were the same page.
 *
 * usePathname resolves at prerender time for static routes, so the JSON-LD is
 * still in the served HTML and the pages stay statically generated.
 *
 * WebPage.name is deliberately omitted rather than guessed: Google reads the
 * page name from <title>, and a wrong name here is worse than none.
 */
export function SiteGraphSchemaClient() {
  const pathname = usePathname() || "/";
  const pageUrl = `${BASE}${pathname.endsWith("/") ? pathname : `${pathname}/`}`;

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
          url: `${BASE}/icon-512.png`,
          contentUrl: `${BASE}/icon-512.png`,
          width: 512,
          height: 512,
          caption: "Front Range Detail Studio",
          inLanguage: "en-US",
        },
        image: { "@id": `${BASE}/#logo` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: `${BASE}/`,
        name: "Front Range Detail Studio",
        publisher: { "@id": `${BASE}/#person` },
        inLanguage: "en-US",
        /* No potentialAction: the old WordPress site advertised a
           /?s={search_term_string} SearchAction. This site has no search,
           so that action pointed at a URL that does not exist. */
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
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
