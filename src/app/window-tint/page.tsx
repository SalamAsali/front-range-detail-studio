import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { windowTintData } from "@/data/services/window-tint";

export const metadata: Metadata = {
  title: "Ceramic Window Tint",
  description:
    "Ceramic window tint in Denver & Centennial, CO. 99% UV rejection, up to 94% heat rejection, lifetime warranty. Colorado-legal installation. Front Range Detail Studio.",
  alternates: {
    canonical: "https://frontrangedetailstudio.com/window-tint/",
  },
  openGraph: {
    title: "Ceramic Window Tint | Front Range Detail Studio",
    description:
      "Ceramic window tint in Denver & Centennial, CO. 99% UV rejection, up to 94% heat rejection, lifetime warranty. Colorado-legal installation.",
    url: "https://frontrangedetailstudio.com/window-tint/",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Window Tinting - Front Range Detail Studio",
      },
    ],
  },
};

export default function WindowTintPage() {
  return (
    <>
      <ServiceSchema
        name="Ceramic Window Tint"
        description="Premium ceramic window tint with 99% UV rejection and up to 94% heat rejection. Lifetime warranty. Colorado-legal shades available."
        url="/window-tint"
      />
      <FAQSchema faqs={windowTintData.faqs!} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Window Tint", url: "/window-tint" },
        ]}
      />
      <ServicePage data={windowTintData} />
    </>
  );
}
