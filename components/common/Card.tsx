"use client";

import type { ReactNode } from "react";
import { useSpotlight } from "@/hooks/useSpotlight";
import { cn } from "@/utils/cn";
import { linkProps } from "@/utils/links";

type Props = {
  children: ReactNode;
  className?: string;
  /** Lifts on hover and shows a glow that follows the cursor. */
  interactive?: boolean;
  /** Renders the whole card as a link. */
  href?: string;
};

export default function Card({ children, className, interactive, href }: Props) {
  const trackCursor = useSpotlight();
  const onMouseMove = interactive ? trackCursor : undefined;
  const styles = cn(
    "rounded-2xl border border-line bg-card shadow-card",
    interactive &&
      "group spotlight transition duration-300 hover:-translate-y-1 hover:border-primary-line hover:shadow-raised",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseMove={onMouseMove}
        className={styles}
        {...linkProps(href)}
      >
        {children}
      </a>
    );
  }

  return (
    <div onMouseMove={onMouseMove} className={styles}>
      {children}
    </div>
  );
}
