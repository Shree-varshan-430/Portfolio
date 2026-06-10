"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Anchor, Compass, Flag, MapPin, Award, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  coords: string;
  icon: any;
  status: "Completed" | "Current Log";
}

const milestones: Milestone[] = [
  {
    year: "VOYAGE START",
    title: "Foundations & Self-Discovered Seas",
    subtitle: "Self-Learning Stack & Core Concepts",
    description: "Ventured into web engineering. Acquired deep understanding of HTML, CSS, JavaScript, databases, and core software design patterns, building initial terminal and full-stack web architectures.",
    coords: "LAT 02° N / LON 12° E",
    icon: Anchor,
    status: "Completed",
  },
  {
    year: "ACADEMIC PORT",
    title: "B.Tech Engineering Graduation",
    subtitle: "Formal Computer Science Foundation",
    description: "Completed academic engineering degree, specializing in computing, algorithm design, data structures, and relational networks. Structured full-stack REST API development flow.",
    coords: "LAT 10° N / LON 78° E",
    icon: Award,
    status: "Completed",
  },
  {
    year: "AI EXPEDITION",
    title: "AI & Workflow Automation Integration",
    subtitle: "Expanding Cognitive Capabilities",
    description: "Integrated language models, trained custom vector models, and built autonomous chatbot logic. Configured triggers and actions to replace manual operational bottlenecks.",
    coords: "LAT 24° N / LON 98° E",
    icon: Compass,
    status: "Completed",
  },
  {
    year: "SEO & MARKETING SEAS",
    title: "SEO & Conversion Optimization Port",
    subtitle: "Sailing for Search & Revenue Audits",
    description: "Configured local & technical SEO frameworks. Implemented Core Web Vitals optimizations and built funnel-based landing pages to double conversion rates and capture leads.",
    coords: "LAT 38° N / LON 115° E",
    icon: Flag,
    status: "Current Log",
  },
];

export default function GrandRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for drawing the path
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      id="grand-route" 
      className="py-24 px-4 max-w-7xl mx-auto relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-20">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <Anchor className="h-4.5 w-4.5" />
          <span>Section 04</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          Experience
        </h2>
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mt-1 block">
          The Grand Route
        </span>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          A scroll-drawn path tracing milestones, learning ports, and achievements
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center line container */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-900 -translate-x-[1px]" />

        {/* Scroll-animated SVG Overlay Drawing Route */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-4 -translate-x-1/2 pointer-events-none z-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="rgba(30, 41, 59, 0.2)"
              strokeWidth="2"
            />
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#fbbf24"
              strokeWidth="2.5"
              style={{ scaleY }}
              className="origin-top"
            />
          </svg>
        </div>

        {/* Milestone Rows */}
        <div className="space-y-16">
          {milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            const MilestoneIcon = milestone.icon;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Visual node on timeline line */}
                <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border border-slate-800">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className={`h-2.5 w-2.5 rounded-full ${
                      milestone.status === "Completed" ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]" : "bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div 
                    tabIndex={0} 
                    className="group glass-panel rounded-2xl p-5 md:p-6 border border-slate-800/60 relative overflow-hidden transition-all duration-300 hover:border-amber-400/30 focus-ring"
                    aria-label={`Milestone: ${milestone.title}, Year: ${milestone.year}`}
                  >
                    {/* Log Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 border-b border-slate-800/40 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center">
                          <MilestoneIcon className="h-4 w-4" />
                        </div>
                        <h3 className="font-sans font-bold text-slate-100 text-sm md:text-base leading-tight group-hover:text-amber-400 transition-colors">
                          {milestone.title}
                        </h3>
                      </div>
                      
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 shrink-0 uppercase tracking-widest">
                        {milestone.year}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-200 mb-2 font-medium">
                      {milestone.subtitle}
                    </div>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light mb-4">
                      {milestone.description}
                    </p>

                    {/* Coordinates & Status check */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-slate-900/60 pt-3 text-[9px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-amber-500/60" />
                        <span>{milestone.coords}</span>
                      </span>
                      
                      <span className={`flex items-center gap-1 uppercase font-semibold ${
                        milestone.status === "Completed" ? "text-slate-400" : "text-sky-400"
                      }`}>
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{milestone.status}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
