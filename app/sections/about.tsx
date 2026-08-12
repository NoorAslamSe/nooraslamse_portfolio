import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="about-title"
            kicker="About"
            title="About me"
            description="A quick introduction to who I am and what I do."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-8 text-muted">{siteConfig.bio}</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground">{siteConfig.location}</span>
              </li>
              {siteConfig.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
