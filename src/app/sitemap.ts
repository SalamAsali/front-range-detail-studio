import type { MetadataRoute } from "next";
import { blogPostList } from "@/data/blog-posts";

/**
 * Every URL ends in a trailing slash to match `trailingSlash: true`. Without
 * it each entry 308-redirects and none matches the canonical the page itself
 * declares — which lands as 25 "Page with redirect" rows in Search Console.
 *
 * lastModified is the real date the page's content last changed (from git
 * history), not the build date. Stamping every URL with "today" on each
 * deploy trains Google to ignore the field.
 */
const routes = [
  { path: "/", lastModified: "2026-08-06", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services/", lastModified: "2026-08-06", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ceramic-coating/", lastModified: "2026-07-16", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/paint-protection-film-ppf/", lastModified: "2026-08-06", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/window-tint/", lastModified: "2026-07-13", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/vinyl-wraps/", lastModified: "2026-07-16", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/auto-detailing/", lastModified: "2026-08-06", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/rv-detailing/", lastModified: "2026-07-15", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/rv-ceramic-coating/", lastModified: "2026-07-17", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/boat-detailing/", lastModified: "2026-08-06", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/boat-ceramic-coating/", lastModified: "2026-08-06", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/system-x-automotive-ceramic-coatings/", lastModified: "2026-07-14", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/detailing-packages/", lastModified: "2026-06-23", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tesla-detailing/", lastModified: "2026-07-17", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/bmw-detailing/", lastModified: "2026-07-17", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/porsche-detailing/", lastModified: "2026-07-17", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/rivian-detailing/", lastModified: "2026-07-17", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/ford-truck-detailing/", lastModified: "2026-07-16", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about/", lastModified: "2026-06-28", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact/", lastModified: "2026-07-27", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/free-quote/", lastModified: "2026-07-14", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy-policy/", lastModified: "2026-09-05", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/blog/", lastModified: "2026-07-21", priority: 0.5, changeFrequency: "weekly" as const },
  { path: "/category/ppf/", lastModified: "2026-08-03", priority: 0.4, changeFrequency: "weekly" as const },
  { path: "/category/ceramic-coating/", lastModified: "2026-08-03", priority: 0.4, changeFrequency: "weekly" as const },
  { path: "/category/automotive-window-tint/", lastModified: "2026-08-03", priority: 0.4, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://frontrangedetailstudio.com";

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPostList.map((post) => ({
      url: `${baseUrl}/${post.slug}/`,
      lastModified: post.dateModified.split("T")[0],
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
