"use client";

import React, { Component } from "react";
import { ProjectInfo } from "@/app/lib/definitions";
import clsx from "clsx";

import Image from "next/image";

import { Link } from "@/navigation";

import { TechList } from "@/app/lib/data";

interface ProjectProps {
  project: ProjectInfo;
}

class Project extends Component<ProjectProps> {
  render() {
    const { project } = this.props;
    return (
      <li
        key={project.name}
        className="relative flex-row items-center w-full h-[500px] sm:h-[300px] md:h-[300px] mx-auto rounded-lg overflow-hidden
              hover:ring ring-neutral-500/50"
      >
        <Link
          href={{
            pathname: "/projects/[projectName]",
            params: { projectName: project.projectPagePath },
          }}
        >
          <div className="bg-black h-4/6 w-full relative overflow-hidden ">
            <Image
              className="w-full h-full object-cover"
              alt={project.imageAlt}
              width={500}
              height={500}
              src={project.imagePath}
            />
            <div className="bg-black/25 absolute z-15 top-0 left-0 w-full h-full backdrop-blur-[1px]" />
            <div className="absolute bottom-0 left-0 w-full flex items-end">
              <span className="text-2xl px-1 text-white z-10 relative">
                {project.name}
              </span>
              <span className="text-lg px-1 text-white z-10 relative rounded-md">
                {project.version}
              </span>
              <div className="w-full h-[100%] absolute top-0 left-0 bg-gradient-to-t from-25% from-black/50 to-transparent z-5" />
            </div>

            {/* SOURCE INFO */}

            <div
              className={clsx(
                "absolute top-0 left-0 w-max h-[25px] m-2 rounded-lg",
                {
                  "bg-green-700": project.isOpenSource,
                  "bg-red-800": !project.isOpenSource,
                }
              )}
            >
              <span className="p-2 text-sm">
                {project.isOpenSource ? "Open source" : "Closed source"}
              </span>
            </div>
          </div>
          <div className="bg-neutral-950 h-1/6 w-full">
            <ul className="flex">
              {Object.entries(project.techs).map(([key, value]) => (
                <li
                  key={key}
                  className="mx-auto m-1 rounded-md overflow-hidden"
                >
                  <svg viewBox="-4 -4 32 32" width="32" height="32">
                    <path d={TechList[value].icon.path} fill="currentColor" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-950 h-2/6 w-full">
            <div>
              <p className="px-2 text-neutral-300 text-md">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Project;
