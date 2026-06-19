import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { servicesHubData } from "@/data/services/services-hub";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Detailing & Ceramic Coating Services",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/services/",
  },
  openGraph: {
    title: "Services | Front Range Detail Studio",
    description:
      "Detailing & Ceramic Coating Services",
    url: "https://frontrangedetailstudio.com/services/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Services - Front Range Detail Studio",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <ServicePage data={servicesHubData} />
    </>
  );
}
