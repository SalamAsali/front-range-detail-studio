import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { ppfData } from "@/data/services/ppf";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "#1 PPF Clear Bra Paint Protection Film | Denver's Best Rated Shop",
  description:
    "SunTek Reaction PPF and clear bra with a 12-year warranty and self-healing top coat, installed in our climate-controlled Englewood, CO studio near Denver.",
  path: "/paint-protection-film-ppf/",
  image: "/images/og/og-ppf.jpg",
});

export default function PPFPage() {
  return (
    <>
      <ServiceSchema
        name="Paint Protection Film (PPF)"
        description="SunTek Reaction PPF with 12-year warranty and self-healing technology. Professional installation in our climate-controlled Englewood studio."
        url="/paint-protection-film-ppf"
      />
      {ppfData.faqs && <FAQSchema faqs={ppfData.faqs} />}
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
