"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const list = { shown: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  shown: { opacity: 1, scale: 1, y: 0 },
};

/** List whose items pop in one after another when scrolled into view. */
export function Stagger({ children, className }: Props) {
  return (
    <motion.ul
      className={className}
      variants={list}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, className }: Props) {
  return (
    <motion.li className={className} variants={item}>
      {children}
    </motion.li>
  );
}
