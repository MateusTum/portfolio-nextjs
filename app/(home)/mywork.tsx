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
  siWhatsapp,
} from "simple-icons/icons";

export default function MyWorkSection() {
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
      <section id="my-tech" className="w-full my-20 px-4 flex justify-center">
        <ul className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-8">
          {Object.keys(mytech).map((key) => (
            <li
              key={key}
              className="mx-auto snap-center min-w-[64px] md:min-w-[92px] lg:min-w-[128px] h-[64px] md:h-[92px] lg:h-[128px] rounded-md flex items-center justify-center bg-neutral-900/25 backdrop-blur-lg sm:col-span-1"
            >
              <a href={mytech[key].url} target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  className="w-[50%] h-[50%] md:w-[75%] md:h-[75%] lg:w-full lg:h-full max-w-[64px] max-h-[64px] mx-auto"
                >
                  <path d={mytech[key].icon.path} fill="currentColor" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }