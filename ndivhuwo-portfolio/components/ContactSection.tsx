"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="relative w-full overflow-hidden text-center
                 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10
                 mt-16 md:mt-24 rounded-2xl
                 bg-violet-200/70 border border-gray-200 shadow-2xl shadow-gray-300/50
                 dark:bg-gray-900 dark:border-violet-700/50 dark:shadow-violet-900/40"
    >
      {/* Decorative Radial Glow (dark mode only) */}
      <div className="absolute inset-0 z-0 opacity-0 dark:opacity-20 transition-opacity duration-500">
        <div className="w-2/3 sm:w-1/2 md:w-1/3 h-full bg-violet-600 rounded-full blur-[120px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mb-10 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Ready to Build?
        </h2>
        <p className="max-w-2xl sm:max-w-3xl mx-auto mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed px-2">
          I’m always open to discussing{" "}
          <strong className="font-semibold text-gray-900 dark:text-gray-100">new projects</strong>,{" "}
          collaborations, or sharing ideas. Let’s connect and build something amazing together.
        </p>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex justify-center"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 
                     text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-300
                     transform hover:scale-[1.03] active:scale-[0.98]
                     bg-violet-600 text-white dark:text-white ring-2 ring-violet-400/50
                     shadow-violet-500/50 hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-400/70"
        >
          Contact Me
          <Send size={20} className="mt-[1px]" />
        </Link>
      </motion.div>
    </section>
  );
}
