"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroContainer, fadeInUp, scaleIn, buttonVariants } from "@/components/HeroBase";
import meCir from "@/public/media/murals/me.jpeg";

export default function AboutHero() {
  return (
    <HeroContainer>
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        {/* Hero Image */}
        <motion.div 
          {...scaleIn}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/30"
          >
            <Image
              src={meCir}
              alt="Ndivhuwo Neswiswi"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 160px, 224px"
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          {...fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Hi, I’m <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Ndivhuwo Neswiswi</span>
        </motion.h1>

        {/* Updated Title - Consistent with Home Hero */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
        >
          Junior Software Developer
        </motion.p>

        {/* Updated Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-purple-600 dark:text-purple-400"
        >
          Backend & Power Platform Developer
        </motion.p>

        {/* Updated Quote - More authentic */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg italic text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          “Learning every day, building better systems, and writing cleaner code.”
        </motion.p>

        {/* Tech Stack - Added for consistency with home hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 pt-2"
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

        {/* CTA Buttons */}
        <motion.div 
          {...buttonVariants}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent"
          >
            🚀 View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold text-base sm:text-lg rounded-full border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            📫 Contact Me
          </Link>
        </motion.div>
      </div>
    </HeroContainer>
  );
}