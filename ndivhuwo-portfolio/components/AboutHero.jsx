"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SubtleBackground from "@/components/SubtleBackground";
import meCir from "@/public/media/murals/me.jpeg";

export default function AboutHero() {
  return (
    <section className="text-center space-y-6 relative py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Image */}
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src={meCir}
              alt="Ndivhuwo Neswiswi"
              width={160}
              height={160}
              className="rounded-full shadow-2xl ring-4 ring-primary/20"
            />
          </motion.div>
        </div>

        {/* Optional subtle background */}
        <SubtleBackground />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
          Hi, I’m <span className="text-primary">Ndivhuwo Neswiswi</span>
        </h1>

        {/* Micro Tagline */}
        <p className="text-primary text-lg md:text-xl mt-2 font-medium">
          Backend & Cloud Developer | Building scalable systems
        </p>

        {/* Short Quote / Optional */}
        <p className="text-base italic text-muted-foreground mt-4">
          “Every line of code tells a story.”
        </p>
      </motion.div>
    </section>
  );
}
