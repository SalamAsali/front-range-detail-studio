import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { boatDetailingData } from "@/data/services/boat-detailing";

export const metadata: Metadata = {
  title: "Boat Detailing",
  description:
    "Professional boat detailing in Denver, CO. Exterior buffing, gelcoat restoration, interior cleaning, annual waxing. Marine-grade products. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/boat-detailing/",
  },
  openGraph: {
    title: "Boat Detailing | Front Range Detail Studio",
    description:
      "Professional boat detailing in Denver, CO. Exterior buffing, gelcoat restoration, interior cleaning, annual waxing. Marine-grade products.",
    url: "https://frontrangedetailstudio.com/boat-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Boat Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function BoatDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Boat Detailing"
        description="Professional boat detailing including exterior buffing, gelcoat restoration, interior cleaning and annual waxing with marine-grade products."
        url="/boat-detailing"
      />
      <FAQSchema faqs={boatDetailingData.faqs!} />
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
