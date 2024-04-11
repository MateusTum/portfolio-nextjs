import { myProjectsInterface } from "@/app/lib/definitions";

export const myProjects: myProjectsInterface = {
  social: {
    name: "Social",
    description:
      "Social is a social media. It was built using Next.js, Django, and PostgreSQL.",
    imagePath: "/social.webp",
    imageAlt: "Social logo",
    projectPagePath: "/projects/social",
    githubPath: "https://github.com/MateusTum/social",
    isOpenSource: true,
  },
  hais: {
    name: "HAIS",
    description:
      "HAIS is a web app used to detect, recognize and store human faces",
    imagePath: "/hais.webp",
    imageAlt: "HAIS logo",
    projectPagePath: "/projects/hais",
    isOpenSource: false,
  },
  taskManager: {
    name: "Task manager",
    description: "A webapp used to store and manage tasks",
    imagePath: "/taskmanager.webp",
    imageAlt: "Task manager logo",
    projectPagePath: "/projects/task-manager",
    githubPath: "https://github.com/MateusTum/task-manager",
    isOpenSource: true,
  },
  ferreiraWebsite: {
    name: "Ferreira's website",
    description: "A lawyer's website",
    imagePath: "/isaferreira.png",
    imageAlt: "Ferreira's website logo",
    projectPagePath: "/projects/isabella-ferreira-adv",
    websitePath: "https://isabellaferreira.adv.br",
    isOpenSource: false,
  },
};

export const featuredProjects: myProjectsInterface = {
  social: myProjects.social,
  hais: myProjects.hais,
  taskManager: myProjects.taskManager,
  ferreiraWebsite: myProjects.ferreiraWebsite,
};
