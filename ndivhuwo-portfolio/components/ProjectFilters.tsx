"use client";

import { useState } from "react";
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
  const [tempTechs, setTempTechs] = useState<string[]>(selectedTechs);
  const [tempType, setTempType] = useState<string>(selectedType);

  const toggleTech = (tech: string) => {
    setTempTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const applyFilters = () => {
    onTechsChange(tempTechs);
    onTypeChange(tempType);
  };

  const resetAll = () => {
    setTempTechs([]);
    setTempType("All");
    onReset();
  };

  return (
    <div className="w-full flex justify-end mb-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={18} />
            Filter
          </Button>
        </SheetTrigger>

        {/* Slide-Out Panel */}
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
                defaultValue={tempType}
                onValueChange={(v) => setTempType(v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {types.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* TECH MULTI-SELECT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Technologies</label>

              <div className="space-y-2 border rounded-lg p-3 h-48 overflow-y-auto">
                {/* All Option */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempTechs.length === 0}
                    onCheckedChange={() =>
                      setTempTechs([]) // clears techs = All
                    }
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
            {/* RESET BUTTON */}
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-red-500 hover:text-red-600"
              onClick={resetAll}
            >
              <RotateCcw size={16} />
              Reset Filters
            </Button>

            {/* APPLY BUTTON */}
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
