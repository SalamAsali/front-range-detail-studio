import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://frontrangedetailstudio.com";

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ceramic-coating", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/paint-protection-film-ppf", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/window-tint", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/vinyl-wraps", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/auto-detailing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/rv-detailing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rv-ceramic-coating", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/boat-detailing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/boat-ceramic-coating", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/system-x-automotive-ceramic-coatings", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/detailing-packages", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tesla-detailing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/bmw-detailing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/porsche-detailing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/rivian-detailing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/ford-truck-detailing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/free-quote", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.5, changeFrequency: "weekly" as const },
  ];

  const blogPosts = [
    {
      path: "/blog/2025-dodge-ram-1500-etorque-hemi-limited-protected-with-the-front-range-package-centennial-co",
      lastModified: "2025-10-15",
    },
    {
      path: "/blog/2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver",
      lastModified: "2025-10-15",
    },
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}${post.path}`,
      lastModified: post.lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
