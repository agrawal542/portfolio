import Card from "@/components/common/Card";
import IconTile from "@/components/common/IconTile";
import Tag from "@/components/common/Tag";
import type { JourneyStep } from "@/data/journey";

type Props = { step: JourneyStep; number: number };

/** One step of the coding journey; links to the matching profile. */
export default function JourneyStepCard({ step, number }: Props) {
  return (
    <Card href={step.href} interactive className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <IconTile icon={step.icon} size="sm" />
        <span className="text-gradient font-mono text-2xl font-semibold">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-5 font-mono text-xs text-primary uppercase">{step.platform}</p>
      <h4 className="mt-1 font-semibold text-heading">{step.title}</h4>
      <p className="mt-2 text-sm leading-6">{step.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-5">
        {step.stats.map((stat) => (
          <li key={stat}>
            <Tag>{stat}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  );
}
