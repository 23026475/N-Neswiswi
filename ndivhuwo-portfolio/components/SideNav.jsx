"use client";

import { useEffect, useState } from "react";
import { HomeIcon, FolderIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

const sections = [
  { id: "hero", label: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", icon: FolderIcon },
  { id: "contact", label: "Contact", icon: ChatBubbleOvalLeftIcon },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 md:flex-col md:gap-6">
      {sections.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center gap-2 px-2 py-1 rounded transition-colors ${
              active === s.id
                ? "text-primary font-semibold bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
