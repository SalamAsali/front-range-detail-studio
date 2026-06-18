import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { ppfData } from "@/data/services/ppf";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) & Clear Bra",
  description:
    "SunTek Reaction PPF with 12-year warranty in Denver, CO. Self-healing, invisible paint protection film installed in our climate-controlled studio. Front Range Detail Studio.",
};

export default function PPFPage() {
  return <ServicePage data={ppfData} />;
}
