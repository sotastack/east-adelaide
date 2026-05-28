"use client";

import { useEffect } from "react";
import { useChrome } from "./ChromeProvider";

const em = { fontStyle: "normal", color: "var(--ember)" } as const;

export function Curtain() {
  const { curtain, dismiss } = useChrome();

  // Any key dismisses while the curtain is up (matches v1 behavior).
  useEffect(() => {
    if (curtain !== "up") return;
    const onKey = () => dismiss();
    window.addEventListener("keydown", onKey, { once: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [curtain, dismiss]);

  if (curtain === "gone") return null;

  return (
    <div
      id="curtain"
      className={`curtain${curtain === "rising" ? " rising" : ""}`}
      role="dialog"
      aria-label="Introduction"
    >
      <div className="curtain-eyebrow">An Invitation</div>
      <div className="curtain-mono" aria-hidden="true" />
      <div className="curtain-name">East Adelaide Capital Group</div>
      <div className="curtain-rule" />
      <div className="curtain-tagline">
        A diversified Australian operating group across{" "}
        <em style={em}>shelter</em>, <em style={em}>biotech</em> and{" "}
        <em style={em}>food.</em>
      </div>
      <div className="curtain-foot">
        <span>Filed from Victoria · Australia · 2026</span>
        <button
          type="button"
          className="skip"
          aria-label="Enter site"
          onClick={dismiss}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
