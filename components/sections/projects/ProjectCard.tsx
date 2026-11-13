import ArrowLink from "@/components/common/ArrowLink";
import BulletList from "@/components/common/BulletList";
import Card from "@/components/common/Card";
import Eyebrow from "@/components/common/Eyebrow";
import IconTile from "@/components/common/IconTile";
import Tag from "@/components/common/Tag";
import { type Project, projects } from "@/data/projects";

type Props = { project: Project; number: number };

export default function ProjectCard({ project, number }: Props) {
  return (
    <Card interactive className="h-full">
      <article className="flex h-full flex-col p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <IconTile icon={project.icon} />
          <span className="font-mono text-xs text-subtle uppercase">
            {projects.countLabel} / {String(number).padStart(2, "0")}
          </span>
        </div>

        <Eyebrow className="mt-6 sm:mt-8">{project.eyebrow}</Eyebrow>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-heading sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 mb-6 max-w-2xl text-sm leading-6">{project.description}</p>

        <BulletList items={project.details} columns={project.featured} />

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag className="font-mono">{tag}</Tag>
            </li>
          ))}
        </ul>

        <ArrowLink href={project.href} className="mt-auto pt-7">
          {projects.linkLabel}
        </ArrowLink>
      </article>
    </Card>
  );
}
