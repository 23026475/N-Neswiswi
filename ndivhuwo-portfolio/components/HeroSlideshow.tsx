"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type Slide = {
  title: string;
  subtitle?: string;
  thumbnail: string;
  tech?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

type HeroSlideshowProps = {
  slides: Slide[];
  interval?: number;
};

export default function HeroSlideshow({ slides = [], interval = 5000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const current = slides[index];
  if (!current) return null;

  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Main Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image src={current.thumbnail} alt={current.title} fill className="object-cover" />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              hovered ? "bg-black/50" : "bg-transparent"
            }`}
          ></div>
        </motion.div>
      </AnimatePresence>

      {/* Side Thumbnails */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`relative w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
              i === index ? "border-white w-20 h-20" : "border-white/30"
            }`}
            onClick={() => setIndex(i)}
          >
            <Image src={s.thumbnail} alt={s.title} fill className="object-cover" />
            <div
              className={`absolute inset-0 flex items-end justify-center text-center p-1 bg-black/50 text-white text-xs rounded-b-xl transition-opacity duration-300 ${
                hovered || i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {s.title}
            </div>
          </div>
        ))}
      </div>

      {/* Slide Info */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4 z-20 transition-opacity duration-500">
        {hovered && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{current.title}</h2>
            {current.subtitle && <p className="text-md md:text-lg text-gray-200 max-w-2xl">{current.subtitle}</p>}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {current.tech?.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-sm bg-white/20 border border-white/30 text-white rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
