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
}
const ProjectCard = ({ branding, name, description, tools, live, code, project_img }: ProjectType) => {
  return (
    <div className="card bg-foreground border border-blue rounded-2xl flex flex-col md:flex-row gap-4 p-4 md:p-8 w-full max-w-5xl mx-auto">
      {/* first half */}
      <div className="card-body flex flex-col h-full md:w-1/2 order-2 md:order-1">
        <span className="text-blue">{branding}</span>
        <h2 className="text-white font-bold text-3xl my-2">{name}</h2>
        <p className="leading-[1.6]" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="tools flex items-center gap-2 flex-wrap my-4 text-white">
          {tools.map((tool, index) => (
            <span key={index} className=" bg-[#2A1454] hover:bg-blue ease rounded-2xl px-2 py-1 cursor-pointer">
              {tool}
            </span>
          ))}
        </div>
        <div className="buttons flex flex-wrap gap-2 mt-auto">
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
        <div className="image w-full h-[205px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[350px] rounded-2xl flex justify-center items-center">
          <Image src={project_img || ""} alt="" className="object-cover w-full h-full rounded-xl border border-background border-x-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
