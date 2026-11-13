"use client";

import { type MouseEvent, useSyncExternalStore } from "react";
import { getTheme, setTheme, type Theme } from "@/utils/theme";
import { runThemeTransition } from "@/utils/themeTransition";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Current theme plus a toggle that animates out from the clicked button. */
export function useTheme() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "light");

  function toggle(event: MouseEvent<HTMLElement>) {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const box = event.currentTarget.getBoundingClientRect();
    const origin = { x: box.left + box.width / 2, y: box.top + box.height / 2 };

    runThemeTransition(() => {
      setTheme(next);
      listeners.forEach((listener) => listener());
    }, origin);
  }

  return { theme, toggle };
}
