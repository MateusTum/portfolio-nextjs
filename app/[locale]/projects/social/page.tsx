import { MyProjects } from "@/app/lib/data";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProjectPage() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center uppercase p-2">
          Social - WIP
        </h1>
      </div>
      <section className="w-full grid grid-cols-2 gap-2">
      <div className="rounded-md mt-5 p-2 w-full mx-auto">
        <Image src='/social-placeholder.webp' width={500} height={500} alt="placeholder" className="mx-auto rounded-md"/>
      </div>
      <div className="rounded-md mt-5 p-2 w-full mx-auto flex items-center">
        <div className="bg-neutral-900 w-full p-2 rounded-md">
          <p className="text-justify text-lg">
            Social is a social media web app. This project was built using Nextjs, Django, TypeScript, PostgreeSql, Sass and TailwindCSS.
          </p>
        </div>
      </div>

      </section>

    </>
  );
}
