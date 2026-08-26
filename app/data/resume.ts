export type ResumeIconType = "briefcase" | "graduation" | "certificate" | "users";

export type ResumeItem = {
  date: string;
  title: string;
  company?: string;
  location: string;
  details?: string[];
  iconType: ResumeIconType;
};

export const experience: ResumeItem[] = [
  {
    date: "Oct. 2025 -- Present",
    title: "Freelance Full-Stack Developer",
    company: "Self-employed (Mostaql - Khamsat)",
    location: "Remote",
    details: [
      "Successfully delivered full-stack and e-commerce solutions for 10+ clients, maintaining a 5-star satisfaction rate.",
      "PatenteHub: Developed a production-ready educational platform for Italian driving license preparation with lessons and exams (React.js, Tailwind CSS, Zustand, Supabase).",
      "Daily Cares: Customized and optimized a modern store for a personal care brand, enhancing UI/UX and responsiveness (Salla, CSS, JavaScript).",
      "Golden Team: Customized a full e-commerce store and enhanced UI/UX based on client requirements (Salla, CSS, JavaScript)."
    ],
    iconType: "briefcase",
  },
  {
    date: "Jul. 2024 -- Aug. 2024",
    title: "MERN Stack Development Intern",
    company: "Information Technology Institute (ITI)",
    location: "Zagazig, Egypt",
    details: [
      "Built responsive MERN stack apps with clean architecture and collaborated to deliver modular RESTful APIs."
    ],
    iconType: "briefcase",
  },
  {
    date: "Jul. 2023 -- Aug. 2023",
    title: "Frontend Web Development Intern",
    company: "TechnoHacks",
    location: "Remote",
    details: [
      "Built React.js CRUD apps and boosted user engagement by 15% while enhancing performance via DSA-based optimizations."
    ],
    iconType: "briefcase",
  },
];

export const education: ResumeItem[] = [
  {
    date: "Oct. 2025 -- Jun. 2026",
    title: "9-Month Professional Diploma -- Open Source Applications Development",
    company: "Information Technology Institute (ITI)",
    location: "Zagazig, Egypt",
    details: [
      "Specialized in Open Source Development, modern web frameworks, AI integration, and full-stack software architecture."
    ],
    iconType: "graduation",
  },
  {
    date: "Sep. 2020 -- Jul. 2025",
    title: "B.Sc. in Computer and Systems Engineering",
    company: "Faculty of Engineering, Zagazig University",
    location: "Zagazig, Egypt",
    details: [
      "GPA: 3.32 (83%) | Grade: Very Good with Honors — Ranked 9th out of 165 students.",
      "Graduation Project: Crop Guard -- AI-powered platform for disease detection & crop risk prediction (Grade: Excellent | Team Leader)."
    ],
    iconType: "graduation",
  },
];

export const certifications: ResumeItem[] = [
  {
    date: "AWS Certified",
    title: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    location: "Cloud Architecture & Services",
    iconType: "certificate",
  },
  {
    date: "MongoDB Certified",
    title: "MongoDB Associate Developer",
    company: "MongoDB Inc.",
    location: "Database Management & Aggregations",
    iconType: "certificate",
  },
];

export const extracurricular: ResumeItem[] = [
  {
    date: "Oct. 2022 -- May 2025",
    title: "Mentor and Instructor -- Problem Solving",
    company: "ICPC Community Zagazig",
    location: "Zagazig, Egypt",
    details: [
      "Mentored 100+ trainees in competitive programming (STL, Binary Search, Data Structures) and provided structured feedback."
    ],
    iconType: "users",
  },
  {
    date: "Oct. 2022 -- Sep. 2024",
    title: "Head of Front-End Development Track",
    company: "IEEE Zagazig Student Branch",
    location: "Zagazig, Egypt",
    details: [
      "Led the Front-End Development track, managed materials, and reviewed tasks to ensure smooth project execution."
    ],
    iconType: "users",
  },
];

