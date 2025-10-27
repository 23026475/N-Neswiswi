"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
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
    <nav className="hidden md:flex flex-col gap-4 fixed left-8 top-1/3 -translate-y-1/2 z-40">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`text-sm font-medium transition-colors ${
            active === s.id ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
