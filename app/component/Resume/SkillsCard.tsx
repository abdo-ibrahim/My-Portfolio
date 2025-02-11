import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import "./SkillsCard.css";
type SkillsCardProps = {
  name: string;
  image: StaticImageData;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ name, image }) => {
  return (
    <div className="skill-card flex flex-col items-center justify-center text-center">
      <div className="skill-image w-24 h-24 flex items-center justify-center rounded-xl border border-blue">
        <Image src={image} alt={name} width={50} height={50} className="object-contain w-12 h-12" />
      </div>

      <div className="skill-name mt-2 text-[12px] text-blue font-medium">{name}</div>
    </div>
  );
};

export default SkillsCard;
