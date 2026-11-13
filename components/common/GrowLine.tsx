"use client";

import { motion } from "framer-motion";

/** Short gradient underline that draws itself when scrolled into view. */
export default function GrowLine() {
  return (
    <motion.span
      aria-hidden="true"
      className="mt-4 block h-1 w-14 origin-left rounded-full bg-linear-to-r from-primary to-accent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
