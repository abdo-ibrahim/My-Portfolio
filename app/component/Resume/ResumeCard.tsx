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
    <div className="resume-card flex gap-4 mb-6 relative items-center">
      <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-blue text-white"> {icon}</div>
      <div className="flex-1">
        <span className="font-semibold text-blue text-[16px]">{date}</span>
        <h3 className="font-semibold text-white text-[18px]">{title}</h3>
        <p className="text-[14px]">{location}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
