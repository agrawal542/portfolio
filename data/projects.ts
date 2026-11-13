import { Bot, Hotel, Link2, type LucideIcon, Terminal, Video } from "lucide-react";
import { site } from "@/data/site";
import type { SectionHeadingContent } from "@/data/types";

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
  tags: string[];
  icon: LucideIcon;
  href: string;
  /** Featured projects span the full width of the grid. */
  featured?: boolean;
};

const repo = (name: string) => `${site.links.github}/${name}`;

const heading: SectionHeadingContent = {
  index: "04",
  eyebrow: "Projects",
  title: "Selected projects",
  description:
    "Backend systems I've built end to end — each one around a simple idea: make the important path reliable.",
};

const items: Project[] = [
  {
    title: "Airbnb Clone",
    eyebrow: "Hotel booking · microservices",
    description:
      "A hotel booking backend split into four services — auth, hotels, bookings, and notifications — built so two people can never book the same room.",
    details: [
      "Booking service uses Redis distributed locks (Redlock) and idempotency keys so retries and concurrent requests never double-book.",
      "Auth service written in Go with JWT, role-based access control, and rate limiting.",
      "Hotel service generates room inventory in bulk through BullMQ workers and a cron scheduler.",
      "Notification service sends templated emails from a queue, decoupled from the booking flow.",
    ],
    tags: ["TypeScript", "Go", "Express", "Prisma", "Sequelize", "MySQL", "Redis", "BullMQ"],
    icon: Hotel,
    href: repo("Airbnb-be"),
    featured: true,
  },
  {
    title: "LeetCode Clone",
    eyebrow: "Online code judge",
    description:
      "A coding-judge backend where submitted code is queued, executed in an isolated sandbox, and evaluated against test cases.",
    details: [
      "Evaluation workers run each submission inside its own Docker container, with per-language images and commands.",
      "Submissions flow through BullMQ so the API stays responsive while code executes in the background.",
      "Separate problem, submission, and evaluation services, with sanitised Markdown problem statements.",
    ],
    tags: ["TypeScript", "Express", "MongoDB", "Redis", "BullMQ", "Docker"],
    icon: Terminal,
    href: repo("leetcode-be"),
  },
  {
    title: "AI RAG Chatbot",
    eyebrow: "Retrieval-augmented generation",
    description:
      "A conversational AI agent that answers questions from your own documents, grounding every response in retrieved context.",
    details: [
      "Ingests PDFs, splits them into chunks, and stores Gemini embeddings in a Pinecone vector database.",
      "Rewrites follow-up questions using chat history so multi-turn conversations retrieve the right context.",
      "Built with LangChain, the Gemini API, and Node.js.",
    ],
    tags: ["LangChain", "Gemini API", "Pinecone", "RAG", "Node.js"],
    icon: Bot,
    href: repo("ai-agent-rag"),
  },
  {
    title: "URL Shortener",
    eyebrow: "Type-safe API",
    description:
      "A URL shortener with end-to-end type-safe APIs and a clean controller → service → repository architecture.",
    details: [
      "Generates collision-free short codes by Base62-encoding an atomic Redis counter.",
      "Caches lookups in Redis in front of MongoDB for fast redirects.",
      "tRPC and Zod give fully typed, validated requests from client to database.",
    ],
    tags: ["TypeScript", "Express", "tRPC", "MongoDB", "Redis", "Zod"],
    icon: Link2,
    href: repo("url-shortener-be"),
  },
  {
    title: "YouTube Clone",
    eyebrow: "Video platform backend",
    description:
      "A video-sharing backend covering the full product surface: channels, uploads, playlists, subscriptions, likes, and comments.",
    details: [
      "JWT authentication with access and refresh flows and bcrypt-hashed passwords.",
      "Video and image uploads handled with Multer and stored on Cloudinary.",
      "MongoDB aggregation pipelines with pagination for video and comment listings.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    icon: Video,
    href: repo("Youtube-Clone"),
  },
];

export const projects = {
  heading,
  countLabel: "Project",
  linkLabel: "View code on GitHub",
  items,
};
