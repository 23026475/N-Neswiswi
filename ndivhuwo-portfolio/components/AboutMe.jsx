"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutMeSection() {
  const journey = [
    {
      title: "🎓 Wits University",
      desc: "Computer Science & Mathematics (2019–2022). Built a foundation in algorithms and programming.",
    },
    {
      title: "👩‍💻 GirlCode",
      desc: "System Development Learnership (2024–2025) focused on C#, .NET, SQL & Power Platform.",
    },
    {
      title: "💼 Mint Group",
      desc: "System Developer intern, building Power Apps, Power Automate flows, and Azure solutions.",
    },
  ];

  const skills = [
    "C#", ".NET", "SQL", "Power Platform", "Azure", "React", "Next.js", "Framer Motion"
  ];

  const certifications = [
    {
      name: "AZ-900 Azure Fundamentals",
      img: "/media/certs/az900.png",
    },
    {
      name: "AI-900 AI Fundamentals",
      img: "/media/certs/ai900.png",
    },
    {
      name: "PL-900 Power Platform Fundamentals",
      img: "/media/certs/pl900.png",
    },
    {
      name: "SC-900 Security, Compliance & Identity Fundamentals",
      img: "/media/certs/sc900.png",
    },
  ];

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* Hero / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        {/* You can swap this with your own photo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/media/me.jpg" // Placeholder
            alt="Ndivhuwo Neswiswi"
            width={120}
            height={120}
            className="rounded-full shadow-md"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Hi, I’m Ndivhuwo Neswiswi</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          System Developer passionate about crafting practical, creative solutions across web and Microsoft ecosystems.
        </p>
      </motion.div>

      <Separator className="my-10" />

      {/* Journey / Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="border-primary/20 hover:shadow-md transition">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Separator className="my-10" />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid md:grid-cols-4 gap-6 justify-center items-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-primary/20 hover:shadow-md transition">
                <CardContent className="p-4 flex flex-col items-center gap-2">
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
      </motion.div>
    </section>
  );
}
