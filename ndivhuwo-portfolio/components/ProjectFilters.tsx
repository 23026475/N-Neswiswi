"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

interface ProjectFiltersProps {
  types: string[];
  techs: string[];
  selectedType: string;
  selectedTech: string;
  onTypeChange: Dispatch<SetStateAction<string>>;
  onTechChange: Dispatch<SetStateAction<string>>;
}

export default function ProjectFilters({
  types,
  techs,
  selectedType,
  selectedTech,
  onTypeChange,
  onTechChange,
}: ProjectFiltersProps) {
  const baseButtonClasses =
    "px-2 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 flex-shrink-0";

  const selectedClasses = "bg-primary text-background border-transparent shadow-md";
  const unselectedClasses =
    "border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <div className="flex flex-col gap-4 py-4 px-6 w-full border-b mb-4">
      {/* Type filters */}
      <ScrollArea className="w-full">
        <div className="flex gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`${baseButtonClasses} ${
                selectedType === type ? selectedClasses : unselectedClasses
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </ScrollArea>

      {/* Tech filters */}
      <ScrollArea className="w-full">
        <div className="flex gap-2">
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(tech)}
              className={`${baseButtonClasses} ${
                selectedTech === tech ? selectedClasses : unselectedClasses
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
