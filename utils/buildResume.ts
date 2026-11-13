import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { resume } from "@/data/resume";
import { site } from "@/data/site";
import { toPlainText } from "@/utils/richText";

/** Builds the plain-text resume served at /resume from the data folder. */
export function buildResume() {
  const jobs = experience.items.flatMap((job) =>
    job.roles.flatMap((role) => [
      `${role.title} — ${job.company} | ${role.dates} | ${job.location}`,
      ...role.bullets.map((bullet) => `• ${toPlainText(bullet)}`),
      "",
    ]),
  );

  return [
    `${site.name} — ${site.role}`,
    `${site.location} | ${site.email}`,
    Object.values(site.links).join(" | "),
    "",
    resume.headings.profile,
    resume.profile,
    "",
    resume.headings.experience,
    ...jobs,
    resume.headings.education,
    `${education.degree} — ${education.school}, ${education.years} | CGPA: ${education.cgpa}`,
    "",
    resume.headings.certifications,
    ...education.certifications.map(
      (item) => `${item.title} — ${item.issuer}, ${item.issued}`,
    ),
    "",
    resume.headings.technologies,
    resume.technologies.join(", "),
  ].join("\n");
}
