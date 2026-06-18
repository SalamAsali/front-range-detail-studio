import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { rivianDetailingData } from "@/data/services/rivian-detailing";

export const metadata: Metadata = {
  title: "Rivian R1T & R1S PPF, Ceramic Coating & Tint",
  description:
    "Rivian R1T and R1S PPF, ceramic coating and window tint specialists in Englewood, CO. Protect your adventure vehicle. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/rivian-detailing/",
  },
  openGraph: {
    title: "Rivian R1T & R1S Protection | Front Range Detail Studio",
    description:
      "Rivian R1T and R1S PPF, ceramic coating and window tint specialists in Englewood, CO. Protect your adventure vehicle.",
    url: "https://frontrangedetailstudio.com/rivian-detailing/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Rivian Detailing - Front Range Detail Studio",
      },
    ],
  },
};

export default function RivianDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Rivian Paint Protection"
        description="Rivian R1T and R1S PPF, ceramic coating and window tint specialists. Custom-fit protection for your adventure vehicle."
        url="/rivian-detailing"
      />
      <FAQSchema faqs={rivianDetailingData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Rivian Detailing", url: "/rivian-detailing" },
        ]}
      />
      <ServicePage data={rivianDetailingData} />
    </>
  );
}
