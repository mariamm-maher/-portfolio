"use client";

import BackgroundEffects from "./BackgroundEffects";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* min-h-screen flex items-center justify-center px-8 relative */}{" "}
      {/* Animated Background Elements */}
      <BackgroundEffects />
      {/* Logo - positioned absolutely for desktop, in flex for mobile */}
      <div className="md:hidden relative z-50 flex items-center justify-between px-4 pt-6">
        {/* MM Dev Logo - Mobile */}
        <Logo />
        {/* Navigation - Mobile */}
        <Navigation />
      </div>
      {/* Logo - Desktop (absolute positioned) */}
      <div className="hidden md:block">
        <Logo />
      </div>
      {/* Navigation - Desktop (centered) */}
      <div className="hidden md:block pt-8">
        <Navigation />
      </div>
      {/* Page Content */}
      <div className="flex-1 transition-all duration-500 ease-in-out">
        {children}
      </div>
    </div>
  );
}
