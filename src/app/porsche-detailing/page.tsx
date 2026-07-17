import type { Metadata } from "next";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { porscheDetailingData } from "@/data/services/porsche-detailing";

export const metadata: Metadata = {
  title: "Porsche Detailing",
  description:
    "Colorado's Porsche PPF & Ceramic Coating Experts",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/porsche-detailing/",
  },
  openGraph: {
    title: "Porsche Detailing - Front Range Detail Studio",
    description:
      "Colorado's Porsche PPF & Ceramic Coating Experts",
    url: "https://frontrangedetailstudio.com/porsche-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Porsche Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function PorscheDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Porsche Paint Protection"
        description="Porsche PPF, ceramic coating and window tint specialists. Custom-fit protection for 911, Cayenne, Macan, Panamera and Taycan."
        url="/porsche-detailing"
      />
      <FAQSchema
        faqs={porscheDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Porsche Detailing", url: "/porsche-detailing" },
        ]}
      />
      <VehiclePage data={porscheDetailingData} />
    </>
  );
}
