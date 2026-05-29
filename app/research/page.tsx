import type { Metadata } from "next";
import { Research } from "@/components/sections/Research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research-led functions across construction materials and natural bioscience, undertaken with four Australian universities and Chinese research groups.",
};

export default function ResearchPage() {
  return <Research />;
}
