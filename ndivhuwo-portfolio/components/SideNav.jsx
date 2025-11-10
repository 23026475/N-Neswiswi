"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", emoji: "🏠" },
  { id: "skills", label: "Skills", emoji: "🛠️" },
  { id: "projects", label: "Projects", emoji: "📁" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");

  // IntersectionObserver to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // lower threshold for better detection
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const renderLinks = (isVertical = true, showLabels = true) =>
    sections.map((s) => (
      <motion.a
        key={s.id}
        href={`#${s.id}`}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
          ${active === s.id
            ? "bg-primary/20 text-primary font-semibold"
            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
          }
          ${isVertical ? "flex-col" : "flex-row"}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{s.emoji}</span>
        {showLabels && <span className={isVertical ? "mt-1" : "ml-1"}>{s.label}</span>}
      </motion.a>
    ));

  return (
    <>
      {/* Desktop Nav - vertical, icons + labels */}
      <nav className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 
                      flex-col gap-4 items-center p-4 rounded-2xl 
                      bg-gray-100/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 shadow-lg">
        {renderLinks(true, true)}
      </nav>

      {/* Tablet Nav - vertical, thinner, icons only */}
      <nav className="hidden md:flex lg:hidden fixed left-2 top-1/2 -translate-y-1/2 z-40 
                      flex-col gap-3 items-center p-2 rounded-xl 
                      bg-gray-100/20 dark:bg-gray-900/20 backdrop-blur-md border border-white/10 shadow-md">
        {renderLinks(true, false)}
      </nav>

      {/* Mobile Nav - horizontal, icons only, under navbar */}
      <nav className="flex md:hidden fixed top-16 left-0 right-0 z-50 
                      bg-gray-100/30 dark:bg-gray-900/30 backdrop-blur-md border-t border-white/20
                      shadow-md px-4 py-2 justify-around">
        {renderLinks(false, false)}
      </nav>
    </>
  );
}
