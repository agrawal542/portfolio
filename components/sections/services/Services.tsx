import ArrowLink from "@/components/common/ArrowLink";
import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ServiceCard from "@/components/sections/services/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="services" heading={services.heading} tinted>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {services.items.map((service, index) => (
          <li key={service.title}>
            <Reveal delay={index * 0.08} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal delay={0.2}>
        <ArrowLink href={services.cta.href} className="mt-8">
          {services.cta.label}
        </ArrowLink>
      </Reveal>
    </Section>
  );
}
