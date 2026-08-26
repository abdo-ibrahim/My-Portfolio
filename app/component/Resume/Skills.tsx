import React from "react";
import SkillsCard from "./SkillsCard";
import { Fade } from "react-awesome-reveal";
import { skills, skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <div className="skills pb-12">
      <div className="container flex flex-col gap-10 items-center justify-center">
        {/* Categorized Skills Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
          {skillCategories.map((cat, idx) => (
            <Fade key={idx} direction="up" duration={600} triggerOnce className="flex w-full">
              <div className="bg-[#140c23]/80 border border-[#2e1f4d] rounded-2xl p-5 w-full interactive-card flex flex-col">
                <h3 className="text-blue font-bold text-lg mb-3 border-b border-[#2e1f4d] pb-2">{cat.category}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {cat.skills.map((skillName, i) => (
                    <span key={i} className="bg-[#2A1454] hover:bg-blue transition-colors duration-200 rounded-xl px-3 py-1 text-[13px] text-white font-medium">
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Visual Skill Logo Cards */}
        <div className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl mt-2">
          {skills.map((skill, index) => (
            <Fade key={index} direction="up" duration={600} triggerOnce>
              <SkillsCard name={skill.name} image={skill.image} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

