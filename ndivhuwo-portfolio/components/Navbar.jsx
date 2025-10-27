"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <h1 className="font-bold text-xl">Ndivhuwo Neswiswi</h1>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <Button variant="ghost" asChild><a href="/">Home</a></Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent className="p-3 grid gap-2">
              <a href="#projects" className="hover:underline">Featured Projects</a>
              <a href="/projects/full" className="hover:underline">All Projects</a>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Button variant="ghost" asChild><a href="#contact">Contact</a></Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeSwitcher />
    </header>
  );
}
