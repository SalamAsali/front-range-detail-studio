import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { blogPostList } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: { absolute: "Blog | Front Range Detail Studio" },
  description:
    "Latest detailing projects, tips, and case studies from Front Range Detail Studio. PPF, ceramic coating, window tinting in Englewood, CO.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/blog/",
  },
  openGraph: {
    title: "Blog | Front Range Detail Studio",
    description:
      "Latest detailing projects, tips, and case studies from Front Range Detail Studio. PPF, ceramic coating, window tinting in Englewood, CO.",
    url: "https://frontrangedetailstudio.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      {/* Header */}
      <section style={{ background: "#000", padding: "clamp(140px, 14vw, 180px) 0 clamp(48px, 5vw, 72px)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#32EEFF",
              display: "block",
              marginBottom: 12,
            }}
          >
            Articles & Case Studies
          </span>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
              lineHeight: 0.98,
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            Blog
          </h1>
          <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "22px 0 0" }} />
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {blogPostList.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link
                  href={`/${post.slug}`}
                  style={{
                    display: "block",
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 6,
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image
                      src={post.cardImage}
                      alt={post.cardImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 11,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#00BCD4",
                            background: "rgba(0,188,212,0.1)",
                            padding: "4px 10px",
                            borderRadius: 4,
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h2
                      style={{
                        margin: "0 0 8px",
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        lineHeight: 1.25,
                        color: "#fff",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        margin: "0 0 12px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {post.date}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 300,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
