"use client";

import { useEffect, useState } from "react";
import {
  heroHeading,
  heroStats,
  heroSubtext,
  heroTerminalLine,
  stackCycleItems,
} from "@/lib/data";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setVisible(false);
      timer = setTimeout(() => {
        setIndex((current) => (current + 1) % stackCycleItems.length);
        setVisible(true);
        timer = setTimeout(cycle, 2200);
      }, 200);
    };
    timer = setTimeout(cycle, 2200);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <section id="home" className="py-[80px] md:py-[110px]">
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <p className="flex items-center font-mono text-sm text-muted md:text-base">
          {heroTerminalLine}
          <span
            aria-hidden="true"
            className="animate-caret-blink ml-2 inline-block h-4 w-2 bg-gold align-middle"
          />
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-text md:text-7xl">
          {heroHeading.map((segment, index) =>
            segment.emphasis ? (
              <em key={index} className="italic text-gold">
                {segment.text}
              </em>
            ) : (
              <span key={index}>{segment.text}</span>
            )
          )}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {heroSubtext}
        </p>

        <div className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-sm text-teal">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-teal"
            />
            <span
              className={`transition-opacity duration-200 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {stackCycleItems[index]}
            </span>
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-[3px] bg-gold px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-[3px] border border-line px-6 py-3 font-mono text-sm font-medium text-text transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Get in touch
          </a>
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
  );
}
