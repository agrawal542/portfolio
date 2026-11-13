import ArrowLink from "@/components/common/ArrowLink";
import Card from "@/components/common/Card";
import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import SkillGroupCard from "@/components/sections/skills/SkillGroupCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" heading={skills.heading} tinted>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {skills.groups.map((group, index) => (
          <li key={group.title}>
            <Reveal delay={index * 0.07} className="h-full">
              <SkillGroupCard group={group} number={index + 1} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.2}>
        <Card className="mt-3 flex flex-col gap-3 px-5 py-4 sm:mt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">{skills.note}</p>
          <ArrowLink href={skills.cta.href} className="shrink-0">
            {skills.cta.label}
          </ArrowLink>
        </Card>
      </Reveal>
    </Section>
  );
}
