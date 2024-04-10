import Section from "@/app/ui/Section";
import RotatingCube from "@/app/ui/cube/Cube";

export default function PresentationSection() {
    return (
      <Section id="home" fullscreen={true} classes="pt-[40px]">
        <div className="text-4xl uppercase mt-9">
          <h1>Mateus Tum</h1>
          <h2>Software Developer</h2>
          <h2>Frontend | Backend</h2>
          <h2>Next.js | Django</h2>
        </div>
        <div className="absolute h-[400px] md:bottom-[50px] md:right-[50px] bottom-0 right-0">
          <RotatingCube />
        </div>
      </Section>
    );
  }