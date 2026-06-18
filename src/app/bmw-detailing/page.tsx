import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { bmwDetailingData } from "@/data/services/bmw-detailing";

export const metadata: Metadata = {
  title: "BMW Detailing & Protection",
  description:
    "BMW PPF, ceramic coating and window tint specialists in Englewood, CO. 3 Series, 5 Series, X models, M cars, i-series EVs. Front Range Detail Studio.",
};

export default function BMWDetailingPage() {
  return <ServicePage data={bmwDetailingData} />;
}
