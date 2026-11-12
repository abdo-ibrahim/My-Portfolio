"use client";
import { usePortfolioReducedMotion } from "../utils/MotionProvider";

import Link from "next/link";
import { motion } from "motion/react";
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
  const reduced = usePortfolioReducedMotion();
  return (
    <motion.article initial={false}
      whileInView={reduced ? { opacity: 1 } : { opacity: [0.2, 1], y: [36, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="card group bg-foreground border border-blue/70 rounded-2xl flex flex-col md:flex-row gap-5 md:gap-7 p-4 sm:p-5 md:p-8 w-full max-w-5xl mx-auto">
      {/* first half */}
      <div className="card-body flex flex-col h-full md:w-1/2 order-2 md:order-1">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="project-brand text-blue text-[13px] sm:text-[14px] font-semibold tracking-wide uppercase">{branding}</span>
          <span className="project-index text-[12px] sm:text-[13px] text-[#d8c9ff]">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="text-white font-bold text-2xl sm:text-3xl my-2 leading-tight">{name}</h3>
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
            <Link href={live} className="btn btn-shape flex items-center gap-2 w-fit " target="_blank" rel="noopener noreferrer">
              Live Demo
              <FaArrowRightLong size={15} />
            </Link>
          )}
          {code && (
            <Link href={code} className="btn btn-shape flex items-center gap-2 w-fit " target="_blank" rel="noopener noreferrer">
              source code
              <FaArrowRightLong size={15} />
            </Link>
          )}
        </div>
      </div>
      {/* second half */}
      <motion.div initial={false}
        whileInView={reduced ? { opacity: 1 } : { opacity: [0, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
        <div className="image project-media w-full rounded-xl overflow-hidden" style={{ maxWidth: project_img?.width }}>
          <Image src={project_img || ""} alt={name} unoptimized className="block w-full h-auto" />
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
