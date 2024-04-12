'use client';

import React, { Component } from 'react';
import { ProjectInfo } from '@/app/lib/definitions';
import { siGithub } from 'simple-icons/icons';

import Image from 'next/image';


interface ProjectProps {
  project: ProjectInfo;
}

class Project extends Component<ProjectProps> {
    render () {
        const { project } = this.props;
        return (
            <li className="p-2 w-full h-full col-span-1 row-span-1 bg-neutral-950 rounded-md">
              <div className='border-2 border-black'>
                <Image className='w-full h-full object-cover' width={500} height={500} src={project.imagePath} alt={project.imageAlt} />
              </div>
              <div className='w-full mx-auto p-1'>
                <div className='flex p-0.5 items-center w-full'>
                  <h4 className='text-lg'>{project.name}</h4><span className='text-sm mx-2 p-0.5 bg-red-500 rounded-lg'>v. xx</span>
                </div>

                <div className='flex w-full'>
                <span>{project.description}</span>
              </div>

              </div>
            </li>
        )

    }
}

export default Project;