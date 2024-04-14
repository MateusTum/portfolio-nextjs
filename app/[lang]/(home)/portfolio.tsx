import Section from "@/app/ui/Section";
import Image from "next/image";
import Link from "next/link";

import { FeaturedProjects } from "@/app/lib/data";

import clsx from "clsx";

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';


export default function PortfolioSection({ t }: any) {
  return (
    <Section id="portfolio" classes="bg-neutral-900/25">
      <div className="text-4xl text-center mx-auto p-2 my-2">
        <h2 className="uppercase">{t('my-portfolio')}</h2>
      </div>

      <div className="px-2 lg:px-20">
        <h3 className="text-2xl text-neutral-400">{t('featured-projects')}</h3>
      </div>

      <ul className="grid grid-rows md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 lg:px-20 ">
        {/* Grid 1 */}
        {Object.keys(FeaturedProjects).map((key) => {
          return (
            <li
              key={key}
              className="flex-row items-center w-full h-[400px] sm:h-[300px] md:h-[400px] mx-auto rounded-lg overflow-hidden
              hover:ring ring-neutral-500/50"
            >
              <Link href={FeaturedProjects[key].projectPagePath} className="">
              <div className="bg-black h-4/5 w-full relative overflow-hidden ">
                <Image
                  className="w-full h-full object-cover"
                  alt="social logo"
                  width={500}
                  height={500}
                  src={FeaturedProjects[key].imagePath}
                />
                <div className="bg-black/25 absolute z-15 top-0 left-0 w-full h-full backdrop-blur-[1px]" />
                <div className="absolute bottom-0 left-0 w-full flex items-center">

                    <span className="text-4xl px-1 text-white z-10 relative">
                      {FeaturedProjects[key].name}
                    </span>
                    <span>
                      <ArrowTopRightOnSquareIcon width={26} height={26} className="z-20 relative text-white"/>
                    </span>
                  
                  <div className="w-full h-[100%] absolute top-0 left-0 bg-gradient-to-t from-25% from-black/50 to-transparent z-5" />
                </div>

                {/* SOURCE INFO */}
                
                <div
                  className={clsx(
                    "absolute top-0 left-0 w-max h-[25px] m-2 rounded-lg",
                    {
                      "bg-green-700": FeaturedProjects[key].isOpenSource,
                      "bg-red-800": !FeaturedProjects[key].isOpenSource,
                    }
                  )}
                >
                  <span className="p-2">
                    {FeaturedProjects[key].isOpenSource ? "Open source" : "Closed source"}
                  </span>
                </div>

                {/* GITHUB ICON */}

                {/* {featuredProjects[key].githubPath && (
                  <div className="absolute top-0 right-0 m-2 rounded-lg">
                    <a
                      href={featuredProjects[key].name}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 inline-block text-white" // Adjust the width and height as needed
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full hover:ring ring-red-500 rounded-full animate-pulse-slow"
                      >
                        <path d={siGithub.path} fill="current" />
                      </svg>
                    </a>
                  </div>
                )} */}

              </div>
              <div className="bg-neutral-950 h-1/5 w-full">
                <div>
                  <p className="px-2 text-neutral-300 text-lg">
                    {FeaturedProjects[key].description}
                  </p>
                </div>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="px-2 my-3 w-full text-center">
        <Link
          href="/projects"
          className="text-xl text-white bg-neutral-800 p-2 rounded-md"
        >
          {t('show-all-projects')}
        </Link>
      </div>
    </Section>
  );
}
