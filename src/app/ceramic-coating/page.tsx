import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { ceramicCoatingData } from "@/data/services/ceramic-coating";

export const metadata: Metadata = {
  title: "Ceramic Coating",
  description:
    "Ultimate Protection and Lasting Gloss for Colorado Drivers",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/ceramic-coating/",
  },
  openGraph: {
    title: "Ceramic Coating - Front Range Detail Studio",
    description:
      "Ultimate Protection and Lasting Gloss for Colorado Drivers",
    url: "https://frontrangedetailstudio.com/ceramic-coating/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Ceramic Coating - Front Range Detail Studio",
      },
    ],
  },
};

export default function CeramicCoatingPage() {
  return (
    <>
      <ServiceSchema
        name="Ceramic Coating"
        description="System X MAX G Plus ceramic coating with lifetime warranty. Professional studio-only application in our climate-controlled Centennial facility."
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
