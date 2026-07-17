import type { Metadata } from "next";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { bmwDetailingData } from "@/data/services/bmw-detailing";

export const metadata: Metadata = {
  title: {
    absolute: "BMW Paint Protection & PPF in Englewood, CO | Front Range Detail Studio",
  },
  description:
    "Protect your BMW in Englewood, CO with paint protection film, ceramic coatings, color-changing PPF, and window tint. Front Range Detail Studio\u2014Colorado\u2019s BMW protection experts",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/bmw-detailing/",
  },
  openGraph: {
    title: "BMW Paint Protection & PPF in Englewood, CO | Front Range Detail Studio",
    description:
      "Protect your BMW in Englewood, CO with paint protection film, ceramic coatings, color-changing PPF, and window tint. Front Range Detail Studio\u2014Colorado\u2019s BMW protection experts",
    url: "https://frontrangedetailstudio.com/bmw-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "BMW Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function BMWDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="BMW Paint Protection"
        description="BMW PPF, ceramic coating and window tint specialists. Custom-fit protection for all BMW models including M cars and i-series EVs."
        url="/bmw-detailing"
      />
      <FAQSchema
        faqs={bmwDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "BMW Detailing", url: "/bmw-detailing" },
        ]}
      />
      <VehiclePage data={bmwDetailingData} />
    </>
  );
}
