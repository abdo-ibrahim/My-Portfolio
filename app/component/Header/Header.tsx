import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import ImageLight from "../utils/ImageLight";
const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <header className=" bg-foreground relative z-[1000]">
      <ImageLight />

      <div className="container text-white flex justify-end items-center min-h-[65px]">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" width={52} height={52} />
          </Link>
        </div>
        <Navbar Links={Links} />
      </div>
    </header>
  );
};

export default Header;
