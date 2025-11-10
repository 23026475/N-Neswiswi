"use client";

import { useState, useEffect } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { Filter, RotateCcw } from "lucide-react";

interface ProjectFiltersProps {
  types: string[];
  techs: string[];
  selectedType: string;
  selectedTechs: string[];
  onTypeChange: (value: string) => void;
  onTechsChange: (value: string[]) => void;
  onReset: () => void;
}

export default function ProjectFilters({
  types,
  techs,
  selectedType,
  selectedTechs,
  onTypeChange,
  onTechsChange,
  onReset,
}: ProjectFiltersProps) {
  // Local state to manage temporary selections before applying
  const [tempType, setTempType] = useState<string>(selectedType || "All");
  const [tempTechs, setTempTechs] = useState<string[]>([...selectedTechs]);

  // Sync local state if parent props change
  useEffect(() => {
    setTempType(selectedType || "All");
  }, [selectedType]);

  useEffect(() => {
    setTempTechs([...selectedTechs]);
  }, [selectedTechs]);

  // Toggle individual tech selection
  const toggleTech = (tech: string) => {
    setTempTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  // Apply filters to parent component
  const applyFilters = () => {
    onTypeChange(tempType);
    onTechsChange(tempTechs);
  };

  // Reset all filters
  const resetAll = () => {
    setTempType("All");
    setTempTechs([]);
    onReset();
  };

  // Ensure types array is unique and does not include "All"
  const uniqueTypes = Array.from(new Set(types.filter((t) => t !== "All")));

  return (
    <div className="w-full flex justify-end mb-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={18} />
            Filter
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-80 sm:w-96">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold flex items-center gap-2">
              <Filter size={18} />
              Filter Projects
            </SheetTitle>
          </SheetHeader>

          <Separator className="my-4" />

          <div className="flex flex-col gap-6">
            {/* PROJECT TYPE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Project Type</label>

              <Select
                value={tempType}
                onValueChange={(v) => setTempType(v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {uniqueTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Technologies</label>

              <div className="space-y-2 border rounded-lg p-3 h-48 overflow-y-auto">
                {/* All Option */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempTechs.length === 0}
                    onCheckedChange={() => setTempTechs([])}
                  />
                  <span className="text-sm">All</span>
                </div>

                <Separator />

                {techs.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      checked={tempTechs.includes(tech)}
                      onCheckedChange={() => toggleTech(tech)}
                    />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SheetFooter className="mt-8 flex flex-col gap-3">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-red-500 hover:text-red-600"
              onClick={resetAll}
            >
              <RotateCcw size={16} />
              Reset Filters
            </Button>

            <SheetClose asChild>
              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
