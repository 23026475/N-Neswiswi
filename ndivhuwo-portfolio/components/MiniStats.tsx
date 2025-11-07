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
  { label: "Lines of Code", value: 45230, icon: <FaCode /> },
  { label: "Projects Delivered", value: 12, icon: <FaProjectDiagram /> },
  { label: "GitHub Repositories", value: 17, icon: <FaGithub /> },
  { label: "Deployments Handled", value: 5, icon: <FaRocket /> },
];

export default function MiniStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const duration = 1800;
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
  }, [isInView]);

  return (
    <section ref={ref} className="w-full mx-auto">
      {/* ✅ SMALLER H3 + primary-colored heading */}
      <h3 className="text-center text-xl md:text-2xl font-bold mb-10 tracking-tight text-primary">
        My Impact, By The Numbers
      </h3>

      {/* ✅ Grid */}
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6 md:gap-8
        "
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="
              flex flex-col items-center justify-center gap-3
              p-8 rounded-2xl
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-700
              shadow-sm hover:shadow-md
              hover:-translate-y-1 transition-all duration-300
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* ✅ Light violet icons */}
            <div className="text-4xl text-violet-400 dark:text-violet-300">
              {stat.icon}
            </div>

            {/* ✅ Numbers use text-primary */}
            <p className="text-3xl md:text-4xl font-extrabold text-primary">
              {counts[i].toLocaleString()}
            </p>

            {/* ✅ Label (subtle) */}
            <p className="text-sm font-medium uppercase tracking-wide 
                           text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
