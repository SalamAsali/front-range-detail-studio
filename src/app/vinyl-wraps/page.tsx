import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { vinylWrapsData } from "@/data/services/vinyl-wraps";

export const metadata: Metadata = pageMetadata({
  title: "Vinyl Wraps",
  description:
    "Full color change wraps, partial wraps, commercial fleet graphics and chrome deletes — 200+ finishes, professionally installed in Englewood, CO.",
  path: "/vinyl-wraps/",
  image: "/images/og/og-vinyl-wraps.jpg",
});

export default function VinylWrapsPage() {
  return (
    <>
      <ServiceSchema
        name="Vinyl Wraps"
        description="Full color changes, custom graphics, chrome deletes and accent wraps. Over 200 color options with professional installation."
        url="/vinyl-wraps"
      />
      {vinylWrapsData.faqs && <FAQSchema faqs={vinylWrapsData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Vinyl Wraps", url: "/vinyl-wraps" },
        ]}
      />
      <ServicePage data={vinylWrapsData} />
    </>
  );
}
