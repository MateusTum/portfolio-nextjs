import type { Metadata } from "next";
import { Ropa_Sans } from "next/font/google";
import "@/app/ui/styles/globals.scss";
import Navbar from "@/app/ui/navbar/navbar";
import Footer from "@/app/ui/footer/Footer";

// Analytics import
import { Analytics } from "@vercel/analytics/react"

const ropa = Ropa_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Tum Portfolio",
  description: "Full-Stack software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ropa.className}>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
        </body>
    </html>
  );
}
