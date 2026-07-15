import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rvDetailingData } from "@/data/services/rv-detailing";

export const metadata: Metadata = {
  title: "RV Detailing",
  description:
    "Protect your home on wheels with Colorado\u2019s most trusted RV detailing experts",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/rv-detailing/",
  },
  openGraph: {
    title: "RV Detailing - Front Range Detail Studio",
    description:
      "Protect your home on wheels with Colorado\u2019s most trusted RV detailing experts",
    url: "https://frontrangedetailstudio.com/rv-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "RV Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function RVDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="RV Detailing & Ceramic Coating"
        description="RV exterior wash, oxidation removal, ceramic coating and PPF. Per-foot pricing for Class A, B, C motorhomes, fifth-wheels and travel trailers."
        url="/rv-detailing"
      />
      {rvDetailingData.faqs && <FAQSchema faqs={rvDetailingData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "RV Detailing", url: "/rv-detailing" },
        ]}
      />
      <ServicePage data={rvDetailingData} />
    </>
  );
}
