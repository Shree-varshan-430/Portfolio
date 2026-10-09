"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectItem {
  id: string;
  img: string;
  name: string;
  category: string;
  filter: "saas-mcp" | "web" | "mobile" | "desktop";
  badgeType?: "saas" | "mcp" | "featured";
  desc: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "proj-seo-flow-saas",
    img: "/images/project_saas.jpg",
    name: "SEO Flow",
    category: "AI SaaS Platform",
    filter: "saas-mcp",
    badgeType: "saas",
    featured: true,
    desc: "Full-stack multi-tenant AI SaaS platform with automated SEO intelligence, subscription tiers, Stripe billing, role-based authorization, and real-time interactive analytics.",
    tags: ["Next.js", "SaaS Architecture", "Stripe Billing", "Supabase", "Technical SEO", "TypeScript"],
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-human-craft-ui-mcp",
    img: "/images/project_mcp.jpg",
    name: "Human Craft UI",
    category: "MCP Server & Agent Toolchain",
    filter: "saas-mcp",
    badgeType: "mcp",
    featured: true,
    desc: "Custom Model Context Protocol (MCP) server establishing real-time standard bridges between AI agent toolchains, human design archetypes, UI auditing, vector stores, and live databases.",
    tags: ["MCP Protocol", "AI Tooling", "Node.js", "TypeScript", "UI Auditing", "Vector DB"],
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-rl-edu",
    img: "/images/project_edu.jpg",
    name: "RL Edu Skills Website",
    category: "Education Platform",
    filter: "web",
    desc: "Developed a full-featured Next.js education platform with modern UI, high-speed performance optimization, and seamless user experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    link: "https://rleduskills.com/",
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-gk-construction",
    img: "/images/project_construction.jpg",
    name: "GK Home Construction",
    category: "Business Website + SEO + App",
    filter: "web",
    desc: "Engineered web solutions, technical SEO architecture, and business applications for a construction company to accelerate digital discovery and qualified leads.",
    tags: ["Next.js", "Technical SEO", "Mobile Dev", "Analytics"],
    link: "https://gkhomeconstruction.com/",
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-bio-artha",
    img: "/images/project_biotech.jpg",
    name: "Bio Artha Labs",
    category: "Biotech Website + ERP",
    filter: "web",
    desc: "Created a scientific web portal and integrated ERP workflow solutions for a biotechnology laboratory organization.",
    tags: ["Next.js", "ERP Systems", "React", "Secure Auth"],
    link: "https://bioarthalabs.com/",
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-prisma",
    img: "/images/project_stories.jpg",
    name: "Prisma Stories",
    category: "Creative Website",
    filter: "web",
    desc: "Storytelling web experience crafted with Next.js, fluid micro-animations, and clean typographic hierarchy.",
    tags: ["Next.js", "Animations", "TypeScript"],
    link: "https://primsastoriesya.com/",
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-moment",
    img: "/images/project_mobile.jpg",
    name: "Moment Keeper",
    category: "Mobile Application",
    filter: "mobile",
    desc: "Personal cross-platform mobile application for tracking critical milestones and life memories with local encryption and intuitive UX.",
    tags: ["React Native", "Expo", "Mobile Security"],
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-construction-connect",
    img: "/images/project_marketplace.jpg",
    name: "Construction Connect",
    category: "Marketplace App",
    filter: "mobile",
    desc: "Mobile marketplace platform bridging construction contractors with clients for verified milestone bidding and management.",
    tags: ["React Native", "Node.js", "Supabase", "REST API"],
    github: "https://github.com/Shree-varshan-430",
  },
  {
    id: "proj-loom",
    img: "/images/project_desktop.jpg",
    name: "Loom Manager",
    category: "Desktop Software",
    filter: "desktop",
    desc: "React & Electron desktop software developed for manufacturing and business operations with offline-first local database sync.",
    tags: ["Electron", "React", "Desktop Software", "SQLite"],
    github: "https://github.com/Shree-varshan-430",
  },
];

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "saas-mcp", label: "SaaS & MCP", icon: Sparkles },
  { id: "web", label: "Web Platforms" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "desktop", label: "Desktop & ERP" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
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

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.filter === activeTab;
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white">
      
      {/* ── BIOME SCENARIO: CRYSTAL CLEAR CASCADING FOREST WATERFALL & RIVER ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src="/images/forest_waterfall_river.jpg"
          alt="Cascading Forest Waterfall and Mountain River"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 dark:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-transparent to-orange-50/40 dark:from-[#0c0e12]/70 dark:via-transparent dark:to-[#0c0e12]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill shadow-xs">
            <Sparkles size={13} className="text-[#ea580c]" />
            Waterfall River Biome • Featured Builds
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white mb-3 tracking-tight drop-shadow-sm">
            SaaS, MCP <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">&amp; Digital Platforms</span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
            From multi-tenant AI SaaS systems and custom MCP protocol servers to live production websites &amp; mobile applications.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="gsap-reveal opacity-0 flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#ea580c] text-white shadow-lg shadow-orange-500/30 scale-[1.02]"
                    : "glass-panel text-stone-900 dark:text-stone-100 hover:border-orange-400"
                }`}
              >
                {Icon && <Icon size={14} className={isActive ? "text-white" : "text-[#ea580c]"} />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(({ id, img, name, category, badgeType, desc, tags, link, github, featured }) => (
            <article
              key={id}
              id={id}
              className={`gsap-reveal opacity-0 group rounded-3xl overflow-hidden glass-panel transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl ${
                featured
                  ? "border-orange-400/80 dark:border-orange-800/60 shadow-xl shadow-orange-500/10 ring-1 ring-orange-400/30"
                  : "border-stone-200/90 dark:border-stone-800 hover:border-orange-400/50"
              }`}
            >
              <div>
                {/* Visual Viewport */}
                <div className="relative overflow-hidden aspect-[16/10] bg-stone-100 dark:bg-stone-800">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent pointer-events-none" />
                  
                  {/* Category & Spec Badges */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-stone-900/90 text-white text-[11px] font-bold backdrop-blur-md border border-white/15 shadow-xs">
                      {category}
                    </span>
                    {badgeType === "saas" && (
                      <span className="px-2.5 py-1 rounded-full bg-[#ea580c] text-white text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow-xs">
                        <Layers size={11} /> SaaS
                      </span>
                    )}
                    {badgeType === "mcp" && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow-xs">
                        <Cpu size={11} /> MCP
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-extrabold text-lg sm:text-xl text-stone-950 dark:text-white group-hover:text-[#ea580c] transition-colors duration-200 leading-snug mb-2.5">
                    {name}
                  </h3>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed line-clamp-3 font-normal">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-stone-100/90 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700 text-[11px] text-stone-800 dark:text-stone-200 font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3.5 pt-3.5 border-t border-stone-200/70 dark:border-stone-800">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors"
                    >
                      <span>Live Platform</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-800 dark:text-stone-200 hover:text-[#ea580c] transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Shree-varshan-430"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass-panel text-stone-900 dark:text-stone-100 hover:border-[#ea580c] hover:text-[#ea580c] text-sm font-extrabold transition-all shadow-md"
          >
            <GithubIcon size={17} />
            Explore All Open Source Repositories (@Shree-varshan-430)
          </a>
        </div>

      </div>
    </section>
  );
}
