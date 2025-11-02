"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description?: string;
  image: string;
  tech?: string[];
  type?: string;
  demoLink?: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  type,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative rounded-xl overflow-hidden group cursor-pointer shadow"
        onClick={() => setOpen(true)}
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

          {/* Title & Preview */}
          <div className="p-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            {type && <span className="text-xs text-muted-foreground">{type}</span>}
          </div>

          {/* Hover Overlay */}
          <div className="
            absolute inset-0 bg-black/70 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 
            p-4 flex flex-col justify-end
          ">
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

      {/* Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description || "Project details"}
            </DialogDescription>
          </DialogHeader>

          {/* Modal Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          {/* Type */}
          {type && (
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Type:</strong> {type}
            </p>
          )}

          {/* Tech Stack */}
          {tech && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-muted rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                className="text-primary underline text-sm"
              >
                View Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="text-primary underline text-sm"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
