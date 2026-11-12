import Heading from "../utils/Heading";
import Reveal from "../utils/Reveal";
import DownloadCv from "../utils/DownloadCv";
import ResumeComponent from "./ResumeComponent";

export default function ResumeSection() {
  return (
    <section id="resume" className="portfolio-section">
      <Reveal>
        <Heading eyebrow="02 / Background" heading="Experience & education." subheading="Client work, engineering roles, and the learning behind them." />
        <div className="container resume-download"><DownloadCv /></div>
      </Reveal>
      <ResumeComponent />
    </section>
  );
}
