"use client";

import { useCountUp } from "@/hooks/useCountUp";

type Props = { target: number; suffix?: string };

/** Number that counts up from zero when it scrolls into view. */
export default function AnimatedCounter({ target, suffix = "" }: Props) {
  const ref = useCountUp(target, suffix);

  return (
    <>
      {/* Screen readers get the final value; the animation is visual only. */}
      <span className="sr-only">
        {target}
        {suffix}
      </span>
      <span ref={ref} aria-hidden="true">
        0{suffix}
      </span>
    </>
  );
}
