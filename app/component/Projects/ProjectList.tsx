"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const featuredCount = 6;

export default function ProjectList() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="container">
      <div className="project-list">
        {projects.slice(0, featuredCount).map((project, index) => <ProjectCard key={project.name} {...project} index={index} />)}
      </div>
      <div className="project-list-toggle">
        <p>{expanded ? projects.length : featuredCount} of {projects.length} projects</p>
        <button type="button" className="btn btn-shape flex items-center gap-3" aria-expanded={expanded} aria-controls="more-projects" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show fewer projects" : `View all ${projects.length} projects`}
          {expanded ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
        </button>
      </div>
      <div id="more-projects" className="project-list" hidden={!expanded}>
        {expanded && projects.slice(featuredCount).map((project, index) => <ProjectCard key={project.name} {...project} index={index + featuredCount} />)}
      </div>
    </div>
  );
}
