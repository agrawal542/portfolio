import { socials } from "@/data/socials";
import { linkProps } from "@/utils/links";

/** Row of round icon links to the social profiles. */
export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="grid size-10 place-items-center rounded-full border border-line bg-card text-body transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            {...linkProps(href)}
          >
            <Icon size={17} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
