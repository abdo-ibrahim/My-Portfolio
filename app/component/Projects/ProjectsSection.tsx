import Heading from "../utils/Heading";
import Reveal from "../utils/Reveal";
import ProjectList from "./ProjectList";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects portfolio-section">
      <Reveal><Heading heading="Selected Work" subheading="A selection of SaaS platforms, AI applications, and projects built for real clients." /></Reveal>
      <ProjectList />
    </section>
  );
}
