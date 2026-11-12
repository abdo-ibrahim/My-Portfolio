"use client";

import { MotionConfig as Config } from "motion/react";
import { createContext, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const ReducedMotionContext = createContext(false);
const isPreview = process.env.NODE_ENV === "development";

function subscribe(onChange: () => void) {
  if (isPreview) return () => {};
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  return !isPreview && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function usePortfolioReducedMotion() {
  return useContext(ReducedMotionContext);
}

export function MotionConfig({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, () => false);
  return (
    <ReducedMotionContext.Provider value={reduced}>
      <Config reducedMotion={reduced ? "always" : "never"}>{children}</Config>
    </ReducedMotionContext.Provider>
  );
}
