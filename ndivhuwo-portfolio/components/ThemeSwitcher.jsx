"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">☀️</span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <span className="text-sm text-muted-foreground">🌙</span>
    </div>
  );
}
