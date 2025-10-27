"use client";

import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="flex items-center gap-2">
      {/* Optional: sun icon for light */}
      <span className="hidden sm:inline text-yellow-400 text-lg">☀️</span>

      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300
          ${theme === "dark" ? "bg-gray-700" : "bg-yellow-300"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300
            ${theme === "dark" ? "translate-x-6" : "translate-x-1"}`}
        />
      </Switch>

      {/* Optional: moon icon for dark */}
      <span className="hidden sm:inline text-blue-500 text-lg">🌙</span>
    </div>
  );
}
