import { TrendingUp } from "lucide-react";
import BulletList from "@/components/common/BulletList";
import Tag from "@/components/common/Tag";
import { experience, type Role } from "@/data/experience";

type Props = {
  role: Role;
  /** Show the role's own dates (used when a company has several roles). */
  showDates: boolean;
};

/** A single role: title, status tags and achievements. */
export default function RoleEntry({ role, showDates }: Props) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h4 className="font-semibold text-primary">
          {role.title}
          {role.team && <span className="font-medium text-body"> · {role.team}</span>}
        </h4>
        {role.current && <Tag tone="primary">{experience.currentLabel}</Tag>}
        {role.promoted && (
          <Tag tone="primary" className="inline-flex items-center gap-1">
            <TrendingUp size={12} aria-hidden="true" />
            {experience.promotedLabel}
          </Tag>
        )}
      </div>
      {showDates && <p className="mt-1 font-mono text-xs text-subtle">{role.dates}</p>}
      <div className="mt-4">
        <BulletList items={role.bullets} />
      </div>
    </>
  );
}
