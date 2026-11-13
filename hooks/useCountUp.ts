"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

function format(value: number, target: number) {
  return Number.isInteger(target) ? Math.round(value).toString() : value.toFixed(1);
}

/**
 * Counts from 0 up to `target` the first time the element scrolls into view.
 * Attach the returned ref to the element that should show the number.
 */
export function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    const show = (value: number) => {
      if (ref.current) ref.current.textContent = `${format(value, target)}${suffix}`;
    };

    if (reduceMotion) {
      show(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: show,
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, suffix, target]);

  return ref;
}
