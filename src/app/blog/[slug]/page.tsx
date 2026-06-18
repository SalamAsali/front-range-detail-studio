import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        "2025 Dodge Ram 1500 eTorque HEMI Limited Protected with the Front Range Package -- Centennial, CO",
      date: "October 29, 2025",
      categories: ["PPF", "Automotive Window Tint"],
      tags: ["SunTek", "System X", "Dodge Ram", "Evolve", "paint correction"],
      metaTitle:
        "2025 Dodge Ram 1500 eTorque HEMI Limited Protected with the Front Range Package -- Centennial, CO",
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
              className="text-primary hover:text-primary-light transition-colors"
            >
              Front Range Package
            </Link>{" "}
            &mdash; a complete protection system combining SunTek Ultra PPF,
            System X Max G+ ceramic coating, and SunTek Evolve window tint.
          </p>

          <h2>Process</h2>
          <ul>
            <li>Inspection &amp; Paint Correction of factory defects</li>
            <li>
              Full Front-End PPF (hood, bumper, fenders, mirrors, A-pillars)
            </li>
            <li>
              System X Max G+ Ceramic Coating to all exterior surfaces
            </li>
            <li>
              Window Tint: windshield (clear heat-rejecting film), front doors
              (matched to factory privacy glass), panoramic sunroof (limo tint)
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image
              src="/images/blog/image-3-1024x576.jpeg"
              alt="Our installer carefully positions a precision-cut piece of SunTek Ultra PPF across the RAM's front bumper"
              width={1024}
              height={576}
              className="rounded w-full"
            />
            <Image
              src="/images/blog/image-4-1024x576.jpeg"
              alt="Installer applying SunTek Evolve window film to door glass of a silver Ram 1500"
              width={1024}
              height={576}
              className="rounded w-full"
            />
          </div>

          <Image
            src="/images/blog/image-5-1024x576.jpeg"
            alt="Two technicians performing simultaneous windshield tint shrinking and ceramic coating leveling"
            width={1024}
            height={576}
            className="rounded w-full my-8"
          />

          <h2>Results</h2>
          <p>
            After completing the Front Range Package, this Ram 1500 left our
            shop with unmatched protection and clarity. The paint now has deep
            metallic reflections and a slick, glass-like finish that repels
            water, dirt, and UV rays.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image
              src="/images/blog/image-6-1024x576.jpeg"
              alt="Finished 2025 Dodge Ram 1500 Limited with deep gloss, flawless reflections, and full-front protection"
              width={1024}
              height={576}
              className="rounded w-full"
            />
            <Image
              src="/images/blog/image-7-1024x576.jpeg"
              alt="The completed 2025 Ram 1500 Limited in our Englewood studio, protected, refined, and ready for Colorado roads"
              width={1024}
              height={576}
              className="rounded w-full"
            />
          </div>

          <h2>Why Choose Front Range Detail Studio</h2>
          <p>
            At Front Range Detail Studio, every project begins with a thorough
            inspection under professional lighting. We don&apos;t cut corners
            &mdash; we correct the paint first, then protect it with the best
            products available. Our certified installers use SunTek Ultra PPF,
            System X Max G+ ceramic coatings, and SunTek Evolve window tint to
            deliver results that last.
          </p>
        </>
      ),
    },

  "2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver":
    {
      slug: "2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver",
      title:
        "2024 Corvette Stingray -- Annual System X Ceramic Coating Maintenance in Denver",
      date: "October 29, 2025",
      categories: ["Ceramic Coating", "PPF"],
      tags: ["Corvette", "Chevrolet", "SunTek", "System X"],
      metaTitle:
        "2024 Corvette Stingray -- Annual System X Ceramic Coating Maintenance in Denver",
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

          <Image
            src="/images/blog/image-1024x576.jpeg"
            alt="Corvette Stingray annual System X ceramic coating maintenance"
            width={1024}
            height={576}
            className="rounded w-full my-8"
          />

          <h2>Service Details</h2>
          <ul>
            <li>
              <strong>Comprehensive Surface Inspection:</strong> We examined the
              entire vehicle &mdash; paint, PPF, glass, and wheels &mdash; for
              any signs of damage or coating wear. Everything held up
              exceptionally well, a testament to the quality of the original
              installation.
            </li>
            <li>
              <strong>Annual System X Top Coat Application:</strong> We
              refreshed the ceramic coating with a professional top coat layer.
              This step recharges the coating&apos;s slickness, boosts gloss,
              and resets the hydrophobic properties that keep the car cleaner
              for longer.
            </li>
            <li>
              <strong>Advised Additional Protection:</strong> After a year of
              real-world driving, we noticed light wear and rock chipping on the
              rocker panels and door sills. We recommended and scheduled PPF
              installation for those areas.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image
              src="/images/blog/image-1-1024x576.jpeg"
              alt="Corvette Stingray annual System X ceramic coating maintenance"
              width={1024}
              height={576}
              className="rounded w-full"
            />
            <Image
              src="/images/blog/image-2-1024x576.jpeg"
              alt="Corvette Stingray annual System X ceramic coating maintenance"
              width={1024}
              height={576}
              className="rounded w-full"
            />
          </div>

          <h2>Why It Matters</h2>
          <p>
            Ceramic coatings are incredibly durable, but they&apos;re not
            &ldquo;set it and forget it.&rdquo; For high-performance vehicles
            driven regularly, annual inspections and top coat applications are
            essential. This process ensures that the coating&apos;s warranty
            remains valid and its performance &mdash; in gloss, protection, and
            hydrophobicity &mdash; stays at factory levels.
          </p>
          <p>
            Colorado&apos;s climate adds another layer of challenge. With
            intense UV rays, road salts, and temperature swings, paint
            protection maintenance becomes a must for luxury cars.
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
            to perform exactly as designed.
          </p>

          <h2>Results &amp; Takeaway</h2>
          <p>
            After reapplying the System X Top Coat, the Corvette&apos;s surface
            once again exhibited extreme slickness, deep gloss, and perfect
            water behavior. The owner was thrilled to see that the coating still
            looked and felt like new even after a full year of driving.
          </p>
          <p>
            The inspection confirmed that the original SunTek Reaction PPF and
            System X coating were performing flawlessly &mdash; a clear sign
            that proper prep, installation, and maintenance make all the
            difference.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you&apos;ve recently had your car ceramic coated, don&apos;t skip
            your annual inspection. Whether it&apos;s a Corvette,{" "}
            <Link
              href="/porsche-detailing"
              className="text-primary hover:text-primary-light transition-colors"
            >
              Porsche
            </Link>
            , or{" "}
            <Link
              href="/tesla-detailing"
              className="text-primary hover:text-primary-light transition-colors"
            >
              Tesla
            </Link>
            , maintaining your coating ensures it performs like day one. For
            luxury car detailing in Denver and ceramic coating maintenance near
            Englewood, trust Front Range Detail Studio &mdash; Colorado&apos;s
            ceramic coating specialists and Front Range paint protection experts.
          </p>

          <h2>About Front Range Detail Studio</h2>
          <p>
            Front Range Detail Studio is Colorado&apos;s trusted destination for
            premium automotive protection and enhancement. Located in Englewood,
            we specialize in high-end detailing, paint protection film
            installation using SunTek Ultra, advanced ceramic coatings, and
            precision window tinting with SunTek Evolve. Our mission is to
            preserve the beauty and value of every vehicle that enters our
            studio &mdash; from new luxury cars to exotic and performance
            models. Serving clients across the Front Range and Denver area, we
            combine expertise, passion, and meticulous craftsmanship in every
            project.
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
    <>
      {/* Hero Image */}
      <section className="relative pt-20">
        <div className="relative aspect-[2/1] max-h-[500px] w-full overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
      </section>

      {/* Article */}
      <Section bg="black">
        <article>
          {/* Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs text-primary bg-primary/10 px-2 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-white/40">
            <time>{post.date}</time>
            <span className="text-white/20">|</span>
            <span>Front Range Detail Studio</span>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-primary max-w-none [&>p]:text-white/70 [&>p]:leading-relaxed [&>p]:mb-6 [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>ul]:text-white/70 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:leading-relaxed">
            {post.content}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="text-sm text-white/40 mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/50 bg-dark-elevated px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Section>

      {/* Reviews */}
      <Section bg="dark" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* CTA */}
      <Section bg="black" wide id="contact">
        <SectionHeading>Get A Free Quote</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed">
              Ready to protect your vehicle like this one? Contact us today for
              a free, no-obligation quote.
            </p>
            <div className="space-y-3 text-white/70">
              <a
                href="tel:3035208023"
                className="block text-lg text-primary hover:text-primary-light transition-colors"
              >
                (303) 520-8023
              </a>
              <a
                href="mailto:info@frontrangedetailstudio.com"
                className="block hover:text-primary transition-colors"
              >
                info@frontrangedetailstudio.com
              </a>
              <p>12559 E Broncos Pkwy, Centennial, CO 80112</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
