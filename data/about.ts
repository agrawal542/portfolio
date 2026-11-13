import { Braces, Code2, type LucideIcon, Trophy, Users } from "lucide-react";
import { site } from "@/data/site";
import type { RichText, SectionHeadingContent } from "@/data/types";

export type Achievement = {
  icon: LucideIcon;
  label: string;
  metric: string;
  detail: string;
  footnote: string;
  href: string;
};

const heading: SectionHeadingContent = {
  index: "01",
  eyebrow: "About",
  title: "A little about me",
  description:
    "I like the hard problems: high-throughput services, tricky integrations, and systems that need to keep working when things get noisy.",
};

const paragraphs: RichText[] = [
  "I'm a Software Engineer II building scalable, production-grade systems for FinTech and SaaS platforms, with hands-on experience leading engineering teams.",
  [
    "I specialise in ",
    { strong: "Node.js, NestJS, TypeScript, and Go" },
    ", designing microservices, high-concurrency systems, and event-driven architectures that power real-time, business-critical workflows.",
  ],
  [
    "A strong foundation in data structures and algorithms — ",
    { strong: "950+ problems on LeetCode" },
    " and a Master rating on Coding Ninjas — shapes how I approach system design: efficient, scalable, and built to handle real-world edge cases.",
  ],
];

const highlights: RichText[] = [
  [
    "Led the migration of a legacy monolith to microservices, improving scalability, deployment reliability, and throughput by ",
    { strong: "3×" },
    ".",
  ],
  [
    "Solely designed a verification and KYC infrastructure (eKYC, PAN, bank validation, aggregator checks) with intelligent failover, cutting failed disbursements by ",
    { strong: "35%" },
    ".",
  ],
  "Designed and owned end-to-end financial data pipelines — bank ingestion, parsing, categorisation, and credit signals — to accelerate loan decisioning.",
  "Architected high-concurrency backends handling thousands of parallel requests while keeping data consistent and reliable.",
  "Lead a team of engineers: daily standups, turning requirements into execution plans, and owning features from design to production.",
];

const achievements: Achievement[] = [
  {
    icon: Code2,
    label: "LeetCode",
    metric: "950+",
    detail: "problems solved",
    footnote: "127 hard · contest rating 1,632",
    href: site.links.leetcode,
  },
  {
    icon: Trophy,
    label: "Coding Ninjas",
    metric: "Top 3%",
    detail: "Master · rating 2852",
    footnote: "National rank 54",
    href: site.links.codingNinjas,
  },
  {
    icon: Braces,
    label: "GeeksforGeeks",
    metric: "349",
    detail: "problems solved",
    footnote: "Institute rank 92",
    href: site.links.geeksforgeeks,
  },
  {
    icon: Users,
    label: "LinkedIn",
    metric: "10k+",
    detail: "followers",
    footnote: "45+ daily DSA posts",
    href: site.links.linkedin,
  },
];

export const about = {
  heading,
  paragraphs,
  link: { label: "More about how I work", href: `mailto:${site.email}` },
  highlightsTitle: "Key highlights",
  highlights,
  achievements,
};
