import {
  aboutBio,
  aboutExperienceLabel,
  aboutEyebrow,
  aboutHeading,
  languages,
  languagesLabel,
  skillGroups,
  timeline,
} from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line py-[80px] md:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <p className="font-mono text-sm uppercase tracking-wider text-teal">
          {aboutEyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
          {aboutHeading}
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
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
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

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            {aboutExperienceLabel}
          </h3>
          <ol className="mt-6 divide-y divide-line border-t border-line">
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
      </div>
    </section>
  );
}
