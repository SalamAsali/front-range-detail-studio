import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { vinylWrapsData } from "@/data/services/vinyl-wraps";

export const metadata: Metadata = {
  title: "Vinyl Wraps & Decals",
  description:
    "Premium vinyl wrap application in Denver, CO. Full color changes, custom graphics, chrome deletes. Over 200 colors and finishes. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/vinyl-wraps/",
  },
  openGraph: {
    title: "Vinyl Wraps & Decals | Front Range Detail Studio",
    description:
      "Premium vinyl wrap application in Denver, CO. Full color changes, custom graphics, chrome deletes. Over 200 colors and finishes.",
    url: "https://frontrangedetailstudio.com/vinyl-wraps/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Vinyl Wraps - Front Range Detail Studio",
      },
    ],
  },
};

export default function VinylWrapsPage() {
  return (
    <>
      <ServiceSchema
        name="Vinyl Wraps"
        description="Full color changes, custom graphics, chrome deletes and accent wraps. Over 200 color options with professional installation."
        url="/vinyl-wraps"
      />
      <FAQSchema faqs={vinylWrapsData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Vinyl Wraps", url: "/vinyl-wraps" },
        ]}
      />
      <ServicePage data={vinylWrapsData} />
    </>
  );
}
