import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import ThemePicker from "./ThemePicker";
import { navLinks } from "../../data/navigation";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/#home" aria-label="Abdulrahman Ibrahim home" className="brand-link">
          <Image src={logo} alt="" unoptimized loading="eager" width={44} height={44} className="brand-logo" />
          <span className="brand-name">Abdulrahman Ibrahim<small>Software engineer</small></span>
        </Link>
        <div className="header-controls"><Navbar Links={navLinks} /><ThemePicker /></div>
      </div>
    </header>
  );
}
