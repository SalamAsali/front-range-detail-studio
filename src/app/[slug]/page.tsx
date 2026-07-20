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

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(420px, 60vh, 620px)",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          marginTop: -82,
          paddingTop: 82,
        }}
      >
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
            background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.1) 75%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 840,
            margin: "0 auto",
            width: "100%",
            padding: "0 clamp(20px, 5vw, 56px) clamp(40px, 5vw, 64px)",
          }}
        >
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
                  background: "rgba(0,188,212,0.12)",
                  border: "1px solid rgba(0,188,212,0.3)",
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
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.08,
              textShadow: "0 4px 40px rgba(0,0,0,0.6)",
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
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <time>{post.date}</time>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <span>Front Range Detail Studio</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: "#000", padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <article>
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
                .blog-content img {
                  border-radius: 10px !important;
                  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
                }
                .more-post-card {
                  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
                }
                .more-post-card:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 20px 48px rgba(0,0,0,0.5);
                  border-color: rgba(0,188,212,0.35);
                }
                .more-post-card-img {
                  transition: transform .6s cubic-bezier(.2,.7,.2,1);
                }
                .more-post-card:hover .more-post-card-img {
                  transform: scale(1.06);
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
                  padding: "clamp(24px, 3vw, 32px)",
                  background: "rgba(0,188,212,0.05)",
                  border: "1px solid rgba(0,188,212,0.18)",
                  borderRadius: 12,
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
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "6px 14px",
                      borderRadius: 20,
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
                  More Posts
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {morePosts.map((mp) => (
                    <Link
                      key={mp.slug}
                      href={`/${mp.slug}`}
                      className="more-post-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "120px 1fr",
                        alignItems: "stretch",
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 10,
                        overflow: "hidden",
                        textDecoration: "none",
                        color: "#fff",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <Image
                          src={mp.cardImage}
                          alt={mp.cardImageAlt}
                          fill
                          sizes="120px"
                          className="more-post-card-img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 6, padding: "16px 20px" }}>
                        <span
                          style={{
                            fontFamily: "'Archivo', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            lineHeight: 1.25,
                            color: "#fff",
                          }}
                        >
                          {mp.title}
                        </span>
                        <time
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.4)",
                          }}
                        >
                          {mp.date}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
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
