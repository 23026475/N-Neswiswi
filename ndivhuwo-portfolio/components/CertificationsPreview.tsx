"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  { label: "AZ-900", img: "/media/certs/az900.png" },
  { label: "AI-900", img: "/media/certs/ai900.png" },
  { label: "SC-900", img: "/media/certs/sc900.png" },
  { label: "DP-900", img: "/media/certs/dp900.png" },
  { label: "PL-900", img: "/media/certs/pl900.png" },
  { label: "PL-200", img: "/media/certs/PL-200.webp" },
];

export default function CertificationsPreview() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-primary mb-10"
        >
          Certifications & Key Achievements
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-4 md:gap-6 overflow-x-auto py-4 px-2 sm:px-4 scrollbar-hide"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex flex-col items-center w-24 sm:w-28 md:w-32 p-3 rounded-xl bg-background shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-transform"
            >
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-2">
                <Image src={cert.img} alt={cert.label} fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-center text-primary">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
