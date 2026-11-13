import { hero } from "@/data/hero";

/** Endlessly scrolling strip of technologies. The list is doubled so it loops seamlessly. */
export default function TechMarquee() {
  const items = [...hero.marquee, ...hero.marquee];

  return (
    <div
      className="marquee-mask overflow-hidden border-y border-line bg-surface py-4"
      aria-hidden="true"
    >
      <ul className="flex w-max animate-marquee">
        {items.map((tech, index) => (
          <li
            key={index}
            className="flex items-center gap-8 pr-8 font-mono text-sm whitespace-nowrap text-subtle"
          >
            {tech}
            <span className="size-1 rounded-full bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
}
