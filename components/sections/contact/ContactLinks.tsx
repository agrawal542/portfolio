import { ArrowUpRight } from "lucide-react";
import IconTile from "@/components/common/IconTile";
import EmailCard from "@/components/sections/contact/EmailCard";
import { socials } from "@/data/socials";
import { linkProps } from "@/utils/links";

/** Direct email card plus a list of social profiles. */
export default function ContactLinks() {
  return (
    <>
      <EmailCard />

      <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {socials.map(({ label, hint, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3 transition duration-200 hover:translate-x-1 hover:border-primary-line"
              {...linkProps(href)}
            >
              <IconTile icon={icon} size="sm" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-heading">{label}</span>
                <span className="mt-0.5 block text-xs text-subtle">{hint}</span>
              </span>
              <ArrowUpRight
                size={15}
                className="shrink-0 text-subtle transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
