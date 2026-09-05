import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { boatCeramicCoatingData } from "@/data/services/boat-ceramic-coating";

export const metadata: Metadata = pageMetadata({
  title: "Boat Ceramic Coating",
  description:
    "System X Marine ceramic coating and SunTek Reaction PPF for boats, with a 3-year warranty on new hulls. Hull, deck and topside protection near Denver.",
  path: "/boat-ceramic-coating/",
  image: "/images/og/og-boat-ceramic-coating.jpg",
});

export default function BoatCeramicCoatingPage() {
  return (
    <>
      <ServiceSchema
        name="Boat Ceramic Coating & PPF"
        description="System X Marine ceramic coating and SunTek Reaction PPF for boats. 3-year warranty on new boats. Hull, deck and topside protection."
        url="/boat-ceramic-coating"
      />
      {boatCeramicCoatingData.faqs && <FAQSchema faqs={boatCeramicCoatingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Boat Ceramic Coating", url: "/boat-ceramic-coating" },
        ]}
      />
      <ServicePage data={boatCeramicCoatingData} />
    </>
  );
}
