import AnimatedCounter from "@/components/common/AnimatedCounter";
import Card from "@/components/common/Card";
import Reveal from "@/components/common/Reveal";
import { hero } from "@/data/hero";

/** Three headline numbers under the hero intro. */
export default function HeroStats() {
  return (
    <ul className="mt-10 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
      {hero.stats.map((stat, index) => (
        <li key={stat.label}>
          <Reveal delay={0.36 + index * 0.06} className="h-full">
            <Card className="h-full px-2.5 py-3.5 sm:px-4 sm:py-4">
              <p className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-mono text-[0.625rem] leading-snug break-words text-subtle uppercase sm:text-xs">
                {stat.label}
              </p>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
