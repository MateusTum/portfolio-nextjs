export default function ProjectPage({ params }: { params: { project: string } }) {
    return (
      <main className="flex-row align-center min-h-screen">
        <div className="pt-[60px]">
            
        <p>PROJECT: {params.project}</p>

        </div>
      </main>
    );
  }