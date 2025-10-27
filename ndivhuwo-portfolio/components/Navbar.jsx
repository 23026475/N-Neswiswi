"use client";

import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const logoSrc = theme === "dark" ? "/media/logo/NN_Dark.png" : "/media/logo/NN_Light.png";

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-4 sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      {/* Logo */}
      <div className="mb-2 sm:mb-0">
        <img src={logoSrc} alt="NN Logo" className="h-12 sm:h-14 w-auto" />
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <a href="/">Home</a>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent className="p-3 grid gap-2">
              <a href="#projects" className="hover:underline">Featured Projects</a>
              <a href="/projects/full" className="hover:underline">All Projects</a>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Theme Switcher */}
      <div className="mt-2 sm:mt-0">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}
