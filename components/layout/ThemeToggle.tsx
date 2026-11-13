"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { themeLabels } from "@/data/navigation";
import { useTheme } from "@/hooks/useTheme";

/** Sun/moon button that switches between the light and dark themes. */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? themeLabels.toLight : themeLabels.toDark}
      className="grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-card text-body transition-colors hover:border-primary hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={17} aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
