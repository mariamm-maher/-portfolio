"use client";

import { motion } from "framer-motion";
import { User, Settings, Database, Target } from "lucide-react";

export default function AboutStory() {
  const storyPoints = [
    {
      icon: User,
      text: "I'm a Software Engineering student at Helwan University, building my foundation in computer science and development.",
      color: "text-cyan-400",
    },
    {
      icon: Settings,
      text: "I've completed 5+ projects, including college assignments and personal work, mainly using the MERN stack.",
      color: "text-green-400",
    },
    {
      icon: Database,
      text: "Alongside MERN, I also work with SQL databases, Next.js, and GraphQL, exploring different tools to broaden my skills.",
      color: "text-purple-400",
    },
    {
      icon: Target,
      text: "My current focus is on strengthening my full-stack development expertise and creating real-world, scalable applications.",
      color: "text-blue-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-gray-700/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full" />
      <div className="space-y-6">
        {storyPoints.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-600/50 flex items-center justify-center flex-shrink-0 ${point.color}`}
              >
                <IconComponent className="w-5 h-5" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          );
        })}
      </div>{" "}
      {/* Developer Easter Egg */}
      <motion.div
        className="absolute bottom-4 right-4 text-xs font-mono text-cyan-400/50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* TODO: Take over the world */}
      </motion.div>
    </motion.div>
  );
}
