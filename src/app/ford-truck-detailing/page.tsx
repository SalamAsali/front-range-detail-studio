import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { fordTruckDetailingData } from "@/data/services/ford-truck-detailing";

export const metadata: Metadata = {
  title: "Ford Truck Detailing & Protection",
  description:
    "Ford F-150, Super Duty and Lightning PPF, ceramic coating and window tint in Englewood, CO. Protect your truck. Front Range Detail Studio.",
};

export default function FordTruckDetailingPage() {
  return <ServicePage data={fordTruckDetailingData} />;
}
