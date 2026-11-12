"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCode } from "react-icons/fi";
import type { SkillItem } from "../../data/skills";

export default function SkillsCard({ name, image }: SkillItem) {
  const [failed, setFailed] = useState(false);
  return <div className="skill-card"><span className="skill-icon">{failed ? <FiCode aria-hidden="true" /> : <Image src={image} alt="" width={28} height={28} unoptimized onError={() => setFailed(true)} />}</span><span>{name}</span></div>;
}
