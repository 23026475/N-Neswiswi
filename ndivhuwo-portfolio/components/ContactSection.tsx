"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your backend/form handler
      await fetch("https://formspree.io/f/xdkpeowg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({ fullName: "", company: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 mt-16 md:mt-24 rounded-2xl
                 bg-violet-200/70 border border-gray-200 shadow-2xl shadow-gray-300/50
                 dark:bg-gray-900 dark:border-violet-700/50 dark:shadow-violet-900/40"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
          Ready to Build?
        </h2>
        <p className="max-w-2xl sm:max-w-3xl mx-auto mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed px-2">
          I’m always open to discussing{" "}
          <strong className="font-semibold text-gray-900 dark:text-gray-100">new projects</strong>, collaborations, or sharing ideas. Let’s connect and build something amazing together.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10"
      >
        {/* Left Side - Message/Info */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Drop a message and let me know who you are, your company (if applicable), and what you'd like to discuss.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            I’ll get back to you as soon as possible. Thanks for stopping by!
          </p>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                Message Sent! 🎉
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Thanks for reaching out — I’ll get back to you soon!
              </p>
              <Button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white"
              >
                Send Another
              </Button>
            </div>
          ) : (
            <>
              <Input
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <Input
                name="company"
                placeholder="Company (Optional)"
                value={form.company}
                onChange={handleChange}
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
              <Button
                type="submit"
                disabled={loading}
                className="mt-2 px-6 py-3 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </>
          )}
        </form>
      </motion.div>
    </section>
  );
}
