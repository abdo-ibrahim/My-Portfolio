import React from "react";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
import Heading from "../utils/Heading";
import { LiaMedalSolid } from "react-icons/lia";
import ResumeCard from "./ResumeCard";
import Reveal from "../utils/Reveal";
import { education, experience, certifications, extracurricular } from "../../data/resume";

const ResumeComponent = () => {
  const getIcon = (iconType: "briefcase" | "graduation" | "certificate" | "users") => {
    switch (iconType) {
      case "briefcase":
        return <FaBriefcase className="text-[18px] sm:text-[22px]" />;
      case "graduation":
        return <FaGraduationCap className="text-[18px] sm:text-[22px]" />;
      case "certificate":
        return <FaCertificate className="text-[18px] sm:text-[22px]" />;
      case "users":
        return <FaUsers className="text-[18px] sm:text-[22px]" />;
      default:
        return <FaBriefcase className="text-[18px] sm:text-[22px]" />;
    }
  };

  return (
    <div className="resume flex justify-center items-center pb-6 md:pb-10">
      <div className="container flex flex-col gap-10">
        {/* Row 1: Experience & Education */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
          {/* Work Experience */}
          <div className="experience w-full md:w-1/2 flex flex-col items-start">
            <Reveal direction="left" className="w-full">
              <div className="flex items-center gap-2 text-effect mb-6">
                <LiaMedalSolid size={36} className="text-blue" />
                <Heading heading="Work & Experience" subheading="" />
              </div>
              <div className="experience-container w-full space-y-4">
                {experience.map((exp, index) => (
                  <ResumeCard
                    key={index}
                    date={exp.date}
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    details={exp.details}
                    icon={getIcon(exp.iconType)}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Education */}
          <div className="education w-full md:w-1/2 flex flex-col items-start">
            <Reveal direction="right" className="w-full">
              <div className="flex items-center gap-3 text-effect mb-6">
                <FaGraduationCap size={30} className="text-blue" />
                <Heading heading="Education" subheading="" />
              </div>
              <div className="education-container w-full space-y-4">
                {education.map((edu, index) => (
                  <ResumeCard
                    key={index}
                    date={edu.date}
                    title={edu.title}
                    company={edu.company}
                    location={edu.location}
                    details={edu.details}
                    icon={getIcon(edu.iconType)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Row 2: Certifications & Extracurricular */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-4">
          {/* Certifications */}
          <div className="certifications w-full md:w-1/2 flex flex-col items-start">
            <Reveal direction="left" className="w-full">
              <div className="flex items-center gap-3 text-effect mb-6">
                <FaCertificate size={26} className="text-blue" />
                <Heading heading="Certifications" subheading="" />
              </div>
              <div className="certifications-container w-full space-y-4">
                {certifications.map((cert, index) => (
                  <ResumeCard
                    key={index}
                    date={cert.date}
                    title={cert.title}
                    company={cert.company}
                    location={cert.location}
                    details={cert.details}
                    icon={getIcon(cert.iconType)}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Extracurricular */}
          <div className="extracurricular w-full md:w-1/2 flex flex-col items-start">
            <Reveal direction="right" className="w-full">
              <div className="flex items-center gap-3 text-effect mb-6">
                <FaUsers size={28} className="text-blue" />
                <Heading heading="Leadership & Community" subheading="" />
              </div>
              <div className="extracurricular-container w-full space-y-4">
                {extracurricular.map((extra, index) => (
                  <ResumeCard
                    key={index}
                    date={extra.date}
                    title={extra.title}
                    company={extra.company}
                    location={extra.location}
                    details={extra.details}
                    icon={getIcon(extra.iconType)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;

