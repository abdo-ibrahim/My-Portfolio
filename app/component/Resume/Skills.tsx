import SkillsCard from "./SkillsCard";
import Reveal from "../utils/Reveal";
import { skillCategories } from "../../data/skills";
import "./SkillsCard.css";
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiShoppingBag } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import type { IconType } from "react-icons";

const categoryIcons: Record<string, IconType> = {
  Languages: FiCode, Frontend: FiLayout, "Backend & real-time": FiServer,
  Databases: FiDatabase, "AI & LLMs": LuBrainCircuit,
  "Tools & infrastructure": FiTool, "CMS & commerce": FiShoppingBag,
};

export default function Skills() {
  return (
    <div className="skills pb-16">
      <div className="container skill-categories">
        {skillCategories.map(category => {
          const Icon = categoryIcons[category.category] ?? FiCode;
          return (
          <Reveal key={category.category} className={category.category === "AI & LLMs" ? "skill-category skill-category-ai" : "skill-category"}>
            <div className="skill-category-heading"><Icon aria-hidden="true" /><h3>{category.category}</h3><span className="skill-count">{category.skills.length}</span></div>
            <div className="skill-grid">{category.skills.map(skill => <SkillsCard key={skill.name} {...skill} />)}</div>
          </Reveal>
        ); })}
      </div>
    </div>
  );
}
