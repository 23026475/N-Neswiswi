"use client";

import ProjectCard from "@/components/ProjectCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import ProjectFilters from "@/components/ProjectFilters";
import { Project } from "@/lib/fetchProjects";

type Props = { projects: Project[] };

export default function ProjectContent({ projects }: Props) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="px-4 sm:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-12">
      {/* Hero Slideshow */}
      {featuredProjects.length > 0 && (
        <HeroSlideshow
          slides={featuredProjects.map(({ title, shortDescription, thumbnail, tech, demoLink, githubLink }) => ({
            title,
            subtitle: shortDescription,
            thumbnail,
            tech,
            demoUrl: demoLink,
            githubUrl: githubLink,
          }))}
        />
      )}

      {/* Filters */}
      <ProjectFilters selected="all" setSelected={() => {}} />

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {projects.map(({ _id, title, shortDescription, thumbnail, tech, type, demoLink, githubLink }) => (
          <ProjectCard
            key={_id}
            title={title}
            description={shortDescription}
            image={thumbnail}
            tech={tech}
            type={type}
            demoLink={demoLink}
            githubLink={githubLink}
          />
        ))}
      </div>
    </section>
  );
}
