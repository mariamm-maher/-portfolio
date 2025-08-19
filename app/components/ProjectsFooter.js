"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsFooter() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      label: "Total Projects",
      value: "50+",
      emoji: "🚀",
      comment: "// And counting...",
    },
    {
      label: "Lines of Code",
      value: "100K+",
      emoji: "⌨️",
      comment: "// Quality over quantity",
    },
    {
      label: "Bugs Fixed",
      value: "999+",
      emoji: "🐛",
      comment: "// It's not a bug, it's a feature",
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      emoji: "☕",
      comment: "// console.log('need more coffee')",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="text-center"
    >
      {/* Developer Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 text-center relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredStat(index)}
            onHoverEnd={() => setHoveredStat(null)}
          >
            <div className="text-4xl mb-2">{stat.emoji}</div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm mb-2">{stat.label}</div>

            {/* Developer Comment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredStat === index ? 1 : 0 }}
              className="text-xs font-mono text-cyan-400/70 absolute bottom-2 left-2 right-2"
            >
              {stat.comment}
            </motion.div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Developer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400" />

        <blockquote className="text-2xl text-gray-300 font-light italic mb-4">
          "Every project is a new adventure, every bug is a learning
          opportunity, and every line of code is a step towards building
          something amazing."
        </blockquote>

        <div className="flex items-center justify-center space-x-2 text-cyan-400">
          <span className="font-mono text-sm">--</span>
          <span className="font-semibold">MM Dev</span>
          <span className="font-mono text-sm animate-pulse">_</span>
        </div>

        {/* Floating Code Comments */}
        <motion.div
          className="absolute top-4 right-4 text-xs font-mono text-cyan-400/30 pointer-events-none select-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {"/* Powered by caffeine and curiosity */"}
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">
            Want to collaborate? Let's build something epic! 🚀
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
        </motion.button>

        <motion.p
          className="text-gray-400 mt-4 text-sm font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {"// git commit -m 'Ready for new challenges'"}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
