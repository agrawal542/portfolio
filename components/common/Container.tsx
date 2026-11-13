import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Props = { children: ReactNode; className?: string };

/** Centres content and applies the responsive page gutters. */
export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
