"use client";

import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="flex items-center gap-3">
        {/* Sun icon for light mode */}
        <span className="hidden sm:inline text-yellow-400 text-xl">☀️</span>

        <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`relative cursor-pointer h-7 w-14 rounded-full transition-colors duration-300 
            ${theme === "dark" ? "bg-gray-700" : "bg-yellow-300"}`}
        >
            <span
            className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300
                ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
            />
        </div>

        {/* Moon icon for dark mode */}
        <span className="hidden sm:inline text-blue-500 text-xl">🌙</span>
    </div>
  );
}
