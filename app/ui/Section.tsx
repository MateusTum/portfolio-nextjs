interface sectionProps {
    children: React.ReactNode;
    fullscreen?: boolean;
    id: string;
    classes?: string;
  }

export default function Section({ children, id, fullscreen, classes }: sectionProps) {
    return (
      <section
        id={id}
        className={`flex overflow-hidden w-full justify-center ${classes} ${
          fullscreen ? "min-h-screen" : ""
        }`}
      >
        <div className={`container w-full`}>{children}</div>
      </section>
    );
  }