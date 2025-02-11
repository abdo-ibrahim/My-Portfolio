import React from "react";
import Heading from "../component/utils/Heading";
import ResumeComponent from "../component/Resume/ResumeComponent";
import Skills from "../component/Resume/Skills";
import DownloadCv from "../component/utils/DownloadCv";
import ImageLight from "../component/utils/ImageLight";
import ParticlesComponent from "../component/utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";
const Resume = () => {
  return (
    <div className="resume relative">
      <ParticlesComponent />
      <ImageLight />
      <Fade direction="up" duration={600} cascade triggerOnce damping={0.2}>
        <Heading heading="My Resume" subheading="" />
        <DownloadCv />
      </Fade>
      <ResumeComponent />
      <Fade direction="up" duration={600} cascade triggerOnce damping={0.2}>
        <Heading heading="My Skills" subheading="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />
      </Fade>
      <Skills />
    </div>
  );
};

export default Resume;
