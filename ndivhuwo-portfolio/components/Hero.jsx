"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubtleBackground from "@/components/SubtleBackground";

export default function HeroSection() {
  // Typing animation logic
  const roles = [
    "I am a Full Stack Developer.",
    "I am a Power Platform Solution Architect.",
  ];

  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setRoleText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setRoleText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 overflow-hidden mb-24">
      {/* Subtle Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SubtleBackground />
      </motion.div>

      {/* Glass effect overlay */}
      <div className="absolute inset-2 sm:inset-4 z-10 border border-white/20 dark:border-white/10 rounded-3xl backdrop-blur-md bg-white/5 dark:bg-black/5 shadow-2xl"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-6xl mx-auto text-center gap-10 sm:gap-12 py-8 sm:py-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500/50"
        >
          <Image
            src="/media/murals/me.png"
            alt="Ndivhuwo"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 25vw"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
        >
          Hi, I’m <span className="text-primary">Ndivhuwo.</span>
        </motion.h1>

        {/* Typing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 min-h-[32px] sm:min-h-[40px] md:min-h-[50px]"
        >
          {roleText}
          <span className="inline-block w-1 bg-purple-600 dark:bg-purple-400 animate-blink ml-1">
            &nbsp;
          </span>
        </motion.div>

        {/* Description & Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl space-y-6 px-4 sm:px-0"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I craft clean, <strong>scalable</strong>, and <strong>maintainable</strong> software
            solutions. Specializing in secure, high-performance backend services and APIs that power
            delightful user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-purple-600 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold text-base sm:text-lg rounded-xl border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
