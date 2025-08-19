"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

export default function Projects() {
  const [matrixLines, setMatrixLines] = useState([]);

  // Client-side random generation to avoid hydration issues
  useEffect(() => {
    const lines = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setMatrixLines(lines);
  }, []);

  return (
    <div className="min-h-screen py-20 px-8 relative">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {matrixLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/10 to-transparent"
            style={{
              left: `${line.left}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
