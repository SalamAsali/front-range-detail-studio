import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { detailingPackagesData } from "@/data/services/detailing-packages";

export const metadata: Metadata = {
  title: "Detailing Packages",
  description:
    "Auto detailing and ceramic coating packages in Denver, CO. Maintenance wash, full exterior, full interior, complete packages plus Bronze through Platinum coating tiers.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/detailing-packages/",
  },
  openGraph: {
    title: "Detailing Packages | Front Range Detail Studio",
    description:
      "Auto detailing and ceramic coating packages in Denver, CO. Maintenance wash, full exterior, full interior, complete packages plus coating tiers.",
    url: "https://frontrangedetailstudio.com/detailing-packages/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Detailing Packages - Front Range Detail Studio",
      },
    ],
  },
};

export default function DetailingPackagesPage() {
  return (
    <>
      <ServiceSchema
        name="Detailing Packages"
        description="Auto detailing and ceramic coating packages. Maintenance wash, full exterior, full interior, complete packages plus Bronze through Platinum ceramic coating tiers."
        url="/detailing-packages"
      />
      {detailingPackagesData.faqs && <FAQSchema faqs={detailingPackagesData.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Detailing Packages", url: "/detailing-packages" },
        ]}
      />
      <ServicePage data={detailingPackagesData} />
    </>
  );
}
