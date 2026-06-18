import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { fordTruckDetailingData } from "@/data/services/ford-truck-detailing";

export const metadata: Metadata = {
  title: "Ford Truck PPF, Ceramic Coating & Window Tint",
  description:
    "Ford F-150, Super Duty and Lightning PPF, ceramic coating and window tint in Englewood, CO. Protect your truck. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/ford-truck-detailing/",
  },
  openGraph: {
    title: "Ford Truck PPF, Ceramic Coating & Window Tint | Front Range Detail Studio",
    description:
      "Ford F-150, Super Duty and Lightning PPF, ceramic coating and window tint in Englewood, CO. Protect your truck.",
    url: "https://frontrangedetailstudio.com/ford-truck-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Ford Truck Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function FordTruckDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Ford Truck Paint Protection"
        description="Ford F-150, Super Duty and Lightning PPF, ceramic coating and window tint. Custom-fit protection for all Ford truck models."
        url="/ford-truck-detailing"
      />
      <FAQSchema faqs={fordTruckDetailingData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ford Truck Detailing", url: "/ford-truck-detailing" },
        ]}
      />
      <ServicePage data={fordTruckDetailingData} />
    </>
  );
}
