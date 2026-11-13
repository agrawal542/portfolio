"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 500;

/**
 * True once the visitor has scrolled past the hero, and false again while
 * the section with `hideAtId` (the contact section) is on screen.
 */
export function useQuickContact(hideAtId: string) {
  const [scrolled, setScrolled] = useState(false);
  const [atTarget, setAtTarget] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(([entry]) =>
      setAtTarget(entry.isIntersecting),
    );
    const target = document.getElementById(hideAtId);
    if (target) observer.observe(target);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [hideAtId]);

  return scrolled && !atTarget;
}
