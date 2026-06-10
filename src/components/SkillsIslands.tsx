"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Monitor, Server, Brain, Search, TrendingUp, Paintbrush, Radio, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number; // Percentage
}

interface Island {
  id: string;
  name: string;
  coords: string;
  icon: any;
  description: string;
  skills: Skill[];
  gridPos: { top: string; left: string }; // Position on the visual map
}

const islandsData: Island[] = [
  {
    id: "frontend",
    name: "Frontend Island",
    coords: "12° 24' N / 45° 11' E",
    icon: Monitor,
    description: "Crafting visually stunning, responsive, and performance-optimized user interfaces using modern React ecosystem stacks.",
    gridPos: { top: "20%", left: "15%" },
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    name: "Backend Island",
    coords: "28° 42' N / 90° 33' E",
    icon: Server,
    description: "Architecting high-performance API structures, databases, and microservices to support complex software scaling.",
    gridPos: { top: "15%", left: "70%" },
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    id: "ai-automation",
    name: "AI Island",
    coords: "45° 05' N / 120° 48' E",
    icon: Brain,
    description: "Integrating intelligent agents, custom chatbots, and automatic API workflows that optimize operations and user engagement.",
    gridPos: { top: "45%", left: "85%" },
    skills: [
      { name: "AI Agents", level: 85 },
      { name: "Chatbots", level: 90 },
      { name: "Workflow Automation", level: 85 },
    ],
  },
  {
    id: "seo",
    name: "SEO Island",
    coords: "15° 19' S / 30° 12' W",
    icon: Search,
    description: "Boosting organic search visibility, structural crawlers optimization, and enhancing Core Web Vitals parameters.",
    gridPos: { top: "50%", left: "20%" },
    skills: [
      { name: "Technical SEO", level: 95 },
      { name: "Local SEO", level: 90 },
      { name: "Core Web Vitals", level: 90 },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Island",
    coords: "35° 55' S / 75° 40' W",
    icon: TrendingUp,
    description: "Setting up marketing triggers, landing pages conversion rate optimization (CRO), and advanced analytics tracking.",
    gridPos: { top: "80%", left: "45%" },
    skills: [
      { name: "Lead Generation", level: 85 },
      { name: "Conversion Optimization", level: 90 },
      { name: "Analytics", level: 85 },
    ],
  },
  {
    id: "creative",
    name: "Creative Island",
    coords: "50° 11' S / 110° 22' W",
    icon: Paintbrush,
    description: "Engaging viewers through professional video timelines, custom vector animation, and motion graphics packages.",
    gridPos: { top: "75%", left: "80%" },
    skills: [
      { name: "Video Editing", level: 90 },
      { name: "Motion Graphics", level: 85 },
      { name: "Visual Storytelling", level: 90 },
    ],
  },
  {
    id: "app-development",
    name: "App Development Island",
    coords: "08° 14' S / 102° 36' E",
    icon: Smartphone,
    description: "Developing high-performance cross-platform mobile applications for iOS and Android environments with offline-first synchronization.",
    gridPos: { top: "42%", left: "52%" },
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Expo", level: 90 },
    ],
  },
];

export default function SkillsIslands() {
  const [activeIslandId, setActiveIslandId] = useState("frontend");
  
  const activeIsland = islandsData.find((i) => i.id === activeIslandId) || islandsData[0];
  const ActiveIcon = activeIsland.icon;

  return (
    <section id="skills-islands" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <Compass className="h-4.5 w-4.5" />
          <span>Section 02</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          The Crew's Skills
        </h2>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          Navigate the islands on the map to inspect individual skills
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Map Grid (Visible on Desktop, simplified menu on Mobile) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-slate-800/60 shadow-xl overflow-hidden relative min-h-[350px] lg:min-h-[480px] flex flex-col justify-between">
          <div className="absolute inset-0 coordinate-grid opacity-30 pointer-events-none" />
          
          {/* Compass grid decorations */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-600">MAP_GRID: CHART_091</div>
          <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-600">SECTOR: DEV_GRAND_LINE</div>

          {/* Desktop Map Layout */}
          <div className="relative w-full h-full hidden md:block">
            {/* Draw lines connecting islands (voyage route path connecting all 7 nodes in an S-curve) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" pointerEvents="none">
              {/* Background trace line */}
              <path 
                d="M 70,15 C 45,15 30,15 15,20 C 10,30 12,42 20,50 C 30,58 42,48 52,42 C 62,36 72,40 85,45 C 90,52 88,68 80,75 C 70,82 55,80 45,80" 
                fill="none" 
                stroke="rgba(251, 191, 36, 0.1)" 
                strokeWidth="0.4" 
                strokeDasharray="1, 1" 
              />
              
              {/* Animated glowing route path */}
              <motion.path 
                d="M 70,15 C 45,15 30,15 15,20 C 10,30 12,42 20,50 C 30,58 42,48 52,42 C 62,36 72,40 85,45 C 90,52 88,68 80,75 C 70,82 55,80 45,80" 
                fill="none" 
                stroke="url(#map-voyage-grad)" 
                strokeWidth="0.6" 
                strokeDasharray="2, 1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
              
              <defs>
                <linearGradient id="map-voyage-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="30%" stopColor="#f59e0b" />
                  <stop offset="70%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Islands as absolute positions */}
            {islandsData.map((island) => {
              const IslandIcon = island.icon;
              const isActive = island.id === activeIslandId;
              
              return (
                <button
                  key={island.id}
                  onClick={() => setActiveIslandId(island.id)}
                  className="absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group z-10 focus-ring rounded-full p-1"
                  style={{ top: island.gridPos.top, left: island.gridPos.left }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Sonar Pulsing effect */}
                    {isActive && (
                      <span className="absolute inline-flex h-12 w-12 rounded-full bg-amber-400/20 animate-ping opacity-75" />
                    )}

                    {/* Node Core */}
                    <div 
                      className={`h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? "bg-amber-400 border-amber-400 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-110" 
                          : "bg-slate-950 border-slate-700/60 text-slate-400 hover:border-amber-400/40 hover:text-slate-200"
                      }`}
                    >
                      <IslandIcon className="h-4.5 w-4.5" />
                    </div>

                    {/* Coordinates tooltip */}
                    <span 
                      className={`absolute top-11 scale-90 md:scale-100 whitespace-nowrap bg-slate-950/90 border text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
                        isActive 
                          ? "border-amber-400/50 text-amber-400 font-semibold" 
                          : "border-slate-800 text-slate-500 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {island.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Island Quick Tabs (Responsive view) */}
          <div className="flex flex-wrap gap-2.5 md:hidden justify-center relative z-10 my-auto">
            {islandsData.map((island) => {
              const IslandIcon = island.icon;
              const isActive = island.id === activeIslandId;
              return (
                <button
                  key={island.id}
                  onClick={() => setActiveIslandId(island.id)}
                  className={`flex h-11 items-center gap-1.5 px-4 rounded-xl border text-xs font-mono transition-all focus-ring ${
                    isActive 
                      ? "bg-amber-500 border-amber-500 text-slate-950 font-semibold shadow-[0_4px_12px_rgba(251,191,36,0.3)]" 
                      : "bg-slate-950/85 border-slate-800/80 text-slate-300"
                  }`}
                >
                  <IslandIcon className="h-3.5 w-3.5" />
                  <span>{island.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed HUD data screen for the active Island */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIslandId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex-1 glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl flex flex-col justify-between"
            >
              {/* Node Title & Coordinates */}
              <div>
                <div className="flex justify-between items-start gap-4 mb-4 pb-3.5 border-b border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-100 tracking-wide text-lg">{activeIsland.name}</h3>
                      <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                        <Radio className="h-2.5 w-2.5 text-amber-500/60" />
                        <span>COORDS: {activeIsland.coords}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-sans font-light mb-6">
                  {activeIsland.description}
                </p>

                {/* Skill Capability Progress Logs */}
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2">Technical Logs</div>
                  
                  {activeIsland.skills.map((skill, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-amber-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="h-1.5 w-full bg-slate-950 border border-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voyage Status Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span>SECTOR EXPLORATION: COMPLETE</span>
                <span className="text-amber-400">LOGGED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
