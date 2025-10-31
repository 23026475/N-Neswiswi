"use client";

import { useEffect, useState } from "react";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectFilters from "@/components/ProjectFilters";
import HeroSlideshow, { Slide } from "@/components/HeroSlideshow";
import SubtleBackground from "@/components/SubtleBackground";


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
  const [filterTech, setFilterTech] = useState<string>("All");

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

  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured) || [];

  // Extract unique types and techs
  const projectTypes = Array.from(
    new Set(projects.map((p) => p.type).filter((t): t is string => !!t))
  );

  const projectTechs = Array.from(
    new Set(projects.flatMap((p) => p.tech || []))
  );

  // Filtered projects for grid
  const filteredProjects = projects.filter((p) => {
    const typeMatch = filterType === "All" || p.type === filterType;
    const techMatch =
      filterTech === "All" || p.tech?.includes(filterTech) || false;
    return typeMatch && techMatch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-start gap-8 h-[85vh] px-6 py-3 md:px-12">
        {/* Subtle Background */}
        <SubtleBackground />

        <div className="relative flex flex-col md:flex-row items-start md:items-stretch h-[75vh] px-6 md:px-12"> 
          {/* Hero Text */} 
          <div className="relative flex-1 max-w-md z-10 flex flex-col justify-center space-y-4"> 
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 dark:text-white"> Crafting digital experiences that captivate and inspire </h1> 
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300"> Dive into my projects across Full Stack, Frontend, Backend, APIs, and Web Applications. Featured works are highlighted in the slideshow. </p> 
            </div> 
          </div>

        {/* Slideshow */}
        <div className="relative flex-1 w-full md:w-[60%] z-10 mt-4 md:mt-0 h-[60vh] md:h-full">
          {featuredProjects.length > 0 ? (
            <HeroSlideshow
              slides={featuredProjects.map<Slide>((p) => ({
                title: p.title,
                subtitle: p.shortDescription,
                thumbnail: p.thumbnail,
                tech: p.tech,
                demoUrl: p.demoLink,
                githubUrl: p.githubLink,
              }))}
              interval={5000}
            />
          ) : (
            <div className="h-full w-full rounded-2xl bg-white/10 flex items-center justify-center text-gray-300 text-center px-4">
              Featured projects will appear here.
            </div>
          )}
        </div>
      </div>

      {/* Explore Projects Section */}
      <div className="text-center ">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Explore all my projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Browse through the full collection and find something interesting!
        </p>
      </div>

      {/* Filters */}
      <div className="relative z-10">
        <ProjectFilters
          types={projectTypes}
          techs={projectTechs}
          selectedType={filterType}
          selectedTech={filterTech}
          onTypeChange={setFilterType}
          onTechChange={setFilterTech}
        />
      </div>

      {/* Projects Grid */}
      <ProjectsGrid projects={filteredProjects} />
    </section>
  );
}
