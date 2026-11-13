import Reveal from "@/components/common/Reveal";
import JourneyStepCard from "@/components/sections/about/JourneyStepCard";
import { journey } from "@/data/journey";

/** The story behind the numbers: four steps from first problems to teaching. */
export default function CodingJourney() {
  return (
    <div className="mt-14 sm:mt-20">
      <Reveal>
        <h3 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
          {journey.title}
        </h3>
        <p className="mt-4 max-w-2xl leading-7">{journey.intro}</p>
      </Reveal>

      <ol className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {journey.steps.map((step, index) => (
          <li key={step.platform}>
            <Reveal delay={index * 0.1} className="h-full">
              <JourneyStepCard step={step} number={index + 1} />
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
