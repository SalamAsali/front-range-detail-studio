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
      <section style={{ background: "#000", padding: "clamp(108px, 11vw, 138px) 0 clamp(32px, 3.5vw, 48px)" }}>
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

      {/* Blog List */}
      <style>{`
        .blog-post-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .blog-post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 60px rgba(0,0,0,0.55);
          border-color: rgba(0,188,212,0.35);
        }
        .blog-post-card-img {
          transition: transform .6s cubic-bezier(.2,.7,.2,1);
        }
        .blog-post-card:hover .blog-post-card-img {
          transform: scale(1.06);
        }
        .blog-post-card-arrow {
          transition: transform .25s ease;
        }
        .blog-post-card:hover .blog-post-card-arrow {
          transform: translateX(5px);
        }
        .blog-post-card-media {
          aspect-ratio: 4/3;
        }
        @media (min-width: 761px) {
          .blog-post-card-media {
            aspect-ratio: auto;
            height: 100%;
          }
        }
        @media (max-width: 760px) {
          .blog-post-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {blogPostList.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link
                  href={`/${post.slug}`}
                  className="blog-post-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(240px, 400px) 1fr",
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "#fff",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="blog-post-card-media" style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src={post.cardImage}
                      alt={post.cardImageAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, 400px"
                      className="blog-post-card-img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "clamp(24px, 3vw, 40px)",
                      gap: 14,
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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
                        margin: 0,
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                        lineHeight: 1.2,
                        color: "#fff",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {post.date}
                    </p>
                    <hr style={{ width: 48, height: 2, background: "#00BCD4", border: "none", margin: 0 }} />
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 300,
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.6)",
                        maxWidth: 620,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: "auto",
                        paddingTop: 8,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#00BCD4",
                      }}
                    >
                      Read Article
                      <svg
                        className="blog-post-card-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                          stroke="#00BCD4"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
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
