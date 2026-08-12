interface SectionHeadingProps {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  kicker,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="font-mono text-sm uppercase tracking-wider text-accent">
        {kicker}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}
