import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { teslaDetailingData } from "@/data/services/tesla-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Tesla Detailing",
  description:
    "Tesla PPF, ceramic coating and ceramic window tint in Englewood, CO. Custom-fit protection for Model 3, Model Y, Model S, Model X and Cybertruck.",
  path: "/tesla-detailing/",
  image: "/images/og/og-tesla.jpg",
});

export default function TeslaDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Tesla Paint Protection"
        description="Tesla PPF, ceramic coating and window tint specialists. Custom-fit protection for Model 3, Model Y, Model S, Model X and Cybertruck."
        url="/tesla-detailing"
      />
      <FAQSchema
        faqs={teslaDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Tesla Detailing", url: "/tesla-detailing" },
        ]}
      />
      <VehiclePage data={teslaDetailingData} />
    </>
  );
}
