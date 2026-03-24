import figma from "../assets/logos/figma.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/js.png";
import reactjs from "../assets/logos/reactjs.png";
import nextjs from "../assets/logos/nextjs.png";
import ts from "../assets/logos/ts.png";
import nodejs from "../assets/logos/nodejs.png";
import mongodb from "../assets/logos/mongodb.png";
import bootstrap from "../assets/logos/bootstrap.png";
import sass from "../assets/logos/sass.png";
import tailwindcss from "../assets/logos/tailwindcss.png";
import photoshop from "../assets/logos/photoshop.png";
import adobexd from "../assets/logos/adobexd.png";
import cpp from "../assets/logos/c++.png";
import { StaticImageData } from "next/image";

export type SkillItem = {
  name: string;
  image: StaticImageData;
};

export const skills: SkillItem[] = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "TypeScript", image: ts },
  { name: "ReactJS", image: reactjs },
  { name: "NextJS", image: nextjs },
  { name: "NodeJS", image: nodejs },
  { name: "MongoDB", image: mongodb },
  { name: "TailwindCSS", image: tailwindcss },
  { name: "Bootstrap", image: bootstrap },
  { name: "Sass", image: sass },
  { name: "C++", image: cpp },
  { name: "Figma", image: figma },
  { name: "Photoshop", image: photoshop },
  { name: "AdobeXD", image: adobexd },
];
