"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export default function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);

  if (!projects.length) return null;

  const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
  const nextIndex = (activeIndex + 1) % projects.length;

  const handlePrev = () => {
    setSlideOffset(-30);
    setTimeout(() => {
      setActiveIndex(prevIndex);
      setSlideOffset(0);
    }, 150);
  };

  const handleNext = () => {
    setSlideOffset(30);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setSlideOffset(0);
    }, 150);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${projects[activeIndex].thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Left Side: Project Details */}
        <div className="w-full lg:w-1/2 text-white space-y-4 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {projects[activeIndex].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4">
            {projects[activeIndex].shortDescription}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {projects[activeIndex].demoUrl && (
              <a href={projects[activeIndex].demoUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition">
                  Demo
                </button>
              </a>
            )}
            {projects[activeIndex].githubUrl && (
              <a href={projects[activeIndex].githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition">
                  GitHub
                </button>
              </a>
            )}
          </div>
          <a href="/projects">
            <button className="hidden lg:inline-block mt-6 px-6 py-3 bg-violet-900 text-white font-semibold rounded-xl hover:bg-primary/90 transition">
              See All Projects
            </button>
          </a>
        </div>

        {/* Right Side: Carousel */}
        <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center h-full">
          {/* Desktop/Tablet Carousel */}
          <div className="hidden lg:flex items-center justify-center relative w-full">
            {[prevIndex, activeIndex, nextIndex].map((i, idx) => {
              const isActive = i === activeIndex;
              const zIndex = isActive ? 30 : 10;
              const scale = isActive ? 1 : 0.8;
              const translateX = idx === 0 ? -140 : idx === 1 ? 0 : 140;
              const opacity = isActive ? 1 : 0.7;

              return (
                <div
                  key={projects[i]._id}
                  className="absolute rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500 ease-in-out transform-gpu"
                  style={{
                    width: isActive ? "260px" : "200px",
                    height: isActive ? "400px" : "280px",
                    zIndex: zIndex,
                    transform: `translateX(${translateX + slideOffset}px) scale(${scale})`,
                    opacity: opacity,
                    backgroundImage: `url(${projects[i].thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => setActiveIndex(i)}
                ></div>
              );
            })}

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition z-20"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition z-20"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden w-full max-w-sm flex flex-col items-center">
            <div
              className="rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500"
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${projects[activeIndex].thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={handleNext}
            ></div>
            
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition z-20"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition z-20"
            >
              <FaChevronRight />
            </button>
          </div>
          <a href="/projects">
            <button className="mt-6 px-12 py-3 bg-violet-900 text-white font-semibold rounded-xl hover:bg-primary/90 transition">
              See All Projects
            </button>
          </a>
        
        </div>
      </div>
    </section>
  );
}
