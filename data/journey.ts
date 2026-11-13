import { Braces, Code2, type LucideIcon, Trophy, Users } from "lucide-react";
import { site } from "@/data/site";

export type JourneyStep = {
  icon: LucideIcon;
  platform: string;
  title: string;
  description: string;
  stats: string[];
  href: string;
};

const steps: JourneyStep[] = [
  {
    icon: Braces,
    platform: "GeeksforGeeks",
    title: "Started with the fundamentals",
    description:
      "In college I worked topic by topic — arrays, strings, searching and sorting first, then trees, graphs, and dynamic programming — until the patterns became second nature.",
    stats: ["349 problems", "Institute rank 92"],
    href: site.links.geeksforgeeks,
  },
  {
    icon: Code2,
    platform: "LeetCode",
    title: "Went deep with daily practice",
    description:
      "LeetCode became a habit: 950+ problems in C++, including 127 hard ones, and 43 rated contests. The 365- and 500-day badges came from simply showing up.",
    stats: ["950+ solved", "Contest rating 1,632", "26 badges"],
    href: site.links.leetcode,
  },
  {
    icon: Trophy,
    platform: "Coding Ninjas",
    title: "Tested myself in contests",
    description:
      "Weekend contests taught me to think clearly against the clock. I reached a Master rating of 2852 — top 3% — and national rank 54, with a 74-day streak along the way.",
    stats: ["Master · top 3%", "National rank 54"],
    href: site.links.codingNinjas,
  },
  {
    icon: Users,
    platform: "LinkedIn",
    title: "Now I teach what I learn",
    description:
      "For 45 days straight I broke down one SDE-sheet problem a day — the naive idea, the better one, and why it works — for a community that has grown past 10k followers.",
    stats: ["45-day challenge", "10k+ followers"],
    href: site.links.linkedin,
  },
];

export const journey = {
  title: "My coding journey",
  intro:
    "Before I built backends, I solved problems — a lot of them. Competitive programming is where I learned to hunt for edge cases, weigh trade-offs, and reason about performance: the same habits I bring to every system I design today.",
  steps,
};
