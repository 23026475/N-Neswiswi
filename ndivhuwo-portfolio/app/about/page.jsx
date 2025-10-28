"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import meCir from "@/public/media/murals/me.jpeg";
import Timeline from "@/components/Timeline";

// Certification Images
import az900Img from "@/public/media/certs/az900.png";
import ai900Img from "@/public/media/certs/ai900.png";
import pl900Img from "@/public/media/certs/pl900.png";
import sc900Img from "@/public/media/certs/sc900.png";

export default function AboutPage() {
  const certifications = [
    { name: "AZ-900 Azure Fundamentals", img: az900Img },
    { name: "AI-900 AI Fundamentals", img: ai900Img },
    { name: "PL-900 Power Platform Fundamentals", img: pl900Img },
    { name: "SC-900 Security, Compliance & Identity Fundamentals", img: sc900Img },
  ];

  const interests = [
    "☁️ Cloud Computing",
    "🤖 AI Exploration",
    "🎨 UI/UX Design",
    "💡 Continuous Learning",
  ];

  return (
    <main className="px-6 md:px-10 py-24 max-w-6xl mx-auto space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src={meCir}
                alt="Ndivhuwo Neswiswi"
                width={150}
                height={150}
                className="rounded-full shadow-xl ring-4 ring-primary/20"
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hi, I’m <strong>Ndivhuwo Neswiswi</strong>, a System Developer passionate about crafting practical, creative solutions across web and Microsoft ecosystems.
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              “Building practical solutions, one line of code at a time.”
            </p>
          </div>
        </motion.div>
      </section>

      <Separator className="my-10" />

      {/* ================= JOURNEY / TIMELINE ================= */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-center tracking-tight"
        >
          My Journey
        </motion.h2>
        <Timeline />
      </section>

      <Separator className="my-10" />

      {/* ================= SKILLS & CERTIFICATIONS ================= */}
      <section className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 tracking-tight"
        >
          Skills & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-primary/20 hover:shadow-lg transition rounded-xl">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={90}
                    height={90}
                    className="rounded-md"
                  />
                  <p className="text-sm font-medium text-center leading-snug">
                    {cert.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ================= BEYOND CODE / INTERESTS ================= */}
      <section className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-8 tracking-tight"
        >
          Beyond Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          When I’m not coding, I enjoy exploring AI-driven tools, cloud architectures, and mentoring aspiring developers.  
          I believe technology should empower people — not complicate their lives.
        </motion.p>

        <div className="flex justify-center gap-3 flex-wrap">
          {interests.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary/10 text-sm px-4 py-2 rounded-full font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>
    </main>
  );
}
