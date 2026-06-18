import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { boatCeramicCoatingData } from "@/data/services/boat-ceramic-coating";

export const metadata: Metadata = {
  title: "Boat Ceramic Coating & PPF",
  description:
    "System X Marine ceramic coating and SunTek Reaction PPF for boats in Denver, CO. 3-year warranty. Hull, deck and topside protection. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/boat-ceramic-coating/",
  },
  openGraph: {
    title: "Boat Ceramic Coating & PPF | Front Range Detail Studio",
    description:
      "System X Marine ceramic coating and SunTek Reaction PPF for boats in Denver, CO. 3-year warranty. Hull, deck and topside protection.",
    url: "https://frontrangedetailstudio.com/boat-ceramic-coating/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Boat Ceramic Coating - Front Range Detail Studio",
      },
    ],
  },
};

export default function BoatCeramicCoatingPage() {
  return (
    <>
      <ServiceSchema
        name="Boat Ceramic Coating & PPF"
        description="System X Marine ceramic coating and SunTek Reaction PPF for boats. 3-year warranty on new boats. Hull, deck and topside protection."
        url="/boat-ceramic-coating"
      />
      <FAQSchema faqs={boatCeramicCoatingData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Boat Ceramic Coating", url: "/boat-ceramic-coating" },
        ]}
      />
      <ServicePage data={boatCeramicCoatingData} />
    </>
  );
}
