import { StaticImageData } from "next/image";
import examino from "../assets/projects/examino.png";
import irb from "../assets/projects/irb.png";
import patenthub from "../assets/projects/patenthub.jpg";
import golden_teams from "../assets/projects/golden_teams.jpg";
import qimmah from "../assets/projects/qimmah.jpg";
import daily_cares from "../assets/projects/daily_cares.jpg";
import exoproxyl from "../assets/projects/exoproxyl.jpg";
import crop_guard from "../assets/projects/crop_guard.png";
import blog from "../assets/projects/blog.png";
import areeb_event from "../assets/projects/areeb_event.png";
import ecommerce_api from "../assets/projects/ecommerce_api.webp";
import food_ecommerce from "../assets/projects/food_e_commerce.png";
import academic_mentorship from "../assets/projects/Academic_Mentorship_Platform.png";
import clinic_management from "../assets/projects/clinic_management_system.jpg";
import crowdfunding from "../assets/projects/crwodfunding.png";
import netflix from "../assets/projects/netflix.png";
import portfolio from "../assets/projects/portfolio.png";
import todo_list from "../assets/projects/todo_list.png";
import atlas_country from "../assets/projects/atlas_country.png";
import millionaire from "../assets/projects/millionaire.png";
import word_heaps from "../assets/projects/word_heaps.png";
import dashboard from "../assets/projects/dashboard.png";

export type ProjectItem = {
  branding: string;
  name: string;
  description: string;
  tools: string[];
  live?: string;
  code?: string;
  project_img: StaticImageData;
};

export const projects: ProjectItem[] = [
  {
    branding: "AI & EdTech",
    name: "Examino -- AI-Powered Exam Generation Platform",
    description:
      "• Delivered a production ITI graduation project for a real client: Zagazig University's Faculty of Medicine.<br>" +
      "• Built a RAG-based AI platform that generates question banks and exams from study materials.<br>" +
      "• Developed Multi-Agent AI workflows for question generation and exam assembly, and built a performance analytics dashboard.",
    tools: ["Node.js", "React.js", "RAG", "LLM", "Multi-Agent AI", "TypeScript", "Tailwind CSS"],
    live: "https://examino-nine.vercel.app/",
    project_img: examino,
  },
  {
    branding: "Healthcare & Enterprise",
    name: "IRB Research Management System",
    description:
      "• Collaborated with a team of 5 to develop a production IRB system for Zagazig University's Faculty of Medicine.<br>" + "• Implemented role-based workflows for submission, review, approvals, revisions, and Paymob payment integrations.",
    tools: ["PHP", "Laravel", "React.js", "Paymob", "Zustand", "Tailwind CSS", "MySQL"],
    live: "https://lnkd.in/p/eS3CwAsi",
    project_img: irb,
  },
  {
    branding: "E-Commerce & Client Work",
    name: "Daily Cares Store",
    description: "• Customized and optimized a modern store for a personal care brand, enhancing UI/UX and responsiveness.<br>" + "• Created custom styling components and optimized site load speed for smooth user experience.",
    tools: ["Salla", "CSS", "JavaScript", "HTML"],
    live: "https://dailycares.co/",
    project_img: daily_cares,
  },
  {
    branding: "E-Commerce & Client Work",
    name: "Exoproxyl Store",
    description: "• Customized and optimized a modern store for a skincare brand, enhancing UI/UX and responsiveness.<br>" + "• Created custom styling components and optimized site load speed for smooth user experience.",
    tools: ["Salla", "CSS", "JavaScript", "HTML"],
    live: "https://salla.sa/exoproxyl",
    project_img: exoproxyl,
  },
  {
    branding: "EdTech & Client Work",
    name: "PatenteHub -- Driving License Platform",
    description:
      "• Developed a production-ready educational platform for Italian driving license preparation with interactive lessons and exams.<br>" +
      "• Built high-performance state management and seamless user flows, maintaining 5-star client satisfaction.",
    tools: ["React.js", "Tailwind CSS", "Zustand", "Supabase", "TypeScript"],
    live: "https://patentehub.com/ar",
    project_img: patenthub,
  },
  {
    branding: "E-Commerce & Client Work",
    name: "Golden Team Store",
    description: "• Customized a full e-commerce store and enhanced UI/UX based on client requirements.<br>" + "• Optimized layout, brand aesthetic, responsiveness, and customer checkout flow.",
    tools: ["Salla", "CSS", "JavaScript", "HTML"],
    live: "https://golden-teams.com/",
    project_img: golden_teams,
  },
  {
    branding: "E-Commerce & Client Work",
    name: "Qimmah Store",
    description: "• Built and customized a premium WordPress e-commerce store, tailoring layouts using Elementor.<br>" + "• Developed custom PHP functionalities and styled components using HTML, CSS, and JavaScript for an enhanced shopping experience.",
    tools: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript"],
    live: "https://qimahstore.com/",
    project_img: qimmah,
  },

  {
    branding: "Smart Agriculture & AI",
    name: "Crop Guard -- Graduation Project",
    description:
      "• <strong>Crop Guard</strong> is an AI-powered agricultural platform for crop disease detection & risk prediction. <em>(Graduation Project: Excellent | Team Leader)</em>.<br>" +
      "• Developed the web frontend with Next.js and TypeScript, including a dynamic dashboard, e-commerce, and community features.<br>" +
      "• Designed modern UI/UX with smooth Framer Motion animations and reusable Shadcn UI components.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "Context API", "Axios", "RESTful API", "Framer Motion"],
    code: "https://github.com/abdo-ibrahim/Crop-Guard",
    project_img: crop_guard,
  },
  {
    branding: "Backend & API",
    name: "Blog RESTful API",
    description: "• Built a scalable RESTful API with JWT auth, RBAC, full-text search, nested comments, and Kashier donations Payment.<br>" + "• Improved security and performance via MongoDB indexing, rate limiting, and Joi validation.",
    tools: ["Node.js", "Express.js", "MongoDB", "JWT", "ImageKit", "Kashier", "Joi", "RESTful API"],
    code: "https://github.com/abdo-ibrahim/Blog-API",
    project_img: blog,
  },
  {
    branding: "Full Stack",
    name: "AreebEvent -- Event Booking Platform",
    description:
      "• Developed a fullstack platform allowing users to browse, search, and book events, with a dedicated admin dashboard for managing events and users.<br>" +
      "• Implemented secure authentication and role-based authorization using JWT and cookies, enhanced UX with responsive design, loading states, notifications and multi-language support.",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Context API", "RESTful API", "Shadcn UI", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://areebevent-client.vercel.app/",
    code: "https://github.com/abdo-ibrahim/AreebEvent---Event-Booking-Platform",
    project_img: areeb_event,
  },
  {
    branding: "Backend & API",
    name: "E-Commerce RESTful API",
    description:
      "• Built a full E-Commerce REST API with authentication, product management, cart, wishlist, coupons, orders, and payments.<br>" +
      "• Added advanced features like search, pagination, file uploads, and Stripe checkout.<br>" +
      "• Improved performance using MongoDB aggregation pipelines & database indexing.",
    tools: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "Stripe", "JWT", "Multer", "RESTful API"],
    code: "https://github.com/abdo-ibrahim/E-Commerce-API",
    project_img: ecommerce_api,
  },
  {
    branding: "Frontend",
    name: "EasyEat -- Food E-commerce",
    description: "• Built a responsive interface featuring a Home, Shop, About, Contact, Product Details, Cart, and Wishlist pages with dynamic filtering.<br>" + "• Improved load time by 25% using efficient state management with Redux Toolkit.",
    tools: ["React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Context API", "RESTful API"],
    live: "https://food-e-commerce-zeta.vercel.app/",
    code: "https://github.com/abdo-ibrahim/Food-E-commerce",
    project_img: food_ecommerce,
  },
  {
    branding: "Full Stack & EdTech",
    name: "Academic Mentorship & Code Review Platform",
    description:
      "• Developed an enterprise-grade, role-based mentorship and scheduling system for technical learning environments.<br>" +
      "• Enabled Students (Junior Developers) to discover Mentors, book 45-minute code review/mock interview sessions, and receive structured feedback.<br>" +
      "• Implemented Mentor slot management and Admin controls for user verification, mentor approval, and technical category management.",
    tools: [
      "React 19",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "TailwindCSS v4",
      "Shadcn UI",
      "Zustand",
      "TanStack Query",
      "React Router v7",
      "JWT",
      "i18next",
    ],
    code: "https://github.com/abdo-ibrahim/Academic_Mentorship_Platform",
    project_img: academic_mentorship,
  },
  {
    branding: "Full Stack & Healthcare",
    name: "Clinic Management System",
    description:
      "• Developed a full-stack clinic appointment management platform with role-based access control, real-time queue management, and EMR-lite consultation records.<br>" +
      "• Implemented secure JWT authentication with SimpleJWT, dynamic doctor/patient scheduling, and search & filtering powered by django-filter.<br>" +
      "• Built a responsive single-page application frontend using Angular 19 and Tailwind CSS 3 integrated with Django REST Framework APIs.",
    tools: [
      "Django 6.0",
      "Django REST Framework",
      "Angular 19",
      "Tailwind CSS 3",
      "MySQL 8.0",
      "SimpleJWT",
      "TypeScript",
      "RESTful API",
    ],
    code: "https://github.com/abdo-ibrahim/clinic_management_backend_django",
    project_img: clinic_management,
  },
  {
    branding: "Full Stack & FinTech",
    name: "Fundly -- Crowdfunding Platform",
    description:
      "• Built a full-stack crowdfunding platform helping creators and organizations raise money for projects through online community donations.<br>" +
      "• Developed modular client-side components with TypeScript, HTML5, and CSS3 for campaign creation, target tracking, and donation management.<br>" +
      "• Integrated RESTful backend authentication and JSON database storage using Node.js, Express, JSON Server, and JSON Server Auth.",
    tools: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "JSON Server",
      "JSON Server Auth",
      "RESTful API",
    ],
    code: "https://github.com/abdo-ibrahim/Fundly-Crowdfunding-Platform",
    project_img: crowdfunding,
  },
  {
    branding: "Entertainment",
    name: "Netflix Clone Platform",
    description:
      "• Designed a streaming platform with dynamic sliders showcasing films, a movie show page, and a personalized watchlist feature.<br>" + "• Reduced API response time by 20% via optimized calls using state management with Redux Toolkit.",
    tools: ["React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit", "RESTful API"],
    live: "https://netflix-clone-pied-six.vercel.app/",
    code: "https://github.com/abdo-ibrahim/Netflix_Clone",
    project_img: netflix,
  },
  {
    branding: "Personal",
    name: "My Portfolio",
    description:
      "• Developed a responsive portfolio with an amazing UI, high performance, and fast loading speed, reflecting my identity and work.<br>" +
      "• Implemented animations and transitions, featuring sections like About, Projects, Skills, and Contact for a professional showcase.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Reveal"],
    code: "https://github.com/abdo-ibrahim/My-Portfolio",
    project_img: portfolio,
  },
  {
    branding: "Full Stack",
    name: "MERN Todo List",
    description:
      "• Built a full-stack Todo List app with authentication, protected routes, and persistent sessions using JWT and cookies.<br>" +
      "• Integrated backend APIs with MongoDB for data persistence, handling token-based authentication and cookie management.",
    tools: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://mern-todo-list-xi-five.vercel.app",
    code: "https://github.com/abdo-ibrahim/Mern-Todo-List",
    project_img: todo_list,
  },
  {
    branding: "Geography",
    name: "Atlas Countries",
    description:
      "• Developed a responsive UI that displays countries from an API, enabling users to search and filter by region for easy navigation.<br>" + "• Integrated country details and dark/light mode, improving user experience and accessibility.",
    tools: ["React.js", "JavaScript", "Tailwind CSS", "RESTful API", "Context API"],
    live: "https://rest-countries-api-beta-green.vercel.app/",
    code: "https://github.com/abdo-ibrahim/Atlas-Countries",
    project_img: atlas_country,
  },
  {
    branding: "Entertainment",
    name: "Who Will Win The Million",
    description: "• Simulates a TV show trivia game, allowing players to answer questions with sound effects, featuring smooth interaction and responsive design.",
    tools: ["React.js", "JavaScript", "Tailwind CSS"],
    live: "https://who-will-win-million-game.vercel.app/",
    code: "https://github.com/abdo-ibrahim/Who_will_win_million_game",
    project_img: millionaire,
  },
  {
    branding: "Entertainment",
    name: "Word Heaps (Java Project)",
    description: "• Created a picture-based word puzzle game with interactive levels in JavaFX, where players guess words based on images, enhanced with sound effects.",
    tools: ["OOP Java", "JavaFX UI", "CSS"],
    code: "https://github.com/abdo-ibrahim/Word-Heaps-Game",
    project_img: word_heaps,
  },
  {
    branding: "Dashboard",
    name: "Admin Dashboard",
    description: "• Developed an Admin Dashboard with multiple sections for quick insights, task management, statistics, and user activities.",
    tools: ["HTML", "CSS", "JavaScript"],
    live: "https://abdo-ibrahim.github.io/Admin-Dashboard/",
    code: "https://github.com/abdo-ibrahim/Admin-Dashboard",
    project_img: dashboard,
  },
];
