import { MapPin } from "lucide-react";
import Tag from "@/components/common/Tag";
import RoleEntry from "@/components/sections/experience/RoleEntry";
import type { Job } from "@/data/experience";
import { cn } from "@/utils/cn";

/** One company on the timeline, with every role held there. */
export default function ExperienceItem({ job }: { job: Job }) {
  const isCurrent = job.roles.some((role) => role.current);
  const hasPromotion = job.roles.length > 1;

  return (
    <article className="relative">
      {/* Marker sitting on the timeline's vertical line */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1.5 -left-[1.78125rem] size-2.5 rounded-full border-2 sm:-left-[2.78125rem]",
          isCurrent ? "border-primary bg-primary" : "border-line-strong bg-card",
        )}
      />

      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-heading sm:text-xl">
            {job.company}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-subtle">
            <MapPin size={13} aria-hidden="true" /> {job.location}
          </p>
        </div>
        <Tag tone="plain" className="shrink-0 self-start font-mono">
          {job.dates}
        </Tag>
      </header>

      {/* Several roles at one company are joined by a line to show progression. */}
      <ol className={cn("mt-5", hasPromotion && "space-y-7 border-l border-line-strong pl-5")}>
        {job.roles.map((role) => (
          <li key={role.title} className="relative">
            {hasPromotion && (
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.46875rem] size-1.5 rounded-full bg-primary"
              />
            )}
            <RoleEntry role={role} showDates={hasPromotion} />
          </li>
        ))}
      </ol>
    </article>
  );
}
