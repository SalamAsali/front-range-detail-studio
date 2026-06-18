import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { porscheDetailingData } from "@/data/services/porsche-detailing";

export const metadata: Metadata = {
  title: "Porsche Detailing & Protection",
  description:
    "Porsche PPF, ceramic coating and window tint specialists in Englewood, CO. 911, Cayenne, Macan, Panamera, Taycan. Front Range Detail Studio.",
};

export default function PorscheDetailingPage() {
  return <ServicePage data={porscheDetailingData} />;
}
