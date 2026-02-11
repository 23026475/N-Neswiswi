"use client";

import { useEffect, useState } from "react";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectsHero from "@/components/ProjectsHero";

interface Project {
  _id: string;
  title: string;
  shortDescription?: string;
  thumbnail: string;
  tech?: string[];
  type?: string;
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filterType, setFilterType] = useState<string>("All");
  const [filterTechs, setFilterTechs] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const featuredProjects = projects.filter((p) => p.featured) || [];

  const projectTypes = ["All", ...Array.from(new Set(projects.map((p) => p.type).filter((t): t is string => !!t)))];
  const projectTechs = Array.from(new Set(projects.flatMap((p) => p.tech || [])));

  const filteredProjects = projects.filter((p) => {
    const typeMatch = filterType === "All" || p.type === filterType;
    const techMatch = filterTechs.length === 0 ? true : p.tech?.some((t) => filterTechs.includes(t));
    return typeMatch && techMatch;
  });

  const resetFilters = () => {
    setFilterType("All");
    setFilterTechs([]);
  };

  return (
    <div className="flex flex-col gap-20">
      {/* Unified Hero Section */}
      <ProjectsHero featuredProjects={featuredProjects} />

      {/* Projects Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 w-full pb-20">
        <div id="projects-grid" className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Explore all my projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-base sm:text-lg">
            Browse the full collection and discover something interesting.
          </p>
        </div>

        <ProjectFilters
          types={projectTypes}
          techs={projectTechs}
          selectedType={filterType}
          selectedTechs={filterTechs}
          onTypeChange={setFilterType}
          onTechsChange={setFilterTechs}
          onReset={resetFilters}
        />

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </div>
  );
}