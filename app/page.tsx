import Landing from "./component/Home/Landing";
import ProjectsSection from "./component/Projects/ProjectsSection";
import ResumeSection from "./component/Resume/ResumeSection";
import Skills from "./component/Resume/Skills";
import ContactSection from "./component/Contact/ContactSection";
import Heading from "./component/utils/Heading";
import Reveal from "./component/utils/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdulrahman Ibrahim | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer experienced in building production-ready web applications, RESTful APIs, and AI-powered platforms.",
};

export default function Home() {
  return (
    <main>
      <Landing />
      <ProjectsSection />
      <ResumeSection />
      <section id="skills" className="portfolio-section">
        <Reveal><Heading heading="My Skills" subheading="The languages, frameworks, and tools I use to build and ship web applications." /></Reveal>
        <Skills />
      </section>
      <ContactSection />
    </main>
  );
}

