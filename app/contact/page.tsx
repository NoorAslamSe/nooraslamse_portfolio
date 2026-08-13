import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Noor Aslam",
  description:
    "Get in touch with Noor Aslam for WordPress builds, speed and SEO audits, or custom Next.js frontends.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Contact />
    </main>
  );
}
