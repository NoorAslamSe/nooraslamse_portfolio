import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/app/sections/hero";
import { About } from "@/app/sections/about";
import { Skills } from "@/app/sections/skills";
import { Projects } from "@/app/sections/projects";
import { Contact } from "@/app/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
