import type { Metadata } from "next";
import { Pillars } from "@/components/sections/Pillars";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Three operating divisions — shelter, natural biotech and food — built as one diversified Australian group.",
};

export default function DivisionsPage() {
  return <Pillars />;
}
