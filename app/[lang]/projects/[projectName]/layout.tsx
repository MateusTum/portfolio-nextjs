import type { Metadata } from "next";

// Find a way to set the project name as the metadata title of the project

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container min-h-screen">
        {children}
    </div>

  );
}
