"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number };

const hidden = { opacity: 0, y: 24, filter: "blur(6px)" };
const shown = { opacity: 1, y: 0, filter: "blur(0px)" };

/** Fades, slides and sharpens its children the first time they scroll into view. */
export default function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
