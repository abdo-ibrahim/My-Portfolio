import React from "react";
import ImageLight from "../component/utils/ImageLight";
import Heading from "../component/utils/Heading";
import "./Contact.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SocialLinks from "../component/Home/SocialLinks";
import Heading_Animate from "../component/Contact/Heading_Animate";
import ParticlesComponent from "../component/utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";
const Contact = () => {
  return (
    <div className="contact bg-background min-h-[calc(100vh-65px)] flex flex-col justify-between relative overflow-hidden">
      <ParticlesComponent />
      <ImageLight />
      <Fade direction="up" duration={800} triggerOnce>
        <Heading heading="Contact me" subheading="CONTACT ME" />
      </Fade>
      <Fade direction="up" duration={800} triggerOnce>
        <div className="bg-foreground flex items-center justify-center py-10 relative">
          <div className="container">
            <p className="text-center text-white">Want to start a project?</p>
            <Heading_Animate />
            <Link href="mailto:abdo.ibrahim@gmail.com" className="email flex gap-2 items-center text-white w-fit text-md sm:text-lg md:text-xl lg:text-2xl">
              abdo.ibrahim@gmail.com
              <div className="arrow-mail flex items-center justify-center border border-white rounded-full p-2">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade direction="up" duration={800} triggerOnce>
        <div className="w-fit mx-auto my-10">
          <SocialLinks />
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
