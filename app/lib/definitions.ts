import type { SimpleIcon } from "simple-icons";

export interface sectionProps {
  children: React.ReactNode;
  fullscreen?: boolean;
  id: string;
  classes?: string;
}

export type TechName = string;

export interface TechInfo {
  name: string;
  description: string;
  url: string;
  icon: SimpleIcon;
}

export type ProjectName = string;

export interface ProjectInfo {
  name: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  projectPagePath: string;
  githubPath?: string;
  websitePath?: string;
  isOpenSource: boolean;
  version: string;
  techs: TechName[];
}

