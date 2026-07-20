import type { MetadataRoute } from "next";
import { blogPostList } from "@/data/blog-posts";

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

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPostList.map((post) => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: post.dateModified.split("T")[0],
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
