"use client";
import { usePortfolioReducedMotion } from "../utils/MotionProvider";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import "./Heading_Animate.css";

export default function HeadingAnimate() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduced = usePortfolioReducedMotion();
  return (
    <h2 ref={ref} className="contact-wave" aria-label="Let’s have a chat">
      {Array.from("Let’s have a chat").map((letter, index) => (
        <motion.span key={index} aria-hidden="true" initial={false}
          animate={inView && !reduced ? { y: [0, -7, 0, 0], rotateY: [0, 8, 0, 0], color: ["var(--text)", "var(--accent)", "var(--text)", "var(--text)"] } : { y: 0, rotateY: 0, color: "var(--text)" }}
          transition={inView && !reduced ? { duration: 2.4, delay: index * 0.05, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.3, 1] } : { duration: 0 }}
        >{letter === " " ? "\u00a0" : letter}</motion.span>
      ))}
    </h2>
  );
}
