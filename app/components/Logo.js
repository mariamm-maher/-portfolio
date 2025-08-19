"use client";

export default function Logo() {
  return (
    <div className="animate-fade-in md:absolute md:top-6 md:left-8 md:z-50">
      <div className="group cursor-pointer">
        <div className="relative">
          {/* Logo Text */}
          <div className="flex items-center">
            <div className="flex items-baseline">
              <span className="text-4xl font-black text-white group-hover:text-cyan-100 transition-all duration-300 tracking-tighter transform group-hover:scale-110 font-serif">
                M
              </span>
              <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-400 transition-all duration-300 tracking-tighter transform group-hover:scale-110 font-serif -ml-1">
                M
              </span>
            </div>
            <span className="text-xs font-bold text-gray-500 group-hover:text-gray-400 transition-colors duration-300 ml-0.5 mt-2 font-mono tracking-wider">
              dev
            </span>
            <span className="text-cyan-400/60 text-xs font-mono ml-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              .exe
            </span>
          </div>
          {/* Animated underline */}
          <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out mt-1"></div>{" "}
          {/* Floating code brackets */}
          <div className="absolute -left-4 top-1 text-cyan-400/50 text-lg font-mono opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300">
            {"<"}
          </div>
          <div className="absolute -right-6 top-1 text-purple-400/50 text-lg font-mono opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100">
            {"/>"}
          </div>
          {/* Terminal Cursor */}
          <div className="absolute -right-4 top-1 text-green-400/70 text-sm font-mono opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-200">
            |
          </div>
          {/* Particle effects */}
          <div className="absolute top-1 right-8 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-ping transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-10 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-300 delay-200"></div>
          <div className="absolute top-2 left-12 w-0.5 h-0.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-opacity duration-300 delay-400"></div>
        </div>
      </div>
    </div>
  );
}
