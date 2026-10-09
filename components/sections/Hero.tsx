"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import gsap from "gsap";

const badges = [
  "SaaS Development",
  "MCP Servers",
  "AI Agents",
  "Next.js",
  "React Native",
  "Cybersecurity",
];

const highlights = [
  { label: "SaaS Multi-Tenant", detail: "Cloud Architecture" },
  { label: "MCP Protocol v2.1", detail: "Custom AI Servers" },
  { label: "10+ Projects Shipped", detail: "Web & Mobile" },
  { label: "Zero-Trust Security", detail: "Defensive Engineering" },
];

export default function Hero({ active }: { active: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.08 }
      );
    }, heroRef);

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [active]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-[92px] pb-24 relative overflow-hidden text-stone-900 dark:text-white"
    >
      {/* ── HIGH-DEFINITION CRYSTAL CLEAR SUNRISE FOREST BACKGROUND WITH MOUSE PARALLAX ── */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * 14}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_panoramic_light_orange.jpg"
          alt="Golden Sunrise Pine Forest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />

        {/* Minimal Subtle Title Tint Only — Not Overpowering */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-transparent dark:from-[#0c0e12]/80 dark:via-[#0c0e12]/50 dark:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* ── LEFT-ALIGNED HERO CONTENT WITH SUBTLE TINT BACKING ── */}
        <div className="max-w-3xl text-left flex flex-col items-start space-y-6">
          
          {/* Status Pill */}
          <div className="hero-reveal opacity-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-bold text-stone-900 dark:text-stone-100 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="tracking-wide">AI BuildInfra • SaaS Systems &amp; MCP Protocol Developer</span>
          </div>

          {/* Headline (Left-Aligned with Crisp Contrast) */}
          <div className="space-y-1">
            <h1 className="hero-reveal opacity-0 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-stone-900 dark:text-white drop-shadow-sm">
              Building secure <br />
              <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-xs">
                Digital Experience
              </span> <br />
              with code <span className="text-[#ea580c] font-mono">&amp;</span> Ai
            </h1>
          </div>

          {/* Subtitle with Frosted Text Plate */}
          <div className="hero-reveal opacity-0 p-4 sm:p-5 rounded-2xl glass-panel max-w-2xl shadow-sm border border-white/80 dark:border-white/10">
            <p className="text-base sm:text-lg text-stone-800 dark:text-stone-100 leading-relaxed font-normal">
              Computer Science Engineer specializing in production <strong className="text-stone-950 dark:text-white font-extrabold">SaaS platforms</strong>, custom <strong className="text-stone-950 dark:text-white font-extrabold">Model Context Protocol (MCP) servers</strong>, and high-performance applications built with cybersecurity at the core.
            </p>
          </div>

          {/* Tech Badges */}
          <div className="hero-reveal opacity-0 flex flex-wrap gap-2 pt-1">
            {badges.map((b) => {
              const isHighlight = b === "SaaS Development" || b === "MCP Servers" || b === "AI Agents";
              return (
                <span
                  key={b}
                  className={`px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 shadow-xs ${
                    isHighlight
                      ? "bg-[#ea580c] text-white border border-orange-400/50 shadow-orange-500/25"
                      : "glass-panel text-stone-900 dark:text-stone-100 border-stone-300/80 dark:border-stone-700"
                  }`}
                >
                  {b}
                </span>
              );
            })}
          </div>

          {/* CTAs & Profile Shortcuts */}
          <div className="hero-reveal opacity-0 flex flex-wrap items-center gap-3.5 pt-2">
            <button
              id="heroViewProjects"
              onClick={() => handleScroll("projects")}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore SaaS &amp; Projects</span>
              <ArrowRight size={17} />
            </button>

            <a
              id="heroDownloadResume"
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-4 rounded-2xl glass-panel text-stone-900 dark:text-stone-100 hover:border-[#ea580c] hover:text-[#ea580c] font-extrabold text-sm transition-all duration-200 shadow-md"
            >
              <Download size={17} /> Resume
            </a>

            <div className="flex items-center gap-2.5 sm:ml-2">
              <a
                href="https://github.com/Shree-varshan-430"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile @Shree-varshan-430"
                className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel text-stone-900 dark:text-stone-100 hover:text-[#ea580c] hover:border-[#ea580c] transition-all shadow-md"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shree-varshan-r-aa3453383/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile Shree Varshan R"
                className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel text-stone-900 dark:text-stone-100 hover:text-[#ea580c] hover:border-[#ea580c] transition-all shadow-md"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="hero-reveal opacity-0 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            {highlights.map(({ label, detail }) => (
              <div
                key={label}
                className="p-4 rounded-2xl glass-panel border border-white/80 dark:border-white/10 shadow-md text-left"
              >
                <div className="text-xs sm:text-sm font-black text-[#ea580c]">
                  {label}
                </div>
                <div className="text-[11px] font-mono text-stone-700 dark:text-stone-300 mt-0.5 font-medium">
                  {detail}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
