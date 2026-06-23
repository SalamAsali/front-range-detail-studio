import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { systemXData } from "@/data/services/system-x";

export const metadata: Metadata = {
  title: "System X Automotive Ceramic Coatings",
  description:
    "Owners and collectors of the finest vintage and exotic automobiles worldwide trust System X to consistently provide unmatched slickness, protection,",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/system-x-automotive-ceramic-coatings/",
  },
  openGraph: {
    title: "System X Automotive Ceramic Coatings | Front Range Detail Studio",
    description:
      "Owners and collectors of the finest vintage and exotic automobiles worldwide trust System X to consistently provide unmatched slickness, protection,",
    url: "https://frontrangedetailstudio.com/system-x-automotive-ceramic-coatings/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "System X Ceramic Coatings - Front Range Detail Studio",
      },
    ],
  },
};

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
