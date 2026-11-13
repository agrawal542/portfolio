import type { ReactNode } from "react";

/** Pill with a pulsing dot, used for the availability note. */
export default function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-primary-line bg-primary-soft px-3.5 py-2 font-mono text-xs font-medium text-primary">
      <span className="relative flex size-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      {children}
    </p>
  );
}
