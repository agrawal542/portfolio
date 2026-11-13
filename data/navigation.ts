import type { LinkItem } from "@/data/types";

export const navLinks: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const navCta: LinkItem = { label: "Let's talk", href: "#contact" };

export const navLabels = {
  home: "Gautam Agrawal, home",
  main: "Main navigation",
  openMenu: "Open navigation menu",
  closeMenu: "Close navigation menu",
};

export const themeLabels = {
  toLight: "Switch to light theme",
  toDark: "Switch to dark theme",
};
