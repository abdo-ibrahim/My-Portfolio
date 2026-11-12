import Image from "next/image";
import { FiArrowUpRight, FiArrowRight, FiMapPin } from "react-icons/fi";
import profile from "../../assets/images/formal_profile.png";
import SocialLinks from "./SocialLinks";
import DownloadCv from "../utils/DownloadCv";
import Reveal from "../utils/Reveal";
import ParticlesComponent from "../utils/ParticlesComponent";
import "./Landing.css";

export default function Landing() {
  return (
    <section id="home" className="landing">
      <ParticlesComponent />
      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <h1>Abdulrahman<br /><span>Ibrahim.</span></h1>
            <p className="hero-role">Full Stack Software Engineer</p>
            <p className="hero-intro">From an idea to a product<br className="hidden lg:block" /> people can use.</p>
            <p className="hero-description">I build web applications, APIs, and AI-powered systems — with a focus on the details that make them work well. Based in Cairo, working across the stack.</p>
            <div className="hero-actions">
              <a href="#projects" className="hero-primary">Explore my work <FiArrowUpRight size={20} /></a>
              <DownloadCv />
            </div>
            <div className="hero-socials"><SocialLinks /><span className="hero-location"><FiMapPin size={14} /> Cairo, Egypt</span></div>
          </Reveal>
          <Reveal className="hero-portrait" delay={0.12}>
            <figure>
              <div className="portrait-frame">
                <Image src={profile} alt="Abdulrahman Ibrahim" priority unoptimized className="portrait-photo" />
              </div>
              <figcaption><span>Engineer by training.<br /><strong>Builder by practice.</strong></span><span className="portrait-mark" aria-hidden="true">↗</span></figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal className="hero-bottom" delay={0.2}>
          <div className="hero-stats" aria-label="Career highlights">
            <div><strong>10+</strong><span>Clients served</span></div>
            <div><strong>5<span>/5</span></strong><span>Client ratings</span></div>
            <div><strong>1,500+</strong><span>Problems solved</span></div>
          </div>
          <a className="latest-work" href="#projects"><span className="latest-label">LATEST WORK</span><span className="latest-name">Anylead <FiArrowRight /></span><span className="latest-detail">B2B sales engagement platform</span></a>
        </Reveal>
      </div>
    </section>
  );
}
