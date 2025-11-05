"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type ProjectCard = {
  title: string;
  subtitle?: string;
  thumbnail: string;
  tech?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

type FeaturedCardCarouselProps = {
  projects: ProjectCard[];
};

export default function FeaturedCardCarousel({ projects }: FeaturedCardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex justify-center items-center relative h-[400px] md:h-[500px]">
        {projects.map((project, i) => {
          const offset = i - activeIndex;
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              className="absolute cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              style={{
                zIndex: isActive ? 10 : 5 - Math.abs(offset),
                transform: `
                  translateX(${offset * 60}%)
                  rotateY(${offset * 20}deg)
                  scale(${isActive ? 1 : 0.8})
                `,
                opacity: isActive ? 1 : 0.6,
              }}
              onClick={() => setActiveIndex(i)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative w-64 md:w-72 lg:w-80 h-56 md:h-64 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-white">
                  <h3 className="font-bold text-md md:text-lg">{project.title}</h3>
                  {project.subtitle && <p className="text-sm">{project.subtitle}</p>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-700/70 p-2 rounded-full shadow-md hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-700/70 p-2 rounded-full shadow-md hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
      >
        ▶
      </button>
    </div>
  );
}
