import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { bmwDetailingData } from "@/data/services/bmw-detailing";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "BMW Paint Protection & PPF in Englewood, CO | Front Range Detail Studio",
  description:
    "BMW paint protection film, ceramic coating, color-changing PPF and window tint in Englewood, CO — Colorado's BMW protection experts.",
  path: "/bmw-detailing/",
  image: "/images/og/og-bmw.jpg",
});

export default function BMWDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="BMW Paint Protection"
        description="BMW PPF, ceramic coating and window tint specialists. Custom-fit protection for all BMW models including M cars and i-series EVs."
        url="/bmw-detailing"
      />
      <FAQSchema
        faqs={bmwDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "BMW Detailing", url: "/bmw-detailing" },
        ]}
      />
      <VehiclePage data={bmwDetailingData} />
    </>
  );
}
