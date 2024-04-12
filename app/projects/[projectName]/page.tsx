import { MyProjects, FeaturedProjects } from "@/app/lib/data";

// import type {
//   InferGetStaticPropsType,
//   GetStaticProps,
//   GetStaticPaths,
// } from 'next'



// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = Object.keys(FeaturedProjects).map((projectName) => ({
//     params: { projectName: projectName },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {

  return (
    <div>
      <h1 className="text-4xl text-center uppercase">{MyProjects[params.projectName].name}</h1>
    </div>
  );
}
