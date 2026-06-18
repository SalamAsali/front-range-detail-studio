import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { rvCeramicCoatingData } from "@/data/services/rv-ceramic-coating";

export const metadata: Metadata = {
  title: "RV Ceramic Coating",
  description:
    "System X ceramic coating for RVs and motorhomes in Denver, CO. 3-year warranty on new units. Oxidation removal and paint correction. Front Range Detail Studio.",
};

export default function RVCeramicCoatingPage() {
  return <ServicePage data={rvCeramicCoatingData} />;
}
