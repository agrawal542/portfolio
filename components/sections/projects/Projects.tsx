import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/utils/cn";

export default function Projects() {
  return (
    <Section id="projects" heading={projects.heading} tinted>
      <ul className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {projects.items.map((project, index) => (
          <li key={project.title} className={cn(project.featured && "lg:col-span-2")}>
            <Reveal delay={(index % 2) * 0.1} className="h-full">
              <ProjectCard project={project} number={index + 1} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
