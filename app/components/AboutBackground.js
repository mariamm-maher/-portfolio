"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutBackground() {
  const [codeSnippets, setCodeSnippets] = useState([]);

  // Client-side random generation to avoid hydration issues
  useEffect(() => {
    const snippets = [
      { code: "console.log('Hello World!')", x: 20, y: 15 },
      { code: "const developer = 'passionate'", x: 70, y: 25 },
      { code: "if (coding) { enjoy() }", x: 15, y: 70 },
      { code: "// Building dreams with code", x: 65, y: 80 },
      { code: "while(alive) { learn() }", x: 40, y: 10 },
    ];
    setCodeSnippets(snippets);
  }, []);

  return (
    <>
      {" "}
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-white/20 pointer-events-none select-none"
          style={{ left: `${snippet.x}%`, top: `${snippet.y}%` }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {snippet.code}
        </motion.div>
      ))}
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: "100%",
            }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  );
}
