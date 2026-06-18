import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollReveal } from "@/components/ScrollReveal";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  "2025-dodge-ram-1500-etorque-hemi-limited-protected-with-the-front-range-package-centennial-co":
    {
      slug: "2025-dodge-ram-1500-etorque-hemi-limited-protected-with-the-front-range-package-centennial-co",
      title:
        "2025 Dodge Ram 1500 eTorque HEMI Limited Protected with the Front Range Package \u2014 Centennial, CO",
      date: "October 29, 2025",
      categories: ["PPF", "Automotive Window Tint"],
      tags: ["SunTek", "System X", "Dodge Ram", "Evolve", "paint correction"],
      metaTitle:
        "2025 Dodge Ram 1500 eTorque HEMI Limited Protected with the Front Range Package \u2014 Centennial, CO",
      metaDescription:
        "See how we protected a brand-new 2025 Dodge Ram 1500 eTorque HEMI Limited with SunTek Ultra PPF, System X ceramic coating, and SunTek Evolve window tint.",
      heroImage: "/images/blog/image-6-1024x576.jpeg",
      heroImageAlt:
        "Silver Ram 1500 Limited with mirror-like reflections after ceramic coating and PPF installation",
      content: (
        <>
          <p>
            Even brand-new vehicles deserve expert protection. This 2025 Dodge
            Ram 1500 eTorque HEMI Limited arrived at our studio straight from
            the dealership &mdash; but under true detailing lighting, we found
            light surface defects, rock chips, and imperfections that needed
            correction before long-term protection.
          </p>
          <p>
            The owner wanted to preserve the truck&apos;s silver finish from day
            one, so we recommended our{" "}
            <Link
              href="/services"
              style={{ color: "#00BCD4", textDecoration: "none" }}
            >
              Front Range Package
            </Link>{" "}
            &mdash; a complete protection system combining SunTek Ultra PPF,
            System X Max G+ ceramic coating, and SunTek Evolve window tint.
          </p>

          <h2>Process</h2>
          <p>
            Our Front Range Package is the ultimate new car protection service,
            built for clients who want the best craftsmanship and
            highest-quality materials available.
          </p>
          <ul>
            <li>
              <strong>Inspection &amp; Paint Correction:</strong> We carefully
              refined the clear coat and corrected factory defects to ensure a
              flawless base surface.
            </li>
            <li>
              <strong>Full Front-End Paint Protection Film:</strong> SunTek
              Ultra PPF was installed on the hood, bumper, fenders, mirrors,
              and A-pillars for high-gloss, self-healing defense against chips,
              debris, and road rash.
            </li>
            <li>
              <strong>System X Max G+ Ceramic Coating:</strong> The flagship,
              lifetime-warranty ceramic coating was applied to all exterior
              surfaces for lasting gloss, hydrophobic performance, and UV
              resistance.
            </li>
            <li>
              <strong>Window Tint &amp; Comfort Upgrade:</strong> The
              windshield received clear heat-rejecting SunTek Evolve film;
              front doors were matched to factory privacy glass; panoramic
              sunroof finished in limo tint for maximum solar rejection.
            </li>
          </ul>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, margin: "32px 0" }}>
            <Image
              src="/images/blog/image-3-1024x576.jpeg"
              alt="Our installer carefully positions a precision-cut piece of SunTek Ultra PPF across the RAM's front bumper"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
            <Image
              src="/images/blog/image-4-1024x576.jpeg"
              alt="Installer applying SunTek Evolve window film to door glass of a silver Ram 1500"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
          </div>

          <Image
            src="/images/blog/image-5-1024x576.jpeg"
            alt="Two technicians performing simultaneous windshield tint shrinking and ceramic coating leveling"
            width={1024}
            height={576}
            style={{ borderRadius: 6, width: "100%", height: "auto", margin: "32px 0" }}
          />

          <h2>Results</h2>
          <p>
            After completing the Front Range Package, this Ram 1500 left our
            shop with unmatched protection and clarity. The paint now has deep
            metallic reflections and a slick, glass-like finish that repels
            water, dirt, and UV rays. The cabin stays cooler, the finish stays
            cleaner, and maintenance becomes effortless.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, margin: "32px 0" }}>
            <Image
              src="/images/blog/image-6-1024x576.jpeg"
              alt="Finished 2025 Dodge Ram 1500 Limited with deep gloss, flawless reflections, and full-front protection"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
            <Image
              src="/images/blog/image-7-1024x576.jpeg"
              alt="The completed 2025 Ram 1500 Limited in our Englewood studio, protected, refined, and ready for Colorado roads"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
          </div>

          <h2>Why Choose Front Range Detail Studio</h2>
          <p>
            At Front Range Detail Studio, we specialize in ceramic coatings,
            paint protection film, window tint, and full new car protection
            systems for discerning clients across Colorado&apos;s Front Range.
            Every installation is performed with precision and pride &mdash;
            because every client deserves the highest level of care.
          </p>
          <p>
            Experience the Front Range Package difference. Schedule your
            consultation today to protect your investment with the same care
            trusted by Colorado&apos;s most passionate vehicle owners.
          </p>
        </>
      ),
    },

  "2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver":
    {
      slug: "2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver",
      title:
        "2024 Corvette Stingray \u2013 Annual System X Ceramic Coating Maintenance in Denver",
      date: "October 29, 2025",
      categories: ["Ceramic Coating", "PPF"],
      tags: ["Corvette", "Chevrolet", "SunTek", "System X"],
      metaTitle:
        "2024 Corvette Stingray \u2013 Annual System X Ceramic Coating Maintenance in Denver",
      metaDescription:
        "Annual System X ceramic coating maintenance on a 2024 Corvette Stingray. See why annual inspections keep your coating performing like day one.",
      heroImage: "/images/blog/image-1024x576.jpeg",
      heroImageAlt:
        "Corvette Stingray annual System X ceramic coating maintenance",
      content: (
        <>
          <p>
            This 2024 Chevrolet Corvette Stingray recently came back to Front
            Range Detail Studio for its annual System X Top Coat service &mdash;
            a critical step that maintains the lifetime warranty on the ceramic
            coating we installed last year. When this Corvette first came to us,
            it had dealership-induced swirl marks and water spots. We performed
            a Level 1 paint correction, Full Front SunTek Reaction PPF, and a
            System X ceramic coating across the paint, wheels, and glass.
          </p>
          <p>
            One year later, this annual maintenance allowed inspection of every
            protected surface, assessment of coating performance, and
            application of a fresh System X Top Coat to ensure continued gloss,
            hydrophobic performance, and long-term durability.
          </p>

          <Image
            src="/images/blog/image-1024x576.jpeg"
            alt="Corvette Stingray annual System X ceramic coating maintenance"
            width={1024}
            height={576}
            style={{ borderRadius: 6, width: "100%", height: "auto", margin: "32px 0" }}
          />

          <h2>Service Details</h2>
          <p>
            During this maintenance visit, the focus was on inspection and
            preservation, not correction or reinstallation:
          </p>
          <ul>
            <li>
              <strong>Comprehensive Surface Inspection:</strong> We examined the
              entire vehicle &mdash; paint, PPF, glass, and wheels &mdash; for
              any signs of damage or coating wear. Everything held up
              exceptionally well, testament to original installation quality.
            </li>
            <li>
              <strong>Annual System X Top Coat Application:</strong> We
              refreshed the ceramic coating with a professional top coat layer.
              This step recharges the coating&apos;s slickness, boosts gloss,
              and resets hydrophobic properties that keep the car cleaner
              longer.
            </li>
            <li>
              <strong>Advised Additional Protection:</strong> After a year of
              real-world driving, light wear and rock chipping were noticed on
              rocker panels and door sills. PPF installation for those areas
              was recommended and scheduled to further protect against road
              debris &mdash; a common issue for mid-engine sports cars like the
              Corvette Stingray.
            </li>
          </ul>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, margin: "32px 0" }}>
            <Image
              src="/images/blog/image-1-1024x576.jpeg"
              alt="Corvette Stingray annual System X ceramic coating maintenance"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
            <Image
              src="/images/blog/image-2-1024x576.jpeg"
              alt="Corvette Stingray annual System X ceramic coating maintenance"
              width={1024}
              height={576}
              style={{ borderRadius: 6, width: "100%", height: "auto" }}
            />
          </div>

          <h2>Why It Matters</h2>
          <p>
            Ceramic coatings are incredibly durable, but they&apos;re not
            &ldquo;set and forget it.&rdquo; For high-performance vehicles
            driven regularly, annual inspections and top coat applications are
            essential.
          </p>
          <p>
            Colorado&apos;s climate adds another layer of challenge. With
            intense UV rays, road salts, and temperature swings, paint
            protection maintenance becomes a must for luxury cars. The
            owner&apos;s commitment to bringing his Corvette in annually keeps
            the finish looking brand-new and prevents long-term degradation.
          </p>

          <h2>Our Process &amp; Expertise</h2>
          <p>
            At Front Range Detail Studio, our approach to paint protection
            focuses on longevity and preservation. We exclusively use System X
            coatings for their warranty-backed protection and proven performance
            under Colorado conditions. Each annual service includes a thorough
            inspection under proper lighting, water behavior testing, and
            surface preparation before the new top coat is applied.
          </p>
          <p>
            Our team&apos;s attention to detail ensures that every inch of the
            vehicle &mdash; from PPF seams to coated wheels &mdash; continues
            to perform exactly as designed. While some shops treat ceramic
            coatings as one-time services, we take a long-term approach,
            partnering with owners to protect their vehicles year after year.
          </p>

          <h2>Results &amp; Takeaway</h2>
          <p>
            After reapplying the System X Top Coat, the Corvette&apos;s surface
            exhibited extreme slickness, deep gloss, and perfect water
            behavior. The owner was thrilled to see the coating still looked
            and felt like new after a full year of driving.
          </p>
          <p>
            The inspection confirmed that the original SunTek Reaction PPF and
            System X coating were performing flawlessly &mdash; a clear sign
            that proper prep, installation, and maintenance make all the
            difference.
          </p>
          <p>
            This service renewed the warranty and reinforced the long-term
            value of investing in premium protection and annual upkeep.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you&apos;ve recently had your car ceramic coated, don&apos;t skip
            your annual inspection. Whether it&apos;s a Corvette,{" "}
            <Link
              href="/porsche-detailing"
              style={{ color: "#00BCD4", textDecoration: "none" }}
            >
              Porsche
            </Link>
            , or{" "}
            <Link
              href="/tesla-detailing"
              style={{ color: "#00BCD4", textDecoration: "none" }}
            >
              Tesla
            </Link>
            , maintaining your coating ensures it performs like day one. For
            luxury car detailing in Denver and ceramic coating maintenance near
            Englewood, trust Front Range Detail Studio &mdash; Colorado&apos;s
            ceramic coating specialists and Front Range paint protection
            experts.
          </p>
          <p>
            Visit us or send an email to schedule your annual inspection or top
            coat service today.
          </p>
        </>
      ),
    },
};

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
  return {
    title: post.metaTitle,
    description: post.metaDescription,
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

  return (
    <div style={{ background: "#000", fontFamily: "'Manrope', sans-serif" }}>
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
              /* Article content styles are inherited via the prose wrapper div */
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
