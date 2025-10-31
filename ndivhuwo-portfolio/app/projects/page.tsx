"use client"; // needed for state and animation hooks

import { useState } from "react";
import ProjectsGrid from "@/components/ProjectsGrid";
import HeroSlideshow, { Slide } from "@/components/HeroSlideshow";
import { fetchSanityData } from "@/sanity/lib/sanityClient";
import { Separator } from "@/components/ui/separator";

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

  // Fetch projects (useEffect if you want dynamic fetch)
  // For simplicity, using placeholder effect for now
  const featuredProjects = projects.filter((p) => p.featured) || [];

  return (
    <section className="max-w-7xl flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-background shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 h-96">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-900 via-gray-900 to-indigo-800 opacity-20 animate-[pulse_20s_linear_infinite]"></div>
          <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full top-[-10%] left-[-10%] animate-[spin_slow_60s_linear_infinite]"></div>
          <div className="absolute w-64 h-64 bg-pink-500/10 rounded-full bottom-[-10%] right-[-10%] animate-[spin_slow_reverse_80s_linear_infinite]"></div>
        </div>

        {/* Text Content */}
        <div className="relative flex-1 text-white space-y-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            My Projects
          </h1>
          <p className="text-lg md:text-xl max-w-xl text-gray-300">
            Explore my latest work across Full Stack, Frontend, Backend, APIs, and Web Applications.
            Featured projects are highlighted below. Use the filters to sort by type and tech.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative flex-1 w-full md:w-auto z-10">
          {featuredProjects.length > 0 ? (
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
              <HeroSlideshow
                slides={featuredProjects.map<Slide>((p) => ({
                  title: p.title,
                  subtitle: p.shortDescription,
                  thumbnail: p.thumbnail,
                  tech: p.tech,
                  demoUrl: p.demoLink,
                  githubUrl: p.githubLink,
                }))}
              />
            </div>
          ) : (
            <div className="h-64 w-full rounded-2xl bg-white/10 flex items-center justify-center text-gray-300 text-center px-4">
              Featured projects will appear here.
            </div>
          )}
        </div>
      </div>

      {/* Separator */}
      {/*<Separator className="my-8" />*/}

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} />
    </section>
  );
}
