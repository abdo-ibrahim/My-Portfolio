import React from "react";
import ImageLight from "../component/utils/ImageLight";
import Heading from "../component/utils/Heading";
import ProjectCard from "../component/Projects/ProjectCard";
import ParticlesComponent from "../component/utils/ParticlesComponent";
import { Fade } from "react-awesome-reveal";
import dashboard from "../assets/projects/dashboard.png";
import food_ecommerce from "../assets/projects/food_e_commerce.png";
import atlas_country from "../assets/projects/atlas_country.png";
import millionaire from "../assets/projects/millionaire.png";
import netflix from "../assets/projects/netflix.png";
import portfolio from "../assets/projects/portfolio.png";
import word_heaps from "../assets/projects/word_heaps.png";

const Projects = () => {
  // put your projects here
  const projects = [
    {
      branding: "Branding",
      name: "Food E-Commerce",
      description:
        "•	Built a responsive interface featuring a Home, Shop, About, Contact, Product Details, Cart, and Wishlist pages with dynamic filtering and an optimized cart system, enhancing performance through clean code and problem-solving skills.<br>•	•	Improved load time by 25% using efficient state management with Redux Toolkit.",
      tools: ["ReactJs", "JavaScript", "TailwindCSS", "ReduxToolkit", "Context API", "RESTful API"],
      live: "https://food-e-commerce-zeta.vercel.app/",
      code: "https://github.com/abdo-ibrahim/Food-E-commerce",
      project_img: food_ecommerce,
    },
    {
      branding: "Entertainment",
      name: "Netflix Clone Platform",
      description: "•	Designed a streaming platform with dynamic sliders showcasing films, a movie show page, and a personalized watchlist feature.<br>•	Reduced API response time by 20% via optimized calls using state management with Redux Toolkit.",
      tools: ["ReactJs", "JavaScript", "TailwindCSS", "ReduxToolkit", "RESTful API"],
      live: "https://netflix-clone-pied-six.vercel.app/",
      code: "https://github.com/abdo-ibrahim/Netflix_Clone",
      project_img: netflix,
    },
    {
      branding: "Personal",
      name: "My Portfolio",
      description:
        "•	Developed a responsive portfolio with an amazing UI, high performance, and fast loading speed, reflecting my identity and work.<br>•	Implemented animations and transitions, featuring sections like About, Projects, Skills, and Contact for a professional showcase.<br>•	Optimized SEO using Next.js features like server side rendering (SSR) and static generation (SSG) to enhance search rankings.",
      tools: ["Next.js", "TypeScript", "TailwindCSS", "React Reveal"],
      live: "",
      code: "",
      project_img: portfolio,
    },
    {
      branding: "Geography",
      name: "Atlas Countries",
      description:
        "•	Developed a responsive UI that displays countries from an API, enabling users to search and filter by region for easy navigation.<br>•	Integrated country details and dark/light mode, improving user experience and accessibility with clean code and problem-solving.",
      tools: ["ReactJs", "JavaScript", "TailwindCSS", "RESTful API", "Context API"],
      live: "https://rest-countries-api-beta-green.vercel.app/",
      code: "https://github.com/abdo-ibrahim/Atlas-Countries",
      project_img: atlas_country,
    },
    {
      branding: "Entertainment",
      name: "Millionaire game",
      description: "•	Simulates a TV show, allowing players to answer trivia with sound effects, featuring smooth interaction, responsive design, and showing problem-solving skills.",
      tools: ["React.js", "JavaScript", "TailwindCSS"],
      live: "https://who-will-win-million-game.vercel.app/",
      code: "https://github.com/abdo-ibrahim/Who_will_win_million_game",
      project_img: millionaire,
    },
    {
      branding: "Entertainment",
      name: "Word Heaps",
      description:
        "•	Created a picture-based word puzzle game with interactive levels, where players guess words based on images, enhanced with sound effects.<br>• Collaborated with friends in college to develop and refine the game, ensuring a fun and engaging experience.",
      tools: ["OOP Java", "JavaFx UI", "CSS"],
      code: "https://github.com/abdo-ibrahim/Word-Heaps-Game",
      project_img: word_heaps,
    },
    {
      branding: "Dashboard",
      name: "Admin Dashboard",
      description:
        "•	Developed an Admin Dashboard with multiple sections for quick insights, task management, statistics, and user activities.<br>Included Settings, Profile, Projects, Courses, and more, providing a seamless and organized management experience.",
      tools: ["Html", "CSS", "JavaScript"],
      live: "https://abdo-ibrahim.github.io/Admin-Dashboard/",
      code: "https://github.com/abdo-ibrahim/Admin-Dashboard",
      project_img: dashboard,
    },
  ];
  return (
    <div className="projects relative">
      <ParticlesComponent />
      <ImageLight />
      <Fade direction="up" duration={800} triggerOnce>
        <Heading heading="My Recent Projects" subheading="RECENT PROJECTS" />
      </Fade>
      <div className="container relative">
        <div className="grid-container grid grid-cols-1 gap-8 max-w-5xl mx-auto my-8">
          {projects.map((project, index) => (
            <Fade direction="up" key={index} duration={1000} triggerOnce className="flex w-full">
              <ProjectCard {...project} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
