import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rivianDetailingData } from "@/data/services/rivian-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Rivian Detailing",
  description:
    "Rivian R1T and R1S paint protection film, ceramic coating and window tint in Englewood, CO. Adventure-ready protection from Colorado's Rivian specialists.",
  path: "/rivian-detailing/",
  image: "/images/og/og-rivian.jpg",
});

export default function RivianDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Rivian Paint Protection"
        description="Rivian R1T and R1S PPF, ceramic coating and window tint specialists. Custom-fit protection for your adventure vehicle."
        url="/rivian-detailing"
      />
      <FAQSchema
        faqs={rivianDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Rivian Detailing", url: "/rivian-detailing" },
        ]}
      />
      <VehiclePage data={rivianDetailingData} />
    </>
  );
}
