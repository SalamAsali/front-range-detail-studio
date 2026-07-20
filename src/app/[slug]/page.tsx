import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlogPostingSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { blogPosts, blogPostList } from "@/data/blog-posts";

const BASE = "https://frontrangedetailstudio.com";

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};

  const url = `${BASE}/${post.slug}/`;

  return {
    title: { absolute: post.metaTitle },
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const url = `${BASE}/${post.slug}/`;
  const morePosts = blogPostList.filter((p) => p.slug !== post.slug);

  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
      <BlogPostingSchema
        url={url}
        headline={post.title}
        description={post.excerpt}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        articleSection={post.categories.join(", ")}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/${post.slug}` },
        ]}
      />

      {/* Hero Image */}
      <section style={{ paddingTop: 82 }}>
        <div style={{ position: "relative", aspectRatio: "2/1", maxHeight: 500, width: "100%", overflow: "hidden" }}>
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* Article */}
      <section style={{ background: "#000", padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <article>
            {/* Categories */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
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

            <h1
              style={{
                margin: "0 0 16px",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                lineHeight: 1.08,
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 16,
                marginBottom: 40,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <time>{post.date}</time>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              <span>Front Range Detail Studio</span>
            </div>

            {/* Content */}
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <style>{`
                .blog-content h2 {
                  font-family: 'Archivo', sans-serif;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-size: clamp(1.3rem, 2vw, 1.6rem);
                  color: #fff;
                  margin: 40px 0 16px;
                }
                .blog-content p {
                  margin: 0 0 24px;
                }
                .blog-content ul {
                  margin: 0 0 24px;
                  padding-left: 24px;
                  list-style-type: disc;
                }
                .blog-content li {
                  margin-bottom: 8px;
                  line-height: 1.7;
                }
                .blog-content a {
                  color: #00BCD4;
                  text-decoration: none;
                }
              `}</style>
              <div className="blog-content">
                {post.content}
              </div>
            </div>

            {post.showAboutSection && (
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                    color: "#fff",
                  }}
                >
                  About Front Range Detail Studio
                </h2>
                <p style={{ margin: 0, fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
                  <Link href="/" style={{ color: "#00BCD4", textDecoration: "none", fontWeight: 600 }}>
                    Front Range Detail Studio
                  </Link>{" "}
                  is Colorado&apos;s trusted destination for premium automotive
                  protection and enhancement. Located in Englewood, we
                  specialize in{" "}
                  <Link href="/auto-detailing" style={{ color: "#00BCD4", textDecoration: "none" }}>
                    high-end detailing
                  </Link>
                  ,{" "}
                  <Link href="/paint-protection-film-ppf" style={{ color: "#00BCD4", textDecoration: "none" }}>
                    paint protection film installation
                  </Link>{" "}
                  using SunTek Ultra,{" "}
                  <Link href="/ceramic-coating" style={{ color: "#00BCD4", textDecoration: "none" }}>
                    advanced ceramic coatings
                  </Link>
                  , and precision window tinting with SunTek Evolve. Our
                  mission is to preserve the beauty and value of every vehicle
                  that enters our studio &mdash; from new luxury cars to
                  exotic and performance models. Serving clients across the
                  Front Range and Denver area, we combine expertise, passion,
                  and meticulous craftsmanship in every project.
                </p>
              </div>
            )}

            {/* Tags */}
            <div
              style={{
                marginTop: 48,
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Tags:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      background: "#1a1a1a",
                      padding: "6px 12px",
                      borderRadius: 4,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* More posts */}
            {morePosts.length > 0 && (
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  More posts
                </h2>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {morePosts.map((mp) => (
                    <li
                      key={mp.slug}
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 12,
                        padding: "16px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Link
                        href={`/${mp.slug}`}
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#00BCD4",
                          textDecoration: "none",
                        }}
                      >
                        {mp.title}
                      </Link>
                      <time
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 13,
                          color: "rgba(255,255,255,0.4)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {mp.date}
                      </time>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "#0d0d0d", padding: "clamp(56px, 7vw, 96px) 0" }}>
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
          background: "#000",
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
                  Ready to protect your vehicle like this one? Contact us today for a free, no-obligation
                  quote.
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
