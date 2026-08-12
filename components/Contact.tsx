"use client";

import { useState, type FormEvent } from "react";
import {
  contactEyebrow,
  contactFormEmailLabel,
  contactFormEndpoint,
  contactFormMessageLabel,
  contactFormNameLabel,
  contactFormSubmitLabel,
  contactHeading,
  contactInfo,
  contactRows,
} from "@/lib/data";

const inputClass =
  "w-full rounded-[3px] border border-line bg-surface px-3 py-2.5 text-sm text-text placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

const labelClass =
  "mb-2 block font-mono text-xs uppercase tracking-wider text-muted";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-line py-[80px] md:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <p className="font-mono text-sm uppercase tracking-wider text-teal">
          {contactEyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-text md:text-5xl">
          {contactHeading}
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="max-w-md leading-relaxed text-muted">
              {contactInfo.intro}
            </p>
            <dl className="mt-8 space-y-4">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line pb-4"
                >
                  <dt className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                    {row.label}
                  </dt>
                  {row.href ? (
                    <dd>
                      <a
                        href={row.href}
                        {...(row.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-mono text-sm text-text transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        {row.value}
                      </a>
                    </dd>
                  ) : (
                    <dd className="font-mono text-sm text-text">{row.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            action={contactFormEndpoint}
            method="POST"
            className="mt-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  {contactFormNameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {contactFormEmailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                {contactFormMessageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer rounded-[3px] bg-gold px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : `${contactFormSubmitLabel} \u2192`}
            </button>
            {status === "success" ? (
              <p className="rounded-[3px] border border-teal/30 bg-teal/10 px-3 py-2 font-mono text-sm text-teal">
                Submitted — thanks {name || "for your message"}! I&apos;ll reply
                to you soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="rounded-[3px] border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-sm text-gold">
                Failed to submit. Please try again, or email me directly at{" "}
                {contactInfo.email}.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
