"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [floatingPositions, setFloatingPositions] = useState([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you can implement this)
    console.log("🎉 Message sent successfully!");
  };
  const floatingElements = [
    "console.log('Let\\'s connect! 🤝');",
    "const collaboration = await new Promise();",
    "// Ready to build something amazing?",
    "git clone <your-amazing-idea>",
  ];

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    if (typeof window !== "undefined") {
      setFloatingPositions(
        floatingElements.map(() => ({
          x: Math.random() * 1000,
          y: Math.random() * 600,
          xMovement: Math.random() * 80 - 40,
        }))
      );
    }
  }, []);

  return (
    <main className="container mx-auto px-8 py-16 relative overflow-hidden">
      {" "}
      {/* Floating Code Snippets */}
      {floatingPositions.length > 0 &&
        floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-purple-400/20 pointer-events-none hidden lg:block"
            initial={{
              x: floatingPositions[index]?.x || 0,
              y: floatingPositions[index]?.y || 0,
              opacity: 0,
            }}
            animate={{
              y: [null, -25, 25, -12],
              opacity: [0, 0.4, 0.1, 0.4],
              x: [null, floatingPositions[index]?.xMovement || 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut",
            }}
          >
            {element}
          </motion.div>
        ))}
      <motion.section
        ref={ref}
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {" "}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h3
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(34, 211, 238, 0.4))",
            }}
          >
            Get In Touch
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📞
            </motion.span>
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-400 mt-6 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            I'm always open to discussing new opportunities and interesting
            projects
          </motion.p>
          <motion.p
            className="text-cyan-400/80 font-mono text-sm mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            // Let's build something amazing together! 🚀
          </motion.p>
        </motion.div>{" "}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Enhanced Contact Info */}
          <motion.div className="space-y-8" variants={cardVariants}>
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-5 text-xs font-mono text-cyan-400"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                {Array(6).fill("email.send(); ").join("")}
              </motion.div>

              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    Email
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📧
                    </motion.span>
                  </h4>
                  <motion.p
                    className="text-gray-400 font-mono group-hover:text-cyan-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    mariam.maher@example.com
                  </motion.p>
                  <motion.p
                    className="text-xs text-cyan-400/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 5 }}
                    animate={{ y: 0 }}
                  >
                    // Response time: Usually within 24 hours ⚡
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-5 text-xs font-mono text-purple-400"
                animate={{ x: [100, -100] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                {Array(6).fill("location.ping(); ").join("")}
              </motion.div>

              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </motion.svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    Location
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🌍
                    </motion.span>
                  </h4>
                  <motion.p
                    className="text-gray-400 group-hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Egypt
                  </motion.p>
                  <motion.p
                    className="text-xs text-purple-400/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 5 }}
                    animate={{ y: 0 }}
                  >
                    // Available for remote work worldwide 🌐
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-5 text-xs font-mono text-blue-400"
                animate={{ y: [-50, 50] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {Array(6).fill("social.connect(); ").join("")}
              </motion.div>

              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </motion.svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    Social
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      💬
                    </motion.span>
                  </h4>
                  <motion.p
                    className="text-gray-400 font-mono group-hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    @mariam_maher
                  </motion.p>
                  <motion.p
                    className="text-xs text-blue-400/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 5 }}
                    animate={{ y: 0 }}
                  >
                    // Follow for daily coding insights 📱
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>{" "}
          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.01, y: -2 }}
          >
            {/* Background Matrix Effect */}
            <motion.div
              className="absolute inset-0 opacity-5 text-xs font-mono text-green-400"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322d3ee' fill-opacity='0.1'%3E%3Ctext x='2' y='15' font-size='12' font-family='monospace'%3E01%3C/text%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "20px 20px",
              }}
            />

            <motion.h4
              className="text-2xl font-bold text-white mb-6 flex items-center gap-2 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Send a Message
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💌
              </motion.span>
            </motion.h4>
            <motion.p
              className="text-gray-400 font-mono text-sm mb-6 relative z-10"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              // Let's start a conversation about your next project 🚀
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div variants={cardVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                  <span className="text-cyan-400 font-mono text-xs ml-2">
                    // required
                  </span>
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="Your name"
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                  <span className="text-purple-400 font-mono text-xs ml-2">
                    // required
                  </span>
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                  <span className="text-blue-400 font-mono text-xs ml-2">
                    // optional
                  </span>
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  placeholder="Project inquiry"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                  <span className="text-green-400 font-mono text-xs ml-2">
                    // required
                  </span>
                </label>
                <motion.textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {/* Button Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>{" "}
        {/* Enhanced Social Links */}
        <motion.div className="mt-16 text-center" variants={cardVariants}>
          <motion.h4
            className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Connect With Me
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🌐
            </motion.span>
          </motion.h4>
          <motion.p
            className="text-gray-400 font-mono text-sm mb-8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            // Find me on these platforms 📱
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            variants={containerVariants}
          >
            {[
              {
                name: "Twitter",
                color: "cyan",
                icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                comment: "// Tweet about code ✨",
              },
              {
                name: "LinkedIn",
                color: "blue",
                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                comment: "// Professional network 💼",
              },
              {
                name: "GitHub",
                color: "purple",
                icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                comment: "// Code repository 🔧",
              },
            ].map((social, index) => (
              <motion.div
                key={social.name}
                className="relative group"
                variants={cardVariants}
              >
                <motion.a
                  href="#"
                  className={`w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-lg flex items-center justify-center hover:border-${social.color}-400 hover:bg-${social.color}-500/20 transition-all duration-200 group relative overflow-hidden`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 10px 30px rgba(${
                      social.color === "cyan"
                        ? "34, 211, 238"
                        : social.color === "blue"
                        ? "59, 130, 246"
                        : "168, 85, 247"
                    }, 0.4)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Ripple Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-${social.color}-400/20 rounded-lg`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.svg
                    className={`w-6 h-6 text-gray-400 group-hover:text-${social.color}-400 relative z-10`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: social.name === "GitHub" ? [0, 360] : 0,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      },
                    }}
                  >
                    <path d={social.icon} />
                  </motion.svg>
                </motion.a>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <div className="font-semibold">{social.name}</div>
                  <div className={`text-${social.color}-400 font-mono text-xs`}>
                    {social.comment}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Developer Status */}
          <motion.div
            className="mt-12 flex justify-center items-center gap-4 text-sm font-mono text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Status: Available for freelance
            </motion.div>
            <span>|</span>
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Response time: Lightning fast ⚡
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
