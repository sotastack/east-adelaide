"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

type CurtainState = "up" | "rising" | "gone";

interface ChromeContextValue {
  curtain: CurtainState;
  dismiss: () => void;
  replay: () => void;
}

const ChromeContext = createContext<ChromeContextValue | null>(null);

export function useChrome() {
  const ctx = useContext(ChromeContext);
  if (!ctx) throw new Error("useChrome must be used within ChromeProvider");
  return ctx;
}

const AUTO_RISE_MS = 2400;
const RISE_MS = 1400;

export function ChromeProvider({ children }: { children: React.ReactNode }) {
  // Render the curtain up by default so SSR + first paint match (and first
  // visit sees it immediately); the mount effect hides it for return visits.
  const [curtain, setCurtain] = useState<CurtainState>("up");
  const reduced = useReducedMotion();
  const autoRise = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (autoRise.current) clearTimeout(autoRise.current);
    if (removeTimer.current) clearTimeout(removeTimer.current);
  }, []);

  const dismiss = useCallback(() => {
    clearTimers();
    setCurtain((prev) => (prev === "up" ? "rising" : prev));
    try {
      sessionStorage.setItem("eac_intro_seen", "1");
    } catch {}
    removeTimer.current = setTimeout(
      () => setCurtain("gone"),
      reduced ? 400 : RISE_MS,
    );
  }, [clearTimers, reduced]);

  const replay = useCallback(() => {
    clearTimers();
    try {
      sessionStorage.removeItem("eac_intro_seen");
    } catch {}
    setCurtain("up");
    autoRise.current = setTimeout(() => dismiss(), AUTO_RISE_MS);
  }, [clearTimers, dismiss]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("eac_intro_seen") === "1";
    } catch {}
    if (seen) {
      setCurtain("gone");
    } else {
      autoRise.current = setTimeout(() => dismiss(), AUTO_RISE_MS);
    }
    return clearTimers;
    // mount-only: dismiss/clearTimers are stable enough for this purpose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const active = curtain === "up" || curtain === "rising";
    document.body.classList.toggle("curtain-active", active);
  }, [curtain]);

  return (
    <ChromeContext.Provider value={{ curtain, dismiss, replay }}>
      <ReactLenis
        root
        options={{ lerp: reduced ? 1 : 0.1, duration: 1.1, smoothWheel: !reduced }}
      >
        {children}
      </ReactLenis>
    </ChromeContext.Provider>
  );
}
