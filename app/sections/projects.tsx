import Image from "next/image";
import { projects } from "@/lib/projects";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="projects-title"
            kicker="Projects"
            title="Selected projects"
            description="A few things I have built recently."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-1 items-end gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
