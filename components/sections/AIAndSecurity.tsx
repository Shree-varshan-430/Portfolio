"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, Cpu, Brain, Lock, Zap, ShieldCheck, Mountain } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Secure SaaS Multi-Tenancy",
    desc: "Isolating tenant datasets, enforcing encrypted database schemas, and applying granular RBAC authorization models across SaaS micro-architectures.",
    tag: "Data Isolation",
  },
  {
    icon: Cpu,
    title: "Safe MCP Protocol Bridges",
    desc: "Standardizing Model Context Protocol server endpoints with sandboxed execution, strict API scope limits, and token-level validation.",
    tag: "Tool Sandboxing",
  },
  {
    icon: Brain,
    title: "Intelligent AI Application Layer",
    desc: "Integrating foundational LLMs, embedding pipelines, and semantic search interfaces to build adaptive, intelligent digital products.",
    tag: "RAG & Agents",
  },
  {
    icon: Lock,
    title: "Defensive Software Development",
    desc: "Applying cybersecurity fundamentals, input validation, vulnerability surface minimization, and digital forensics principles to every release.",
    tag: "OWASP Hardened",
  },
  {
    icon: ShieldCheck,
    title: "Automated Autonomous Agents",
    desc: "Designing autonomous agent loops with deterministic guardrails, structured JSON outputs, and verifiable tool invocation checks.",
    tag: "Safe Autonomy",
  },
  {
    icon: Zap,
    title: "High Performance & Core Vitals",
    desc: "Delivering sub-second load times, optimized server-side rendering, asset caching, and SEO structure for maximum digital reach.",
    tag: "Sub-Second Speed",
  },
];

export default function AIAndSecurity() {
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
    <section
      id="ai-security"
      className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white"
    >
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR SNOWY MOUNTAIN PEAKS & GRANITE CRAGS ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/snowy_mountain_forest.jpg"
          alt="Majestic Snowy Mountain Peaks and Craggy Granite Rocks over Forest"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-transparent to-orange-50/40 dark:from-[#0c0e12]/70 dark:via-transparent dark:to-[#0c0e12]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gsap-reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-[#ea580c] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Mountain size={14} className="text-[#ea580c]" />
            Snowy Peaks Biome • Cyber Security
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white mb-4 tracking-tight drop-shadow-sm">
            Smart SaaS &amp; MCP with{" "}
            <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
              Defense-in-Depth Security
            </span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
            Every intelligent SaaS platform and Model Context Protocol server is engineered from the ground up with defensive security, data isolation, and performance optimization.
          </p>
        </div>

        {/* Feature Deck Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="gsap-reveal opacity-0 p-7 rounded-3xl glass-panel border border-stone-200/90 dark:border-stone-800 hover:border-orange-400/50 hover:-translate-y-2 hover:shadow-2xl group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-stone-800 text-[#ea580c] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-200 shadow-xs">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200/80 dark:border-stone-700">
                    {tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-stone-950 dark:text-white mb-2.5 group-hover:text-[#ea580c] transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Zero-Trust Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
