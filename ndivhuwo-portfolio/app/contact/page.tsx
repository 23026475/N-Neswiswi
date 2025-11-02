"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { Sub } from "@radix-ui/react-dropdown-menu";
import SubtleBackground from "@/components/SubtleBackground";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [funFact, setFunFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [factLoading, setFactLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xdkpeowg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateFunFact = async () => {
    setFactLoading(true);
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await res.json();
      setFunFact(data.text);
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      setFunFact("Could not fetch a fun fact right now 😅");
    } finally {
      setFactLoading(false);
    }
  };
  const testimonials = [
  {
    name: "Alice Johnson",
    role: "Frontend Engineer",
    company: "TechCorp",
    quote: "Working with Ndivhuwo was a pleasure — super professional and detail-oriented!",
    avatar: "/media/avatars/alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Product Manager",
    company: "Innova",
    quote: "Delivered high-quality work on tight deadlines. Highly recommend!",
  },
  {
    name: "Carla Ruiz",
    role: "Designer",
    quote: "Creative, reliable, and a great team player. Loved collaborating!",
  },
];

  return (
    <section className="relative min-h-screen px-4 sm:px-8 py-20 max-w-7xl mx-auto">
      {/* Subtle Background Shapes */}
      <SubtleBackground />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Whether you’d like to collaborate, chat, or just say hi — I’d love to hear from you!
        </p>
      </motion.div>

      <Separator className="mb-12 relative z-10" />

      {/* Fun Fact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 relative z-10"
      >
        <Card className="p-6 md:p-8 shadow-2xl bg-yellow-100/70 dark:bg-yellow-900/40 backdrop-blur-xl rounded-2xl text-center border border-yellow-300 dark:border-yellow-700 flex flex-col items-center justify-center gap-3">
          <div className="text-4xl md:text-5xl">💡</div>
          <h2 className="text-2xl font-bold">Random Fun Fact</h2>
          {funFact ? (
            <p className="text-md md:text-lg italic">{funFact}</p>
          ) : (
            <p className="text-gray-500 text-md md:text-lg">Click the button to get a fun fact!</p>
          )}
          <Button onClick={generateFunFact} disabled={factLoading} variant="outline" className="mt-2">
            {factLoading ? "Loading..." : "Get Fun Fact"}
          </Button>
        </Card>
      </motion.div>

      {/* Contact Form + Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <Card className="p-10 md:p-16 shadow-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700">
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-lg">
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 py-4 text-lg"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 py-4 text-lg"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="bg-white/80 dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 py-4 text-lg"
                  />
                  <Button type="submit" disabled={loading} className="mt-2 py-4 text-lg">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">Message Sent ✅</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Thank you for reaching out — I’ll get back to you soon!
                  </p>
                  {funFact && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl italic text-primary/90"
                    >
                      🌟 Fun Fact: {funFact}
                    </motion.p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 shadow-xl bg-white/30 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl flex flex-col gap-4 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaEnvelope /> Contact Info
            </h2>
            <p className="flex items-center gap-2">
              <FaEnvelope /> ndivhuswiswi@gmail.com
            </p>
            <Separator className="my-2" />
            <h3 className="font-semibold">Socials</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/ndivhuwo-neswiswi-163b55311/"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/23026475"
                target="_blank"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
      <TestimonialsSlider testimonials={testimonials} />
    </section>
  );
}
