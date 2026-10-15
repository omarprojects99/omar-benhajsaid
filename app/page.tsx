"use client";

import { useState } from "react";
import Blog from "@/components/blog";
import { navItems } from "@/components/Data";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

type Language = "en" | "de";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  const localizedNavItems = navItems.map((item) => ({
    ...item,
    name:
      language === "de"
        ? item.name === "About"
          ? "Über mich"
          : item.name === "Projects"
            ? "Projekte"
            : item.name === "Blog"
              ? "Blog"
              : "Kontakt"
        : item.name,
  }));

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xt w-full">
        <FloatingNav navItems={localizedNavItems} />
        <Hero
          language={language}
          onToggleLanguage={() => setLanguage((prev) => (prev === "en" ? "de" : "en"))}
        />
        <Grid language={language} />
        <Blog language={language} />
        <RecentProjects language={language} />
        <Footer language={language} />
      </div>
    </main>
  );
}
