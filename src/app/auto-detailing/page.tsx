import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { autoDetailingData } from "@/data/services/auto-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Auto Detailing",
  description:
    "Auto detailing and multi-stage paint correction in Englewood, CO — maintenance washes through full interior and exterior restoration. Free quotes.",
  path: "/auto-detailing/",
  image: "/images/og/og-auto-detailing.jpg",
});

export default function AutoDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Auto Detailing & Paint Correction"
        description="Professional auto detailing and multi-stage paint correction. Maintenance wash, full exterior, full interior and complete packages available."
        url="/auto-detailing"
      />
      {autoDetailingData.faqs && <FAQSchema faqs={autoDetailingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Auto Detailing", url: "/auto-detailing" },
        ]}
      />
      <ServicePage data={autoDetailingData} />
    </>
  );
}
