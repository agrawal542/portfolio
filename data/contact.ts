import type { SectionHeadingContent } from "@/data/types";

const heading: SectionHeadingContent = {
  index: "07",
  eyebrow: "Contact",
  title: "Let's build something",
  description:
    "Have a project, a role, or a backend challenge in mind? Reach out directly — I read every message myself.",
};

/** Length limits shared by the form fields and the API validation. */
export const contactLimits = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  messageMin: 10,
  messageMax: 5000,
};

export const contact = {
  heading,
  emailLabel: "Email me directly",
  copy: { idle: "Copy", done: "Copied" },
  openTo: {
    label: "Open to",
    items: ["Backend engineering roles", "Team leadership", "Project collaborations"],
  },
  form: {
    name: { label: "Your name", placeholder: "Jane Smith" },
    email: { label: "Email address", placeholder: "jane@company.com" },
    message: {
      label: "What's on your mind?",
      placeholder: "Tell me a little about it...",
    },
    submit: "Send message",
    sending: "Sending…",
    messages: {
      success: "Thanks for reaching out — I'll get back to you soon.",
      failed: "Unable to send your message. Please try again.",
      network: "Network error. Please try again or email me directly.",
    },
  },
  /** Responses returned by the /api/contact endpoint. */
  api: {
    subjectPrefix: "Portfolio message from",
    notConfigured: "Contact form is not configured yet. Please email me directly.",
    badRequest: "Please submit a valid form.",
    incomplete: "Please complete all fields.",
    invalid: "Check your name, email, and message, then try again.",
    sendFailed: "I couldn't send your message just now. Please email me directly.",
  },
};
