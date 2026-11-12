"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCode, FiDatabase, FiSearch, FiLayers, FiTool } from "react-icons/fi";
import { LuBrainCircuit, LuBot, LuDatabaseZap, LuWorkflow } from "react-icons/lu";
import { SiOpenai, SiLangchain } from "react-icons/si";
import type { SkillItem } from "../../data/skills";

const icons = { llm: LuBrainCircuit, agents: LuBot, rag: LuDatabaseZap, openai: SiOpenai, langchain: SiLangchain, langgraph: LuWorkflow, vector: FiDatabase, search: FiSearch, embeddings: FiLayers, tools: FiTool };

export default function SkillsCard({ name, image, icon }: SkillItem) {
  const [failed, setFailed] = useState(false);
  const Icon = icon ? icons[icon] : FiCode;
  return <div className="skill-card"><span className="skill-icon">{image && !failed ? <Image src={image} alt="" width={28} height={28} unoptimized onError={() => setFailed(true)} /> : <Icon aria-hidden="true" />}</span><span>{name}</span></div>;
}
