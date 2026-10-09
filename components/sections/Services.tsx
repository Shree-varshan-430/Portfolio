"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, Cpu, Brain, Globe, Smartphone, Shield, Sparkles, Trees } from "lucide-react";

const services = [
  {
    id: "service-saas",
    num: "01",
    icon: Layers,
    title: "SaaS Product Engineering",
    desc: "Architecting end-to-end multi-tenant SaaS platforms with automated subscription billing (Stripe), role-based access control, analytics pipelines, and secure cloud databases.",
    highlight: true,
    tag: "Enterprise SaaS",
  },
  {
    id: "service-mcp",
    num: "02",
    icon: Cpu,
    title: "MCP Servers & AI Toolchains",
    desc: "Developing custom Model Context Protocol (MCP) servers to interconnect LLMs with enterprise databases, local environments, APIs, and sandboxed code execution.",
    highlight: true,
    tag: "AI Protocol Spec",
  },
  {
    id: "service-ai",
    num: "03",
    icon: Brain,
    title: "AI Integrations & Autonomous Agents",
    desc: "Integrating state-of-the-art AI models, RAG vector search pipelines, and agentic workflows to automate complex business workflows with zero friction.",
    highlight: false,
    tag: "Agentic AI",
  },
  {
    id: "service-web",
    num: "04",
    icon: Globe,
    title: "Modern Web Development",
    desc: "Building blazing-fast web applications using Next.js and React with server-side rendering, responsive interfaces, and Core Web Vitals optimization.",
    highlight: false,
    tag: "Next.js & React",
  },
  {
    id: "service-mobile",
    num: "05",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    desc: "Creating native-feel mobile applications for iOS and Android using React Native and Expo with offline persistence and encrypted local data.",
    highlight: false,
    tag: "React Native",
  },
  {
    id: "service-security",
    num: "06",
    icon: Shield,
    title: "Cybersecurity & Secure Architecture",
    desc: "Implementing defense-in-depth security principles across web and API layers — preventing injection vulnerabilities, token leaks, and improper access controls.",
    highlight: false,
    tag: "SecOps & Defense",
  },
];

export default function Services() {
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
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white">
      
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR MISTY PINE RIDGE & CANOPY ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_elements_texture.jpg"
          alt="Sunlight Forest Canopy"
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
            Pine Ridge Biome • Capabilities &amp; Solutions
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white mb-3 tracking-tight drop-shadow-sm">
            What I <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">Design &amp; Build</span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
            Engineering robust SaaS applications, MCP server protocols, and intelligent software systems from concept to production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, num, icon: Icon, title, desc, highlight, tag }) => (
            <div
              key={id}
              id={id}
              className={`gsap-reveal opacity-0 p-7 rounded-3xl glass-panel transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl ${
                highlight
                  ? "border-orange-400/80 dark:border-orange-800/60 shadow-xl shadow-orange-500/10 ring-1 ring-orange-400/25"
                  : "border-stone-200/90 dark:border-stone-800 hover:border-orange-300"
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-xs ${
                      highlight
                        ? "bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white shadow-md shadow-orange-500/30"
                        : "bg-stone-100 dark:bg-stone-800 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-xs font-black text-stone-500 dark:text-stone-400">
                      {num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700">
                      {tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl text-stone-950 dark:text-white group-hover:text-[#ea580c] transition-colors duration-200 mb-2.5 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {desc}
                </p>
              </div>

              {highlight && (
                <div className="mt-6 pt-4 border-t border-orange-200/70 dark:border-stone-800 flex items-center gap-1.5 text-xs font-bold text-[#ea580c]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-ping" />
                  <span>Primary Specialization</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
