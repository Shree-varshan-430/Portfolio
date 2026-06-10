"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, Award, Target, User, ShieldAlert } from "lucide-react";

export default function CaptainsLog() {
  const achievements = [
    { label: "B.Tech Graduate", desc: "Solid engineering foundation, analytical thinking, and problem-solving skills." },
    { label: "Full Stack Mastery", desc: "Expertise in building scalable Next.js, React, Node.js, and MongoDB architectures." },
    { label: "AI & Automation Pioneer", desc: "Deploying autonomous AI agents, chatbots, and optimized workflow integrations." },
    { label: "SEO & Digital Growth", desc: "Technical SEO configurations, conversion audits, and marketing funnel automation." },
  ];

  const goals = [
    "Build modular, self-improving AI workflows that replace complex manual pipelines.",
    "Help businesses establish a dominant search footprint and scale lead generation systems.",
    "Constantly explore and integrate emerging technologies along the tech frontier."
  ];

  return (
    <section id="captains-log" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <BookOpen className="h-4.5 w-4.5" />
          <span>Section 01</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          The Captain's Log
        </h2>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Captain's ID Badge (Luxury Glassmorphism Card) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl relative overflow-hidden"
        >
          {/* Top light reflections */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

          {/* Compass grid inside card */}
          <div className="absolute bottom-4 right-4 text-[70px] font-bold font-mono opacity-5 text-slate-400 pointer-events-none">
            01
          </div>

          <div className="flex flex-col items-center text-center gap-5">
            {/* Styled Avatar Placeholder (Digital Compass Crest) */}
            <div className="relative h-32 w-32 rounded-full border-2 border-dashed border-slate-700 p-2 flex items-center justify-center bg-slate-950/80 shadow-inner group">
              <div className="absolute inset-2 rounded-full border border-amber-500/20 group-hover:border-amber-500/50 transition-colors duration-300" />
              <Compass className="h-14 w-14 text-amber-400/70 group-hover:text-amber-400 group-hover:rotate-45 transition-all duration-500" />
              {/* Outer orbit marker */}
              <div className="absolute w-2.5 h-2.5 bg-amber-400 rounded-full -top-1 right-8 animate-pulse shadow-[0_0_8px_#fbbf24]" />
            </div>

            {/* Crew/Vessel Details */}
            <div className="w-full">
              <h3 className="text-xl font-bold font-sans text-slate-100">Shree Varshan</h3>
              <p className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mt-1">Captain & Tech Explorer</p>
              
              <div className="mt-6 space-y-2.5 border-t border-slate-800/60 pt-5 text-left text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-900/60">
                  <span className="text-slate-400 uppercase">Registry:</span>
                  <span className="text-slate-200 font-medium">B.TECH FULL-STACK</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900/60">
                  <span className="text-slate-400 uppercase">Sector:</span>
                  <span className="text-slate-200 font-medium">AI / WEB / SEO / CREATIVE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900/60">
                  <span className="text-slate-400 uppercase">Vessel:</span>
                  <span className="text-slate-200 font-medium">IDEAS TO DIGITAL REALITY</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 uppercase">Voyage Path:</span>
                  <span className="text-amber-450 font-bold">THE GRAND LINE OF TECH</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative Journal (Story / Goals / Achievements) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Main Story Log */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl relative">
            <h3 className="text-lg font-mono text-slate-300 flex items-center gap-2 mb-4 border-b border-slate-800/60 pb-3">
              <User className="h-4.5 w-4.5 text-amber-400" />
              <span>LOGENTRY_01: The Journey Begins</span>
            </h3>
            
            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans font-light">
              I view software development not just as writing syntax, but as an ongoing exploration into uncharted digital territories. As a B.Tech graduate, my focus has been to sail through the ever-evolving oceans of Next.js, React, APIs, and microservices. I build applications that are clean, performant, and scale seamlessly.
            </p>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans font-light mt-4">
              But web development is only one coordinates system on my compass. I actively venture into AI agents and workflow automation, building conversational interfaces that simplify human workflows. I align these technical abilities with specialized digital marketing, technical SEO, and conversion optimization to ensure that the products I build don't just exist—they sail to the top of search rankings and drive tangible business revenue.
            </p>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3 }}
                className="glass-panel-light rounded-2xl p-5 border border-slate-800/40 flex flex-col gap-2 transition-all duration-300 hover:border-amber-500/20"
              >
                <div className="flex items-center gap-2 font-semibold text-slate-150 text-sm">
                  <Award className="h-4.5 w-4.5 text-amber-400 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Strategic Goals Log */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl">
            <h3 className="text-lg font-mono text-slate-300 flex items-center gap-2 mb-4 border-b border-slate-800/60 pb-3">
              <Target className="h-4.5 w-4.5 text-amber-400" />
              <span>STRATEGIC_OBJECTIVES</span>
            </h3>
            <ul className="space-y-3.5 text-slate-200 text-sm font-sans font-light">
              {goals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-amber-400 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
