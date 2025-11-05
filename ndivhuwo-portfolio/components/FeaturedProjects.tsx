"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectsGrid from "@/components/ProjectsGrid";

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

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterType, setFilterType] = useState<string>("All");
  const [filterTechs, setFilterTechs] = useState<string[]>([]);

  // Fetch projects from API
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

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  if (!featuredProjects.length) return null;

  const prevIndex = (activeIndex - 1 + featuredProjects.length) % featuredProjects.length;
  const nextIndex = (activeIndex + 1) % featuredProjects.length;

  return (
    <section className="relative w-full flex flex-col gap-16 py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={featuredProjects[activeIndex].thumbnail}
              alt={featuredProjects[activeIndex].title}
              fill
              className="object-cover filter brightness-50"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-6 overflow-hidden w-full max-w-5xl">
          {[prevIndex, activeIndex, nextIndex].map((i, idx) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                className={`relative rounded-2xl cursor-pointer transition-transform duration-500`}
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.8)",
                  zIndex: isActive ? 20 : 10,
                }}
                onClick={() => setActiveIndex(i)}
              >
                <Image
                  src={featuredProjects[i].thumbnail}
                  alt={featuredProjects[i].title}
                  width={isActive ? 400 : 250}
                  height={isActive ? 300 : 200}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Active Project Info */}
        <div className="text-center max-w-2xl mt-6 text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold">{featuredProjects[activeIndex].title}</h2>
          {featuredProjects[activeIndex].shortDescription && (
            <p className="mt-2 text-md md:text-lg">{featuredProjects[activeIndex].shortDescription}</p>
          )}
          {featuredProjects[activeIndex].tech && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {featuredProjects[activeIndex].tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-sm bg-white/20 border border-white/30 text-white rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition">
          See All Projects
        </button>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col gap-12 mt-12">
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
    </section>
  );
}
