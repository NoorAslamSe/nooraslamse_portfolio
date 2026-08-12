import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-accent/10 to-transparent"
      />
      <Container className="relative">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="font-mono text-sm uppercase tracking-wider text-accent">
              Hi, I&apos;m {siteConfig.name}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {siteConfig.role}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href="#projects">View Projects</LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Contact Me
              </LinkButton>
            </div>
          </div>
          <Image
            src="/images/hero image.jpg"
            alt="Portrait of Noor Aslam"
            width={240}
            height={240}
            priority
            className="hidden rounded-2xl object-cover ring-1 ring-border md:block"
          />
        </div>
      </Container>
    </section>
  );
}
