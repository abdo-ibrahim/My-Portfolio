import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Heading from "../utils/Heading";
import { LiaMedalSolid } from "react-icons/lia";
import ResumeCard from "./ResumeCard";
import { Fade } from "react-awesome-reveal";

const ResumeComponent = () => {
  // edit experience data here
  const experience = [
    {
      date: "July 2023 - August 2023",
      title: "Frontend Developer",
      location: "TechnoHacks Internship",
      icon: <FaBriefcase className="text-[20px] sm:text-[25px]" />,
    },
    {
      date: "July 2024 - August 2024",
      title: "MERN Stack Development",
      location: "ITI Internship Summer Training",
      icon: <FaBriefcase className="text-[20px] sm:text-[25px]" />,
    },
  ];
  const education = [
    {
      date: "2020 - 2025",
      title: " Computers and Systems Engineering",
      location: "Zagazig University",
      icon: <FaGraduationCap className="text-[20px] sm:text-[25px]" />,
    },
    {
      date: "2017 - 2019",
      title: "High School Diploma",
      location: "Gamal Taman's School",
      icon: <FaGraduationCap className="text-[20px] sm:text-[30px]" />,
    },
  ];
  return (
    <div className="resume flex justify-center items-center">
      <div className="container flex flex-col md:flex-row">
        {/* left part */}
        <div className="experience  w-full md:w-1/2 flex flex-col items-start md:items-center">
          <Fade direction="left" duration={600} cascade triggerOnce damping={0.2}>
            <div className="flex items-center gap-2 text-effect mx-auto">
              <LiaMedalSolid size={40} className="text-blue" />
              <Heading heading="My Experience" subheading="" />
            </div>
            <div className="experience-container">
              {experience.map((exp, index) => (
                <ResumeCard key={index} date={exp.date} title={exp.title} location={exp.location} icon={exp.icon} />
              ))}
            </div>
          </Fade>
        </div>
        {/* right part */}
        <div className="education w-full md:w-1/2 flex flex-col items-start md:items-center">
          <Fade direction="right" duration={600} cascade triggerOnce damping={0.2}>
            <div className="flex items-center gap-4 text-effect mx-auto">
              <FaGraduationCap size={30} className="text-blue" />
              <Heading heading="My Education" subheading="" />
            </div>
            <div className="education-container">
              {education.map((edu, index) => (
                <ResumeCard key={index} date={edu.date} title={edu.title} location={edu.location} icon={edu.icon} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
