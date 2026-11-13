import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { linkProps } from "@/utils/links";

const base =
  "group/button inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 active:scale-95 disabled:cursor-wait disabled:opacity-60";

const variants = {
  primary:
    "shine bg-primary text-on-primary shadow-glow hover:bg-primary-hover hover:-translate-y-0.5",
  outline:
    "border border-line-strong bg-card text-heading hover:border-primary hover:text-primary",
  ghost: "text-body hover:text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Renders a link instead of a button. */
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...buttonProps
}: Props) {
  const styles = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={styles} {...linkProps(href)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
