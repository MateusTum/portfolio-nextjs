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
      <section className="w-full">
      <div className="rounded-md mt-5 p-2 flex items-center justify-center">
        <div className="bg-neutral-950 w-max p-2 rounded-md">
          <p className="text-justify text-lg">
            Task Manager web app that allows users to create, update and delete tasks. This project was built using Nextjs, Django, TypeScript, PostgreeSql, Sass and TailwindCSS.
          </p>
        </div>
      </div>

      </section>

    </>
  );
}
