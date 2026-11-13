import ArrowLink from "@/components/common/ArrowLink";
import Reveal from "@/components/common/Reveal";
import RichText from "@/components/common/RichText";
import Section from "@/components/common/Section";
import AchievementCard from "@/components/sections/about/AchievementCard";
import CodingJourney from "@/components/sections/about/CodingJourney";
import Highlights from "@/components/sections/about/Highlights";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section id="about" heading={about.heading}>
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="space-y-5 leading-7">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <RichText content={paragraph} />
              </p>
            ))}
            <ArrowLink href={about.link.href}>{about.link.label}</ArrowLink>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3">
          {about.achievements.map((achievement, index) => (
            <li key={achievement.label}>
              <Reveal delay={index * 0.08} className="h-full">
                <AchievementCard achievement={achievement} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="mt-10 sm:mt-12">
        <Highlights />
      </Reveal>

      <CodingJourney />
    </Section>
  );
}
