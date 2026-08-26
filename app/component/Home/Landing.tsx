import React from "react";
import "./Landing.css";
import Image from "next/image";
import profile from "../../assets/images/formal_profile.png";
import SocialLinks from "./SocialLinks";
import ImageLight from "../utils/ImageLight";
import DownloadCv from "../utils/DownloadCv";
import ParticlesComponent from "../utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";

const Landing = () => {
  return (
    <section id="home" className="landing flex items-center justify-center relative overflow-hidden">
      <ParticlesComponent />
      <ImageLight />
      <div className="container flex items-center flex-col md:flex-row gap-8 lg:gap-12 py-2 md:py-4 h-full justify-between">
        {/* left part */}
        <div className="info w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <span className="text-white text-[clamp(1.5rem,3.5vw,2.2rem)] font-semibold leading-tight">I&apos;m Abdulrahman</span>
            <h1 className="text-white text-effect font-bold text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.05] mt-1.5">Full Stack Software Engineer</h1>
            <div className="md:hidden my-6 max-w-[88%] mx-auto">
              <div className="profile-shell image-container w-fit mx-auto">
                <span className="profile-glow" aria-hidden="true" />
                <Image src={profile} alt="profile" width={340} height={340} className="profile-photo object-contain" />
              </div>
            </div>
            <p className="text-[15px] sm:text-[16px] lg:text-[17.5px] mt-4 mb-6 max-w-[58ch] mx-auto md:mx-0 leading-relaxed text-gray-200">
              Full Stack Software Engineer experienced in building production-ready web applications, RESTful APIs, and AI-powered platforms using modern technologies. Delivered scalable solutions for 10+ clients with 5-star ratings. Passionate about clean code with 1500+ solved programming problems.
            </p>
            {/*start links */}
            <div className="flex items-center gap-4 flex-col md:flex-row md:gap-5">
              <DownloadCv />
              <div className="flex-1">
                <SocialLinks />
              </div>
            </div>
            {/* end links */}
          </Fade>
        </div>
        {/* right part */}
        <div className="image w-full md:w-1/2 justify-center hidden md:flex md:justify-end items-center">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <div className="profile-shell image-container flex items-center justify-center">
              <span className="profile-glow" aria-hidden="true" />
              <Image src={profile} alt="profile" width={380} height={380} className="profile-photo object-contain" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Landing;

