import Card from "@/components/common/Card";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import Tag from "@/components/common/Tag";
import type { SkillGroup } from "@/data/skills";

type Props = { group: SkillGroup; number: number };

export default function SkillGroupCard({ group, number }: Props) {
  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
        <h3 className="font-semibold text-heading">{group.title}</h3>
        <span className="font-mono text-xs text-subtle">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <Stagger className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <StaggerItem key={skill}>
            <Tag>{skill}</Tag>
          </StaggerItem>
        ))}
      </Stagger>
    </Card>
  );
}
