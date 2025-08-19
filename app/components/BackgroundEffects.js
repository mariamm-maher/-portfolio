export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles - Reduced for better performance and mobile */}
      <div className="hidden sm:block absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40"></div>
      <div className="hidden md:block absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float-delay opacity-30"></div>
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-20 sm:opacity-30"></div>
      <div className="hidden sm:block absolute bottom-40 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-40"></div>
      <div className="hidden lg:block absolute bottom-20 left-40 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-30"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-40"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-20 sm:opacity-30"></div>
      <div className="hidden sm:block absolute bottom-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-float-delay opacity-30"></div>
      <div className="hidden lg:block absolute top-80 right-40 w-1 h-1 bg-yellow-400 rounded-full animate-bounce opacity-40"></div>{" "}
      {/* Moving Lines - Responsive */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-pulse-slow"></div>
      {/* Geometric Shapes - Responsive */}
      <div className="hidden md:block absolute top-32 right-1/3 w-12 h-12 sm:w-16 sm:h-16 border border-cyan-400/15 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-1/3 w-8 h-8 sm:w-12 sm:h-12 border border-purple-400/15 animate-pulse"></div>
      {/* Grid Pattern - Reduced opacity on mobile */}
      <div className="absolute inset-0 bg-grid-pattern opacity-2 sm:opacity-5"></div>
      {/* Gradient Orbs - Responsive sizes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 sm:from-cyan-500/8 sm:to-blue-500/8 md:from-cyan-500/10 md:to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 sm:from-purple-500/8 sm:to-pink-500/8 md:from-purple-500/10 md:to-pink-500/10 rounded-full blur-3xl animate-float"></div>
    </div>
  );
}
