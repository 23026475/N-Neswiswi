"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [funFact, setFunFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to Formspree
      await fetch("https://formspree.io/f/xdkpeowg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Fetch a random fun fact from Numbers API
      const res = await fetch("https://numbersapi.com/random/trivia");
      const factText = await res.text();
      setFunFact(factText);

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">
          Whether you’d like to collaborate, chat, or just say hi — I’d love to hear from you!
        </p>
      </motion.div>

      <Separator className="mb-6" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 shadow-md bg-background/60 backdrop-blur">
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 relative">
                <h2 className="text-2xl font-semibold mb-2">Message sent ✅</h2>
                <p className="text-muted-foreground mb-4">
                  Thank you for reaching out — I’ll get back to you soon!
                </p>

                {funFact && (
                  <>
                    {/* Confetti burst */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Array.from({ length: 25 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="absolute bg-yellow-400 w-2 h-2 rounded-full"
                          initial={{ y: 0, x: 0, scale: 0.5, opacity: 0.8 }}
                          animate={{
                            y: Math.random() * 150 - 75,
                            x: Math.random() * 150 - 75,
                            scale: [0.5, 1, 0],
                            opacity: [0.8, 1, 0],
                          }}
                          transition={{
                            duration: 1 + Math.random(),
                            repeat: 0,
                            ease: "easeOut",
                          }}
                          style={{
                            top: "50%",
                            left: "50%",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Fun fact fade-in */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg italic text-primary/90 z-10 relative"
                    >
                      🌟 Fun Fact: {funFact}
                    </motion.p>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
