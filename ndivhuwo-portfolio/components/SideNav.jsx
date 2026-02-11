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
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

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
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Hide on scroll down, show on scroll up (for better UX on mobile)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(s.id)?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        <span className="text-lg sm:text-xl">{s.emoji}</span>
        {showLabels && <span className={isVertical ? "mt-1 text-xs sm:text-sm" : "ml-1"}>{s.label}</span>}
      </motion.a>
    ));

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center md:hidden"
    >
      {/* Mobile Nav - Bottom navigation bar (more thumb-friendly) */}
      <nav className="flex items-center justify-around max-w-md w-full 
                      bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-xl 
                      border border-white/30 dark:border-white/10
                      shadow-2xl rounded-full px-2 py-2">
        {sections.map((s) => (
          <motion.a
            key={s.id}
            href={`#${s.id}`}
            className={`flex flex-col items-center px-3 py-1.5 rounded-full transition-all
              ${active === s.id
                ? "bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary"
                : "text-muted-foreground hover:text-primary"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="text-xl sm:text-2xl">{s.emoji}</span>
            <span className={`text-[10px] sm:text-xs mt-0.5 font-medium
              ${active === s.id ? "text-primary" : "text-gray-600 dark:text-gray-400"}`}>
              {s.label}
            </span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}