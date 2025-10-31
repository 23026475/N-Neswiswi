"use client";

export default function SubtleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute w-full h-full bg-gradient-to-r from-indigo-900 via-gray-900 to-indigo-800 opacity-10"></div>

      {/* Animated circles */}
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full top-[-10%] left-[-5%] animate-spin-slow"></div>
      <div className="absolute w-52 h-52 bg-pink-500/10 rounded-full bottom-[-10%] right-[-5%] animate-spin-slow-reverse"></div>
      <div className="absolute w-64 h-64 bg-indigo-400/10 rounded-full top-[20%] right-[10%] animate-pulse-slow"></div>
      <div className="absolute w-80 h-80 bg-teal-400/10 rounded-full bottom-[15%] left-[15%] animate-pulse-slow"></div>
    </div>
  );
}
