"use client";
import { motion } from "framer-motion";

export default function TimelinePreview() {
  return (
    <section className="bg-card/50 rounded-3xl p-8 md:p-12 shadow-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-primary mb-4">Experience Timeline</h2>
        <p className="text-muted-foreground mb-6">A snapshot of my journey so far.</p>
        <ul className="space-y-4">
          <li className="bg-background/30 p-4 rounded-xl shadow">2025 - Present: Developer at XYZ</li>
          <li className="bg-background/30 p-4 rounded-xl shadow">2023 - 2025: Junior Developer at ABC</li>
          <li className="bg-background/30 p-4 rounded-xl shadow">2022 - 2023: Internship at DEF</li>
        </ul>
      </motion.div>
    </section>
  );
}
