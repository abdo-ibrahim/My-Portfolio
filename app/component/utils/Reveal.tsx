"use client";
import { usePortfolioReducedMotion } from "./MotionProvider";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({ children, direction = "up", className, delay = 0 }: {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  className?: string;
  delay?: number;
}) {
  const reduced = usePortfolioReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? { opacity: 1, x: 0, y: 0 } : {
        opacity: [0, 1],
        y: [direction === "up" ? 18 : 0, 0],
        x: [direction === "left" ? -18 : direction === "right" ? 18 : 0, 0],
      }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
