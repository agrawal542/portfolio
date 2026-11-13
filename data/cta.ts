import { site } from "@/data/site";

/** Banner between sections inviting visitors to get in touch. */
export const cta = {
  title: "Have a backend problem worth solving?",
  description:
    "Whether it's a new product, a system that needs to scale, or a team that needs a lead — I'd love to hear about it.",
  primary: { label: "Email me", href: `mailto:${site.email}` },
  secondary: { label: "Message on LinkedIn", href: site.links.linkedin },
};

/** Floating shortcut that stays on screen while scrolling. */
export const quickContact = {
  email: { label: "Email me", href: `mailto:${site.email}` },
  linkedin: { label: "LinkedIn", href: site.links.linkedin },
};
