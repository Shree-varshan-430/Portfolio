"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trees, Leaf } from "lucide-react";

const experiences = [
  {
    role: "Developer",
    company: "AI BuildInfra",
    type: "Engineering",
    typeAccent: true,
    desc: "Spearheading modern website development, mobile app developing, MCP servers, and SEO.\nBuilding secure, high-performance AI infrastructure and digital experiences.",
    tags: ["AI BuildInfra", "MCP Development", "Website Development", "App Developing", "Technical SEO", "Next.js", "React Native"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Digianalytix",
    type: "Professional",
    typeAccent: true,
    desc: "Engineered responsive frontend interfaces, React components, and optimized client platforms.\nCollaborated on real-world production codebases with high performance benchmarks.",
    tags: ["React", "JavaScript", "Responsive UI", "REST API", "Tailwind CSS"],
  },
  {
    role: "Creative & Digital Content Lead",
    company: "Learn and Nadinin",
    type: "Creative",
    typeAccent: false,
    desc: "Spearheaded video production and content architecture for online community growth.\nDeveloped digital storytelling workflows and user engagement strategies.",
    tags: ["Video Editing", "Content Strategy", "Digital Reach"],
  },
  {
    role: "Digital Media Developer",
    company: "Deepam Homeo Clinic",
    type: "Creative",
    typeAccent: false,
    desc: "Produced digital media, informational visual campaigns, and brand assets.\nGrew online digital presence and patient trust.",
    tags: ["Visual Design", "Video Production", "Brand Identity"],
  },
  {
    role: "Graphic & UI Designer",
    company: "Inspire Germany",
    type: "Creative",
    typeAccent: false,
    desc: "Crafted visual communications, marketing collateral, and UI mockups.\nMaintained strict alignment with international brand guidelines.",
    tags: ["UI Mockups", "Graphic Design", "Brand Systems"],
  },
];

export default function Experience() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white">
      
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR ALPINE FOREST TRAIL ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_panoramic_light_orange.jpg"
          alt="Alpine Forest Trail"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-transparent to-orange-50/40 dark:from-[#0c0e12]/70 dark:via-transparent dark:to-[#0c0e12]/60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill shadow-xs">
            <Trees size={13} className="text-[#ea580c]" />
            Alpine Trail Biome • Career &amp; Milestones
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white mb-3 tracking-tight drop-shadow-sm">
            Engineering &amp; <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">Development Journey</span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
            Hands-on journey building AI infrastructure, MCP systems, SaaS websites, mobile apps, and creative media.
          </p>
        </div>

        {/* Living Spine Timeline */}
        <div className="relative">
          {/* Vertical Forest Stem */}
          <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-gradient-to-b from-orange-400 via-amber-400 to-emerald-500 rounded-full opacity-60" />

          <div className="space-y-7 sm:space-y-8">
            {experiences.map(({ role, company, type, typeAccent, desc, tags }, idx) => (
              <div key={idx} className="gsap-reveal opacity-0 flex gap-5 sm:gap-7 relative">
                {/* Marker Node with Leaf Accent */}
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-10 h-10 rounded-2xl border-2 flex items-center justify-center z-10 relative shadow-sm glass-panel ${
                      typeAccent
                        ? "border-[#ea580c] text-[#ea580c]"
                        : "border-stone-300 dark:border-stone-700 text-stone-400"
                    }`}
                  >
                    {idx === 0 ? (
                      <Leaf size={16} className="text-[#ea580c]" />
                    ) : (
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          typeAccent ? "bg-[#ea580c]" : "bg-stone-400 dark:bg-stone-600"
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Content Card (Shortened Width) */}
                <div className="flex-1 pb-2">
                  <div
                    className={`p-5 sm:p-6 rounded-3xl glass-panel border transition-all duration-200 shadow-md ${
                      idx === 0
                        ? "border-orange-400/80 dark:border-orange-800/60 shadow-lg shadow-orange-500/10 ring-1 ring-orange-400/25 bg-gradient-to-br from-white/95 via-orange-50/40 to-amber-50/20 dark:from-stone-900/95 dark:to-orange-950/30"
                        : "border-stone-200/90 dark:border-stone-800 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-base sm:text-lg text-stone-950 dark:text-white">{role}</h3>
                          {idx === 0 && (
                            <span className="px-2.5 py-0.5 rounded-md bg-[#ea580c] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                              Current / Focus
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-bold text-[#ea580c]">{company}</span>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          typeAccent
                            ? "bg-orange-500/15 text-[#ea580c] border border-orange-500/25"
                            : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                        }`}
                      >
                        {type}
                      </span>
                    </div>

                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3.5 font-normal whitespace-pre-line max-w-2xl">
                      {desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-bold ${
                            t === "AI BuildInfra" || t === "MCP Development" || t === "Technical SEO"
                              ? "bg-orange-50/90 dark:bg-stone-800 border-orange-200 dark:border-orange-800/60 text-[#ea580c] dark:text-[#fb923c]"
                              : "bg-white/90 dark:bg-stone-800/80 border-stone-200/80 dark:border-stone-700 text-stone-800 dark:text-stone-300"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
