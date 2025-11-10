"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FaRegPaperPlane } from "react-icons/fa";

interface ContactFormProps {
  onSubmitUrl?: string; // optional, default Formspree URL
  extraFields?: boolean; // whether to show extra fields like company, reason, type
}

export default function ContactForm({ onSubmitUrl, extraFields = true }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    reason: "",
    contactType: "", // e.g., Collaboration, Hiring, General
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fireConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 } });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(onSubmitUrl || "https://formspree.io/f/xdkpeowg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
        reason: "",
        contactType: "",
      });

      fireConfetti();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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

              {extraFields && (
                <>
                  <Input
                    name="company"
                    placeholder="Company / Organization (optional)"
                    value={form.company}
                    onChange={handleChange}
                    className="bg-gray-50/80 dark:bg-gray-800 border-border py-6"
                  />

                  <Input
                    name="reason"
                    placeholder="Reason for contact (optional)"
                    value={form.reason}
                    onChange={handleChange}
                    className="bg-gray-50/80 dark:bg-gray-800 border-border py-6"
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Type of Inquiry</label>
                    <Select
                      value={form.contactType}
                      onValueChange={(v) => handleSelectChange("contactType", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Collaboration">Collaboration</SelectItem>
                        <SelectItem value="Hiring">Hiring</SelectItem>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

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
  );
}
