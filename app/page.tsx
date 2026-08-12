import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
    </main>
  );
}
