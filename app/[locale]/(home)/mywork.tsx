import { FeaturedTech } from "@/app/lib/data";

export default function MyWorkSection() {
  const keys = Object.keys(FeaturedTech);
  const itemCount = keys.length;

  return (
    <section id="my-tech" className="w-full my-20 px-4 flex justify-center">
      <ul className="grid gap-2 grid-cols-3 grid-rows-3 sm:grid-cols-4 sm:gap-3 lg:grid-cols-9 lg:grid-rows-1">
        {keys.map((key, index) => (
          <li
            key={key}
            className={`min-w-[92px] h-[92px] lg:w-[128px] lg:h-[128px] rounded-md flex items-center justify-center bg-neutral-800/25 backdrop-blur-lg sm:col-span-1 ${
              index === itemCount - 1 && itemCount % 2 !== 0
                ? "sm:col-start-2 sm:col-span-2 lg:col-span-1 mx-auto"
                : ""
            }`}
          >
            <a href={FeaturedTech[key].url} target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                width="64"
                height="64"
                className="w-[75%] h-[75%] lg:w-full lg:h-full max-w-[64px] max-h-[64px] mx-auto"
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
