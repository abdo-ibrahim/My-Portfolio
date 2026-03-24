export type ResumeIconType = "briefcase" | "graduation";

export type ResumeItem = {
  date: string;
  title: string;
  location: string;
  iconType: ResumeIconType;
};

export const experience: ResumeItem[] = [
  {
    date: "July 2023 - August 2023",
    title: "Frontend Developer",
    location: "TechnoHacks Internship",
    iconType: "briefcase",
  },
  {
    date: "July 2024 - August 2024",
    title: "MERN Stack Development",
    location: "ITI Internship Summer Training",
    iconType: "briefcase",
  },
];

export const education: ResumeItem[] = [
  {
    date: "2025 - 2026",
    title: "Information Technology Institute (ITI) - Open Source Track",
    location: "ITI - Egypt",
    iconType: "graduation",
  },
  {
    date: "2020 - 2025",
    title: "Bachelor of Computers and Systems Engineering",
    location: "Zagazig University",
    iconType: "graduation",
  },
  {
    date: "2017 - 2019",
    title: "High School Diploma",
    location: "Gamal Taman's School",
    iconType: "graduation",
  },
];
