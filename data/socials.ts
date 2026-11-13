import { Braces, Code2, Github, Linkedin, Trophy } from "lucide-react";
import { site } from "@/data/site";
import type { SocialLink } from "@/data/types";

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    hint: "Connect with me",
    href: site.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    hint: "See what I build",
    href: site.links.github,
    icon: Github,
  },
  {
    label: "LeetCode",
    hint: "950+ problems solved",
    href: site.links.leetcode,
    icon: Code2,
  },
  {
    label: "Coding Ninjas",
    hint: "Master · top 3%",
    href: site.links.codingNinjas,
    icon: Trophy,
  },
  {
    label: "GeeksforGeeks",
    hint: "349 problems solved",
    href: site.links.geeksforgeeks,
    icon: Braces,
  },
];
