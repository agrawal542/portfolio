"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar under the navbar showing how far the page is scrolled. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-linear-to-r from-primary to-accent"
    />
  );
}
