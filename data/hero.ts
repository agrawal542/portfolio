import { ArrowDown, Download, type LucideIcon, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "outline" | "ghost";
  icon?: LucideIcon;
};

export type CodeTone = "plain" | "muted" | "keyword" | "accent";

type CodeLine = { indent?: boolean; tokens: { text: string; tone: CodeTone }[] };

const actions: HeroAction[] = [
  { label: "Let's talk", href: "#contact", variant: "primary", icon: MessageCircle },
  { label: "View projects", href: "#projects", variant: "outline", icon: ArrowDown },
  { label: "Resume", href: "/resume", variant: "ghost", icon: Download },
];

const codeLines: CodeLine[] = [
  { tokens: [{ text: "// designing for resilience", tone: "muted" }] },
  {
    tokens: [
      { text: "type ", tone: "keyword" },
      { text: "Platform", tone: "accent" },
      { text: " struct {", tone: "plain" },
    ],
  },
  {
    indent: true,
    tokens: [
      { text: "Scale ", tone: "plain" },
      { text: "string", tone: "muted" },
    ],
  },
  {
    indent: true,
    tokens: [
      { text: "Availability ", tone: "plain" },
      { text: "float64", tone: "muted" },
    ],
  },
  { tokens: [{ text: "}", tone: "plain" }] },
  { tokens: [] },
  { tokens: [{ text: "// small details, big impact", tone: "muted" }] },
  {
    tokens: [
      { text: "func ", tone: "keyword" },
      { text: "Build", tone: "accent" },
      { text: "() Result {", tone: "plain" },
    ],
  },
  {
    indent: true,
    tokens: [
      { text: "return ", tone: "keyword" },
      { text: "reliable", tone: "accent" },
      { text: ".AtScale()", tone: "plain" },
    ],
  },
  { tokens: [{ text: "}", tone: "plain" }] },
];

export const hero = {
  badge: "Open to building what's next",
  eyebrow: `${site.title} · ${site.location}`,
  tagline:
    "I build scalable, production-grade backends for FinTech and SaaS — payments, KYC, and high-concurrency systems that stay reliable under load.",
  typewriter: {
    prefix: "currently building with",
    words: ["Node.js", "NestJS", "Go", "Microservices", "System Design"],
  },
  actions,
  note: "Building in production since 2024",
  marquee: [
    "Node.js",
    "NestJS",
    "Go",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Docker",
    "Kubernetes",
    "AWS",
    "Microservices",
    "LangChain",
    "System Design",
  ],
  stats: [
    { value: 2.8, suffix: "+", label: "yrs experience" },
    { value: 3, suffix: "×", label: "throughput" },
    { value: 950, suffix: "+", label: "LeetCode solved" },
  ],
  code: {
    filename: "systems.go",
    lines: codeLines,
    status: "all systems operational",
  },
  impact: { label: "Impact", value: "3×", detail: "throughput" },
};
