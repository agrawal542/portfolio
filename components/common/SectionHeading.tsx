import Eyebrow from "@/components/common/Eyebrow";
import GrowLine from "@/components/common/GrowLine";
import Reveal from "@/components/common/Reveal";
import type { SectionHeadingContent } from "@/data/types";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingContent) {
  return (
    <Reveal>
      <header className="mb-9 max-w-2xl sm:mb-12">
        <Eyebrow>
          <span className="text-subtle">{index} /</span> {eyebrow}
        </Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-heading sm:text-4xl">
          {title}
        </h2>
        <GrowLine />
        {description && <p className="mt-4 leading-7">{description}</p>}
      </header>
    </Reveal>
  );
}
