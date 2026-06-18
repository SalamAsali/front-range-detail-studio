import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { detailingPackagesData } from "@/data/services/detailing-packages";

export const metadata: Metadata = {
  title: "Detailing Packages",
  description:
    "Auto detailing and ceramic coating packages in Denver, CO. Maintenance wash, full exterior, full interior, complete packages plus Bronze through Platinum coating tiers. Front Range Detail Studio.",
};

export default function DetailingPackagesPage() {
  return <ServicePage data={detailingPackagesData} />;
}
