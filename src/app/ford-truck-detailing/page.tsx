import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VehiclePage } from "@/components/VehiclePage";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { fordTruckDetailingData } from "@/data/services/ford-truck-detailing";

export const metadata: Metadata = pageMetadata({
  title: "Ford Truck Detailing",
  description:
    "Ford truck PPF, ceramic coating and window tint in Englewood, CO — F-150, Super Duty and Lightning. Protection built for Colorado work and weather.",
  path: "/ford-truck-detailing/",
  image: "/images/og/og-ford-truck.jpg",
});

export default function FordTruckDetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Ford Truck Paint Protection"
        description="Ford F-150, Super Duty and Lightning PPF, ceramic coating and window tint. Custom-fit protection for all Ford truck models."
        url="/ford-truck-detailing"
      />
      <FAQSchema
        faqs={fordTruckDetailingData.faqs.map((f) => ({
          q: f.question,
          a: f.answer,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ford Truck Detailing", url: "/ford-truck-detailing" },
        ]}
      />
      <VehiclePage data={fordTruckDetailingData} />
    </>
  );
}
