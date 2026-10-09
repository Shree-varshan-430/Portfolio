"use client";

import { BadgeCheck, Trees, Search, Shield } from "lucide-react";

const certs = [
  {
    id: "cert-hubspot",
    initials: "HS",
    icon: Search,
    color: "#FF7A59",
    issuer: "HubSpot Academy",
    title: "SEO Certification",
    desc: "Search engine optimization, keyword strategy, architectural indexing, Core Web Vitals, and on-page optimization standards.",
    badge: "Certified",
  },
  {
    id: "cert-coursera",
    initials: "DF",
    icon: Shield,
    color: "#0056D2",
    issuer: "Coursera",
    title: "Digital Forensics & Cybersecurity",
    desc: "Cybersecurity fundamentals, incident response, evidence preservation, threat modeling, and defensive secure programming principles.",
    badge: "Completed",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative overflow-hidden bg-[var(--bg)] transition-colors">
      
      {/* ── REALISTIC FOREST THEME ELEMENTS: PINE HORIZON ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-40 text-orange-950/[0.03] dark:text-emerald-950/20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 200"
          fill="currentColor"
        >
          <path d="M0,120 L40,70 L80,120 L130,55 L180,120 L240,65 L300,120 L370,45 L440,120 L510,65 L580,120 L660,50 L740,120 L820,65 L900,120 L980,45 L1060,120 L1140,60 L1220,120 L1300,55 L1370,120 L1440,70 L1440,200 L0,200 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill shadow-2xs">
            <Trees size={13} className="text-[#ea580c]" />
            Certifications &amp; Credentials
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white mb-3 tracking-tight">
            Verified <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">Knowledge &amp; Credentials</span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Continuous learning in cybersecurity forensics, web architecture, and organic search optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map(({ id, initials, color, issuer, title, desc, badge }) => (
            <div
              key={id}
              id={id}
              className="gsap-reveal opacity-0 p-7 rounded-3xl glass-panel border border-stone-200/90 dark:border-stone-800 hover:border-orange-400/50 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center text-lg font-black shrink-0 shadow-xs"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-bold">{issuer}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <BadgeCheck size={13} />
                      {badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-stone-900 dark:text-white mb-2 group-hover:text-[#ea580c] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
