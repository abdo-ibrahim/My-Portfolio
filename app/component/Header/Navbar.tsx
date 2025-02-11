"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import "./Navbar.css";
import ImageLight from "../utils/ImageLight";

type LinkType = { name: string; link: string };

type Props = {
  Links: LinkType[];
};

const Navbar = ({ Links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu flex flex-1 justify-end md:justify-center  ">
      <div className={`block md:hidden cursor-pointer ease ${isOpen ? "rotate-180" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)}>
        <RiMenuFold3Fill size={30} />
      </div>

      <ul className={`menu-list ease  ${isOpen ? "show-mobile" : ""} `}>
        {isOpen && <ImageLight />}

        {Links.map((link: LinkType, index: number) => (
          <li key={index}>
            <Link href={link.link} className="py-2" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
