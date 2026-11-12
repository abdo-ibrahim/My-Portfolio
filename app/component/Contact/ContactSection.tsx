import { FiArrowUpRight, FiArrowUp, FiMail } from "react-icons/fi";
import SocialLinks from "../Home/SocialLinks";
import HeadingAnimate from "./Heading_Animate";
import Reveal from "../utils/Reveal";
import "../../contact/Contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact portfolio-section">
      <div className="container">
        <Reveal><p className="contact-eyebrow"><FiMail aria-hidden="true" />04 / GET IN TOUCH</p></Reveal>
        <HeadingAnimate />
        <Reveal delay={0.1}>
          <a href="mailto:abdo.ibrahim411@gmail.com" className="email">
            abdo.ibrahim411@gmail.com
            <span className="arrow-mail"><FiArrowUpRight aria-hidden="true" /></span>
          </a>
          <div className="contact-socials"><SocialLinks showFacebook={false} /></div>
        </Reveal>
        <footer className="contact-footer"><span>Abdulrahman Ibrahim · Cairo, Egypt</span><a href="#home">Back to top <FiArrowUp aria-hidden="true" /></a></footer>
      </div>
    </section>
  );
}
