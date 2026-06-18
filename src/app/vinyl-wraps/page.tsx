import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { vinylWrapsData } from "@/data/services/vinyl-wraps";

export const metadata: Metadata = {
  title: "Vinyl Wraps & Decals",
  description:
    "Premium vinyl wrap application in Denver, CO. Full color changes, custom graphics, chrome deletes. Over 200 colors and finishes. Front Range Detail Studio.",
};

export default function VinylWrapsPage() {
  return <ServicePage data={vinylWrapsData} />;
}
