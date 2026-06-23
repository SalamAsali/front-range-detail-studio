import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rvCeramicCoatingData } from "@/data/services/rv-ceramic-coating";

export const metadata: Metadata = {
  title: "RV Ceramic Coating",
  description:
    "Safeguard your RV from UV rays, oxidation, and road grime",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/rv-ceramic-coating/",
  },
  openGraph: {
    title: "RV Ceramic Coating | Front Range Detail Studio",
    description:
      "Safeguard your RV from UV rays, oxidation, and road grime",
    url: "https://frontrangedetailstudio.com/rv-ceramic-coating/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "RV Ceramic Coating - Front Range Detail Studio",
      },
    ],
  },
};

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
