import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Experience from "@/components/portfolio/experience";
import Projects from "@/components/portfolio/projects";
import Skills from "@/components/portfolio/skills";
import Education from "@/components/portfolio/education";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
