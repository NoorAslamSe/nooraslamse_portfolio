"use client";

import { useState } from "react";
import {
  nextjsProjects,
  nextjsTabLabel,
  projectsEyebrow,
  projectsHeading,
  visitSiteLabel,
  wordpressProjects,
  wordpressTabLabel,
} from "@/lib/data";
import type { Project } from "@/lib/types";

type Tab = "wordpress" | "nextjs";

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: "wordpress", label: wordpressTabLabel, count: wordpressProjects.length },
  { id: "nextjs", label: nextjsTabLabel, count: nextjsProjects.length },
];

export function Projects() {
  const [active, setActive] = useState<Tab>("wordpress");
  const projects = active === "wordpress" ? wordpressProjects : nextjsProjects;

  return (
    <section
      id="projects"
      className="border-t border-line py-[80px] md:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <p className="font-mono text-sm uppercase tracking-wider text-teal">
          {projectsEyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
          {projectsHeading}
        </h2>

        <div role="tablist" aria-label={projectsEyebrow} className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={
                  isActive
                    ? "inline-flex items-center gap-2 rounded-[3px] bg-gold px-4 py-2 font-mono text-sm text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    : "inline-flex items-center gap-2 rounded-[3px] border border-line px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-gold/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                }
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-ink" : "bg-muted/50"
                  }`}
                />
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </div>

        <div
          key={active}
          role="tabpanel"
          className="animate-fade-in mt-10 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isNextJs={active === "nextjs"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isNextJs,
}: {
  project: Project;
  isNextJs: boolean;
}) {
  return (
    <article className="flex flex-col border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-medium tracking-tight text-text">
          {project.title}
        </h3>
        <span
          className={
            isNextJs
              ? "shrink-0 rounded-[3px] border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-xs text-gold"
              : "shrink-0 rounded-[3px] bg-teal/10 px-2 py-0.5 font-mono text-xs text-teal"
          }
        >
          {project.badge}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-[3px] border border-line px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-1 items-end">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-teal transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {visitSiteLabel} &rarr;
          </a>
        ) : (
          <p className="font-mono text-sm text-muted opacity-60">
            {project.statusText}
          </p>
        )}
      </div>
    </article>
  );
}
