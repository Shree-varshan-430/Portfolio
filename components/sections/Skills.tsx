"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, Cpu, Code2, Smartphone, Shield, Zap, Trees } from "lucide-react";

const categories = [
  {
    icon: Layers,
    title: "SaaS & Cloud Backend",
    skills: ["Multi-Tenant Architecture", "Stripe Subscriptions", "Supabase & Postgres", "Node.js & Express", "REST / tRPC APIs", "Auth0 & Clerk"],
    accent: true,
    tag: "Cloud Core",
  },
  {
    icon: Cpu,
    title: "MCP & AI Toolchains",
    skills: ["Model Context Protocol (MCP)", "Custom MCP Servers", "LLM APIs (Claude / OpenAI)", "Vector DBs & Embeddings", "AI Agents", "Automated Workflows"],
    accent: true,
    tag: "AI Protocol",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "GSAP Animations", "Responsive UI"],
    accent: false,
    tag: "Modern Web",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Expo", "Cross-Platform iOS/Android", "Mobile Security", "Local Cache Sync"],
    accent: false,
    tag: "Native App",
  },
  {
    icon: Shield,
    title: "Security & Defense",
    skills: ["Secure API Design", "Digital Forensics", "Input Sanitization", "RBAC Access Control", "Data Encryption"],
    accent: true,
    tag: "Zero Trust",
  },
  {
    icon: Zap,
    title: "Performance & Growth",
    skills: ["Core Web Vitals", "Technical SEO", "Speed Optimization", "Google Analytics", "Git & CI/CD"],
    accent: false,
    tag: "SEO & Scale",
  },
];

export default function Skills() {
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
      id="skills"
      className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white"
    >
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR ANCIENT REDWOOD GROVE ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_redwood_grove.jpg"
          alt="Ancient Redwood Grove with Mossy Boulders and Sunbeams"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-transparent to-orange-50/40 dark:from-[#0c0e12]/70 dark:via-transparent dark:to-[#0c0e12]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill shadow-xs">
            <Trees size={13} className="text-[#ea580c]" />
            Redwood Grove Biome • Technical Architecture
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white mb-3 tracking-tight drop-shadow-sm">
            Core Stack for <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">SaaS, MCP &amp; AI</span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
            Full-stack engineering toolkit designed for scalability, protocol standardization, and defense-in-depth security.
          </p>
        </div>

        {/* Skills Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, title, skills, accent, tag }) => (
            <div
              key={title}
              className={`gsap-reveal opacity-0 p-6 sm:p-7 rounded-3xl glass-panel transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl ${
                accent
                  ? "border-orange-400/80 dark:border-orange-800/60 shadow-lg shadow-orange-500/10 ring-1 ring-orange-400/25"
                  : "border-stone-200/90 dark:border-stone-800 hover:border-orange-300"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-xs ${
                      accent
                        ? "bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 group-hover:bg-[#ea580c] group-hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-base sm:text-lg text-stone-950 dark:text-white">{title}</h3>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700">
                  {tag}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      accent
                        ? "bg-orange-50/95 dark:bg-orange-950/50 text-stone-900 dark:text-orange-200 border border-orange-200 dark:border-orange-800/70"
                        : "bg-white/90 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
