"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

/** Vertical timeline whose blue line draws itself as the visitor scrolls. */
export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <ol ref={ref} className="relative ml-1 pl-6 sm:ml-3 sm:pl-10">
      <span className="absolute inset-y-0 left-0 w-px bg-line-strong" aria-hidden="true" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute inset-y-0 left-0 w-px origin-top bg-linear-to-b from-primary to-accent"
      />
      {children}
    </ol>
  );
}
