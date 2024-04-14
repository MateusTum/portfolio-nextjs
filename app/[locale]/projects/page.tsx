import type { Metadata } from "next";
import ProjectsViewer from "@/app/ui/projectsViewer/viewer";

// Internationalization
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: "Mateus Tum | Portfolio",
  description: "Mateus Tum Projects",
};

export default function ProjectPage() {
  const t = useTranslations('Portfolio');

  return (
    <div className="container">

      <div className="flex w-full h-max">
        <h1 className="text-4xl text-center w-full my-1">{t('title')}</h1>
      </div>

      <ProjectsViewer />

    </div>
  );
}
