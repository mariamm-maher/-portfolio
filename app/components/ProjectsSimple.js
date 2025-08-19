"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, ClipboardList, Sun } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(45deg, #22d3ee, #a855f7, #06b6d4, #8b5cf6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my journey as a developer.
            Each one tells a story of learning, creativity, and problem-solving.
          </motion.p>
        </motion.div>{" "}
        {/* Simple projects grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Portfolio Website",
              icon: Star,
              description: "The website you're currently viewing!",
              color: "text-yellow-400",
            },
            {
              title: "E-Commerce Platform",
              icon: ShoppingCart,
              description: "A full-stack shopping solution",
              color: "text-green-400",
            },
            {
              title: "Task Manager",
              icon: ClipboardList,
              description: "Collaborative task management app",
              color: "text-blue-400",
            },
            {
              title: "Weather Dashboard",
              icon: Sun,
              description: "Beautiful weather forecasting app",
              color: "text-cyan-400",
            },
          ].map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-600/50 flex items-center justify-center ${project.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
