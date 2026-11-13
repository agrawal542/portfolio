import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Props = { children: ReactNode; className?: string };

/** Small uppercase label shown above headings. */
export default function Eyebrow({ children, className }: Props) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-widest text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}
