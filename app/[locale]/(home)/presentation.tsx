import Section from "@/app/ui/Section";
import RotatingCube from "@/app/ui/cube/Cube";
import Link from "next/link";

export default function PresentationSection({ t }: any) {
    return (
      <Section id="home" fullscreen={true} classes="pt-[40px]">
        <div className="text-4xl uppercase mt-9">
          <h1>Mateus Tum</h1>
          <h2>{t('occupation')}</h2>
          <h2>Frontend | Backend</h2>
          <h2>Next.js | Django</h2>
        </div>
        <div className="absolute w-full sm:w-[400px] h-[300px] bottom-0 right-0">
          <RotatingCube />
        </div>
      </Section>
    );
  }