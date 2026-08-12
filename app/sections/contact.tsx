import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              id="contact-title"
              kicker="Contact"
              title="Let's work together"
              description="Have a project in mind or just want to say hello? My inbox is always open."
              className="mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <LinkButton href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </LinkButton>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
