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
  siAmazonaws,
  siFlutter,
  siSpringboot,
  siDocker,
  siJenkins,
} from "simple-icons/icons";

export const MyProjects: Record<ProjectName, ProjectInfo> = {
  // social: {
  //   name: "Social",
  //   description: "Social media web app.",
  //   imagePath: "/social.webp",
  //   imageAlt: "Social logo",
  //   projectPagePath: "social",
  //   githubPath: "https://github.com/MateusTum/social",
  //   isOpenSource: true,
  //   version: "1.0.0-alpha",
  //   techs: [
  //     "Nextjs",
  //     "Django",
  //     "TypeScript",
  //     "PostgreeSql",
  //     "Sass",
  //     "TailwindCSS",
  //   ],
  // },
  // taskManager: {
  //   name: "Task manager",
  //   description: "A webapp used to store and manage tasks.",
  //   imagePath: "/taskmanager.webp",
  //   imageAlt: "Task manager logo",
  //   projectPagePath: "task-manager",
  //   githubPath: "https://github.com/MateusTum/task-manager",
  //   isOpenSource: true,
  //   version: "1.0.0-alpha",
  //   techs: [
  //     "Nextjs",
  //     "Django",
  //     "TypeScript",
  //     "PostgreeSql",
  //     "Sass",
  //     "TailwindCSS",
  //   ],
  // },

  ferreiraWebsite: {
    name: "Ferreira's website",
    description: "A lawyer's website with blog functionality.",
    // imagePath: "/isaferreira.png",
    // imageAlt: "Ferreira's website logo",
    projectPagePath: "ferreira-website",
    imagePath: "/redlamp.webp",
    imageAlt: "A lamp with a red glow",
    websitePath: "https://isabellaferreira.adv.br",
    isOpenSource: false,
    version: "1.0.6-beta",
    techs: ["Nextjs", "JavaScript", "SQLite", "Sass", "TailwindCSS"],
  },
  proCampo: {
    name: "ProCampo by Agrosoft",
    description: "A web app to manage farms, track expenses and provide reports about productivity.",
    imagePath: "/redlamp.webp",
    imageAlt: "A lamp with a red glow",
    projectPagePath: "procampo",
    websitePath: "https://mateustum.com",
    isOpenSource: false,
    version: "x.x.x-beta",
    techs: ["Springboot", "Flutter", "PostgreeSql", "Docker", "Jenkins"],
  },
  prdTattoo: {
    name: "PRD Tattoo's website",
    description: "A tattoo portfolio website, made for Luiza Prado.",
    imagePath: "/redlamp.webp",
    imageAlt: "A lamp with a red glow",
    projectPagePath: "prdatattoo",
    websitePath: "https://prdtattoo.com",
    isOpenSource: false,
    version: "x.x.x-beta",
    techs: ["Nextjs", "JavaScript", "SQLite", "Sass", "TailwindCSS"],
  },
  hais: {
    name: "HAIS",
    description: "Face recognition web app.",
    imagePath: "/redlamp.webp",
    imageAlt: "A lamp with a red glow",
    projectPagePath: "hais",
    websitePath: "https://mateustum.com",
    isOpenSource: false,
    version: "1.0.0-alpha",
    techs: ["Nextjs", "Django", "JavaScript", "MongoDB", "Sass", "TailwindCSS"],
  },
};

export const FeaturedProjects: Record<ProjectName, ProjectInfo> = {
  proCampo: MyProjects.proCampo,
  ferreiraWebsite: MyProjects.ferreiraWebsite,
  prdTattoo: MyProjects.prdTattoo,
  hais: MyProjects.hais,
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
  Springboot: {
    name: "Spring Boot",
    description: "Java Framework",
    url: "https://spring.io/projects/spring-boot",
    icon: siSpringboot,
  },
  Flutter: {
    name: "Flutter",
    description: "UI Toolkit",
    url: "https://flutter.dev/",
    icon: siFlutter,
  },
  AWS: {
    name: "Amazon AWS",
    description: "Cloud Computing Services",
    url: "https://aws.amazon.com/",
    icon: siAmazonaws,
  },
  Docker: {
    name: "Docker",
    description: "Containerization Platform",
    url: "https://www.docker.com/",
    icon: siDocker,
  },
  Jenkins: {
    name: "Jenkins",
    description: "CI/CD Tool",
    url: "https://www.jenkins.io/",
    icon: siJenkins,
  },
};

export const FeaturedTech: Record<TechName, TechInfo> = {
  TypeScript: TechList.TypeScript,
  Nextjs: TechList.Nextjs,
  React: TechList.React,
  Python: TechList.Python,
  Django: TechList.Django,
  PostgreeSql: TechList.PostgreeSql,
  MongoDB: TechList.MongoDB,
  Springboot: TechList.Springboot,
  Flutter: TechList.Flutter,
  AWS: TechList.AWS,
  Docker: TechList.Docker,
  Jenkins: TechList.Jenkins,
};
