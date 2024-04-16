import { MyProjects } from "@/app/lib/data";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProjectPage() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center uppercase p-2">
          Ferreira's website - WIP
        </h1>
      </div>
      <section className="w-full">
      <div className="rounded-md mt-5 p-2 flex items-center justify-center">
        <div className="bg-neutral-950 w-max p-2 rounded-md">
          <p className="text-justify text-lg">
            Attorney's office website.
          </p>
        </div>
      </div>

      </section>

    </>
  );
}
