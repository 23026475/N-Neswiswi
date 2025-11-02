"use client";

import { motion } from "framer-motion";
import SubtleBackground from "@/components/SubtleBackground";
import Image from "next/image";
import { useState, useRef } from "react";

// Fun facts images
import crochetIcon from "@/public/media/icons/crochet.jpg";
import woodworkingIcon from "@/public/media/icons/woodworking.jpg";
import cookingIcon from "@/public/media/icons/cooking.jpg";
import foodIcon from "@/public/media/icons/food.jpg";

const funFacts = [
  {
    name: "Crocheting & Needlework",
    icon: crochetIcon,
    description:
      "Exploring patterns, textures, and colors. Needlework helps me focus, be patient, and bring creativity into tangible results.",
  },
  {
    name: "Woodworking",
    icon: woodworkingIcon,
    description:
      "A passion shared with my dad, teaching precision, perfection, and long-term thinking — qualities I bring into my development work.",
  },
  {
    name: "Cooking",
    icon: cookingIcon,
    description:
      "I enjoy experimenting with recipes and creating dishes that bring people together, blending creativity and problem-solving.",
  },
  {
    name: "Exploring & Sharing Food",
    icon: foodIcon,
    description:
      "Discovering new cuisines and sharing them with friends and family. Food is an adventure and a connection to culture.",
  },
];

export default function WorkPhilosophy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild
        ? (carouselRef.current.firstChild as HTMLElement).clientWidth + 16
        : 0; // 16px gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => scrollToIndex((currentIndex + 1) % funFacts.length);
  const prevSlide = () =>
    scrollToIndex((currentIndex - 1 + funFacts.length) % funFacts.length);

  return (
    <section className="relative py-24 px-6 md:px-10 max-w-6xl mx-auto rounded-3xl shadow-lg bg-background/80 overflow-hidden">
      <SubtleBackground />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
          Work Philosophy & Vision
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-2">
          How I approach development, collaboration, and life outside of coding.
        </p>
      </motion.div>

      {/* Philosophy & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-primary mb-3">Work Philosophy</h3>
          <p className="text-muted-foreground leading-relaxed">
            I approach every project with creativity and an open mind. I leverage my skills,
            intuition, and collaboration to deliver the best solutions possible, ensuring a
            seamless experience for users. Quality, attention to detail, and dedication drive
            my work ethic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-primary mb-3">Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            I am goal-oriented and committed to building efficient and maintainable systems. I
            value learning, adaptability, and collaboration, ensuring that technology serves its
            purpose while empowering users and teams.
          </p>
        </motion.div>
      </div>

      <hr className="border-primary/20 mb-16" />

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-semibold text-primary tracking-tight mb-2">
          Fun Facts About Me
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A glimpse into the hobbies and passions that inspire me outside of development.
        </p>
      </motion.div>

      {/* Mobile Carousel */}
      <div className="relative md:hidden flex flex-col items-center">
        <div className="flex items-center justify-center w-full relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-primary/20 rounded-full hover:bg-primary/40"
          >
            &#8592;
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory w-72"
            onScroll={() => {
              if (carouselRef.current) {
                const cardWidth =
                  (carouselRef.current.firstChild as HTMLElement).clientWidth + 16;
                const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
                setCurrentIndex(newIndex);
              }
            }}
          >
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="snap-start flex-shrink-0 bg-card p-6 rounded-xl shadow hover:shadow-lg w-72 flex flex-col items-center gap-3"
              >
                <Image
                  src={fact.icon}
                  alt={fact.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h4 className="font-semibold text-primary text-center">{fact.name}</h4>
                <p className="text-xs text-muted-foreground text-center">{fact.description}</p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-primary/20 rounded-full hover:bg-primary/40"
          >
            &#8594;
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2 mt-4">
          {funFacts.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop auto-scroll */}
      <div className="hidden md:block relative overflow-hidden py-4">
        <div className="flex animate-scroll gap-6 md:gap-8 min-w-max">
          {funFacts.concat(funFacts).map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex-shrink-0 bg-card p-6 rounded-xl shadow hover:shadow-lg w-64 md:w-72 flex flex-col items-center gap-3"
            >
              <Image
                src={fact.icon}
                alt={fact.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <h4 className="font-semibold text-primary text-center">{fact.name}</h4>
              <p className="text-xs md:text-sm text-muted-foreground text-center">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
