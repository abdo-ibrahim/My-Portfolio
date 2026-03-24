import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Heading from "../utils/Heading";
import { LiaMedalSolid } from "react-icons/lia";
import ResumeCard from "./ResumeCard";
import { Fade } from "react-awesome-reveal";
import { education, experience } from "../../data/resume";

const ResumeComponent = () => {
  const getIcon = (iconType: "briefcase" | "graduation") => {
    if (iconType === "briefcase") {
      return <FaBriefcase className="text-[20px] sm:text-[25px]" />;
    }

    return <FaGraduationCap className="text-[20px] sm:text-[25px]" />;
  };

  return (
    <div className="resume flex justify-center items-center pb-6 md:pb-10">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-6">
        {/* left part */}
        <div className="experience  w-full md:w-1/2 flex flex-col items-start md:items-center">
          <Fade direction="left" duration={600} cascade triggerOnce damping={0.2}>
            <div className="flex items-center gap-2 text-effect mx-auto">
              <LiaMedalSolid size={40} className="text-blue" />
              <Heading heading="My Experience" subheading="" />
            </div>
            <div className="experience-container">
              {experience.map((exp, index) => (
                <ResumeCard key={index} date={exp.date} title={exp.title} location={exp.location} icon={getIcon(exp.iconType)} />
              ))}
            </div>
          </Fade>
        </div>
        {/* right part */}
        <div className="education w-full md:w-1/2 flex flex-col items-start md:items-center mt-2 md:mt-0">
          <Fade direction="right" duration={600} cascade triggerOnce damping={0.2}>
            <div className="flex items-center gap-4 text-effect mx-auto">
              <FaGraduationCap size={30} className="text-blue" />
              <Heading heading="My Education" subheading="" />
            </div>
            <div className="education-container">
              {education.map((edu, index) => (
                <ResumeCard key={index} date={edu.date} title={edu.title} location={edu.location} icon={getIcon(edu.iconType)} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
