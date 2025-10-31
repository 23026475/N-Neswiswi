"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

type ProjectCardProps ={
  title: string;
  description?: string;
  image: string;
  tech?: string[];
  type?: string;
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  type,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-xl overflow-hidden group cursor-pointer shadow"
    >
      <Card className="border-0 rounded-xl overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Title & Preview (Visible Before Hover) */}
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          {type && <span className="text-xs text-muted-foreground">{type}</span>}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-gray-200 text-sm mt-1">{description}</p>
          {type && <span className="text-xs text-white/80 mt-1">{type}</span>}

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1 mt-3">
            {tech?.map((t) => (
              <span key={t} className="px-2 py-1 text-xs bg-white/20 text-white rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {demoLink && (
              <a href={demoLink} target="_blank" className="text-white text-sm underline">
                Demo
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" className="text-white text-sm underline">
                GitHub
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
