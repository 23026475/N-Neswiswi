"use client";

import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher({ theme, setTheme }) {
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
