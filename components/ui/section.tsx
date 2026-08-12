import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

export function Section({ id, className = "", ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${className}`}
      {...props}
    >
      {props.children}
    </section>
  );
}
