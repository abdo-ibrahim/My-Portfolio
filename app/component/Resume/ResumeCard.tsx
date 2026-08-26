import React from "react";
import "./ResumeCard.css";

type Props = {
  date: string;
  title: string;
  company?: string;
  location: string;
  details?: string[];
  icon: React.ReactNode;
};

const ResumeCard = ({ date, title, company, location, details, icon }: Props) => {
  return (
    <div className="resume-card interactive-card flex gap-4 mb-4 relative items-start p-4 sm:p-5 rounded-2xl border border-[#2e1f4d] bg-[rgba(20,12,35,0.75)] w-full">
      <div className="w-10 sm:w-12 h-10 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-blue text-white shadow-lg shadow-[rgba(135,80,247,0.35)] mt-1">
        {icon}
      </div>
      <div className="flex-1">
        <span className="font-semibold text-blue text-[14px] sm:text-[15px]">{date}</span>
        <h3 className="font-semibold text-white text-[17px] sm:text-[18px] leading-snug">{title}</h3>
        {company && <p className="text-[14px] text-[#c0a2fd] font-medium">{company}</p>}
        {location && <p className="text-[13px] text-gray-400">{location}</p>}
        {details && details.length > 0 && (
          <ul className="mt-2.5 text-[13px] sm:text-[14px] text-[#cfc2ec] space-y-1.5 list-disc list-inside">
            {details.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;

