"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react"; // drag handle icon

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
          top: -rect.top + 10,
          bottom: height - rect.top - rect.height - 10,
          left: -rect.left + 10,
          right: width - rect.left - rect.width - 10,
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
      className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 backdrop-blur-md 
                 bg-white/20 dark:bg-gray-800/40 border border-white/20 
                 shadow-lg rounded-2xl p-3 md:p-4 flex flex-col gap-4 items-center cursor-grab"
      initial={{ x: 0, y: -10, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      drag
      dragConstraints={dragLimits}
      dragElastic={0.2}
    >
      {/* Drag handle indicator */}
      <motion.div
        className="flex items-center justify-center mb-1 cursor-grab active:cursor-grabbing"
        whileHover={{ scale: 1.1 }}
      >
        <GripVertical className="h-4 w-4 text-muted-foreground opacity-70" />
      </motion.div>

      {sections.map((s) => (
        <motion.a
          key={s.id}
          href={`#${s.id}`}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
            ${
              active === s.id
                ? "bg-primary/30 text-primary font-semibold shadow-md"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10"
            }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{s.emoji}</span>
          <span className="hidden sm:inline">{s.label}</span>
        </motion.a>
      ))}
    </motion.nav>
  );
}
