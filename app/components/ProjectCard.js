"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Hospital,
  MessageCircle,
  Plane,
  ShoppingCart,
  Settings,
  Sparkles,
  ExternalLink,
  Github,
  Coffee,
  Play,
  Code2,
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const iconMap = {
    Hospital,
    MessageCircle,
    Plane,
    ShoppingCart,
  };

  const IconComponent = iconMap[project.iconType] || Settings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden">
        {/* Background Code Effect */}
        <div className="absolute inset-0 opacity-5 font-mono text-xs text-cyan-400 pointer-events-none select-none overflow-hidden">
          <div className="p-4 leading-relaxed">{project.backgroundCode}</div>
        </div>

        {/* Floating Code Snippets on Hover */}
        {isHovered && project.floatingCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 text-xs font-mono text-cyan-400/60 pointer-events-none"
          >
            {project.floatingCode}
          </motion.div>
        )}

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                {project.title}
                {project.isNew && (
                  <span className="ml-2 text-xs bg-gradient-to-r from-green-400 to-cyan-400 text-black px-2 py-1 rounded-full font-semibold animate-pulse">
                    NEW
                  </span>
                )}
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mb-3"
              />
            </div>

            <motion.div
              className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <IconComponent className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="mb-6">
            {" "}
            <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                  className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-100 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          {/* Features */}
          <div className="mb-6">
            {" "}
            <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                  className="text-gray-400 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          {/* Developer Comments */}
          {project.developerComment && (
            <div className="mb-6 p-3 bg-gray-900/30 rounded-lg border-l-4 border-cyan-400/50">
              {" "}
              <p className="text-xs font-mono text-cyan-400/80 italic">
                {/* {project.developerComment} */}
              </p>
            </div>
          )}{" "}
          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.videoDemo && (
              <motion.a
                href={project.videoDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-red-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Video Demo
              </motion.a>
            )}

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
          {/* Technical Highlights Section */}
          {project.technicalHighlights && (
            <div className="mt-6 p-4 bg-gray-900/40 rounded-lg border border-gray-700/30">
              <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                <Code2 className="w-4 h-4 mr-2" />
                Technical Implementation
              </h4>
              <div className="space-y-2">
                {project.technicalHighlights.map((highlight, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-green-400">•</span> {highlight}
                  </motion.p>
                ))}
              </div>
            </div>
          )}{" "}
          {/* Easter Egg */}
          {project.easterEgg && (
            <motion.div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowEasterEgg(!showEasterEgg);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <span className="text-xs opacity-30 hover:opacity-60 transition-opacity">
                <Coffee className="w-4 h-4" />
              </span>
              {showEasterEgg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-6 right-0 bg-gray-900 text-cyan-400 text-xs p-2 rounded whitespace-nowrap border border-cyan-400/30"
                >
                  {project.easterEgg}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
