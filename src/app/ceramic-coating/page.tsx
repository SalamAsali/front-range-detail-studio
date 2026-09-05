import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { ceramicCoatingData } from "@/data/services/ceramic-coating";

export const metadata: Metadata = pageMetadata({
  title: "Ceramic Coating",
  description:
    "System X MAX G+ ceramic coating with a lifetime warranty, applied in our climate-controlled Englewood, CO studio — lasting gloss and Colorado-proof protection.",
  path: "/ceramic-coating/",
  image: "/images/og/og-ceramic-coating.jpg",
});

export default function CeramicCoatingPage() {
  return (
    <>
      <ServiceSchema
        name="Ceramic Coating"
        description="System X MAX G Plus ceramic coating with lifetime warranty. Professional studio-only application in our climate-controlled Englewood facility."
        url="/ceramic-coating"
      />
      {ceramicCoatingData.faqs && <FAQSchema faqs={ceramicCoatingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ceramic Coating", url: "/ceramic-coating" },
        ]}
      />
      <ServicePage data={ceramicCoatingData} />
    </>
  );
}
