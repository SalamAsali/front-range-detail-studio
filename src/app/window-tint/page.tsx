import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { windowTintData } from "@/data/services/window-tint";

export const metadata: Metadata = {
  title: "Ceramic Window Tint",
  description:
    "Ceramic window tint in Denver & Centennial, CO. 99% UV rejection, up to 94% heat rejection, lifetime warranty. Colorado-legal installation. Front Range Detail Studio.",
};

export default function WindowTintPage() {
  return <ServicePage data={windowTintData} />;
}
