import { TechList } from "@/app/lib/data";
import { MyProjects } from "@/app/lib/data";
import Project from "./project";

export default function projectsViewer() {
  const sortFilters = ["Latest", "Oldest", "Version"];
  const sourceArray = ["All", "Open", "Closed"];

  return (

      <div className="flex w-full rounded-md overflow-hidden my-4">

        <div className="hidden w-1/6 flex-row text-lg bg-neutral-950">

          <div className="p-2">
            <div className="text-center mx-auto bg-red-700 px-2 rounded-md w-max h-min my-1">
              <span>Sort by</span>
            </div>

            <div>
              <ul className="border border-neutral-500 rounded-md grid grid-rows">
                {sortFilters.map((filter) => (
                  <li className="p-1" key={filter}>{filter}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-2 text-left">
            <div className="text-center mx-auto bg-red-700 px-2 rounded-md w-max h-min my-1">
              <span>Techs</span>
            </div>

            <div>
              <ul className="border border-neutral-500 grid grid-cols-3 rounded-md p-1">
                {Object.entries(TechList).map(([key, value]) => (
                  <li key={key} className="mx-auto m-1 ring-2 ring-black rounded-md overflow-hidden">
                    <svg viewBox="-4 -4 32 32" width="32" height="32">
                      <path d={value.icon.path} fill="currentColor" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-2 text-center">
            <div className="text-center mx-auto bg-red-700 px-2 rounded-md w-max h-min my-1">
              <span>Source</span>
            </div>


            <div>
              <ul className="border border-neutral-500 rounded-md grid grid-rows text-left">
                {sourceArray.map((source) => (
                  <li key={source} className="p-1">{source}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center p-2">
            <button className="bg-green-800 px-2 py-1 rounded-md">
              Apply filters
            </button>
          </div>
        </div>

        {/* Projects div */}
        <div className="flex flex-col w-full">
          <ul className="grid grid-cols grid-rows-3 bg-neutral-900 gap-4 p-2
          sm:grid-cols-3">
          {Object.entries(MyProjects).map(([ProjectName, ProjectInfo]) => (
            <Project key={ProjectName} project={ProjectInfo} />
          ))}
          </ul>
        </div>
      
      </div>
  );
}
