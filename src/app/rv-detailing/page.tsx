import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { rvDetailingData } from "@/data/services/rv-detailing";

export const metadata: Metadata = {
  title: "RV Detailing & Ceramic Coating",
  description:
    "RV detailing, oxidation removal and ceramic coating in Denver, CO. Class A, B, C, fifth-wheels, travel trailers. Per-foot pricing. Front Range Detail Studio.",
};

export default function RVDetailingPage() {
  return <ServicePage data={rvDetailingData} />;
}
