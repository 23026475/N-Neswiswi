"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", emoji: "🏠" },
  { id: "projects", label: "Projects", emoji: "📁" },
  { id: "contact", label: "Contact", emoji: "💬" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const navRef = useRef(null);
  const [dragLimits, setDragLimits] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  // Track active section
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

  // Update window size & drag limits
  useEffect(() => {
    const updateLimits = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });

      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setDragLimits({
          top: -rect.top + 10, // min y
          bottom: height - rect.top - rect.height - 10, // max y
          left: -rect.left + 10, // min x
          right: width - rect.left - rect.width - 10, // max x
        });
      }
    };

    updateLimits();
    window.addEventListener("resize", updateLimits);
    return () => window.removeEventListener("resize", updateLimits);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 md:gap-6"
      initial={{ x: 0, y: -10, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      drag
      dragConstraints={dragLimits}
      dragElastic={0.2}
    >
      {sections.map((s) => (
        <motion.a
          key={s.id}
          href={`#${s.id}`}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            active === s.id
              ? "bg-primary/20 text-primary font-semibold shadow-lg"
              : "bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/10"
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
