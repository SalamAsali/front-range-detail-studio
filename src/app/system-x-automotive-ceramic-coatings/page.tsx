import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { systemXData } from "@/data/services/system-x";

export const metadata: Metadata = pageMetadata({
  title: "System X Automotive Ceramic Coatings",
  description:
    "Authorized System X dealer in Englewood, CO. MAX G+ Hyper Gloss 9H lifetime coating, plus System X Glass, Renew, Revive and Interior protection products.",
  path: "/system-x-automotive-ceramic-coatings/",
  image: "/images/og/og-system-x.jpg",
});

export default function SystemXPage() {
  return (
    <>
      <ServiceSchema
        name="System X Automotive Ceramic Coatings"
        description="Authorized System X dealer. MAX G Plus lifetime ceramic coating, glass coatings, interior protection, renew and revive products."
        url="/system-x-automotive-ceramic-coatings"
      />
      {systemXData.faqs && <FAQSchema faqs={systemXData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "System X Ceramic Coatings", url: "/system-x-automotive-ceramic-coatings" },
        ]}
      />
      <ServicePage data={systemXData} />
    </>
  );
}
