import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { boatCeramicCoatingData } from "@/data/services/boat-ceramic-coating";

export const metadata: Metadata = {
  title: "Boat Ceramic Coating & PPF",
  description:
    "System X Marine ceramic coating and SunTek Reaction PPF for boats in Denver, CO. 3-year warranty. Hull, deck and topside protection. Front Range Detail Studio.",
};

export default function BoatCeramicCoatingPage() {
  return <ServicePage data={boatCeramicCoatingData} />;
}
