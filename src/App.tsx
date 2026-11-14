import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <About />
        <Contact />
      </main>
    </>
  );
}
