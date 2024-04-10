import Section from "@/app/ui/Section";

export default function AboutSection() {
    return (
      <Section id="about">
        <div className="w-full md:w-[75%] lg:w-[50%] text-4xl text-center bg-neutral-800/50  mx-auto rounded-md p-2">
          <h2>ABOUT ME</h2>
        </div>
        <div className="w-full md:w-[75%] lg:w-[50%] px-2 my-1 mx-auto">
          <p className="text-lg text-justify">
            My name is <span className="text-red-500">Mateus Rosa Tum</span>,{" "}
            <span className="text-red-500">24</span>, from
            <span className="text-red-500"> Brazil</span>. My software development
            journey began in 2023. At the time, I was graduating in law school,
            but after spending some time abroad I decided to change my career
            path. Now, I am a full time software developer, working with{" "}
            <span className="text-red-500">Next.js</span> and{" "}
            <span className="text-red-500">Django</span> .
          </p>
        </div>
      </Section>
    );
  }