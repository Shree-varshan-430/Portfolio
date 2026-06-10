"use client";

import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { Monitor, Brain, Search, TrendingUp, Video, Compass, Sparkles } from "lucide-react";

interface Service {
  icon: any;
  title: string;
  description: string;
  tagline: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "Full Stack Development",
    tagline: "BUILDING PREMIUM SCALABLE WEB INTERFACES",
    description: "Designing end-to-end user interfaces and responsive server systems. Bootstrapping fast Next.js architectures integrated with robust databases.",
    capabilities: ["Next.js & React frameworks", "TypeScript configuration", "API design & MongoDB", "Vercel & AWS deployment"],
  },
  {
    icon: Brain,
    title: "AI & Automation Solutions",
    tagline: "INTEGRATING INTELLIGENCE INTO WORKFLOWS",
    description: "Building smart conversational bots and automated scripts. Connecting LLMs with tools to eliminate redundant manual data tasks.",
    capabilities: ["AI Agents & Chatbots", "API and tool integrations", "Automated email workflows", "LangChain & Vector search"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    tagline: "SAILING TO THE TOP OF CRAWLER INDEXES",
    description: "Improving search engine visibility by auditing Core Web Vitals, structuring JSON-LD metadata, and optimizing client-side performance.",
    capabilities: ["Technical & local audits", "Core Web Vitals adjustments", "Rich Schema markup injection", "Keyword ranking strategies"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & CRO",
    tagline: "CONVERTING TRAFFIC INTO REVENUE LEADS",
    description: "Setting up landing page architectures, marketing automation systems, and event tracking that turns passive clicks into conversions.",
    capabilities: ["Conversion rate audits", "Lead capture funnel setups", "Analytics & event hooks", "Automated email marketing"],
  },
  {
    icon: Video,
    title: "Video Editing & Motion Creative",
    tagline: "ENGAGING ENGAGEMENT VIA MOTION IMAGERY",
    description: "Editing footage and stitching custom vector motion graphics. Framing interactive stories that keep target audiences engaged.",
    capabilities: ["Premium narrative timelines", "Motion graphic assets", "Kinetic text typography", "Social channels optimization"],
  },
];

// Custom Holographic Card Component
function HolographicCard({ service, index }: { service: Service; index: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ServiceIcon = service.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate relative to the card
    const y = e.clientY - rect.top;  // y coordinate relative to the card
    setCoords({ x, y });
  };

  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 overflow-hidden cursor-default transition-all duration-300 hover:border-amber-400/30 focus-ring flex flex-col justify-between h-full shadow-lg"
      aria-label={`Service: ${service.title}`}
    >
      {/* Holographic Radial Reflection Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, rgba(251, 191, 36, 0.08), transparent 70%)`,
          }}
        />
      )}
      
      {/* Subtle coordinate markers grid inside each card */}
      <div className="absolute top-3 right-3 font-mono text-[8px] text-slate-700 select-none">
        SYS_LOG // {index + 1}
      </div>

      <div>
        {/* Header Icon */}
        <div className="h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center mb-6 group-hover:border-amber-400/40 group-hover:text-amber-300 transition-colors duration-300">
          <ServiceIcon className="h-5 w-5" />
        </div>

        {/* Subtitle Tagline */}
        <div className="text-[9px] font-mono text-slate-400 tracking-wider mb-2 uppercase">
          {service.tagline}
        </div>

        {/* Main Title */}
        <h3 className="text-xl font-bold font-sans text-slate-200 mb-3 group-hover:text-amber-400 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light mb-6">
          {service.description}
        </p>
      </div>

      {/* Bullet Capability Points */}
      <div className="mt-auto border-t border-slate-800/40 pt-4">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">Key Solutions</div>
        <ul className="space-y-2 text-xs font-sans text-slate-200 font-light">
          {service.capabilities.map((cap, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function SpecialAbilities() {
  return (
    <section id="special-abilities" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <Compass className="h-4.5 w-4.5" />
          <span>Section 05</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          Special Abilities
        </h2>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          Premium services designed to navigate businesses toward digital growth
        </p>
      </div>

      {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <HolographicCard key={idx} service={service} index={idx} />
        ))}
        
        {/* Final CTA Card inside Services Grid */}
        <motion.div
          tabIndex={0}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl p-6 md:p-8 border border-dashed border-slate-800 bg-slate-950/20 flex flex-col justify-between h-full min-h-[300px] focus-ring"
          aria-label="Need a Custom Expedition?"
        >
          <div className="absolute inset-0 coordinate-grid opacity-10 pointer-events-none" />
          
          <div>
            <div className="h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            
            <h3 className="text-xl font-bold font-sans text-slate-300 mb-3">
              Need a Custom Expedition?
            </h3>
            
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light">
              Do you have a unique project requirement, complex automation structure, or an ambitious SEO growth goal? Let's design a custom coordinates journey tailored to your needs.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("navigation-center");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary focus-ring w-full mt-6 gap-2"
            aria-label="Set Sail For Collaboration"
          >
            <span>Set Sail For Collaboration</span>
            <Compass className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
