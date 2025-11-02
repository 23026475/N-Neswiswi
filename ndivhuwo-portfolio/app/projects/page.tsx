"use client";

import { useEffect, useState, useRef } from "react";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectFilters from "@/components/ProjectFilters";
import HeroSlideshow from "@/components/HeroSlideshow";
import SubtleBackground from "@/components/SubtleBackground";
import { motion, useScroll, useTransform } from "framer-motion";

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
    const techMatch =
      filterTechs.length === 0 ? true : p.tech?.some((t) => filterTechs.includes(t));
    return typeMatch && techMatch;
  });

  const resetFilters = () => {
    setFilterType("All");
    setFilterTechs([]);
  };

  // HERO SECTION
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col gap-12">
      {/* HERO SECTION — FULL WIDTH */}
      <div
        ref={heroRef}
        className="relative flex flex-col md:flex-row items-center gap-8 min-h-[85vh] px-4 md:px-12 lg:px-24 overflow-hidden w-full"
      >
        {/* Subtle floating particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary/40 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute bottom-16 right-16 w-3 h-3 bg-purple-400/40 rounded-full blur-[3px] animate-ping" />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full blur-[2px] animate-bounce" />
        </motion.div>

        {/* Subtle gradient glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]"
        />

        {/* Floating Background */}
        <motion.div className="absolute inset-0" style={{ y: yText, opacity: opacityHero }}>
          <SubtleBackground />
        </motion.div>

        {/* Animated Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex-1 max-w-xl text-center md:text-left space-y-4"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight leading-snug"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {["Crafting", "digital", "experiences", "that", "captivate"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300 md:text-lg"
          >
            Explore my work across Full Stack, Frontend, Backend, APIs, and Web Applications.
          </motion.p>
        </motion.div>

        {/* Slideshow — animated zoom in */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative flex-1 w-full md:w-[60%] z-10 h-[55vh] md:h-[75vh]"
        >
          {featuredProjects.length ? (
            <HeroSlideshow
              slides={featuredProjects.map((p) => ({
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
            <div className="h-full w-full rounded-2xl bg-white/10 flex items-center justify-center text-gray-300 px-4 text-center">
              Featured projects will appear here.
            </div>
          )}
        </motion.div>
      </div>

      {/* REST OF PAGE — CONSTRAINED */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col gap-12">
        {/* Explore Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Explore all my projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Browse the full collection and discover something interesting.
          </p>
        </div>

        {/* Project Filters */}
        <ProjectFilters
          types={projectTypes}
          techs={projectTechs}
          selectedType={filterType}
          selectedTechs={filterTechs}
          onTypeChange={setFilterType}
          onTechsChange={setFilterTechs}
          onReset={resetFilters}
        />

        {/* Projects Grid */}
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
