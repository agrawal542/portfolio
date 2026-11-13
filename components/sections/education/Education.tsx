import { GraduationCap } from "lucide-react";
import Card from "@/components/common/Card";
import IconTile from "@/components/common/IconTile";
import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import EducationStat from "@/components/sections/education/EducationStat";
import Certifications from "@/components/sections/education/Certifications";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" heading={education.heading}>
      <Reveal>
        <Card className="flex flex-col gap-5 p-5 sm:flex-row sm:flex-wrap sm:items-center sm:p-8">
          <IconTile icon={GraduationCap} size="lg" />
          <div className="min-w-0 flex-1 sm:min-w-64">
            <h3 className="font-semibold tracking-tight text-heading sm:text-lg">
              {education.degree}
            </h3>
            <p className="mt-1.5 text-sm">{education.school}</p>
          </div>
          <dl className="flex gap-8 border-t border-line pt-4 sm:border-0 sm:pt-0 sm:text-right">
            <EducationStat label={education.labels.cgpa} value={education.cgpa} />
            <EducationStat label={education.labels.years} value={education.years} />
          </dl>
        </Card>
      </Reveal>
      <Reveal delay={0.1}>
        <Certifications />
      </Reveal>
    </Section>
  );
}
