"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub, FaEnvelope, FaRegPaperPlane } from "react-icons/fa"; // Added FaRegPaperPlane
import TestimonialsSlider from "@/components/TestimonialsSlider";
import SubtleBackground from "@/components/SubtleBackground";
import { CaseUpper } from "lucide-react";
import SectionSeparator from "@/components/SectionSeparator";

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
      <section>
        <section className="relative min-h-screen px-4 sm:px-8 py-20  mx-auto">
            {/* Subtle Background Shapes */}
            <SubtleBackground />

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-primary">
                    {/* UI/UX IMPROVEMENT: Clearer Call-to-action */}
                    Let's Build Something Great 🚀
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                    Whether you’re looking to **collaborate on a project**, discuss a role, or just say hi — I’d love to hear from you!
                </p>
            </motion.div>

            <Separator className="mb-16 relative z-10 bg-border/50" />

            {/* Contact Form + Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                
                {/* Form (2/3 width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2"
                >
                    <Card className="p-8 sm:p-10 md:p-12 shadow-2xl bg-background dark:bg-background backdrop-blur-xl rounded-2xl border border-border dark:border-border">
                        <h2 className="text-3xl font-bold mb-8 text-primary/90">Send a Direct Message</h2>
                        <CardContent className="p-0">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-lg">
                                    <Input
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-50/80 dark:bg-gray-800 border-border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 py-6 text-base md:text-lg transition"
                                    />
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-50/80 dark:bg-gray-800 border-border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 py-6 text-base md:text-lg transition"
                                    />
                                    <Textarea
                                        name="message"
                                        placeholder="Your message (Let me know what you're working on!)"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={7}
                                        className="bg-gray-50/80 dark:bg-gray-800 border-border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 py-4 text-base md:text-lg transition"
                                    />
                                    <Button 
                                        type="submit" 
                                        disabled={loading} 
                                        className="mt-4 py-3 md:py-4 text-lg font-semibold flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all"
                                    >
                                        <FaRegPaperPlane className="w-5 h-5" />
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            ) : (
                                <div className="text-center py-16 bg-violet-50 dark:bg-gray-800/50 rounded-lg border border-violet-200 dark:border-violet-800">
                                    <h2 className="text-4xl font-bold mb-4 text-violet-700 dark:text-violet-300">Message Sent! 🎉</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                                        Thank you for reaching out — I’ll get back to you soon!
                                    </p>
                                    {funFact && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-xl italic text-gray-700 dark:text-gray-300 mt-6"
                                        >
                                            🌟 <strong>Bonus Fun Fact:</strong> {funFact}
                                        </motion.p>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Contact Info (1/3 width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:sticky md:top-20 md:h-fit"
                >
                    <Card className="p-8 shadow-2xl bg-violet-50/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl flex flex-col gap-6 border border-violet-300 dark:border-violet-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-primary">
                            <FaEnvelope className="text-violet-500" /> My Details
                        </h2>
                        
                        <a 
                            href="mailto:ndivhuswiswi@gmail.com"
                            className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition"
                        >
                            <FaRegPaperPlane className="text-violet-500 w-5 h-5" /> 
                            ndivhuswiswi@gmail.com
                        </a>

                        <Separator className="my-2 bg-border/50" />

                        <h3 className="text-xl font-bold text-primary">Connect Online</h3>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://www.linkedin.com/in/ndivhuwo-neswiswi-163b55311/"
                                target="_blank"
                                className="flex items-center gap-3 text-lg font-semibold text-blue-600 hover:text-blue-700 transition"
                            >
                                <FaLinkedin className="w-6 h-6" /> LinkedIn
                            </a>

                            <a
                                href="https://github.com/23026475"
                                target="_blank"
                                className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition"
                            >
                                <FaGithub className="w-6 h-6" /> GitHub
                            </a>
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* ✅ Fun Fact Block MOVED DOWN HERE ✅ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-14 relative z-10"
            >
                <Card className="p-6 md:p-8 shadow-2xl bg-violet-50/70 dark:bg-violet-950/40 backdrop-blur-xl rounded-2xl text-center border border-violet-300 dark:border-violet-700 flex flex-col items-center justify-center gap-4">
                    <div className="text-4xl md:text-5xl">💡</div>
                    <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-300">
                        Wanna know something cool?
                    </h2>
                    <p>Click to get a <strong>random fun fact!</strong></p>

                    {funFact ? (
                        <p className="text-lg italic text-gray-800 dark:text-gray-200 font-medium max-w-3xl">
                            "{funFact}"
                        </p>
                    ) : (
                        <p className="text-gray-500 text-lg">Click the button for a random, useless fact!</p>
                    )}

                    <Button
                        onClick={generateFunFact}
                        disabled={factLoading}
                        className="mt-2 text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 transition-all shadow-md hover:shadow-lg"
                    >
                        {factLoading ? "Loading..." : "Get Fun Fact"}
                    </Button>
                </Card>
            </motion.div>
        </section>
        <div className="mt-24">
          <SectionSeparator/>
        </div>
        
      </section>
    );
}