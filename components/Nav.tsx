"use client";

import { useState } from "react";
import { navItems, siteName } from "@/lib/data";

const linkClass =
  "font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = navItems.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-8"
      >
        <a
          href="#home"
          className="font-mono text-base tracking-tight text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {siteName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={linkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden font-mono text-sm text-text transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:inline-flex"
        >
          Let&apos;s talk&nbsp;&rarr;
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-ink px-8 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center border-b border-line/50 font-mono text-base text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex font-mono text-sm text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Let&apos;s talk&nbsp;&rarr;
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
