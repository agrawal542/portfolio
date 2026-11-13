import { ArrowUpRight } from "lucide-react";
import Card from "@/components/common/Card";
import IconTile from "@/components/common/IconTile";
import type { Achievement } from "@/data/about";

/** Linked stat card, e.g. "LeetCode — 950+ problems solved". */
export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { icon, label, metric, detail, footnote, href } = achievement;

  return (
    <Card href={href} interactive className="flex h-full flex-col p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <IconTile icon={icon} size="sm" />
        <ArrowUpRight
          size={15}
          className="text-subtle transition-colors group-hover:text-primary"
          aria-hidden="true"
        />
      </div>
      <p className="mt-4 font-mono text-xs break-words text-subtle uppercase sm:mt-6">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-heading">{metric}</p>
      <p className="text-sm">{detail}</p>
      <p className="mt-auto pt-3 text-xs text-subtle sm:pt-5">{footnote}</p>
    </Card>
  );
}
