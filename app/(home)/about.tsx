import Section from "@/app/ui/Section";

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="w-full md:w-[75%] lg:w-[50%] text-4xl text-center bg-neutral-800/50  mx-auto rounded-md p-2">
        <h2>ABOUT ME</h2>
      </div>
      <div className="w-full md:w-[75%] lg:w-[50%] px-2 my-1 mx-auto">
        <p className="text-lg text-justify">
          Hello, I’m <span className="text-red-500">Mateus Rosa Tum</span>, a
          24-year-old software developer from
          <span className="text-red-500"> Brazil</span>. My journey in software
          development started in 2023, marking a significant shift from my law
          school background. This transition was inspired by my experiences
          abroad, leading me to pursue a career in technology. Today, I am
          dedicated to building innovative web solutions, specializing in{" "}
          <span className="text-red-500">Next.js</span> and{" "}
          <span className="text-red-500">Django</span>. I'm passionate about
          using my skills to create impactful and efficient digital experiences.
        </p>
      </div>
    </Section>
  );
}
