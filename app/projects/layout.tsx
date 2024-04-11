import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction",
  description: "Mateus Tum Projects",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pt-[70px] min-h-screen">
        <h1 className="text-5xl text-center w-full"> Under construction </h1>
        {children}
    </main>

  );
}
