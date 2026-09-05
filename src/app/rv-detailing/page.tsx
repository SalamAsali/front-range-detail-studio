import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rvDetailingData } from "@/data/services/rv-detailing";

export const metadata: Metadata = pageMetadata({
  title: "RV Detailing",
  description:
    "RV and motorhome detailing near Denver with per-foot pricing — exterior wash, oxidation removal, ceramic coating and PPF for Class A, B, C and fifth-wheels.",
  path: "/rv-detailing/",
  image: "/images/og/og-rv-detailing.jpg",
});

export default function RVDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="RV Detailing & Ceramic Coating"
        description="RV exterior wash, oxidation removal, ceramic coating and PPF. Per-foot pricing for Class A, B, C motorhomes, fifth-wheels and travel trailers."
        url="/rv-detailing"
      />
      {rvDetailingData.faqs && <FAQSchema faqs={rvDetailingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "RV Detailing", url: "/rv-detailing" },
        ]}
      />
      <ServicePage data={rvDetailingData} />
    </>
  );
}
