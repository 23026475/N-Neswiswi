"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

  const logoSrc =
    theme === "dark"
      ? "/media/logo/NN_Dark.png"
      : "/media/logo/NN_Light.png";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border px-4 sm:px-8 py-4">
      {/* Top row: Logo + Hamburger + Theme */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logoSrc} alt="NN Logo" className="h-12 sm:h-14 w-auto" />

        {/* Right side: Theme switcher + Hamburger */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />

          {/* Hamburger menu only on mobile */}
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

      {/* Collapsible navigation menu */}
      <nav
        className={`mt-4 sm:mt-0 sm:flex w-full ${
          menuOpen ? "flex flex-col gap-2" : "hidden"
        }`}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <NavigationMenuItem>
              <Button
                variant="ghost"
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <a href="/">Home</a>
              </Button>
            </NavigationMenuItem>

            {/* Projects is now a direct link */}
            <NavigationMenuItem>
              <Button
                variant="ghost"
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <a href="#projects">Projects</a>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button
                variant="ghost"
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <a href="#contact">Contact</a>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
