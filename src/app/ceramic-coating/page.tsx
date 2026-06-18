import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ceramicCoatingData } from "@/data/services/ceramic-coating";

export const metadata: Metadata = {
  title: "Ceramic Coating",
  description:
    "System X MAX G Plus ceramic coating in Denver & Centennial, CO. Lifetime warranty, professional studio-only application, hydrophobic protection. Front Range Detail Studio.",
};

export default function CeramicCoatingPage() {
  return <ServicePage data={ceramicCoatingData} />;
}
