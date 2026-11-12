import { FiBriefcase, FiBookOpen, FiAward, FiUsers } from "react-icons/fi";
import ResumeCard from "./ResumeCard";
import Reveal from "../utils/Reveal";
import { education, experience, certifications, extracurricular } from "../../data/resume";
import "./ResumeCard.css";

const groups = [
  { name: "Work & Experience", icon: FiBriefcase, items: experience },
  { name: "Education", icon: FiBookOpen, items: education },
  { name: "Certifications", icon: FiAward, items: certifications },
  { name: "Leadership & Community", icon: FiUsers, items: extracurricular },
];

export default function ResumeComponent() {
  return (
    <div className="container resume-groups">
      {groups.map(({ name, icon: Icon, items }) => (
        <Reveal key={name} className="resume-group">
          <h3 className="resume-group-title"><Icon aria-hidden="true" />{name}</h3>
          <div className="resume-timeline">
            {items.map(item => <ResumeCard key={item.title + item.date} {...item} />)}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
