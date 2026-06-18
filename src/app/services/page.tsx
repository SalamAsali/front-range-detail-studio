import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicesHubData } from "@/data/services/services-hub";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PPF, ceramic coating, window tint, vinyl wraps, paint correction, RV & boat services. All performed by certified technicians in our Centennial studio. Front Range Detail Studio.",
};

export default function ServicesPage() {
  return <ServicePage data={servicesHubData} />;
}
