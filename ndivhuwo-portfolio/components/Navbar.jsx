"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // for active page highlighting

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname(); // current route

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Logos
  const logoDesktop = theme === "dark" ? "/media/logo/NN_Dark.png" : "/media/logo/NN_Light.png";
  const logoMobile = theme === "dark" ? "/media/logo/NNeswiswi_dk_md.png" : "/media/logo/NNeswiswi_lt_md.png";

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    //{ label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    return href === pathname || (href !== "/" && pathname?.startsWith(href));
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logoMobile} alt="NN Logo" className="h-10 sm:hidden w-auto" />
          <img src={logoDesktop} alt="NN Logo" className="hidden sm:block h-12 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex flex-1 justify-center">
          <div className="flex gap-6">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={isActive(link.href) ? "default" : "ghost"}
                asChild
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden p-2 rounded hover:bg-background/30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
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
            {links.map((link) => (
              <Button
                key={link.href}
                variant={isActive(link.href) ? "default" : "ghost"}
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
