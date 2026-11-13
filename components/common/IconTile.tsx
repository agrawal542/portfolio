import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

const sizes = {
  sm: { box: "size-9 rounded-lg", icon: 16 },
  md: { box: "size-11 rounded-xl", icon: 19 },
  lg: { box: "size-14 rounded-xl", icon: 24 },
};

type Props = { icon: LucideIcon; size?: keyof typeof sizes };

/** Icon inside a soft blue rounded square. */
export default function IconTile({ icon: Icon, size = "md" }: Props) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center border border-primary-line bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110",
        sizes[size].box,
      )}
    >
      <Icon size={sizes[size].icon} aria-hidden="true" />
    </span>
  );
}
