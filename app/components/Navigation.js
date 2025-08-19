"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👨‍💻" },
    { href: "/projects", label: "Projects", icon: "🚀" },
    { href: "/skills", label: "Skills", icon: "⚡" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="pt-8 animate-fade-in relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center">
        <div className="bg-gray-800/40 backdrop-blur-md rounded-full px-8 py-4 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
          <ul className="flex space-x-8 text-gray-300 font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                className={
                  pathname === item.href
                    ? "border-b-2 border-cyan-400 pb-1"
                    : ""
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 relative group block"
                >
                  {item.label}
                  <span className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>{" "}
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center px-4">
        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          className="bg-gray-800/40 backdrop-blur-md rounded-full p-4 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMobileMenu}
              />{" "}
              {/* Mobile Menu */}
              <motion.div
                className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl min-w-[280px] max-w-[90vw]"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <ul className="py-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className={`flex items-center space-x-3 px-6 py-4 text-gray-300 font-medium hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 relative group ${
                          pathname === item.href
                            ? "text-cyan-400 bg-cyan-400/10 border-r-2 border-cyan-400"
                            : ""
                        }`}
                      >
                        <motion.span
                          className="text-xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span>{item.label}</span>

                        {/* Active indicator */}
                        {pathname === item.href && (
                          <motion.div
                            className="absolute left-2 w-1 h-8 bg-cyan-400 rounded-full"
                            layoutId="activeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                \
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>{" "}
      {/* Tablet Navigation (Optional: Medium screens) */}
      <div className="hidden sm:flex md:hidden justify-center">
        <div className="bg-gray-800/40 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
          <ul className="flex space-x-6 text-gray-300 font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                className={
                  pathname === item.href
                    ? "border-b-2 border-cyan-400 pb-1"
                    : ""
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 relative group block text-sm"
                  title={item.label}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
