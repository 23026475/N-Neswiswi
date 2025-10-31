"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type Slide ={
  title: string;
  subtitle?: string;
  thumbnail: string;
  tech?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

type HeroSlideshowProps ={
  slides: Slide[];
  interval?: number;
}

export default function HeroSlideshow({ slides = [], interval = 5000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const current = slides[index];

  if (!current) return null;

  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl mb-12">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={current.thumbnail}
              alt={current.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          key={current.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {current.title}
        </motion.h1>

        {current.subtitle && (
          <motion.p
            key={current.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6"
          >
            {current.subtitle}
          </motion.p>
        )}

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {current.tech?.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-white/10 border border-white/20 text-white rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          {current.demoUrl && (
            <a
              href={current.demoUrl}
              target="_blank"
              className="px-5 py-2 bg-white text-black font-semibold rounded-xl shadow hover:bg-gray-200 transition"
            >
              View Demo
            </a>
          )}
          {current.githubUrl && (
            <a
              href={current.githubUrl}
              target="_blank"
              className="px-5 py-2 bg-black/40 border border-white/30 text-white font-semibold rounded-xl hover:bg-black/60 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 flex justify-center gap-2 w-full z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
