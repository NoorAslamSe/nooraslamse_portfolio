"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
} from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function Reveal({ delay = 0, className = "", ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    setReduced(prefersReduced.matches);
    if (prefersReduced.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (reduced) {
    return <div className={className} {...props} />;
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay > 0 ? `${delay}ms` : undefined }}
      className={`transition-opacity duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      {...props}
    />
  );
}
