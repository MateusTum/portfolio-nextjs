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
