"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative py-24 px-6 md:px-10 max-w-6xl mx-auto rounded-3xl shadow-lg bg-background/80 overflow-hidden text-center">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          I’m always open to discussing new projects, collaborations, or sharing ideas. Let’s connect and build something amazing together.
        </p>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">
          <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
