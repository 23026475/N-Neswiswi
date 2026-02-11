"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroContainer, fadeInUp, scaleIn, buttonVariants } from "@/components/HeroBase";

export default function HomeHero() {
  const roles = [
    "Junior Software Developer",
    "Backend & Power Platform Developer",
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
    <HeroContainer>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        {/* Left Column - Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
          {/* Profile Image - Centered on mobile, hidden on large */}
          <motion.div 
            {...scaleIn}
            className="lg:hidden flex justify-center mb-4"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500/30">
              <Image
                src="/media/murals/me.png"
                alt="Ndivhuwo"
                fill
                className="object-cover object-top"
                priority
                sizes="160px"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            {...fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Hi, I’m <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Ndivhuwo.</span>
          </motion.h1>

          {/* Typing line - Updated title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold min-h-[40px] sm:min-h-[50px]"
          >
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              {roleText}
            </span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-purple-600 dark:bg-purple-400 animate-pulse ml-1 align-middle">
              &nbsp;
            </span>
          </motion.div>

          {/* Updated Description - Honest and transparent */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
          >
            Junior Software Developer specializing in backend systems and Power Platform solutions. 
            I build APIs and full-stack applications using <span className="font-semibold text-primary">C#</span>,{' '}
            <span className="font-semibold text-primary">Java</span>,{' '}
            <span className="font-semibold text-primary">SQL Server</span>, and{' '}
            <span className="font-semibold text-primary">React</span> — focused on clean architecture 
            and practical problem-solving.
          </motion.p>

          {/* Tech stack badges - Visual reinforcement */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2"
          >
            {["C#", "Java", "SQL Server", "React", "Power Platform"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            {...buttonVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent"
            >
              🚀 View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold text-base sm:text-lg rounded-full border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              📫 Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Profile Image (Desktop only) */}
        <motion.div 
          {...scaleIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block flex-1"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500/30"
            >
              <Image
                src="/media/murals/me.png"
                alt="Ndivhuwo"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </HeroContainer>
  );
}