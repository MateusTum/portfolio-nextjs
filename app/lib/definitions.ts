import type { SimpleIcon } from "simple-icons";

export interface sectionProps {
  children: React.ReactNode;
  fullscreen?: boolean;
  id: string;
  classes?: string;
}

export interface mytech {
  [key: string]: {
    name: string;
    description: string;
    url: string;
    icon: SimpleIcon;
  };
}

export interface myProjectsInterface {
  [key: string]: {
    name: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    projectPagePath: string;
    githubPath?: string;
    websitePath?: string;
    isOpenSource: boolean;
  };
}