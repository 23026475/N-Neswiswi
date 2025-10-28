"use client";

import { useState } from "react";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";

// Sample project data
const projects = [
  {
    title: "TrackIt App",
    description: "A personal tracking app to track tasks and progress.",
    image: "/media/projects/trackit.png",
    tech: ["React", "Firebase", "Tailwind", "Web APIs"],
    type: "Web App",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio with blog and project sections.",
    image: "/media/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Fullstack"],
    type: "Portfolio",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "C# Console App",
    description: "A simple C# console application to manage tasks.",
    image: "/media/projects/csharp.png",
    tech: ["C#", ".NET"],
    type: "Desktop App",
    demoLink: "#",
    githubLink: "#",
  },
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter projects by selected tech
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedFilter));

  return (
    <section className="px-4 sm:px-8 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work, filtered by tech stack and project type.
        </p>
      </div>

      {/* Separator */}
      <Separator className="mb-6" />

      {/* Filters */}
      <ProjectFilters selected={selectedFilter} setSelected={setSelectedFilter} />

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
