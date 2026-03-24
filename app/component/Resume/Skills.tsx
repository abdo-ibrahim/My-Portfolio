import React from "react";
import SkillsCard from "./SkillsCard";
import { Fade } from "react-awesome-reveal";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="skills pb-12">
      <div className="container flex items-center justify-center">
        <div className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <Fade key={index} direction="up" duration={600} cascade triggerOnce damping={0.2}>
              <SkillsCard name={skill.name} image={skill.image} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
