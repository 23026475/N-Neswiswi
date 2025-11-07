"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FaLinkedin, FaGithub, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import SubtleBackground from "@/components/SubtleBackground";
import SectionSeparator from "@/components/SectionSeparator";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [funFact, setFunFact] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [factLoading, setFactLoading] = useState(false);

    const formRef = useRef<HTMLDivElement>(null);

    const fireConfetti = () => {
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };

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

            fireConfetti(); // ✅ Trigger confetti on success
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
        <section>
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

                <Separator className="mb-16 relative z-10 bg-border/50" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* ✅ Contact Form (Animated) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2"
                        ref={formRef}
                    >
                        <Card className="p-8 sm:p-10 md:p-12 shadow-2xl bg-background dark:bg-background rounded-2xl border border-border">

                            <h2 className="text-3xl font-bold mb-8 text-primary/90">Send a Direct Message</h2>

                            <CardContent className="p-0">
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col gap-6 text-lg"
                                        >
                                            <Input
                                                name="name"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-50/80 dark:bg-gray-800 border-border py-6"
                                            />
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="Your email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-50/80 dark:bg-gray-800 border-border py-6"
                                            />
                                            <Textarea
                                                name="message"
                                                placeholder="Your message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={7}
                                                className="bg-gray-50/80 dark:bg-gray-800 border-border py-4"
                                            />

                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                className="mt-4 py-4 text-lg font-semibold flex items-center gap-2 bg-primary hover:bg-primary/90"
                                            >
                                                <FaRegPaperPlane className="w-5 h-5" />
                                                {loading ? "Sending..." : "Send Message"}
                                            </Button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-center py-16 bg-violet-50 dark:bg-gray-800/50 rounded-lg border border-violet-200 dark:border-violet-800"
                                        >
                                            <h2 className="text-4xl font-bold mb-4 text-violet-700 dark:text-violet-300">
                                                Message Sent! 🎉
                                            </h2>

                                            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                                                Thank you for reaching out — I’ll get back to you soon!
                                            </p>

                                            {funFact && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-xl italic text-gray-700 dark:text-gray-300 mt-6"
                                                >
                                                    🌟 <strong>Bonus Fun Fact:</strong> {funFact}
                                                </motion.p>
                                            )}

                                            {/* ✅ NEW BUTTON — resets the form */}
                                            <Button
                                                onClick={() => setSubmitted(false)}
                                                className="mt-10 px-8 py-4 bg-primary hover:bg-primary/90 text-lg"
                                            >
                                                Send Another Message ✉️
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </CardContent>
                        </Card>
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
                                className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                            >
                                <FaRegPaperPlane className="text-violet-500" /> ndivhuswiswi@gmail.com
                            </a>

                            <Separator className="my-2 bg-border/50" />

                            <h3 className="text-xl font-bold text-primary">Connect Online</h3>

                            <div className="flex flex-col gap-4">
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
                        </Card>
                    </motion.div>
                </div>

                {/* Fun Fact */}
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

                        {funFact ? (
                            <p className="text-lg italic max-w-3xl text-gray-800 dark:text-gray-200">
                                "{funFact}"
                            </p>
                        ) : (
                            <p className="text-gray-500 text-lg">Click the button for a random fact!</p>
                        )}

                        <Button
                            onClick={generateFunFact}
                            disabled={factLoading}
                            className="mt-2 text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700"
                        >
                            {factLoading ? "Loading..." : "Get Fun Fact"}
                        </Button>
                    </Card>
                </motion.div>
            </section>

            <div className="mt-24">
                <SectionSeparator />
            </div>
        </section>
    );
}
