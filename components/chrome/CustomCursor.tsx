"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      dx = 0,
      dy = 0,
      rx = 0,
      ry = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry + 24}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    document.addEventListener("mousemove", onMove);

    // Delegated hover detection so it survives client-side route changes.
    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-link]");
      if (el) {
        document.body.classList.add("is-hover-link");
        ring.textContent = el.getAttribute("data-label") || "View";
      }
    };
    const onOut = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-link]");
      const to = e.relatedTarget as Element | null;
      if (el && (!to || !to.closest?.("[data-link]"))) {
        document.body.classList.remove("is-hover-link");
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        View
      </div>
    </>
  );
}
