import type { HTMLAttributes } from "react";

export function Container({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 md:px-8 ${className}`} {...props}>
      {props.children}
    </div>
  );
}
