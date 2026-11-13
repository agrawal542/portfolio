import type { ReactNode } from "react";

/** Shared look for text inputs and textareas (16px on phones avoids iOS zoom). */
export const fieldStyles =
  "w-full rounded-lg border border-line-strong bg-card px-3.5 py-3 text-base text-heading outline-none transition-colors placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary-line sm:text-sm";

type Props = { label: string; children: ReactNode; className?: string };

/** Label wrapped around a form control. */
export default function FormField({ label, children, className }: Props) {
  return (
    <label className={className ?? "block"}>
      <span className="mb-2 block text-xs font-medium text-body">{label}</span>
      {children}
    </label>
  );
}
