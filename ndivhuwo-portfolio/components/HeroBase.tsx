"use client";

import { motion } from "framer-motion";
import SubtleBackground from "@/components/SubtleBackground";
import { ReactNode } from "react";

interface HeroBaseProps {
  children: ReactNode;
  className?: string;
}

export function HeroContainer({ children, className = "" }: HeroBaseProps) {
  return (
    <section className={`relative w-full min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 overflow-hidden ${className}`}>
      {/* Subtle Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SubtleBackground />
      </motion.div>

      {/* Glass effect overlay - consistent across all heroes */}
      <div className="absolute inset-2 sm:inset-4 z-10 border border-white/20 dark:border-white/10 rounded-3xl backdrop-blur-md bg-white/5 dark:bg-black/5 shadow-2xl"></div>

      {/* Gradient Glow - consistent accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-20 -left-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 }
};

export const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.8 }
};