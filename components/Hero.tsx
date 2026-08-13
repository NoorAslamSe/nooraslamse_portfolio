"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  contactInfo,
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
    <section id="home" className="relative overflow-hidden py-[80px] md:py-[110px]">
      <Image
        src="/images/herosection.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto w-full max-w-[1120px] px-8">
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
          <Link
            href="/projects"
            className="rounded-[3px] bg-gold px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-[3px] border border-line px-6 py-3 font-mono text-sm font-medium text-text transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Get in touch
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

      <div className="absolute right-8 top-[124px] hidden lg:block md:top-[158px]">
        <svg
          width="240"
          height="320"
          viewBox="0 0 240 320"
          fill="none"
          className="text-muted"
          aria-hidden="true"
        >
          <path
            d="M58 262 C 100 276, 165 235, 182 68"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-gold"
          >
            <g transform="translate(58 262)">
              <circle r="36" fill="var(--color-surface)" stroke="currentColor" />
              <g transform="translate(-22.8 -22.8) scale(1.9)">
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                />
              </g>
            </g>
          </a>
          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-gold"
          >
            <g transform="translate(182 68)">
              <circle r="36" fill="var(--color-surface)" stroke="currentColor" />
              <g transform="translate(-22.8 -22.8) scale(1.9)">
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </g>
            </g>
          </a>
        </svg>
      </div>
    </section>
  );
}
