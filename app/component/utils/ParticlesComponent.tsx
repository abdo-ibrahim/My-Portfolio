"use client";
import { usePortfolioReducedMotion } from "./MotionProvider";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { ISourceOptions } from "@tsparticles/engine";
import "./ParticlesComponent.css";

export default function ParticlesComponent() {
  const [ready, setReady] = useState(false);
  const reduced = usePortfolioReducedMotion();
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
      events: { onHover: { enable: !reduced, mode: "grab" } },
      modes: { grab: { distance: 150, links: { opacity: 0.2 } } },
    },
    particles: {
      color: { value: "#c7afe8" },
      links: { color: "#b79adf", distance: 150, enable: true, opacity: 0.13, width: 1 },
      move: { enable: !reduced, speed: 0.55, outModes: { default: "out" } },
      number: { density: { enable: true }, value: 75 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  }), [reduced]);
  return <div className="particles-backdrop" aria-hidden="true">{ready && <Particles id="home-particles" options={options} />}</div>;
}
