"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
          Hi, I’m Ndivhuwo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I build scalable, maintainable, and efficient web applications that solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
}
