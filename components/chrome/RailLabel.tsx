"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useChrome } from "./ChromeProvider";

interface Active {
  num: string;
  title: string;
  dark: boolean;
}

export function RailLabel() {
  const { curtain } = useChrome();
  const pathname = usePathname();
  const [active, setActive] = useState<Active | null>(null);

  useEffect(() => {
    setActive(null);
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    );
    if (!sections.length) return;

    const compute = () => {
      const triggerY = window.innerHeight * 0.45;
      let current = sections[0];
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= triggerY) current = s;
      }
      setActive({
        num: current.getAttribute("data-section") || "",
        title: current.getAttribute("data-title") || "",
        dark: current.dataset.railTheme === "dark",
      });
    };

    const io = new IntersectionObserver(compute, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach((s) => io.observe(s));
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    compute();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [pathname]);

  const visible = active !== null && curtain === "gone";

  return (
    <div
      className={`rail-label${visible ? " is-on" : ""}${
        active?.dark ? " on-dark" : ""
      }`}
      aria-hidden="true"
    >
      <span className="num">{active?.num ?? ""}</span>
      <span className="text">{active?.title ?? ""}</span>
    </div>
  );
}
