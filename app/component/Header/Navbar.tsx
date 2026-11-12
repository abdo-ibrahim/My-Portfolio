"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import type { NavLinkItem } from "../../data/navigation";
import "./Navbar.css";

export default function Navbar({ Links }: { Links: NavLinkItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = "home";
      for (const link of Links) {
        const id = link.link.split("#")[1];
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [Links]);
  return (
    <nav aria-label="Main navigation" className="menu" onKeyDown={event => { if (event.key === "Escape") setIsOpen(false); }}>
      <button type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} aria-controls="main-navigation" className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}</button>
      <ul id="main-navigation" className={`menu-list ease ${isOpen ? "show-mobile" : ""}`}>
        {Links.map(link => <li key={link.link}><a href={link.link} aria-current={active === link.link.split("#")[1] ? "location" : undefined} className="nav-link py-2" onClick={() => setIsOpen(false)}>{link.name}</a></li>)}
      </ul>
    </nav>
  );
}
