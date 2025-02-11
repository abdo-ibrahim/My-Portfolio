import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { name: "github", url: "https://github.com/abdo-ibrahim", icon: <FaGithub /> },
    { name: "linkedin", url: "https://www.linkedin.com/in/abdo-ibrahim/", icon: <FaLinkedinIn /> },
    { name: "facebook", url: "https://www.facebook.com/abdo.ibrahim2002", icon: <FaFacebookF /> },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.url} target="_blank" className="btn-shape btn-rounded rounded-full p-2">
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
