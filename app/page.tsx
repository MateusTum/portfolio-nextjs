import { Metadata } from "next";

// Import sections
import PresentationSection from "@/app/(home)/presentation";
import AboutSection from "@/app/(home)/about";
import MyWorkSection from "@/app/(home)/mywork";
import PortfolioSection from "@/app/(home)/portfolio";
import ContactSection from "@/app/(home)/contact";

export const metadata: Metadata = {
  title: "Mateus Tum",
  description: "Portfolio of Mateus Tum | Full-Stack Web Developer | Next.js & Django",
};

export default function Home() {
  return (
    <main className="flex-row align-center">
      <PresentationSection />

      <AboutSection />

      <MyWorkSection />

      <PortfolioSection />

      <ContactSection />
    </main>
  );
}
