import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  /* Legacy WordPress URLs. The old site ran WP on this domain for years, so
     these paths are in Google's index, in old backlinks, and in bot traffic.
     Without them every one 404s after the DNS switch. */
  async redirects() {
    return [
      { source: "/feed", destination: "/", statusCode: 301 },
      { source: "/feed/:path*", destination: "/", statusCode: 301 },
      { source: "/comments/feed", destination: "/", statusCode: 301 },
      { source: "/wp-admin", destination: "/", statusCode: 301 },
      { source: "/wp-admin/:path*", destination: "/", statusCode: 301 },
      { source: "/wp-login.php", destination: "/", statusCode: 301 },
      { source: "/wp-json", destination: "/", statusCode: 301 },
      { source: "/wp-json/:path*", destination: "/", statusCode: 301 },
      { source: "/xmlrpc.php", destination: "/", statusCode: 301 },
      { source: "/wp-content/:path*", destination: "/", statusCode: 301 },
      { source: "/wp-includes/:path*", destination: "/", statusCode: 301 },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", statusCode: 301 },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", statusCode: 301 },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", statusCode: 301 },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", statusCode: 301 },

      /* WP's ugly permalinks (/?p=123) need no rule: Next serves the homepage
         for them already and the canonical tag points at "/". A redirect here
         would loop, because Next forwards the query string to the destination. */

      /* Old WP slug the site never carried over to the rebuild. */
      { source: "/paint-protection-film", destination: "/paint-protection-film-ppf/", statusCode: 301 },
    ];
  },

  /* public/ is served with `must-revalidate` by default, which means every
     visit re-checks the 1.2 MB hero photo. These files are content-addressed
     by name and only change on redeploy. */
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/video/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
