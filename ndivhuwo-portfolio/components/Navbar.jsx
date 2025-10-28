"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Desktop logos
  const logoDesktop =
    theme === "dark"
      ? "/media/logo/NN_Dark.png"
      : "/media/logo/NN_Light.png";

  // Mobile logos
  const logoMobile =
    theme === "dark"
      ? "/media/logo/NNeswiswi_dk_md.png"
      : "/media/logo/NNeswiswi_lt_md.png";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo: swap based on screen size */}
        <div className="flex-shrink-0">
          <img
            src={logoMobile} // mobile first
            alt="NN Logo"
            className="h-10 sm:h-14 w-auto sm:hidden"
          />
          <img
            src={logoDesktop} // desktop
            alt="NN Logo"
            className="hidden sm:block h-12 sm:h-14 w-auto"
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden sm:flex flex-1 justify-center">
          <div className="flex gap-6">
            <Button variant="ghost" asChild>
              <a href="/">Home</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>

        {/* Right side: Theme + Hamburger */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />

          <button
            className="sm:hidden p-2 rounded hover:bg-background/30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col gap-2 mt-2 p-4 bg-background/90 rounded-lg shadow-lg backdrop-blur-md"
          >
            <Button variant="ghost" asChild onClick={() => setMenuOpen(false)}>
              <a href="/">Home</a>
            </Button>
            <Button variant="ghost" asChild onClick={() => setMenuOpen(false)}>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" asChild onClick={() => setMenuOpen(false)}>
              <a href="#contact">Contact</a>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
