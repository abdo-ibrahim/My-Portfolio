import React from "react";
import "./Landing.css";
import Image from "next/image";
import profile from "../../assets/images/profile.png";
import SocialLinks from "./SocialLinks";
import ImageLight from "../utils/ImageLight";
import DownloadCv from "../utils/DownloadCv";
import ParticlesComponent from "../utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";
const Landing = () => {
  return (
    <div className="landing flex items-center justify-center relative ">
      <ParticlesComponent />

      <ImageLight />
      <div className="container flex items-center flex-col md:flex-row gap-6 pb-12">
        {/* left part */}
        <div className="info w-full md:w-1/2 text-center md:text-left">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <span className="text-white text-[30px] md:text-[40px] font-semibold"> I&apos;m Abdulrahman</span>
            <h1 className="text-white text-effect font-bold text-[30px] sm:text-[40px] md:text-[45px] leading-[1em]">Front-End Developer</h1>
            <div className="md:hidden my-10  max-w-[90%] mx-auto">
              <div className="image-container w-fit mx-auto">
                <Image src={profile} alt="profile" width={400} height={400} className="object-contain" />
              </div>
            </div>
            <p className="text-[19px] mt-4 mb-6">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
            {/*start links */}
            <div className="flex items-center gap-4 flex-col md:flex-row md:gap-4 ">
              <DownloadCv />
              <div className="flex-1">
                <SocialLinks />
              </div>
            </div>
            {/* end links */}
          </Fade>
        </div>
        {/* right part */}
        <div className="image w-full md:w-1/2 justify-center hidden md:flex">
          <Fade direction="up" duration={800} cascade triggerOnce damping={0.25}>
            <div className="image-container">
              <Image src={profile} alt="profile" width={400} height={400} className="object-contain" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Landing;
