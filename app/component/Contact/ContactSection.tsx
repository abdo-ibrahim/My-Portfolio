import { FaArrowRight } from "react-icons/fa6";
import SocialLinks from "../Home/SocialLinks";
import HeadingAnimate from "./Heading_Animate";
import Reveal from "../utils/Reveal";
import "../../contact/Contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact portfolio-section">
      <div className="container">
        <Reveal><p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p></Reveal>
        <HeadingAnimate />
        <Reveal delay={0.1}>
          <a href="mailto:abdo.ibrahim411@gmail.com" className="email flex gap-3 items-center text-white w-fit text-sm sm:text-lg md:text-xl break-all">
            abdo.ibrahim411@gmail.com
            <span className="arrow-mail flex items-center justify-center border border-white rounded-full p-2"><FaArrowRight aria-hidden="true" /></span>
          </a>
          <div className="contact-socials"><SocialLinks /></div>
        </Reveal>
        <footer className="contact-footer"><span>Abdulrahman Ibrahim · Cairo, Egypt</span><a href="#home">Back to top ↑</a></footer>
      </div>
    </section>
  );
}
