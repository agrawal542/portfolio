import { ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import { cta } from "@/data/cta";
import { linkProps } from "@/utils/links";

const button =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-95";

/** Full-width gradient banner inviting visitors to get in touch. */
export default function CallToAction() {
  return (
    <section className="border-t border-line py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent px-6 py-10 text-on-primary shadow-glow sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -top-24 -right-16 size-72 animate-drift rounded-full bg-on-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {cta.title}
                </h2>
                <p className="mt-3 leading-7 opacity-90">{cta.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={cta.primary.href}
                  className={`${button} bg-on-primary text-primary`}
                >
                  <Mail size={16} aria-hidden="true" />
                  {cta.primary.label}
                </a>
                <a
                  href={cta.secondary.href}
                  className={`${button} border border-on-primary/50 hover:bg-on-primary/10`}
                  {...linkProps(cta.secondary.href)}
                >
                  {cta.secondary.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
