type Point = { x: number; y: number };

/**
 * Applies a theme change with a circular reveal growing from `origin`.
 * Falls back to an instant switch where the browser lacks View Transitions
 * or the visitor prefers reduced motion.
 */
export function runThemeTransition(apply: () => void, origin: Point) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("startViewTransition" in document) || reduceMotion) {
    apply();
    return;
  }

  const { x, y } = origin;
  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  document.startViewTransition(apply).ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 550,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
