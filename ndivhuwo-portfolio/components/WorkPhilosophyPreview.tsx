"use client";
import { motion } from "framer-motion";

export default function WorkPhilosophyPreview() {
  return (
    <section className="bg-card/50 rounded-3xl p-8 md:p-12 shadow-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-primary mb-4">Work Philosophy</h2>
        <p className="text-muted-foreground mb-4">
          I believe in building solutions with creativity, collaboration, and high attention to detail.
        </p>
        <p className="text-muted-foreground">
          My goal is to create seamless experiences while continuously learning and improving.
        </p>
      </motion.div>
    </section>
  );
}
