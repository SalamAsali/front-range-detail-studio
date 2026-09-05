import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { detailingPackagesData } from "@/data/services/detailing-packages";

export const metadata: Metadata = pageMetadata({
  title: "Detailing Packages",
  description:
    "Detailing and ceramic coating packages near Denver — maintenance wash, full exterior, full interior and complete, plus Bronze through Platinum coating tiers.",
  path: "/detailing-packages/",
  image: "/images/og/og-detailing-packages.jpg",
});

export default function DetailingPackagesPage() {
  return (
    <>
      <ServiceSchema
        name="Detailing Packages"
        description="Auto detailing and ceramic coating packages. Maintenance wash, full exterior, full interior, complete packages plus Bronze through Platinum ceramic coating tiers."
        url="/detailing-packages"
      />
      {detailingPackagesData.faqs && <FAQSchema faqs={detailingPackagesData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Detailing Packages", url: "/detailing-packages" },
        ]}
      />
      <ServicePage data={detailingPackagesData} />
    </>
  );
}
