import type { Metadata } from "next";
import { Ropa_Sans } from "next/font/google";
import "@/app/ui/styles/globals.scss";
import Navbar from "@/app/ui/navbar/navbar";
import Footer from "@/app/ui/footer/Footer";

// Analytics import
import { Analytics } from "@vercel/analytics/react"

// Internationalization
import {getTranslations} from 'next-intl/server';

const ropa = Ropa_Sans({ weight: "400", subsets: ["latin"] });


export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: "Mateus Tum",
    description: t('description')
  };
}

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={ropa.className}>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
        </body>
    </html>
  );
}
