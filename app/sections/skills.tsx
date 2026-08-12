import { skillCategories } from "@/lib/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="skills-title"
            kicker="Skills"
            title="Skills & tools"
            description="The languages, frameworks, and tools I work with."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
