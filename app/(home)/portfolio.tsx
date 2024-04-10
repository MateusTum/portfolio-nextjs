import Section from "@/app/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  interface myProjects {
    [key: string]: {
      name: string;
      description: string;
      imagePath: string;
      imageAlt: string;
    };
  }

  const myProjects: myProjects = {
    social: {
      name: "Social",
      description:
        "Social is a social media. It was built using Next.js, Django, and PostgreSQL.",
      imagePath: "/social.webp",
      imageAlt: "Social logo",
    },
    hais: {
      name: "HAIS",
      description:
        "HAIS is a web app used to detect, recognize and store human faces",
      imagePath: "/hais.webp",
      imageAlt: "HAIS logo",
    },
    taskManager: {
      name: "Task manager",
      description: "A webapp used to store and manage tasks",
      imagePath: "/taskmanager.webp",
      imageAlt: "Task manager logo",
    },
    ferreiraWebsite: {
      name: "Ferreira's website",
      description: "A lawyer's website",
      imagePath: "/isaferreira.png",
      imageAlt: "Ferreira's website logo",
    },
  };
  return (
    <Section id="portfolio" classes="bg-neutral-900/25">
      <div className="text-4xl text-center mx-auto p-2 my-2">
        <h2>MY PORTFOLIO</h2>
      </div>

      <div className="px-2">
        <h3 className="text-2xl text-neutral-400">Featured projects</h3>
      </div>

      <ul className="grid grid-rows md:grid-cols-2 lg:grid-cols-2 gap-2 p-2">
        {/* Grid 1 */}
        {Object.keys(myProjects).map((key) => {
          return (
            <li
              key={key}
              className="flex-row items-center w-full h-[250px] mx-auto rounded-lg overflow-hidden"
            >
              <div className="bg-black h-4/5 w-full relative overflow-hidden ">
                <Image
                  className="w-full h-full object-cover"
                  alt="social logo"
                  width={500}
                  height={500}
                  src={myProjects[key].imagePath}
                />
                <div className="bg-black/25 absolute z-15 top-0 left-0 w-full h-full backdrop-blur-[1px]" />
                <div className="absolute bottom-0 left-0 w-full">
                  <span className="text-4xl px-1 text-white z-10 relative">
                    {myProjects[key].name}
                  </span>
                  <div className="w-full h-[100%] absolute top-0 left-0 bg-gradient-to-t from-25% from-black/50 to-transparent z-5" />
                </div>
              </div>
              <div className="bg-neutral-950 h-1/5 w-full">
                <div>
                  <p className="px-2 text-neutral-300 text-lg">
                    {myProjects[key].description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="px-2 my-3 w-full text-center">
        <Link
          href="#"
          className="text-xl text-white bg-neutral-800 p-2 rounded-md"
        >
          Show all projects
        </Link>
      </div>
    </Section>
  );
}
