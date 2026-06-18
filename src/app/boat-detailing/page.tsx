import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { boatDetailingData } from "@/data/services/boat-detailing";

export const metadata: Metadata = {
  title: "Boat Detailing",
  description:
    "Professional boat detailing in Denver, CO. Exterior buffing, gelcoat restoration, interior cleaning, annual waxing. Marine-grade products. Front Range Detail Studio.",
};

export default function BoatDetailingPage() {
  return <ServicePage data={boatDetailingData} />;
}
