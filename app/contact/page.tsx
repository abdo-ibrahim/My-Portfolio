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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Abdulrahman Ibrahim for software engineering projects, freelance work, or technical collaboration.",
};

const Contact = () => {
  return (
    <section id="contact" className="contact bg-background h-[calc(100vh-79px)] min-h-[calc(100vh-79px)] max-h-[calc(100vh-79px)] flex flex-col justify-between relative overflow-hidden py-4 md:py-6">
      <ParticlesComponent />
      <ImageLight />
      <Fade direction="up" duration={800} triggerOnce>
        <Heading heading="Contact me" subheading="CONTACT ME" />
      </Fade>
      <Fade direction="up" duration={800} triggerOnce>
        <div className="bg-foreground flex items-center justify-center py-6 md:py-10 relative my-auto">
          <div className="container">
            <p className="text-center text-white mb-2">Want to start a project?</p>
            <Heading_Animate />
            <Link href="mailto:abdo.ibrahim411@gmail.com" className="email flex gap-2 items-center text-white w-fit text-md sm:text-lg md:text-xl lg:text-2xl break-all text-center sm:text-left mt-4">
              abdo.ibrahim411@gmail.com
              <div className="arrow-mail flex items-center justify-center border border-white rounded-full p-2">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade direction="up" duration={800} triggerOnce>
        <div className="w-fit mx-auto mb-2 md:mb-4">
          <SocialLinks />
        </div>
      </Fade>
    </section>
  );
};


export default Contact;

