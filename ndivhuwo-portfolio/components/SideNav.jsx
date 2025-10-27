"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", emoji: "🏠" },
  { id: "projects", label: "Projects", emoji: "📁" },
  { id: "contact", label: "Contact", emoji: "💬" },
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
    <motion.nav
      className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 md:gap-6"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }} // levitating effect on hover
      drag // draggable for touch devices
      dragConstraints={{ top: 0, bottom: window.innerHeight }}
      dragElastic={0.2}
    >
      {sections.map((s) => (
        <motion.a
          key={s.id}
          href={`#${s.id}`}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            active === s.id
              ? "bg-primary/20 text-primary font-semibold shadow-lg"
              : "bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{s.emoji}</span>
          <span className="hidden sm:inline">{s.label}</span>
        </motion.a>
      ))}
    </motion.nav>
  );
}
