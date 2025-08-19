"use client";

import BackgroundEffects from "./BackgroundEffects";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <BackgroundEffects />

      {/* MM Dev Logo */}
      <Logo />

      {/* Navigation */}
      <Navigation />

      {/* Page Content */}
      <div className="flex-1 transition-all duration-500 ease-in-out">
        {children}
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
