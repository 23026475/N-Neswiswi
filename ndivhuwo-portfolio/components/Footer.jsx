"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background/90 dark:bg-gray-900 text-muted-foreground py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary">Ndivhuwo Neswiswi</h2>
          <p className="text-sm mt-1">Building scalable, efficient software solutions</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ndivhuwo-neswiswi-163b55311/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/23026475"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:ndivhuswiswi@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <hr className="border-primary/20 my-6" />

      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ndivhuwo Neswiswi. All rights reserved.
      </p>
    </footer>
  );
}
