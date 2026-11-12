import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

import { navLinks } from "../../data/navigation";
const Header = () => {
  return (
    <header className="bg-foreground/90 border-b border-[#2e1f4d] sticky top-0 backdrop-blur-md z-[1000]">


      <div className="container text-white flex justify-end items-center min-h-[78px]">
        <div className="logo shrink-0">
          <Link href="/#home" aria-label="Abdulrahman Ibrahim home">
            <Image src={logo} alt="logo" unoptimized loading="eager" width={50} height={50} className="w-11 h-11 sm:w-[50px] sm:h-[50px]" />
          </Link>
        </div>
        <Navbar Links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
