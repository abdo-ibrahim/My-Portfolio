import type { ResumeItem } from "../../data/resume";
import { FiMapPin } from "react-icons/fi";

export default function ResumeCard({ date, title, company, location, details }: ResumeItem) {
  return (
    <article className="resume-card">
      <span className="resume-date">{date}</span>
      <h4>{title}</h4>
      {company && <p className="resume-company">{company}</p>}
      {location && <p className="resume-location"><FiMapPin aria-hidden="true" />{location}</p>}
      {details && <ul>{details.map(item => <li key={item}>{item}</li>)}</ul>}
    </article>
  );
}
