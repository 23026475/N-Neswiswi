"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaProjectDiagram, FaGithub, FaRocket } from "react-icons/fa";

interface StatItem {
  label: string;
  value: number;
  icon: React.JSX.Element;
}

const stats: StatItem[] = [
  { label: "Lines of Code", value: 45230, icon: <FaCode className="text-3xl" /> },
  { label: "Projects Delivered", value: 12, icon: <FaProjectDiagram className="text-3xl" /> },
  { label: "GitHub Repositories", value: 17, icon: <FaGithub className="text-3xl" /> },
  { label: "Deployments Handled", value: 5, icon: <FaRocket className="text-3xl" /> },
];

export default function MiniStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const duration = 2000;
        const steps = duration / 20;
        const increment = stat.value / steps;

        const interval = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = Math.floor(start);
            return newCounts;
          });
        }, 20);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className=" mx-auto px-2 md:px-12 py-8">
      <h3 className="text-center text-xl font-bold mb-12 text-gray-900 dark:text-white">
        My Impact, By The Numbers
      </h3>

      {/* ✅ GRID CONTAINER */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6 
          lg:gap-8
          text-center
        "
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="
              flex flex-col items-center justify-center gap-2 
              p-6 rounded-2xl 
              border border-purple-200/50 dark:border-purple-800/50 
              bg-white dark:bg-gray-900/70 
              shadow-xl transition-all duration-300 
              hover:scale-[1.05] 
              hover:shadow-violet-500/30 dark:hover:shadow-violet-700/50 
              cursor-default
            "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="text-4xl text-violet-600 dark:text-violet-400 mb-2">
              {stat.icon}
            </div>

            <p className="text-4xl lg:text-5xl font-extrabold text-violet-700 dark:text-violet-300">
              {counts[i].toLocaleString()}
            </p>

            <p className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
