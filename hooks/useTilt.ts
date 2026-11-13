"use client";

import { useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

const MAX_DEGREES = 8;
const spring = { stiffness: 160, damping: 18 };

/** 3D tilt that follows the cursor. Spread `handlers` and `style` on a motion element. */
export function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, spring);
  const rotateY = useSpring(y, spring);

  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - box.left) / box.width - 0.5;
    const vertical = (event.clientY - box.top) / box.height - 0.5;
    y.set(horizontal * MAX_DEGREES * 2);
    x.set(-vertical * MAX_DEGREES * 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    handlers: { onMouseMove, onMouseLeave },
    style: { rotateX, rotateY, transformPerspective: 900 },
  };
}
