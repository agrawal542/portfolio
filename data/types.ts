import type { LucideIcon } from "lucide-react";

/** Text where some parts are emphasised: "Delivered ", { strong: "3×" }, " more". */
export type RichText = string | (string | { strong: string })[];

export type SectionHeadingContent = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export type LinkItem = { label: string; href: string };

export type SocialLink = LinkItem & { icon: LucideIcon; hint: string };
