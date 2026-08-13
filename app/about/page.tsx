import type { Metadata } from "next";
import Link from "next/link";
import {
  aboutBio,
  aboutExperienceLabel,
  aboutHeading,
  contactInfo,
  heroStats,
  heroTerminalLine,
  languages,
  languagesLabel,
  skillGroups,
  timeline,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Noor Aslam",
  description:
    "Next.js & WordPress developer in Peshawar, Pakistan — background, skills, and experience building fast, conversion-focused websites.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-line py-[80px] md:py-[110px]">
        <div className="mx-auto w-full max-w-[1120px] px-8">
          <p className="flex items-center font-mono text-sm text-muted md:text-base">
            {heroTerminalLine}
            <span
              aria-hidden="true"
              className="animate-caret-blink ml-2 inline-block h-4 w-2 bg-gold align-middle"
            />
          </p>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-text md:text-7xl">
            {aboutHeading}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {contactInfo.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-[3px] bg-gold px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              View experience
            </a>
            <Link
              href="/projects"
              className="rounded-[3px] border border-line px-6 py-3 font-mono text-sm font-medium text-text transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              See my work
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-6">
                <dt className="font-display text-3xl font-semibold text-text">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line py-[80px] md:py-[110px]">
        <div className="mx-auto w-full max-w-[1120px] px-8">
          <p className="font-mono text-sm uppercase tracking-wider text-teal">
            About
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
            The story so far
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="space-y-5">
                {aboutBio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-mono text-sm leading-relaxed text-muted">
                <span className="text-teal">{languagesLabel}: </span>
                {languages.map((language, index) => (
                  <span key={language}>
                    {language}
                    {index < languages.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-gold">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <li
                        key={tag}
                        className={
                          group.learning
                            ? "rounded-[3px] border border-teal/30 bg-teal/5 px-2.5 py-1 font-mono text-xs text-teal"
                            : "rounded-[3px] border border-line px-2.5 py-1 font-mono text-xs text-text"
                        }
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-t border-line py-[80px] md:py-[110px]"
      >
        <div className="mx-auto w-full max-w-[1120px] px-8">
          <h3 className="font-mono text-sm uppercase tracking-wider text-teal">
            {aboutExperienceLabel}
          </h3>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
            Where I&apos;ve worked and studied
          </h2>

          <ol className="mt-12 divide-y divide-line border-t border-line">
            {timeline.map((entry) => (
              <li
                key={entry.period}
                className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <p className="font-mono text-sm text-teal">{entry.period}</p>
                <div>
                  <p className="font-medium text-text">
                    {entry.role}
                    <span className="text-muted">, {entry.company}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-[80px] md:py-[110px]">
        <div className="mx-auto w-full max-w-[1120px] px-8">
          <div className="border border-line bg-surface p-8 text-center md:p-14">
            <p className="font-mono text-sm uppercase tracking-wider text-teal">
              Let&apos;s work together
            </p>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
              Have a project in mind? Let&apos;s build something fast.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-[3px] bg-gold px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="rounded-[3px] border border-line px-6 py-3 font-mono text-sm font-medium text-text transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
