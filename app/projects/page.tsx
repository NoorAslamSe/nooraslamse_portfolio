import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Noor Aslam",
  description:
    "Client work and in-progress builds — WordPress and Next.js projects by Noor Aslam, a developer in Peshawar, Pakistan.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Projects />
    </main>
  );
}
