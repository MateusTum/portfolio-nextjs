import { Metadata } from "next";

// Import sections
import PresentationSection from "@/app/[locale]/(home)/presentation";
import AboutSection from "@/app/[locale]/(home)/about";
import MyWorkSection from "@/app/[locale]/(home)/mywork";
import PortfolioSection from "@/app/[locale]/(home)/portfolio";
import ContactSection from "@/app/[locale]/(home)/contact";


// Internationalization
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: "Mateus Tum",
    description: t('description')
  };
}

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="flex-row align-center">
      <PresentationSection t={t}/>

      <AboutSection t={t}/>

      <MyWorkSection/>

      <PortfolioSection t={t}/>

      <ContactSection t={t}/>
    </main>
  );
}
