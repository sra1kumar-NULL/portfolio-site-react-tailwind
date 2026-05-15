import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="lg:pr-72 max-w-4xl mx-auto pb-20 lg:pb-0">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Timeline />
        </ScrollReveal>
        <ScrollReveal>
          <Interests />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Writing />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}
