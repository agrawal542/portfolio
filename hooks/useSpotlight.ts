"use client";

import type { MouseEvent } from "react";

/**
 * Mouse handler that stores the cursor position on the element as CSS
 * variables; the `.spotlight` class uses them to draw a glow under the cursor.
 */
export function useSpotlight() {
  return (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const box = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - box.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - box.top}px`);
  };
}
