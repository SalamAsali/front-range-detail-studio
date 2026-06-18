import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { rivianDetailingData } from "@/data/services/rivian-detailing";

export const metadata: Metadata = {
  title: "Rivian Detailing & Protection",
  description:
    "Rivian R1T and R1S PPF, ceramic coating and window tint specialists in Englewood, CO. Protect your adventure vehicle. Front Range Detail Studio.",
};

export default function RivianDetailingPage() {
  return <ServicePage data={rivianDetailingData} />;
}
