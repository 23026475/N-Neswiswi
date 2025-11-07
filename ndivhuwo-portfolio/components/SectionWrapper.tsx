"use client";

import React, { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, subtitle, children }: SectionWrapperProps) {
  return (
    <section 
      className="
        relative w-full py-14 transition-colors duration-500
        bg-background 
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-primary">
                Some of My {title}
            </h2>
          {subtitle && (
            <p className=" text-md md:text-lg text-gray-500 dark:text-gray-300 mt-4">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Area */}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
