"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenuFold3Fill } from "react-icons/ri";
import "./Navbar.css";
import ImageLight from "../utils/ImageLight";

type LinkType = { name: string; link: string };

type Props = {
  Links: LinkType[];
};

const Navbar = ({ Links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [targetPath, hash] = href.split("#");
    const normalizedPath = targetPath || "/";
    setIsOpen(false);

    if (pathname === normalizedPath && hash) {
      event.preventDefault();
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    if (pathname === normalizedPath && !hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="menu flex flex-1 justify-end md:justify-center  ">
      <button type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} className={`block md:hidden cursor-pointer ease ${isOpen ? "rotate-180" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)}>
        <RiMenuFold3Fill size={30} />
      </button>

      <ul className={`menu-list ease  ${isOpen ? "show-mobile" : ""} `}>
        {isOpen && <ImageLight />}

        {Links.map((link: LinkType, index: number) => (
          <li key={index}>
            <Link href={link.link} className="nav-link py-2" onClick={(event) => handleNavClick(event, link.link)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
