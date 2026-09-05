import type { Metadata } from "next";

export const SITE_URL = "https://frontrangedetailstudio.com";
export const SITE_NAME = "Front Range Detail Studio";

/**
 * Next.js replaces the parent `openGraph` object wholesale when a page
 * declares its own — it does not deep-merge. That is why every inner page had
 * an og:image but no og:type, og:locale or og:site_name: each page spelled out
 * `openGraph` and silently dropped the three fields set in the root layout.
 *
 * Every page builds its metadata through here so those fields can't go missing
 * again, and so canonical URLs keep the trailing slash `trailingSlash: true`
 * requires.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  image = "/images/og/og-default.jpg",
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  /** Slots into the "%s | Front Range Detail Studio" template. */
  title?: string;
  /** Use when the page needs a title with no brand suffix appended. */
  absoluteTitle?: string;
  description: string;
  /** Route path, e.g. "/window-tint/". */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;
  const ogTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;
  const alt = imageAlt ?? `${title ?? SITE_NAME} — ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type,
      locale: "en_US",
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
