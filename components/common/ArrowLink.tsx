import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { linkProps } from "@/utils/links";

type Props = {
  href: string;
  children: ReactNode;
  size?: "xs" | "sm";
  className?: string;
};

/** Inline text link followed by an arrow. */
export default function ArrowLink({
  href,
  children,
  size = "sm",
  className,
}: Props) {
  return (
    <a
      href={href}
      className={cn(
        "group/link inline-flex w-fit items-center gap-1.5 rounded font-semibold text-primary transition-colors hover:text-primary-hover",
        size === "xs" ? "text-xs" : "text-sm",
        className,
      )}
      {...linkProps(href)}
    >
      {children}
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </a>
  );
}
