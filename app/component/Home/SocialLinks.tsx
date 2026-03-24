import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "../../data/social";

const SocialLinks = () => {
  const icons = {
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
    facebook: <FaFacebookF />,
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.url} target="_blank" className="btn-shape btn-rounded rounded-full p-2">
          {icons[link.icon]}
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
