import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mateus Tum | 404",
  description: "Mateus Tum Dev | 404 - Page not found",
};

export default function Custom404() {
  return (
    <main>
      <div className="container min-h-screen">
        <h1 className="text-4xl pt-[70px] text-center">404 - Page Not Found</h1>
      </div>
    </main>
  );
}
