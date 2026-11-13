import type { RichText, SectionHeadingContent } from "@/data/types";

export type Role = {
  title: string;
  dates: string;
  /** Team or product the role belonged to. */
  team?: string;
  current?: boolean;
  /** Marks a role reached through an internal promotion. */
  promoted?: boolean;
  bullets: RichText[];
};

/** A company with one or more roles, newest first. */
export type Job = {
  company: string;
  location: string;
  dates: string;
  roles: Role[];
};

const heading: SectionHeadingContent = {
  index: "03",
  eyebrow: "Experience",
  title: "Experience",
  description:
    "Building dependable products, one well-designed service at a time.",
};

const items: Job[] = [
  {
    company: "LNVS Fintech",
    location: "New Delhi, India",
    dates: "Sep 2025 — Present",
    roles: [
      {
        title: "Software Engineer II",
        dates: "Jul 2026 — Present",
        current: true,
        promoted: true,
        bullets: [
          [
            "Architected and own the end-to-end verification and KYC infrastructure — eKYC, PAN, bank validation, penny-drop, and bank statement/aggregator checks across multiple providers — with Strategy-pattern failover and Redis rate limiting, cutting failed disbursements by ",
            { strong: "35%" },
            ".",
          ],
          "Lead and manage the backend engineering team: planning sprints, assigning ownership, and tracking delivery across lead processing, notifications, and third-party integrations.",
          "Drive code quality through thorough code reviews and scalability and security best practices, reducing production defects across critical loan-processing services.",
          [
            "Own deployment and release management for backend services — rollout strategy, infra scaling, and rollback plans — for reliable, ",
            { strong: "zero-downtime releases" },
            ".",
          ],
        ],
      },
      {
        title: "Software Engineer",
        team: "Surya Loan",
        dates: "Sep 2025 — Jun 2026",
        bullets: [
          [
            "Led the migration of a legacy PHP monolith to NestJS microservices (an API gateway orchestrating CAM, Collections, Payments, and Verification), improving concurrent request throughput by ",
            { strong: "3×" },
            " and system reliability by 20%.",
          ],
          "Built a bank aggregator and statement analysis pipeline (ingestion → parsing → categorisation → credit signals) to accelerate and automate loan decisioning.",
          [
            "Developed and integrated AI calling agents into the CRM for automated customer interactions and payment follow-ups, driving a ",
            { strong: "10% increase in collections" },
            ".",
          ],
          "Integrated Razorpay, PayU, and Instifi payment gateways for automated payment verification and reconciliation with reliable real-time confirmation.",
          [
            "Built SMS, WhatsApp, and SES notification queues, increasing engagement by ",
            { strong: "15%" },
            ".",
          ],
        ],
      },
    ],
  },
  {
    company: "Fracto",
    location: "New Delhi, India",
    dates: "Sep 2024 — Aug 2025",
    roles: [
      {
        title: "Back End Developer",
        dates: "Sep 2024 — Aug 2025",
        bullets: [
          "Architected a high-concurrency Node.js backend processing thousands of simultaneous document requests, with real-time status tracking over WebSocket.",
          [
            "Built a webhook-driven OCR post-processing pipeline for Google Vision API outputs, routed through event-driven microservices, reducing integration time by ",
            { strong: "30%" },
            ".",
          ],
          "Automated Aadhaar PII redaction using bounding-box detection and pixel-level masking, ensuring regulatory compliance with zero manual intervention.",
          "Built a dynamic postpaid billing engine with automated invoice generation, customer-specific pricing rules, and payment-status reconciliation.",
        ],
      },
    ],
  },
  {
    company: "COOX",
    location: "Noida, India",
    dates: "Mar 2024 — Sep 2024",
    roles: [
      {
        title: "Software Development Engineer",
        dates: "Mar 2024 — Sep 2024",
        bullets: [
          [
            "Built a Node.js booking engine using Sequelize ORM, atomic DB transactions, and distributed Redis locks to ",
            { strong: "eliminate race conditions" },
            " under high concurrency.",
          ],
          [
            "Introduced BullMQ task queues and Redis caching, reducing peak API latency by ",
            { strong: "~35%" },
            " and decoupling payment and notification flows.",
          ],
          "Automated Paytm refund workflows via cron jobs and webhook-driven state machines, improving reliability and reducing manual error recovery.",
        ],
      },
    ],
  },
];

export const experience = {
  heading,
  currentLabel: "Current",
  promotedLabel: "Promoted",
  items,
  cta: { label: "Let's talk about backend systems", href: "#contact" },
};
