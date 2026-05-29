import type { Metadata } from "next";
import { Investor } from "@/components/sections/Investor";

export const metadata: Metadata = {
  title: "Investor Centre",
  description:
    "A diversified $90M operating revenue base across shelter, biotech and food — scaled, diversified and capital-markets ready.",
};

export default function InvestorPage() {
  return <Investor />;
}
