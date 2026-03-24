import React from "react";
import "./ResumeCard.css";
type Props = {
  date: string;
  title: string;
  location: string;
  icon: React.ReactNode;
};
const ResumeCard = ({ date, title, location, icon }: Props) => {
  return (
    <div className="resume-card interactive-card flex gap-4 mb-6 relative items-center p-4 sm:p-5 rounded-2xl border border-[#2e1f4d] bg-[rgba(20,12,35,0.75)]">
      <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-blue text-white shadow-lg shadow-[rgba(135,80,247,0.35)]">{icon}</div>
      <div className="flex-1">
        <span className="font-semibold text-blue text-[16px]">{date}</span>
        <h3 className="font-semibold text-white text-[17px] sm:text-[18px] leading-snug">{title}</h3>
        <p className="text-[14px]">{location}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
