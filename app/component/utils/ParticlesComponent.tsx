"use client";
import { usePortfolioReducedMotion } from "./MotionProvider";
import { useTheme } from "./useTheme";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { ISourceOptions } from "@tsparticles/engine";
import "./ParticlesComponent.css";

export default function ParticlesComponent() {
  const [ready, setReady] = useState(false);
  const reduced = usePortfolioReducedMotion();
  const { theme } = useTheme();
  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async engine => { await loadSlim(engine); }).then(() => { if (mounted) setReady(true); });
    return () => { mounted = false; };
  }, []);
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    pauseOnOutsideViewport: true,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: !reduced, mode: "repulse" },
        onClick: { enable: !reduced, mode: "push" },
      },
      modes: {
        repulse: { distance: 150, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: theme.colors["--accent"] },
      links: { color: theme.colors["--accent"], distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: !reduced, speed: 0.55, outModes: { default: "out" } },
      number: { density: { enable: true }, value: 75 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  }), [reduced, theme]);
  return <div className="particles-backdrop" aria-hidden="true">{ready && <Particles id="portfolio-particles" options={options} />}</div>;
}
