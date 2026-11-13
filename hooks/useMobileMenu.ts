"use client";

import { useEffect, useState } from "react";

/** Width at which the desktop navigation replaces the mobile menu (Tailwind `md`). */
const DESKTOP_QUERY = "(min-width: 768px)";

/** Open/close state for the mobile menu. Closes on Escape and on desktop widths. */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggle: () => setIsOpen((open) => !open),
    close: () => setIsOpen(false),
  };
}
