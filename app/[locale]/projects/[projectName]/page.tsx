import { MyProjects } from "@/app/lib/data";
import { redirect } from 'next/navigation'

export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {

  if (!MyProjects[params.projectName]) {
    return redirect(`/not-found`)
  }

  return (
    <div>
      <h1 className="text-4xl text-center uppercase">{MyProjects[params.projectName].name}</h1>
    </div>
  );
}
