import SkillsCard from "./SkillsCard";
import Reveal from "../utils/Reveal";
import { skillCategories } from "../../data/skills";
import "./SkillsCard.css";
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiShoppingBag } from "react-icons/fi";

const categoryIcons = [FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiShoppingBag];

export default function Skills() {
  return (
    <div className="skills pb-16">
      <div className="container skill-categories">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index];
          return (
          <Reveal key={category.category} className="skill-category">
            <div className="skill-category-heading"><Icon aria-hidden="true" /><h3>{category.category}</h3><span className="skill-count">{category.skills.length}</span></div>
            <div className="skill-grid">{category.skills.map(skill => <SkillsCard key={skill.name} {...skill} />)}</div>
          </Reveal>
        ); })}
      </div>
    </div>
  );
}
