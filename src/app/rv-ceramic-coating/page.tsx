import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rvCeramicCoatingData } from "@/data/services/rv-ceramic-coating";

export const metadata: Metadata = pageMetadata({
  title: "RV Ceramic Coating",
  description:
    "System X ceramic coating for RVs and motorhomes, with a 3-year warranty on new units. Protects against Colorado UV, oxidation and road grime.",
  path: "/rv-ceramic-coating/",
  image: "/images/og/og-rv-ceramic-coating.jpg",
});

export default function RVCeramicCoatingPage() {
  return (
    <>
      <ServiceSchema
        name="RV Ceramic Coating"
        description="System X MAX G Plus ceramic coating for RVs and motorhomes. 3-year warranty on new units with annual top coat maintenance."
        url="/rv-ceramic-coating"
      />
      {rvCeramicCoatingData.faqs && <FAQSchema faqs={rvCeramicCoatingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "RV Ceramic Coating", url: "/rv-ceramic-coating" },
        ]}
      />
      <ServicePage data={rvCeramicCoatingData} />
    </>
  );
}
