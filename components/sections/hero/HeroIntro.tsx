import Button from "@/components/common/Button";
import Eyebrow from "@/components/common/Eyebrow";
import Reveal from "@/components/common/Reveal";
import SocialLinks from "@/components/common/SocialLinks";
import StatusBadge from "@/components/sections/hero/StatusBadge";
import Typewriter from "@/components/sections/hero/Typewriter";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

/** Name, tagline, calls to action and social links. */
export default function HeroIntro() {
  return (
    <>
      <Reveal>
        <StatusBadge>{hero.badge}</StatusBadge>
      </Reveal>

      <Reveal delay={0.08}>
        <Eyebrow className="mt-6 sm:mt-8">{hero.eyebrow}</Eyebrow>
        <h1
          id="hero-title"
          className="mt-4 text-[clamp(2.9rem,13vw,4.4rem)] leading-none font-bold tracking-tighter text-heading md:text-[clamp(4rem,8vw,6rem)]"
        >
          {site.firstName}
          <br />
          <span className="text-gradient inline-block pb-[0.12em]">{site.lastName}</span>
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">{hero.tagline}</p>
        <Typewriter />
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {hero.actions.map(({ label, href, variant, icon: Icon }) => (
            <Button key={label} href={href} variant={variant}>
              {label}
              {Icon && (
                <Icon
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover/button:translate-y-0.5"
                />
              )}
            </Button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.32}>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <SocialLinks />
          <span className="hidden h-px w-10 bg-line-strong lg:block" />
          <span className="font-mono text-xs text-subtle">{hero.note}</span>
        </div>
      </Reveal>
    </>
  );
}
