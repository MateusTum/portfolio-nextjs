import type { Metadata } from "next";
import ProjectsViewer from "@/app/ui/projectsViewer/viewer";

export const metadata: Metadata = {
  title: "Mateus Tum | Portfolio",
  description: "Mateus Tum Projects",
};

export default function ProjectPage() {
  return (
    <div className="container">

      <div className="flex w-full h-max">
        <h1 className="text-4xl text-center w-full my-1"> Portfolio | Under Construction </h1>
      </div>

      <ProjectsViewer />

    </div>
  );
}
