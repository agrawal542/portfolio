import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import CodeCard from "@/components/sections/hero/CodeCard";
import HeroIntro from "@/components/sections/hero/HeroIntro";
import HeroStats from "@/components/sections/hero/HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-32 left-1/2 size-[30rem] animate-drift rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-1/2 -left-40 size-96 animate-drift rounded-full bg-accent/10 blur-3xl [animation-delay:-8s]" />
      </div>

      <Container className="relative grid items-center gap-12 py-14 sm:py-20 md:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <HeroIntro />
          <HeroStats />
        </div>
        <Reveal delay={0.2} className="hidden min-w-0 md:block">
          <CodeCard />
        </Reveal>
      </Container>
    </section>
  );
}
