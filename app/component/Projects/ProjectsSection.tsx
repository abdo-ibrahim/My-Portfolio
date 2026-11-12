import Heading from "../utils/Heading";
import Reveal from "../utils/Reveal";
import ProjectList from "./ProjectList";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects portfolio-section">
      <Reveal><Heading eyebrow="01 / Selected work" heading="Things I’ve built." subheading="SaaS platforms, AI applications, and websites built for real clients." /></Reveal>
      <ProjectList />
    </section>
  );
}
