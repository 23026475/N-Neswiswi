"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import meCir from "@/public/media/murals/me_cir.png";

// Import certification images
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

  const journey = [
    {
      title: "🎓 Wits University",
      desc: "Studied Computer Science & Mathematics (2019–2022). Built a foundation in algorithms and programming.",
    },
    {
      title: "👩‍💻 GirlCode",
      desc: "Completed a System Development Learnership (2024–2025) focused on C#, .NET, SQL & Power Platform.",
    },
    {
      title: "💼 Mint Group",
      desc: "Currently interning as a System Developer. Building Power Apps, Power Automate flows, and Azure solutions.",
    },
  ];

  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src={meCir}
                alt="Ndivhuwo Neswiswi"
                width={140}
                height={140}
                className="rounded-full shadow-xl ring-4 ring-primary/20"
              />
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hi, I’m <strong>Ndivhuwo Neswiswi</strong>, a system developer passionate about
            crafting practical, creative solutions across web and Microsoft ecosystems.
          </p>
          <p className="text-sm text-muted-foreground mt-2 italic">
            Building practical solutions, one line of code at a time.
          </p>
        </motion.div>
      </section>

      <Separator className="my-10" />

      {/* Journey Section */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          My Journey
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="border-primary/20 hover:shadow-lg transition">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Skills & Certifications */}
      <section className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6"
        >
          Skills & Certifications
        </motion.h2>

        <motion.div className="mb-10">
          {/* YourSkills component can go here */}
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 justify-center items-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-primary/20 hover:shadow-lg transition">
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <p className="text-sm font-medium text-center">{cert.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Interests & Values */}
      <section className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6"
        >
          Beyond Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto mb-6"
        >
          When I’m not coding, I enjoy learning about AI-driven tools, exploring cloud architectures, and mentoring aspiring developers.
          I believe technology should empower people — not complicate their lives.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap text-sm">
          {interests.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary/10 px-3 py-1 rounded-full"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>
    </main>
  );
}
