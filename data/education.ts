import type { SectionHeadingContent } from "@/data/types";

export type Certification = { title: string; issuer: string; issued: string };

const heading: SectionHeadingContent = {
  index: "06",
  eyebrow: "Education",
  title: "Education & certifications",
};

const certifications: Certification[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    issued: "Feb 2024",
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    issued: "Feb 2023",
  },
];

export const education = {
  heading,
  degree: "B.Tech, Computer Science & Engineering (AI)",
  school: "Dr. A.P.J. Abdul Kalam Technical University",
  cgpa: "7.78 / 10",
  years: "2020 — 2024",
  labels: { cgpa: "CGPA", years: "Years" },
  certifications,
};
