import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { porscheDetailingData } from "@/data/services/porsche-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Porsche Detailing",
  description:
    "Porsche PPF, ceramic coating and window tint in Englewood, CO. Custom-fit paint protection for 911, Cayenne, Macan, Taycan and Panamera.",
  path: "/porsche-detailing/",
  image: "/images/og/og-porsche.jpg",
});

export default function PorscheDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Porsche Paint Protection"
        description="Porsche PPF, ceramic coating and window tint specialists. Custom-fit protection for 911, Cayenne, Macan, Panamera and Taycan."
        url="/porsche-detailing"
      />
      <FAQSchema
        faqs={porscheDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Porsche Detailing", url: "/porsche-detailing" },
        ]}
      />
      <VehiclePage data={porscheDetailingData} />
    </>
  );
}
