"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useState, useEffect } from 'react';

// --- ScrollToTopButton Component (Kept theme-aware) ---
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (typeof window !== 'undefined' && window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Theme-aware button classes
    const buttonClasses = `
        fixed bottom-6 right-6 p-4 rounded-full 
        shadow-xl transition-opacity duration-300 
        focus:outline-none focus:ring-4 z-50 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}

        /* Light Mode Styles */
         text-white  
        
        /* Dark Mode Styles */
        bg-violet-600 dark:text-white hover:bg-violet-500 focus:ring-violet-500/50
    `;

    return (
        <button
            onClick={scrollToTop}
            className={buttonClasses}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    );
};
// --- End of ScrollToTopButton Component ---


export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Define the style used for all primary text/links
    const primaryTextStyle = "flex items-center gap-2 text-base font-normal hover:font-medium transition-colors duration-300 cursor-pointer text-gray-600  dark:text-gray-300 hover:text-violet-400";

    // Define the style for social icons (using a button-like appearance)
    const socialIconStyle = "p-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-105 \
        /* Light Mode */ \
        bg-gray-100 text-gray-700 border border-gray-300 hover:text-white hover:shadow-lg \
        /* Dark Mode */ \
        dark:bg-gray-800 dark:text-gray-300 dark:border-violet-700/50 hover:bg-violet-600 dark:hover:text-white dark:hover:shadow-violet-500/50";

  return (
    <>
        <ScrollToTopButton /> 

        {/* Footer Container: Light Mode defaults to subtle, Dark Mode defaults to deep */}
        <footer className="py-16 px-6 md:px-16 relative overflow-hidden 
                           bg-gray-50 text-gray-600 border-t border-gray-200 
                           dark:bg-gray-950 dark:text-gray-400 dark:border-violet-800/50">
            
            {/* Decorative subtle gradient/glow (Dark Mode only) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-2xl h-1 bg-violet-600/70 blur-md opacity-0 dark:opacity-30 transition-opacity duration-500"></div>
            
            {/* Corner decoration (Dark Mode only) */}
            <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b opacity-0 dark:opacity-20 dark:border-violet-700"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* 1. Brand & Tagline */}
                <div className="flex flex-col gap-3 max-w-lg">
                    {/* Name: Dark color in Light, White in Dark */}
                    <h2 className="text-4xl font-extrabold tracking-tight pb-1 inline-block 
                                   text-primary border-b-2 border-gray-400/50 
                                    dark:border-violet-500/50">
                        Ndivhuwo Neswiswi
                    </h2>
                    {/* Tagline text color */}
                    <p className="text-lg max-w-sm text-gray-500 dark:text-gray-300 font-light">
                        Building scalable, efficient software solutions with a focus on clean architecture and performance.
                    </p>
                    {/* Call to Action Link: Blue theme in Light, Violet theme in Dark */}
                    <Link 
                        href="/contact" 
                        className="text-sm font-semibold mt-4 p-2 rounded-md w-fit cursor-pointer 
                                   bg-gray-100 border 
                                   dark:bg-gray-800 text-violet-400 border-violet-700/30 hover:bg-violet-900/40"
                    >
                        ✨ Let's connect and build something impactful.
                    </Link>
                </div>

                {/* 2. Quick Links */}
                <div className="flex flex-col gap-3">
                    {/* Heading: Dark color in Light, White in Dark with color border */}
                    <h3 className="text-xl font-bold pb-1 mb-3 
                                   text-primary border-b-2 
                                    border-violet-600/40">Navigation</h3>
                    <Link href="/about" className={primaryTextStyle}>
                            About <ArrowUpRight className="w-3 h-3 text-violet-400"/>
                        </Link>
                    <Link href="/projects" className={primaryTextStyle}>
                            Projects <ArrowUpRight className="w-3 h-3 text-violet-400"/>
                        </Link>
                    <Link href="/contact" className={primaryTextStyle}>
                            Contact <ArrowUpRight className="w-3 h-3 text-violet-400"/>
                        </Link>
                        <Link href="/blog" className={primaryTextStyle}>
                            Blog <ArrowUpRight className="w-3 h-3 text-violet-400"/>
                        </Link>
                </div>

                {/* 3. Socials */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold pb-1 mb-3 
                                   text-primary border-b-2 
                                    border-violet-600/40">Connect</h3>
                    <div className="flex items-center gap-4">
                        {/* Icons use the defined socialIconStyle */}
                        <a href="https://www.linkedin.com/in/ndivhuwo-neswiswi-163b55311/" target="_blank" className={socialIconStyle} aria-label="LinkedIn profile">
                          <FaLinkedin size={22} />
                        </a>
                        <a href="https://github.com/23026475" target="_blank" className={socialIconStyle} aria-label="GitHub profile">
                          <FaGithub size={22} />
                        </a>
                        <a href="mailto:ndivhuswiswi@gmail.com" className={socialIconStyle} aria-label="Email Ndivhuwo Neswiswi">
                          <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright and separator */}
            <hr className="mt-16 mb-6 border-gray-300 dark:border-violet-900/50" />

            <p className="text-center text-sm font-light tracking-wider 
                          text-gray-400 dark:text-gray-500">
                © {currentYear} Ndivhuwo Neswiswi. Designed and Built by Ndivhuwo Neswiswi. All rights reserved.
            </p>
        </footer>
    </>
  );
}