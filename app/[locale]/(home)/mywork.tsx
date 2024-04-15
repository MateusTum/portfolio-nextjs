

import { FeaturedTech } from "@/app/lib/data";

export default function MyWorkSection() {
  
    return (
      <section id="my-tech" className="w-full my-20 px-4 flex justify-center">
        <ul className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-9">
          {Object.keys(FeaturedTech).map((key) => (
            <li
              key={key}
              className="mx-auto snap-center min-w-[64px] md:min-w-[84px] lg:min-w-[128px] h-[64px] md:h-[84px] lg:h-[128px] rounded-md flex items-center justify-center bg-neutral-800/25 backdrop-blur-lg sm:col-span-1"
            >
              <a href={FeaturedTech[key].url} target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  className="w-[50%] h-[50%] md:w-[75%] md:h-[75%] lg:w-full lg:h-full max-w-[64px] max-h-[64px] mx-auto"
                >
                  <path d={FeaturedTech[key].icon.path} fill="currentColor" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }