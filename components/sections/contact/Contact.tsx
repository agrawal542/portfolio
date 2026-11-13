import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactLinks from "@/components/sections/contact/ContactLinks";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="contact" heading={contact.heading} tinted>
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="min-w-0">
          <ContactLinks />
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
