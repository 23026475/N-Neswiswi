"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-16 sm:py-24 px-4 md:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
      >
        Hi, I’m Ndivhuwo 👋
      </motion.h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
        I’m a System Developer passionate about building impactful solutions across web and Microsoft ecosystems.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="w-full sm:w-auto" asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <a href="/Ndivhuwo_Neswiswi_CV.pdf" download>
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
}
