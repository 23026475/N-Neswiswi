"use client"; // Needed for interactivity

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

const techFilters = ["All", "Web APIs", "Fullstack", "C#", "Next.js", "React", "Tailwind"];

interface ProjectFiltersProps {
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
  disabled?: boolean; // optional
}

export default function ProjectFilters({ selected, setSelected, disabled = false }: ProjectFiltersProps) {
  return (
    <ScrollArea className="py-2">
      <div className="flex gap-2">
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelected(tech)}
            disabled={disabled}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              selected === tech ? "bg-primary text-background" : "border-muted hover:bg-muted/10"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {tech}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
