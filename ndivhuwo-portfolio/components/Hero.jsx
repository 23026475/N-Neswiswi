"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubtleBackground from "@/components/SubtleBackground"; 
// import { Code } from 'lucide-react'; // Example Icon

export default function HeroSection() {
  // --- Typing Animation Logic ---
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
    let typingTimer;

    // Typing logic
    if (!isDeleting && charIndex < currentRole.length) {
      typingTimer = setTimeout(() => {
        setRoleText(prev => prev + currentRole[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100); // Typing speed
    } 
    // Pause at end
    else if (!isDeleting && charIndex === currentRole.length) {
      typingTimer = setTimeout(() => setIsDeleting(true), 2000); // Pause duration
    } 
    // Deleting logic
    else if (isDeleting && charIndex > 0) {
      typingTimer = setTimeout(() => {
        setRoleText(prev => prev.substring(0, prev.length - 1));
        setCharIndex(prev => prev - 1);
      }, 50); // Deleting speed
    } 
    // Role cycle
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => prev + 1);
    }

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, roleIndex, roles]);
  // --- End Typing Animation Logic ---

  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden mb-24">
      
      {/* 0. Subtle Background / Pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SubtleBackground /> 
      </motion.div>

      {/* 1. Glassy Border/Overlay */}
      <div className="absolute inset-4 z-10 border border-white/20 dark:border-white/10 rounded-3xl backdrop-blur-md bg-white/5 dark:bg-black/5 shadow-2xl"></div>

      {/* 2. Hero Content - Stacked for better flow with the image */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-7xl mx-auto text-center gap-12 py-10">
        
        {/* Main Greeting and Image */}
        <div className="flex flex-col items-center space-y-8">
            {/* Image (Moved up) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500/50"
            >
              <Image
                src="/media/murals/me.png"
                alt="Ndivhuwo"
                fill
                className="object-cover object-top"
                priority 
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </motion.div>

            {/* Main Heading (Hi, I'm Ndivhuwo) */}
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
                Hi, I’m <span className="text-primary">Ndivhuwo.</span>
            </motion.h1>

            {/* Typing Animation Line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 min-h-[40px] md:min-h-[50px]"
            >
                {/* The Role Text and the Blinking Cursor */}
                {roleText}
                <span className="inline-block w-1 bg-purple-600 dark:bg-purple-400 animate-blink ml-1">
                  &nbsp;
                </span>
            </motion.div>
        </div>
        
        {/* Paragraph and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl space-y-6"
        >
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            I craft clean, **scalable**, and **maintainable** software solutions. Specializing in secure, high-performance backend services and APIs that power delightful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold text-lg rounded-xl border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

      </div>
      {/* Note: You may need to add the following utility to your global CSS 
          or Tailwind config if you want the cursor to blink:
          @keyframes blink { 50% { opacity: 0; } }
          .animate-blink { animation: blink 1s step-end infinite; }
      */}
    </section>
  );
}