import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest detailing projects, tips, and case studies from Front Range Detail Studio. PPF, ceramic coating, window tinting in Englewood, CO.",
};

const blogPosts = [
  {
    slug: "2025-dodge-ram-1500-etorque-hemi-limited-protected-with-the-front-range-package-centennial-co",
    title:
      "2025 Dodge Ram 1500 eTorque HEMI Limited Protected with the Front Range Package -- Centennial, CO",
    date: "October 29, 2025",
    categories: ["PPF", "Automotive Window Tint"],
    image: "/images/blog/image-6-1024x576.jpeg",
    imageAlt:
      "Finished 2025 Dodge Ram 1500 Limited with deep gloss, flawless reflections, and full-front protection",
    excerpt:
      "Even brand-new vehicles deserve expert protection. This 2025 Dodge Ram 1500 eTorque HEMI Limited arrived at our studio straight from the dealership.",
  },
  {
    slug: "2024-corvette-stingray-annual-system-x-ceramic-coating-maintenance-in-denver",
    title:
      "2024 Corvette Stingray -- Annual System X Ceramic Coating Maintenance in Denver",
    date: "October 29, 2025",
    categories: ["Ceramic Coating", "PPF"],
    image: "/images/blog/image-1024x576.jpeg",
    imageAlt:
      "Corvette Stingray annual System X ceramic coating maintenance",
    excerpt:
      "This 2024 Chevrolet Corvette Stingray recently came back to Front Range Detail Studio for its annual System X Top Coat service.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-[840px] mx-auto px-5">
          <h1 className="text-white">Blog</h1>
          <hr className="w-24 h-0.5 bg-primary border-none mt-3" />
        </div>
      </section>

      {/* Blog Grid */}
      <Section bg="dark" wide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-dark-elevated rounded-lg overflow-hidden hover:ring-1 hover:ring-primary/40 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-white/50 mb-3">{post.date}</p>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section bg="black" wide>
        <SectionHeading>
          Front Range Detail Studio Client Reviews
        </SectionHeading>
        <ReviewBadges />
        <ReviewCarousel />
      </Section>

      {/* CTA */}
      <Section bg="dark" wide id="contact">
        <SectionHeading>Get A Free Quote</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed">
              Ready to protect your vehicle? Contact us today for a free,
              no-obligation quote on PPF, ceramic coating, window tinting, and
              more.
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
