import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

const tones = {
  neutral: "border-line bg-surface text-body hover:border-primary-line hover:text-primary",
  plain: "border-line bg-card text-body",
  primary: "border-primary-line bg-primary-soft text-primary",
};

type Props = {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

/** Small pill for skills, tech stacks, dates and status labels. */
export default function Tag({ children, tone = "neutral", className }: Props) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-2.5 py-1 text-xs transition-colors",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
