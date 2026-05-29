"use client";

import { useChrome } from "./ChromeProvider";

export function ReplayLink() {
  const { replay } = useChrome();
  return (
    <button
      type="button"
      className="footer-replay"
      onClick={replay}
      data-link
      data-label="Replay"
    >
      Replay intro
    </button>
  );
}
