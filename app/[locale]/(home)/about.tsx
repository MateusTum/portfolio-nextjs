import Section from "@/app/ui/Section";

export default function AboutSection({ t }: any) {

  return (
    <Section id="about">
      <div className="w-full sm:w-[80%] md:w-[75%] lg:w-[50%] text-4xl text-center bg-neutral-800/50  mx-auto rounded-md p-2">
        <h2 className="uppercase">{t('about-me')}</h2>
      </div>
      <div className="w-full sm:w-[80%] md:w-[75%] lg:w-[50%] px-2 my-1 mx-auto">
        <p className="text-lg text-justify">
          {t('hello')}<span className="text-red-500"> Mateus Rosa Tum</span>,{" "}{t('age')}
          <span className="text-red-500">{" "}{t('brazil')}</span>.{" "}{t('journey')}{" "}
          <span className="text-red-500">Next.js</span>{" "}{t('and')}{" "}
          <span className="text-red-500">Django</span>. {t('oort')}
        </p>
      </div>
    </Section>
  );
}
