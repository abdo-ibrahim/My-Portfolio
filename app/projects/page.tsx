import React from "react";
import ImageLight from "../component/utils/ImageLight";
import Heading from "../component/utils/Heading";
import ProjectCard from "../component/Projects/ProjectCard";
import ParticlesComponent from "../component/utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";
import { projects } from "../data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover web applications, RESTful APIs, AI platforms, and e-commerce projects developed by Abdulrahman Ibrahim.",
};

const Projects = () => {
  return (
    <section id="projects" className="projects relative py-4 sm:py-6 md:py-8">
      <ParticlesComponent />
      <ImageLight />
      <Fade direction="up" duration={800} triggerOnce>
        <Heading heading="My Recent Projects" subheading="RECENT PROJECTS" />
      </Fade>
      <div className="container relative">
        <div className="grid-container grid grid-cols-1 gap-6 sm:gap-8 max-w-5xl mx-auto my-6 sm:my-8 md:my-10">
          {projects.map((project, index) => (
            <Fade direction="up" key={index} duration={1000} triggerOnce className="flex w-full">
              <ProjectCard {...project} index={index} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

