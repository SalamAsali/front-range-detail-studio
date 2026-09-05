import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { boatDetailingData } from "@/data/services/boat-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Boat Detailing",
  description:
    "Boat detailing near Denver — exterior buffing, gelcoat restoration and oxidation removal, interior cleaning and annual waxing with marine-grade products.",
  path: "/boat-detailing/",
  image: "/images/og/og-boat-detailing.jpg",
});

export default function BoatDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Boat Detailing"
        description="Professional boat detailing including exterior buffing, gelcoat restoration, interior cleaning and annual waxing with marine-grade products."
        url="/boat-detailing"
      />
      {boatDetailingData.faqs && <FAQSchema faqs={boatDetailingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Boat Detailing", url: "/boat-detailing" },
        ]}
      />
      <ServicePage data={boatDetailingData} />
    </>
  );
}
