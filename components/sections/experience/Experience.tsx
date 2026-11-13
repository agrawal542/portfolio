import ArrowLink from "@/components/common/ArrowLink";
import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ExperienceItem from "@/components/sections/experience/ExperienceItem";
import Timeline from "@/components/sections/experience/Timeline";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" heading={experience.heading}>
      <Timeline>
        {experience.items.map((job, index) => (
          <li key={job.company} className="pb-10 sm:pb-12">
            <Reveal delay={index * 0.06}>
              <ExperienceItem job={job} />
            </Reveal>
          </li>
        ))}
      </Timeline>
      <ArrowLink href={experience.cta.href} className="ml-7 sm:ml-13">
        {experience.cta.label}
      </ArrowLink>
    </Section>
  );
}
