// Technology logos: Devicon v2.17.0; other brands use their official site favicon.
export type SkillIcon = "llm" | "agents" | "rag" | "openai" | "langchain" | "langgraph" | "vector" | "search" | "embeddings" | "tools";
export type SkillItem = { name: string } & ({ image: string; icon?: never } | { image?: never; icon: SkillIcon });
export type SkillCategory = { category: string; skills: SkillItem[] };

export const skillCategories: SkillCategory[] = [
  {
    "category": "Languages",
    "skills": [
      {
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg"
      },
      {
        "name": "TypeScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg"
      },
      {
        "name": "PHP",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/php/php-original.svg"
      },
      {
        "name": "Python",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg"
      },
      {
        "name": "Java",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg"
      },
      {
        "name": "C / C++",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cplusplus/cplusplus-original.svg"
      },
      {
        "name": "SQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/azuresqldatabase/azuresqldatabase-original.svg"
      },
      {
        "name": "Bash",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bash/bash-original.svg"
      }
    ]
  },
  {
    "category": "Frontend",
    "skills": [
      {
        "name": "React.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg"
      },
      {
        "name": "Next.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nextjs/nextjs-original.svg"
      },
      {
        "name": "Vue.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg"
      },
      {
        "name": "Angular",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/angular/angular-original.svg"
      },
      {
        "name": "Tailwind CSS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg"
      },
      {
        "name": "Bootstrap",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bootstrap/bootstrap-original.svg"
      },
      {
        "name": "Redux Toolkit",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/redux/redux-original.svg"
      },
      {
        "name": "Zustand",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/zustand/zustand-original.svg"
      },
      {
        "name": "TanStack Query",
        "image": "https://tanstack.com/favicon.ico"
      }
    ]
  },
  {
    "category": "Backend & real-time",
    "skills": [
      {
        "name": "Node.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nodejs/nodejs-original.svg"
      },
      {
        "name": "Express.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/express/express-original.svg"
      },
      {
        "name": "NestJS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nestjs/nestjs-original.svg"
      },
      {
        "name": "Laravel",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg"
      },
      {
        "name": "Django",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/django/django-plain.svg"
      },
      {
        "name": "BullMQ",
        "image": "https://bullmq.io/favicon.ico"
      },
      {
        "name": "WebSockets",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/socketio/socketio-original.svg"
      }
    ]
  },
  {
    "category": "Databases",
    "skills": [
      {
        "name": "MongoDB",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mongodb/mongodb-original.svg"
      },
      {
        "name": "SQL Server",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
      },
      {
        "name": "MySQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mysql/mysql-original.svg"
      },
      {
        "name": "PostgreSQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postgresql/postgresql-original.svg"
      },
      {
        "name": "Supabase",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/supabase/supabase-original.svg"
      },
      {
        "name": "Redis",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/redis/redis-original.svg"
      }
    ]
  },
  {
    "category": "AI & LLMs",
    "skills": [
      { "name": "LLM Integration", "icon": "llm" },
      { "name": "AI Agents", "icon": "agents" },
      { "name": "RAG", "icon": "rag" },
      { "name": "OpenAI API", "icon": "openai" },
      { "name": "LangChain", "icon": "langchain" },
      { "name": "LangGraph", "icon": "langgraph" },
      { "name": "Vector Databases", "icon": "vector" },
      { "name": "Semantic Search", "icon": "search" },
      { "name": "Embeddings", "icon": "embeddings" },
      { "name": "Tool Calling", "icon": "tools" }
    ]
  },
  {
    "category": "Tools & infrastructure",
    "skills": [
      {
        "name": "Git",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/git/git-original.svg"
      },
      {
        "name": "Docker",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/docker/docker-original.svg"
      },
      {
        "name": "CI/CD",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/githubactions/githubactions-original.svg"
      },
      {
        "name": "GitHub Actions",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/githubactions/githubactions-original.svg"
      },
      {
        "name": "Nginx",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nginx/nginx-original.svg"
      },
      {
        "name": "PM2",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/pm2/pm2-original.svg"
      },
      {
        "name": "Postman",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postman/postman-original.svg"
      },
      {
        "name": "Linux",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/linux/linux-original.svg"
      },
      {
        "name": "Figma",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/figma/figma-original.svg"
      }
    ]
  },
  {
    "category": "CMS & commerce",
    "skills": [
      {
        "name": "WordPress",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/wordpress/wordpress-original.svg"
      },
      {
        "name": "WooCommerce",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/woocommerce/woocommerce-original.svg"
      },
      {
        "name": "Zid",
        "image": "https://zid.sa/icon.svg"
      },
      {
        "name": "Salla",
        "image": "https://framerusercontent.com/images/OG28XM9yxvCHiUaoR3H50DJWZYc.png"
      }
    ]
  }
];

