"use client";

import { motion } from "framer-motion";
import { Compass, Ship, ChevronDown, Award, Sparkles, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background HUD Compass Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.div 
          className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full border border-slate-800/30 flex items-center justify-center opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {/* Compass Rings */}
          <div className="absolute w-[90%] h-[90%] rounded-full border border-slate-700/20" />
          <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-slate-800/40" />
          <div className="absolute w-[60%] h-[60%] rounded-full border border-slate-800/20" />
          {/* Navigation lines crossing the circle */}
          <div className="absolute w-full h-[1px] bg-slate-800/20" />
          <div className="absolute h-full w-[1px] bg-slate-800/20" />
          
          {/* Compass labels */}
          <span className="absolute top-4 text-[10px] font-mono text-slate-600 font-bold">N</span>
          <span className="absolute bottom-4 text-[10px] font-mono text-slate-600 font-bold">S</span>
          <span className="absolute right-4 text-[10px] font-mono text-slate-600 font-bold">E</span>
          <span className="absolute left-4 text-[10px] font-mono text-slate-600 font-bold">W</span>
        </motion.div>
      </div>

      {/* SVG Animated Route Line */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-35" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Dashed route line */}
          <motion.path
            d="M 100 800 Q 350 400 500 500 T 900 200"
            fill="none"
            stroke="url(#route-grad)"
            strokeWidth="2"
            strokeDasharray="8, 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          {/* Pulse marker sailing the path */}
          <defs>
            <linearGradient id="route-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-8">
        
        {/* Floating Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800/60 text-[11px] font-mono text-amber-400/90 tracking-wider uppercase shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        >
          <Sparkles className="h-3 w-3 animate-pulse text-amber-400" />
          <span>Navigating Ideas Into Digital Reality</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold font-sans tracking-tight text-slate-100 max-w-3xl leading-[1.1] flex flex-col items-center gap-2"
        >
          <span className="text-xs md:text-base font-mono text-amber-400 tracking-[0.2em] uppercase font-normal block mb-1">
            Shree Varshan // Full Stack Developer & AI Builder
          </span>
          <span>
            Charting New Routes Through <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.15)]">Technology</span>
          </span>
        </motion.h1>

        {/* Subheading / Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs md:text-sm font-mono text-slate-200"
        >
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">B.Tech Graduate</span>
          <span className="text-slate-700">•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">Full Stack Developer</span>
          <span className="text-slate-700">•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">AI Builder</span>
          <span className="text-slate-700">•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">SEO Specialist</span>
          <span className="text-slate-700">•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">Digital Marketer</span>
          <span className="text-slate-700">•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800/80">Video Editor</span>
        </motion.div>

        {/* Short Personal Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-slate-300 text-sm md:text-lg max-w-xl font-sans font-light leading-relaxed"
        >
          Welcome, Traveler. I am <strong className="text-slate-100 font-semibold">Shree Varshan</strong>, a digital explorer crafting high-performance full-stack applications, intelligent AI workflows, and data-driven marketing campaigns along the Grand Line of technology.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("treasure-collection")}
            className="btn-primary focus-ring group"
            aria-label="View Projects and Work"
          >
            <Ship className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            <span>View Projects & Work</span>
          </button>
          
          <button
            onClick={() => scrollToSection("navigation-center")}
            className="btn-secondary focus-ring group"
            aria-label="Hire me"
          >
            <Mail className="h-4 w-4" />
            <span>Hire me</span>
          </button>
        </motion.div>
      </div>

      {/* Floating coordinates dashboard */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6 hidden xl:flex flex-col gap-1.5 font-mono text-[9px] text-slate-500 leading-tight border-l border-slate-800/80 pl-3"
      >
        <div>SYSTEM STATUS: NAVIGATION ONLINE</div>
        <div>CURRENT ANCHOR: SEC. 000_START</div>
        <div>COORDINATES: 10° 24' 56'' N / 78° 98' 12'' E</div>
      </motion.div>

      {/* Anchor Scroll Indicator */}
      <button
        onClick={() => scrollToSection("captains-log")}
        className="absolute bottom-8 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-amber-400 transition-colors z-10 focus-ring rounded-lg p-1 bg-transparent border-none"
        aria-label="Scroll to Captain's Log"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">LOGS AHEAD</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </section>
  );
}
