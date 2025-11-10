"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import SubtleBackground from "@/components/SubtleBackground";
import SectionSeparator from "@/components/SectionSeparator";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen px-4 sm:px-8 py-20 mx-auto">
      <SubtleBackground />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-primary">
          Let's Build Something Great 🚀
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Whether you’re looking to collaborate, discuss a role, or just say hi — I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <ContactForm extraFields={true} />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:sticky md:top-20 md:h-fit"
        >
          <Card className="p-8 shadow-2xl bg-violet-50/70 dark:bg-gray-900/50 rounded-2xl border border-violet-300">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-primary">
              <FaEnvelope className="text-violet-500" /> My Details
            </h2>

            <a
              href="mailto:ndivhuswiswi@gmail.com"
              className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 mt-4"
            >
              ndivhuswiswi@gmail.com
            </a>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-primary">Connect Online</h3>
              <div className="flex flex-col gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/ndivhuwo-neswiswi-163b55311/"
                  target="_blank"
                  className="flex items-center gap-3 text-lg font-semibold text-blue-600 hover:text-blue-700"
                >
                  <FaLinkedin className="w-6 h-6" /> LinkedIn
                </a>
                <a
                  href="https://github.com/23026475"
                  target="_blank"
                  className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-violet-600"
                >
                  <FaGithub className="w-6 h-6" /> GitHub
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Fun Fact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-14 relative z-10"
      >
        <Card className="p-6 md:p-8 shadow-2xl bg-violet-50/70 dark:bg-violet-950/40 rounded-2xl text-center border border-violet-300 flex flex-col items-center gap-4">
          <div className="text-4xl md:text-5xl">💡</div>
          <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-300">
            Wanna know something cool?
          </h2>
          <p className="text-gray-500 dark:text-gray-200 text-lg">Click the button for a random fun fact!</p>
          <button
            onClick={async () => {
              const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
              const data = await res.json();
              alert(data.text);
            }}
            className="mt-2 text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 rounded-lg text-white"
          >
            Get Fun Fact
          </button>
        </Card>
      </motion.div>

      <div className="mt-24">
        <SectionSeparator />
      </div>
    </section>
  );
}
