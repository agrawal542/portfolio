import { Bot, CreditCard, type LucideIcon, Network, Zap } from "lucide-react";
import type { SectionHeadingContent } from "@/data/types";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const heading: SectionHeadingContent = {
  index: "02",
  eyebrow: "Services",
  title: "What I can build for you",
  description:
    "Backends that are fast, reliable, and easy to grow — from the first API to systems serving thousands of users at once.",
};

const items: Service[] = [
  {
    icon: Network,
    title: "APIs & microservices",
    description:
      "Clean, well-documented REST APIs and microservices, or a safe migration away from a legacy monolith.",
    points: ["Node.js · NestJS · Go", "API gateways", "Monolith migrations"],
  },
  {
    icon: CreditCard,
    title: "Payments & KYC",
    description:
      "Payment gateways, verification flows, and bank data pipelines with failover, so money and onboarding never get stuck.",
    points: ["Razorpay · PayU", "eKYC · PAN · bank checks", "Idempotent webhooks"],
  },
  {
    icon: Zap,
    title: "High-concurrency systems",
    description:
      "Booking, queueing, and real-time systems that stay correct under load — no double-bookings, no lost jobs.",
    points: ["Redis locks & caching", "BullMQ job queues", "WebSockets"],
  },
  {
    icon: Bot,
    title: "AI agents & RAG",
    description:
      "AI calling agents and chatbots that answer from your own data, integrated into your existing product.",
    points: ["LangChain · Gemini", "Vector search", "CRM integrations"],
  },
];

export const services = {
  heading,
  items,
  cta: { label: "Tell me what you need", href: "#contact" },
};
