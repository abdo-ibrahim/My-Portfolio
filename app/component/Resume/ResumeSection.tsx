import Heading from "../utils/Heading";
import Reveal from "../utils/Reveal";
import DownloadCv from "../utils/DownloadCv";
import ResumeComponent from "./ResumeComponent";

export default function ResumeSection() {
  return (
    <section id="resume" className="portfolio-section">
      <Reveal>
        <Heading heading="Experience & Education" subheading="Client work, engineering roles, and the learning behind them." />
        <DownloadCv />
      </Reveal>
      <ResumeComponent />
    </section>
  );
}
