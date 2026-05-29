import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Houses } from "@/components/sections/Houses";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { Investor } from "@/components/sections/Investor";
import { FieldNotes } from "@/components/sections/FieldNotes";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Houses />
      <Research />
      <Projects />
      <Partners />
      <Investor />
      <FieldNotes />
      <Cta />
    </>
  );
}
