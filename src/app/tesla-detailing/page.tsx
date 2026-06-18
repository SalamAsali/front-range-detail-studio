import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { teslaDetailingData } from "@/data/services/tesla-detailing";

export const metadata: Metadata = {
  title: "Tesla Detailing & Protection",
  description:
    "Tesla PPF, ceramic coating and window tint specialists in Englewood, CO. Model 3, Model Y, Model S, Model X, Cybertruck. Front Range Detail Studio.",
};

export default function TeslaDetailingPage() {
  return <ServicePage data={teslaDetailingData} />;
}
