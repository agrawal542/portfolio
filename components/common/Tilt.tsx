"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

/** Wrapper that tilts its children in 3D towards the cursor. */
export default function Tilt({ children }: { children: ReactNode }) {
  const { handlers, style } = useTilt();

  return (
    <motion.div {...handlers} style={style}>
      {children}
    </motion.div>
  );
}
