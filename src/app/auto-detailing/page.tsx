import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { autoDetailingData } from "@/data/services/auto-detailing";

export const metadata: Metadata = {
  title: "Auto Detailing & Paint Correction",
  description:
    "Professional auto detailing and multi-stage paint correction in Denver, CO. Interior, exterior and complete packages. Appointment-only studio. Front Range Detail Studio.",
};

export default function AutoDetailingPage() {
  return <ServicePage data={autoDetailingData} />;
}
