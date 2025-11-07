"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="relative md:py-32 px-6 md:px-10  mx-auto mt-22 shadow-2xl overflow-hidden text-center
                 bg-violet-200/70 border border-gray-200 shadow-gray-300/50
                 dark:bg-gray-900 dark:border-violet-700/50 dark:shadow-violet-900/40"
    >
      {/* Decorative Radial Glow Element - Visible only in Dark Mode */}
      <div className="absolute inset-0 z-0 opacity-0 dark:opacity-20 transition-opacity duration-500">
        <div className="w-1/3 h-full bg-violet-600 rounded-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-10 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">
          Ready to Build?
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
          I’m always open to discussing <strong>new projects</strong>, collaborations, or sharing ideas. Let’s connect and build something amazing together.
        </p>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02]
                      text-white ring-2 
                     bg-violet-600 dark:text-white shadow-violet-500/50 hover:bg-violet-500 dark:ring-2 ring-violet-400/50"
        >
          Contact Me <Send size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
