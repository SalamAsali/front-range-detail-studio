import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { systemXData } from "@/data/services/system-x";

export const metadata: Metadata = {
  title: "System X Automotive Ceramic Coatings",
  description:
    "Authorized System X dealer in Denver, CO. MAX G Plus lifetime ceramic coating, glass, interior, renew and revive products. Front Range Detail Studio.",
};

export default function SystemXPage() {
  return <ServicePage data={systemXData} />;
}
