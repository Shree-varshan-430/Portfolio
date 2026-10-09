"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Waves } from "lucide-react";

const focuses = [
  "SaaS Multi-Tenant Cloud Architecture",
  "Model Context Protocol (MCP) Systems",
  "Full-Stack Web & Next.js Platforms",
  "Cross-Platform Mobile App Developing",
  "Cybersecurity & Digital Forensics",
  "Technical SEO & Core Web Vitals",
];

export default function About() {
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
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white">
      
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR ALPINE FOREST LAKE & MOUNTAIN REFLECTIONS ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_lake_mist.jpg"
          alt="Serene Alpine Forest Lake with Morning Mist and Mountain Reflections"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />
        {/* Minimal Title Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-transparent to-orange-50/30 dark:from-[#0c0e12]/70 dark:via-transparent dark:to-[#0c0e12]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Label */}
        <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill shadow-sm">
          <Waves size={13} className="text-[#ea580c]" />
          Alpine Lake Biome • Engineering Philosophy
        </div>

        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Left Description */}
          <div className="space-y-6 text-left">
            <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white leading-[1.15] tracking-tight drop-shadow-sm">
              Engineering Secure SaaS &amp; <br />
              <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
                Intelligent AI Solutions.
              </span>
            </h2>
            
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/80 dark:border-white/10 shadow-sm">
              <p className="text-stone-800 dark:text-stone-100 leading-relaxed text-base sm:text-lg font-normal mb-4">
                I am a Computer Science Engineer specializing in full-scale SaaS architecture, custom Model Context Protocol (MCP) servers, and AI-augmented web &amp; mobile solutions. Guided by cybersecurity fundamentals and digital forensics, I engineer digital platforms that are both lightning-fast and impenetrable.
              </p>
              
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-base font-normal">
                My core focus spans the entire product stack — from architecting cloud SaaS billing, multi-tenancy, and role-based authorization, to standardizing MCP protocol bridges that allow AI agents to safely execute actions against databases and local toolchains.
              </p>
            </div>

            {/* Focuses Matrix */}
            <div className="gsap-reveal opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {focuses.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel text-xs sm:text-sm text-stone-900 dark:text-stone-100 font-bold shadow-xs border border-stone-200/80 dark:border-stone-800"
                >
                  <div className="w-6 h-6 rounded-lg bg-orange-500/15 text-[#ea580c] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
