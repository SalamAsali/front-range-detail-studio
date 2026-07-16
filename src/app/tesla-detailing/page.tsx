import type { Metadata } from "next";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { teslaDetailingData } from "@/data/services/tesla-detailing";

export const metadata: Metadata = {
  title: "Tesla Detailing",
  description:
    "Colorado's Tesla PPF & Ceramic Coating Experts",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/tesla-detailing/",
  },
  openGraph: {
    title: "Tesla Detailing - Front Range Detail Studio",
    description:
      "Colorado's Tesla PPF & Ceramic Coating Experts",
    url: "https://frontrangedetailstudio.com/tesla-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Tesla Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function TeslaDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Tesla Paint Protection"
        description="Tesla PPF, ceramic coating and window tint specialists. Custom-fit protection for Model 3, Model Y, Model S, Model X and Cybertruck."
        url="/tesla-detailing"
      />
      <FAQSchema
        faqs={teslaDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Tesla Detailing", url: "/tesla-detailing" },
        ]}
      />
      <VehiclePage data={teslaDetailingData} />
    </>
  );
}
