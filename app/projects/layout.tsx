export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pt-[60px] min-h-screen flex justify-center">
        {children}
    </main>

  );
}
