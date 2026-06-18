import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { ppfData } from "@/data/services/ppf";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) & Clear Bra",
  description:
    "SunTek Reaction PPF with 12-year warranty in Denver, CO. Self-healing, invisible paint protection film installed in our climate-controlled studio. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/paint-protection-film-ppf/",
  },
  openGraph: {
    title: "Paint Protection Film (PPF) & Clear Bra | Front Range Detail Studio",
    description:
      "SunTek Reaction PPF with 12-year warranty in Denver, CO. Self-healing, invisible paint protection film installed in our climate-controlled studio.",
    url: "https://frontrangedetailstudio.com/paint-protection-film-ppf/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Paint Protection Film - Front Range Detail Studio",
      },
    ],
  },
};

export default function PPFPage() {
  return (
    <>
      <ServiceSchema
        name="Paint Protection Film (PPF)"
        description="SunTek Reaction PPF with 12-year warranty and self-healing technology. Professional installation in our climate-controlled Centennial studio."
        url="/paint-protection-film-ppf"
      />
      <FAQSchema faqs={ppfData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Paint Protection Film (PPF)", url: "/paint-protection-film-ppf" },
        ]}
      />
      <ServicePage data={ppfData} />
    </>
  );
}
