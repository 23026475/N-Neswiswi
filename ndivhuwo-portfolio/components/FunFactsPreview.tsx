"use client";
import { motion } from "framer-motion";

export default function FunFactsPreview() {
  return (
    <section className="bg-card/50 rounded-3xl p-8 md:p-12 shadow-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-primary mb-4">Fun Facts</h2>
        <p className="text-muted-foreground mb-6">Some things I enjoy outside of coding.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-background/30 p-4 rounded-xl shadow text-center">Crocheting</div>
          <div className="bg-background/30 p-4 rounded-xl shadow text-center">Cooking</div>
          <div className="bg-background/30 p-4 rounded-xl shadow text-center">Woodwork</div>
          <div className="bg-background/30 p-4 rounded-xl shadow text-center">Food Exploring</div>
        </div>
      </motion.div>
    </section>
  );
}
