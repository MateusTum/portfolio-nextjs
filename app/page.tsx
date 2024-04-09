import { Metadata } from "next";
import RotatingCube from "@/app/ui/cube/Cube";

import Image from "next/image";

import type { SimpleIcon } from "simple-icons";
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

export const metadata: Metadata = {
  title: "Mateus Tum Dev",
  description: "Portfolio of Mateus Tum",
};

interface sectionProps {
  children: React.ReactNode;
  fullscreen?: boolean;
  id: string;
  classes?: string;
}

function Section({ children, id, fullscreen, classes }: sectionProps) {
  return (
    <section
      id={id}
      className={`flex overflow-hidden w-full justify-center ${classes} ${
        fullscreen ? "min-h-screen" : ""
      }`}
    >
      <div className={`container w-full`}>{children}</div>
    </section>
  );
}

function PresentationSection() {
  return (
    <Section id="home" fullscreen={true} classes="pt-[40px]">
      <div className="text-4xl uppercase mt-9">
        <h1>Mateus Tum</h1>
        <h2>Software Developer</h2>
        <h2>Frontend | Backend</h2>
        <h2>Next.js | Django</h2>
      </div>
      <div className="relative h-[400px] bottom-0 right-0">
        <RotatingCube />
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about">
      <div className="text-4xl text-center bg-neutral-900 w-[50%] mx-auto rounded-md p-2">
        <h2>ABOUT ME</h2>
      </div>
      <div className="px-2 my-1 w-[50%] mx-auto">
        <p className="text-lg text-justify">
          My name is <span className="text-red-500">Mateus Rosa Tum</span>,{" "}
          <span className="text-red-500">24</span>, from
          <span className="text-red-500"> Brazil</span>. My software development
          journey began in 2023. At the time, I was graduating in law school,
          but after spending some time abroad I decided to change my career
          path. Now, I am a full time software developer, working with{" "}
          <span className="text-red-500">Next.js</span> and{" "}
          <span className="text-red-500">Django</span> .
        </p>
      </div>
    </Section>
  );
}

function MyWorkSection() {
  interface mytech {
    [key: string]: {
      name: string;
      description: string;
      url: string;
      icon: SimpleIcon;
    };
  }

  const mytech: mytech = {
    JavaScript: {
      name: "JavaScript",
      description: "JavaScript Language",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: siJavascript,
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
  };

  return (
    <section id="my-work" className="w-full my-20 px-4 justify-center flex">
      <ul className="grid grid-cols-8 gap-4">
        {Object.keys(mytech).map((key) => {
          return (
            <li
              key={key}
              className="col-span-1 h-[128px] w-[128px] rounded-md flex items-center justify-center bg-neutral-900/25 backdrop-blur-lg"
            >
              <a href={mytech[key].url} target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  className="w-full h-full max-w-[64px] max-h-[64px]"
                >
                  <path d={mytech[key].icon.path} fill="currentColor" />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PortfolioSection() {
  interface myProjects {
    [key: string]: {
      name: string;
      description: string;
    };
  }

  const myProjects: myProjects = {
    social: {
      name: "Social",
      description:
        "Social is a web app where user's can create, share, and like posts. It was built using Next.js, Django, and PostgreSQL.",
    },
    hais: {
      name: "HAIS",
      description:
        "Hais is a web app used to detect, recognize and store human faces",
    },
    ferreiraWebsite: {
      name: "Ferreira's website",
      description: "A lawyer's website",
    },
  };
  return (
    <Section id="portfolio" classes="bg-neutral-950/25">
      <div className="text-4xl text-center mx-auto p-2 my-2">
        <h2>MY PORTFOLIO</h2>
      </div>
      <ul className="grid grid-rows grid-cols-2 gap-2 p-2">
        {/* Grid 1 */}
        {Object.keys(myProjects).map((key) => {
          return (
            <li
              key={key}
              className="flex-row items-center w-full h-[350px] mx-auto rounded-lg overflow-hidden"
            >
              <div className="bg-black h-4/5 w-full"></div>
              <div className="bg-neutral-950 h-1/5 w-full relative">
                <div className="absolute top-[-35px] left-0">
                  <span className="text-4xl px-1 text-red-800">
                    {myProjects[key].name}
                  </span>
                </div>
                <div>
                  <p className="px-2 text-neutral-200">
                    {myProjects[key].description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <div className="text-4xl text-center bg-neutral-900 w-[50%] mx-auto rounded-md p-2 my-20">
        <h2>CONTACT ME</h2>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="flex-row align-center">
      <PresentationSection />

      <AboutSection />

      <MyWorkSection />

      <PortfolioSection />

      <ContactSection />
    </main>
  );
}
