"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutStats() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      emoji: "⚡",
      tooltip: "Started coding in 2021, been passionate ever since!",
    },
    {
      label: "Projects Completed",
      value: "50+",
      emoji: "🚀",
      tooltip: "From small scripts to full-stack applications",
    },
    {
      label: "Technologies Mastered",
      value: "20+",
      emoji: "🔧",
      tooltip: "Always learning new tools and frameworks",
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      emoji: "☕",
      tooltip: "The fuel of every developer!",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="grid md:grid-cols-4 gap-6 mb-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 text-center relative group cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          onHoverStart={() => setHoveredStat(index)}
          onHoverEnd={() => setHoveredStat(null)}
        >
          <div className="text-4xl mb-2">{stat.emoji}</div>
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>

          {/* Tooltip */}
          {hoveredStat === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-cyan-400/30"
            >
              {stat.tooltip}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </motion.div>
          )}

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}
