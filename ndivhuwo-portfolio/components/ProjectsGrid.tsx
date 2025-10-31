"use client";

import { useState } from "react";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";

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

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredProjects = selectedFilter
    ? projects.filter(
        (p) => p.type === selectedFilter || p.tech?.includes(selectedFilter)
      )
    : projects;

  return (
    <>
    
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-2 px-8 py-4">
        {projects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.shortDescription}
              image={project.thumbnail}
              tech={project.tech}
              type={project.type}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No projects uploaded yet.
          </p>
        )}
      </div>
    </>
  );
}
