import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { servicesHubData } from "@/data/services/services-hub";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "PPF and clear bra, System X ceramic coating, ceramic window tint, vinyl wraps, paint correction and detailing for cars, RVs and boats near Denver, CO.",
  path: "/services/",
  image: "/images/og/og-services.jpg",
});

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
