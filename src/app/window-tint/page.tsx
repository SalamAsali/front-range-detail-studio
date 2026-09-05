import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { windowTintData } from "@/data/services/window-tint";

export const metadata: Metadata = pageMetadata({
  title: "Window Tint",
  description:
    "SunTek Evolve ceramic window tint blocking 99% of UV and up to 94% of heat, with a lifetime warranty. Colorado-legal shades installed in Englewood, CO.",
  path: "/window-tint/",
  image: "/images/og/og-window-tint.jpg",
});

export default function WindowTintPage() {
  return (
    <>
      <ServiceSchema
        name="Ceramic Window Tint"
        description="Premium ceramic window tint with 99% UV rejection and up to 94% heat rejection. Lifetime warranty. Colorado-legal shades available."
        url="/window-tint"
      />
      {windowTintData.faqs && <FAQSchema faqs={windowTintData.faqs} />}
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
