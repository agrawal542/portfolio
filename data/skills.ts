import type { SectionHeadingContent } from "@/data/types";

export type SkillGroup = { title: string; skills: string[] };

const heading: SectionHeadingContent = {
  index: "05",
  eyebrow: "Skills",
  title: "Tools of the trade",
  description:
    "A practical toolkit for designing, building, and operating backend systems.",
};

const groups: SkillGroup[] = [
  {
    title: "Languages & Backend",
    skills: [
      "Go",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "C++",
      "NestJS",
      "Gin",
      "Express.js",
      "REST APIs",
      "Microservices",
      "WebSockets",
      "Sequelize ORM",
      "Prisma",
      "tRPC",
    ],
  },
  {
    title: "System Design",
    skills: [
      "HLD / LLD",
      "SOLID",
      "Concurrency",
      "Caching",
      "Rate limiting",
      "Idempotency",
      "Event-driven architecture",
      "High-concurrency systems",
    ],
  },
  {
    title: "Design Patterns",
    skills: [
      "Singleton",
      "Builder",
      "Prototype",
      "Factory",
      "Strategy",
      "Chain of Responsibility",
      "State",
    ],
  },
  {
    title: "Data, Cloud & GenAI",
    skills: [
      "MySQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "LangChain",
      "RAG",
      "Vector DB",
      "Pinecone",
      "Gemini API",
    ],
  },
];

export const skills = {
  heading,
  groups,
  note: "Strong fundamentals. Thoughtful trade-offs. Systems that scale.",
  cta: { label: "Work together", href: "#contact" },
};
