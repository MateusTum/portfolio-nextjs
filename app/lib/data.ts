import {
  ProjectInfo,
  ProjectName,
  TechName,
  TechInfo,
} from "@/app/lib/definitions";

import {
  siReact,
  siPython,
  siNextdotjs,
  siFlask,
  siDjango,
  siJavascript,
  siTypescript,
  siHtml5,
  siCss3,
  siSass,
  siBootstrap,
  siTailwindcss,
  siSqlite,
  siPostgresql,
  siMongodb,
} from "simple-icons/icons";

export const MyProjects: Record<ProjectName, ProjectInfo> = {
  social: {
    name: "Social",
    description:
      "Social is a social media. It was built using Next.js, Django, and PostgreSQL.",
    imagePath: "/social.webp",
    imageAlt: "Social logo",
    projectPagePath: "social",
    githubPath: "https://github.com/MateusTum/social",
    isOpenSource: true,
  },
  hais: {
    name: "HAIS",
    description:
      "HAIS is a web app used to detect, recognize and store human faces",
    imagePath: "/hais.webp",
    imageAlt: "HAIS logo",
    projectPagePath: "hais",
    isOpenSource: false,
  },
  taskManager: {
    name: "Task manager",
    description: "A webapp used to store and manage tasks",
    imagePath: "/taskmanager.webp",
    imageAlt: "Task manager logo",
    projectPagePath: "taskManager",
    githubPath: "https://github.com/MateusTum/task-manager",
    isOpenSource: true,
  },
  ferreiraWebsite: {
    name: "Ferreira's website",
    description: "A lawyer's website",
    imagePath: "/isaferreira.png",
    imageAlt: "Ferreira's website logo",
    projectPagePath: "ferreiraWebsite",
    websitePath: "https://isabellaferreira.adv.br",
    isOpenSource: false,
  },
};

export const FeaturedProjects: Record<ProjectName, ProjectInfo> = {
  social: MyProjects.social,
  hais: MyProjects.hais,
  taskManager: MyProjects.taskManager,
  ferreiraWebsite: MyProjects.ferreiraWebsite,
};

export const TechList: Record<TechName, TechInfo> = {
  JavaScript: {
    name: "JavaScript",
    description: "JavaScript Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: siJavascript,
  },
  TypeScript: {
    name: "TypeScript",
    description: "JavaScript Superset",
    url: "https://www.typescriptlang.org/",
    icon: siTypescript,
  },
  Nextjs: {
    name: "Next.js",
    description: "React Framework",
    url: "https://nextjs.org/",
    icon: siNextdotjs,
  },
  React: {
    name: "React",
    description: "JavaScript Library",
    url: "https://reactjs.org/",
    icon: siReact,
  },
  Python: {
    name: "Python",
    description: "Programming Language",
    url: "https://www.python.org/",
    icon: siPython,
  },
  Django: {
    name: "Django",
    description: "Python Web Framework",
    url: "https://www.djangoproject.com/",
    icon: siDjango,
  },
  Flask: {
    name: "Flask",
    description: "Python Web Framework",
    url: "https://flask.palletsprojects.com/",
    icon: siFlask,
  },
  PostgreeSql: {
    name: "PostgreSQL",
    description: "Database",
    url: "https://www.postgresql.org/",
    icon: siPostgresql,
  },
  MongoDB: {
    name: "MongoDB",
    description: "Database",
    url: "https://www.mongodb.com/",
    icon: siMongodb,
  },
  SQLite: {
    name: "SQLite",
    description: "Database",
    url: "https://www.sqlite.org/",
    icon: siSqlite,
  },
  HTML5: {
    name: "HTML5",
    description: "Markup Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: siHtml5,
  },
  CSS3: {
    name: "CSS3",
    description: "Styling Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: siCss3,
  },
  Sass: {
    name: "Sass",
    description: "CSS Preprocessor",
    url: "https://sass-lang.com/",
    icon: siSass,
  },
  Bootstrap: {
    name: "Bootstrap",
    description: "CSS Framework",
    url: "https://getbootstrap.com/",
    icon: siBootstrap,
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    description: "CSS Framework",
    url: "https://tailwindcss.com/",
    icon: siTailwindcss,
  },
};

export const FeaturedTech: Record<TechName, TechInfo> = {
  JavaScript: TechList.JavaScript,
  Nextjs: TechList.Nextjs,
  React: TechList.React,
  Python: TechList.Python,
  Django: TechList.Django,
  Flask: TechList.Flask,
  PostgreeSql: TechList.PostgreeSql,
  MongoDB: TechList.MongoDB,
};
