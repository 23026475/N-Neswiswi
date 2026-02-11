"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroContainer, fadeInUp, buttonVariants } from "@/components/HeroBase";
import HeroSlideshow from "@/components/HeroSlideshow";

interface Project {
  _id: string;
  title: string;
  shortDescription?: string;
  thumbnail: string;
  tech?: string[];
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

interface ProjectsHeroProps {
  featuredProjects: Project[];
}

export default function ProjectsHero({ featuredProjects }: ProjectsHeroProps) {
  return (
    <HeroContainer className="min-h-[90vh] lg:min-h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center h-full">
        {/* Left Column - Text Content */}
        <motion.div 
          {...fadeInUp}
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.h1 
              {...fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              {["Building", "Backend", "&", "Full-Stack", "Systems"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="inline-block mr-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium"
            >
              Clean architecture. Practical solutions. Real functionality.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
            >
              A collection of APIs, full-stack applications, and algorithm-driven systems built with C#, Java, SQL, and React.
            </motion.p>
          </div>

          {/* Stats / Mini showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {featuredProjects.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Built
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-500">
                10+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Systems & APIs
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                C# • Java • React
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Core Technologies
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            {...buttonVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
          >
            <Link
              href="#projects-grid"
              className="px-8 py-3 bg-primary to-purple-600 text-background font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent"
            >
              🔥 View All Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold text-base sm:text-lg rounded-full border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              📬 Get In Touch
            
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] lg:aspect-[16/12] xl:aspect-[16/11]">
            {featuredProjects.length > 0 ? (
              <HeroSlideshow
                slides={featuredProjects.map((p) => ({
                  title: p.title,
                  subtitle: p.shortDescription,
                  thumbnail: p.thumbnail,
                  tech: p.tech,
                  demoUrl: p.demoLink,
                  githubUrl: p.githubLink,
                }))}
                interval={5000}
              />
            ) : (
              <div className="h-full w-full rounded-2xl lg:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-900/50 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center space-y-3 p-6">
                  <div className="text-5xl mb-2">🚀</div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Featured projects coming soon</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add the 'featured' flag to showcase your best work</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </HeroContainer>
  );
}