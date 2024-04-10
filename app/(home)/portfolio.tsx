import Section from "@/app/ui/Section";

export default function PortfolioSection() {
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
        <div>
          <h3></h3>
        </div>
  
        <ul className="grid grid-rows md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {/* Grid 1 */}
          {Object.keys(myProjects).map((key) => {
            return (
              <li
                key={key}
                className="flex-row items-center w-full h-[250px] mx-auto rounded-lg overflow-hidden"
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