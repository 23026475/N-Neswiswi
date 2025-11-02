"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  quote: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
          What People Say
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-2">
          Feedback from colleagues, collaborators, and clients I’ve worked with.
        </p>
      </motion.div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:hidden rounded-full bg-white/70 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 shadow-md"
          onClick={scrollLeft}
        >
          <FaChevronLeft className="text-primary" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 min-w-max overflow-x-auto scrollbar-hide slider"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex-shrink-0 bg-card p-6 rounded-xl shadow hover:shadow-lg w-72 md:w-80 flex flex-col gap-4"
            >
              {t.avatar && (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              )}
              <p className="text-sm md:text-base text-muted-foreground italic">
                "{t.quote}"
              </p>
              <h4 className="font-semibold text-primary">{t.name}</h4>
              {t.role && (
                <p className="text-xs md:text-sm text-muted-foreground">
                  {t.role} {t.company ? `@ ${t.company}` : ""}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:hidden rounded-full bg-white/70 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 shadow-md"
          onClick={scrollRight}
        >
          <FaChevronRight className="text-primary" />
        </button>
      </div>

      {/* CSS for auto-scroll with pause-on-hover */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (min-width: 768px) {
          .slider {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .slider:hover {
            animation-play-state: paused;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
