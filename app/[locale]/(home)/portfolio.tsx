import Section from "@/app/ui/Section";
import Image from "next/image";
import clsx from "clsx";

// Custom next-intl link wrapper
import Link from "next/link";

// Tech icons
import { TechList, FeaturedProjects } from "@/app/lib/data";

export default function PortfolioSection({ t }: any) {
  return (
    <Section id="portfolio" classes="bg-neutral-900/25 relative">
      <div className="text-4xl text-center mx-auto p-2 my-2">
        <h2 className="uppercase">{t("my-portfolio")}</h2>
      </div>

      <div className="px-2 lg:px-20">
        <h3 className="text-2xl text-neutral-400">{t("featured-projects")}</h3>
      </div>

      <ul className="grid grid-rows md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 lg:px-20">
        {/* Grid 1 */}
        {Object.keys(FeaturedProjects).map((key) => {
          return (
            <li
              key={key}
              className="flex-row items-center w-full h-[450px] sm:h-[400px] md:h-[450px] mx-auto rounded-lg overflow-hidden
              hover:ring ring-neutral-500/50"
            >
              <a
                // href={{
                //   pathname: "/projects/[projectName]",
                //   params: {
                //     projectName: FeaturedProjects[key].projectPagePath,
                //   },
                // }}
                href={FeaturedProjects[key].websitePath}
                target="_blank"
              >
                <div className="bg-black h-[80%] w-full relative overflow-hidden ">
                  <Image
                    className="w-full h-full object-cover"
                    alt={FeaturedProjects[key].imageAlt}
                    width={500}
                    height={500}
                    src={FeaturedProjects[key].imagePath}
                  />
                  <div className="bg-black/25 absolute z-15 top-0 left-0 w-full h-full backdrop-blur-[1px]" />
                  <div className="absolute bottom-0 left-0 w-full flex items-center">
                    <span className="text-4xl px-1 text-white z-10 relative">
                      {FeaturedProjects[key].name}
                    </span>
                    {/* <span className="text-lg px-1 text-white z-10 relative rounded-md">
                      {FeaturedProjects[key].version}
                    </span> */}
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
                    <span className="p-2 text-sm">
                      {FeaturedProjects[key].isOpenSource
                        ? "Open source"
                        : "Closed source"}
                    </span>
                  </div>
                </div>
                <div className="bg-neutral-950 h-[20%] w-full border border-neutral-800 rounded-b-lg">
                  <ul className="flex">
                    {Object.entries(FeaturedProjects[key].techs).map(
                      ([key, value]) => (
                        <li
                          key={key}
                          className="mx-auto m-1 rounded-md overflow-hidden"
                        >
                          <svg viewBox="-4 -4 32 32" width="32" height="32">
                            <path
                              d={TechList[value].icon.path}
                              fill="currentColor"
                            />
                          </svg>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="border-t border-t-neutral-800">
                    <p className="px-2 text-neutral-300 text-md text-lg md:text-md">
                      {FeaturedProjects[key].description}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="px-2 my-3 w-full text-center">
        <Link
          href={{
            pathname: "/projects",
          }}
          className="text-xl text-white bg-neutral-800 p-2 rounded-md"
        >
          {t("show-all-projects")}
        </Link>
      </div>
    </Section>
  );
}
