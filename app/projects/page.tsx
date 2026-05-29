import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A working portfolio of translational projects — from AI-enabled modular buildings to enzymatic NMN and marine bioactive peptides.",
};

export default function ProjectsPage() {
  return <Projects linked />;
}
