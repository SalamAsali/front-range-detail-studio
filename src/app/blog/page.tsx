import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
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
              letterSpacing: "-0.4px",
              fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
              lineHeight: 1.02,
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

      {/* Reviews */}
      <section style={{ background: "#000", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 36 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#00BCD4",
                }}
              >
                Testimonials
              </span>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.3px",
                  fontSize: "clamp(1.6rem, 2.4vw, 2.15rem)",
                }}
              >
                Client Reviews
              </h2>
              <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: "20px 0 0" }} />
            </div>
          </ScrollReveal>
          <ReviewBadges />
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA */}
      <section
        id="quote"
        style={{
          background: "#0d0d0d",
          padding: "clamp(64px, 8vw, 110px) 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#00BCD4",
                  }}
                >
                  Free Quote
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-0.3px",
                    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Get A Free Quote
                </h2>
                <hr style={{ width: 96, height: 2, background: "#00BCD4", border: "none", margin: 0 }} />
                <p
                  style={{
                    margin: 0,
                    fontWeight: 300,
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: 420,
                  }}
                >
                  Ready to protect your vehicle? Contact us today for a free, no-obligation quote on PPF,
                  ceramic coating, window tinting, and more.
                </p>
                <a
                  href="tel:+13035208023"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    color: "#00BCD4",
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                >
                  (303) 520-8023
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
