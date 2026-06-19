import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { autoDetailingData } from "@/data/services/auto-detailing";

export const metadata: Metadata = {
  title: "Auto Detailing",
  description:
    "From basic maintenance to deep restoration",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/auto-detailing/",
  },
  openGraph: {
    title: "Auto Detailing & Paint Correction | Front Range Detail Studio",
    description:
      "From basic maintenance to deep restoration",
    url: "https://frontrangedetailstudio.com/auto-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Auto Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function AutoDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Auto Detailing & Paint Correction"
        description="Professional auto detailing and multi-stage paint correction. Maintenance wash, full exterior, full interior and complete packages available."
        url="/auto-detailing"
      />
      <FAQSchema faqs={autoDetailingData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Auto Detailing", url: "/auto-detailing" },
        ]}
      />
      <ServicePage data={autoDetailingData} />
    </>
  );
}
