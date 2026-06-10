"use client";

import { motion } from "framer-motion";
import { Compass, ExternalLink, GitBranch, Sparkles, Award } from "lucide-react";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    name: "GrandLine CRM & AI Orchestrator",
    description: "A comprehensive SaaS dashboard combining full-stack CRM client pipelines with autonomous AI agent triggers for automated sales messaging and workflow follow-ups.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "AI Agents"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    name: "Navigator SEO Audit Suite",
    description: "An automated technical SEO auditing scanner processing websites for Core Web Vitals, indexability, and structured JSON-LD schemas. Deployed on real-world client sites including GK Home Construction and RL Edu Skills.",
    tech: ["React", "TypeScript", "Node.js", "Technical SEO", "REST APIs"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    name: "Logbook Chatbot & voice assistant",
    description: "An intelligent chatbot system utilizing custom voice assistant APIs and document training vectors to deliver instantaneous support automation.",
    tech: ["Next.js", "Firebase", "AI Integration", "Workflow Automation"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    name: "Portside Lead Gen Engine",
    description: "A conversion rate optimized (CRO) landing page builder integrated with lead triggers, webhooks, and automated analytical marketing tracking.",
    tech: ["Next.js", "Tailwind CSS", "Analytics", "Lead Generation"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    name: "Moment Keeper Mobile App",
    description: "A secure cross-platform mobile journal application designed to log daily timeline media and milestone logs with automatic offline synchronization.",
    tech: ["React Native", "Firebase", "TypeScript", "Redux Toolkit"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    name: "Construction Connect App",
    description: "A real-time coordination dashboard connecting general contractors, crew sub-contractors, and clients. Logs payment phases and blueprint document updates.",
    tech: ["React", "Node.js", "Socket.io", "Express.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
];

export default function TreasureCollection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="treasure-collection" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <Sparkles className="h-4.5 w-4.5 text-amber-400 animate-pulse" />
          <span>Section 03</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          Treasure Collection
        </h2>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          A showcase of products and experiments uncovered on the tech journey
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const isHovered = hoveredIdx === idx;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 transition-all duration-300 hover:border-amber-400/40 relative flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
            >
              {/* Gold light burst animation on card hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/[0.02] to-amber-500/[0.05] pointer-events-none transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`} 
              />
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/[0.01] rounded-full blur-2xl group-hover:bg-amber-400/5 transition-all duration-500" />

              <div>
                {/* Header: Project Name & Animated Treasure Chest SVG */}
                <div className="flex justify-between items-start gap-4 mb-5">
                  <h3 className="text-xl font-bold font-sans text-slate-100 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Minimalist SVG Treasure Chest animation */}
                  <div className="relative h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-400/40 group-hover:text-amber-300 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500"
                    >
                      {/* Interactive Chest Lid (slides/opens upward on hover) */}
                      <g className="origin-bottom transition-transform duration-500" style={{ transform: isHovered ? 'translateY(-2px) rotateX(-20deg)' : 'none' }}>
                        <path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                        <path d="M12 5v6" />
                      </g>
                      {/* Chest Base */}
                      <rect x="2" y="11" width="20" height="8" rx="1" />
                      <circle cx="12" cy="14" r="1" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light mb-6">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.8 rounded-md bg-slate-900/60 border border-slate-800/80 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-slate-800/40 pt-4 mt-auto">
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-450 focus-ring rounded-lg p-1.5 transition-colors"
                  aria-label={`View GitHub source code for ${project.name}`}
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.demoLink}
                  className="btn-secondary focus-ring h-9 text-xs px-4 gap-1.5 rounded-xl"
                  aria-label={`View Live Project for ${project.name}`}
                >
                  <span>View Live Project</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
