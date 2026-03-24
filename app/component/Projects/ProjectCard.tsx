import Link from "next/link";
import React from "react";
import "./ProjectCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

interface ProjectType {
  branding: string;
  name: string;
  description: string;
  tools: string[];
  live?: string;
  code?: string;
  project_img?: StaticImageData;
  index?: number;
}
const ProjectCard = ({ branding, name, description, tools, live, code, project_img, index = 0 }: ProjectType) => {
  return (
    <article className="card group interactive-card bg-foreground border border-blue/70 rounded-2xl flex flex-col md:flex-row gap-5 md:gap-7 p-4 sm:p-5 md:p-8 w-full max-w-5xl mx-auto">
      {/* first half */}
      <div className="card-body flex flex-col h-full md:w-1/2 order-2 md:order-1">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="project-brand text-blue text-[13px] sm:text-[14px] font-semibold tracking-wide uppercase">{branding}</span>
          <span className="project-index text-[12px] sm:text-[13px] text-[#d8c9ff]">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h2 className="text-white font-bold text-2xl sm:text-3xl my-2 leading-tight">{name}</h2>
        <p className="leading-[1.6]" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="tools flex items-center gap-2 flex-wrap my-5 text-white">
          {tools.map((tool, index) => (
            <span key={index} className="tool-chip bg-[#2A1454] hover:bg-blue ease rounded-2xl px-2.5 py-1.5 cursor-pointer text-[13px] sm:text-[14px]">
              {tool}
            </span>
          ))}
        </div>
        <div className="buttons flex flex-wrap gap-3 mt-auto">
          {live && (
            <Link href={live} className="btn btn-shape flex items-center gap-2 w-fit " target="_blank">
              Live Demo
              <FaArrowRightLong size={15} />
            </Link>
          )}
          {code && (
            <Link href={code} className="btn btn-shape flex items-center gap-2 w-fit " target="_blank">
              source code
              <FaArrowRightLong size={15} />
            </Link>
          )}
        </div>
      </div>
      {/* second half */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
        <div className="image project-media w-full h-[210px] sm:h-[255px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[350px] rounded-2xl flex justify-center items-center overflow-hidden">
          <Image src={project_img || ""} alt={name} className="object-cover w-full h-full rounded-xl border border-background border-x-4 transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
