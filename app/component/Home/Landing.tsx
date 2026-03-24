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
    <section id="home" className="landing flex items-center justify-center relative">
      <ParticlesComponent />

      <ImageLight />
      <div className="container flex items-center flex-col md:flex-row gap-10 md:gap-14 py-8 md:py-14">
        {/* left part */}
        <div className="info w-full md:w-1/2 text-center md:text-left">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <span className="text-white text-[clamp(1.7rem,4vw,2.45rem)] font-semibold leading-tight">I&apos;m Abdulrahman</span>
            <h1 className="text-white text-effect font-bold text-[clamp(2rem,5vw,3.15rem)] leading-[1.02] mt-2">Full Stack Developer</h1>
            <div className="md:hidden my-8 max-w-[92%] mx-auto">
              <div className="profile-shell image-container w-fit mx-auto">
                <span className="profile-glow" aria-hidden="true" />
                <Image src={profile} alt="profile" width={400} height={400} className="profile-photo object-contain" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[19px] mt-5 mb-8 max-w-[62ch] mx-auto md:mx-0">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
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
        <div className="image w-full md:w-1/2 justify-center hidden md:flex md:justify-end">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <div className="profile-shell image-container">
              <span className="profile-glow" aria-hidden="true" />
              <Image src={profile} alt="profile" width={400} height={400} className="profile-photo object-contain" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Landing;
