"use client";

import { useState, useEffect } from "react";
import { Compass, Menu, X, Anchor } from "lucide-react";

interface NavItem {
  name: string;
  id: string;
  degrees: number;
}

const navItems: NavItem[] = [
  { name: "Captain's Log", id: "captains-log", degrees: 0 },
  { name: "Skills Islands", id: "skills-islands", degrees: 60 },
  { name: "Treasure Collection", id: "treasure-collection", degrees: 120 },
  { name: "The Grand Route", id: "grand-route", degrees: 180 },
  { name: "Special Abilities", id: "special-abilities", degrees: 240 },
  { name: "Exploration Log", id: "exploration-log", degrees: 300 },
  { name: "Navigation Center", id: "navigation-center", degrees: 330 },
];

export default function NavigationMap() {
  const [activeSection, setActiveSection] = useState("");
  const [compassAngle, setCompassAngle] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            setCompassAngle(item.degrees);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string, degrees: number) => {
    setCompassAngle(degrees);
    setMobileMenuOpen(false);
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8">
      <nav className="mx-auto max-w-7xl glass-panel rounded-2xl border border-slate-800/40 px-6 py-3.5 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Monogram branding */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center h-9 w-9 rounded-lg bg-slate-900 border border-slate-700/60 group-hover:border-amber-500/50 transition-colors duration-300">
            <Anchor className="h-4.5 w-4.5 text-slate-300 group-hover:text-amber-400 group-hover:rotate-12 transition-all duration-300" />
            <div className="absolute inset-0 rounded-lg bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
          <span className="font-heading tracking-[0.2em] text-sm text-slate-100 font-semibold group-hover:text-amber-400 transition-colors duration-300">
            VARSHAN
          </span>
        </a>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id, item.degrees)}
                onMouseEnter={() => setCompassAngle(item.degrees)}
                onMouseLeave={() => {
                  const currentItem = navItems.find((i) => i.id === activeSection);
                  if (currentItem) setCompassAngle(currentItem.degrees);
                }}
                className={`text-xs font-mono tracking-wider transition-all duration-300 hover:text-amber-400 cursor-pointer relative py-1 ${
                  isActive ? "text-amber-400" : "text-slate-400"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />
                )}
              </button>
            );
          })}
        </div>

        {/* HUD Interactive Compass Needle (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-slate-800/60">
          <div className="text-[10px] font-mono text-slate-500 text-right leading-tight">
            <div className="text-slate-400">BEARING</div>
            <div className="text-amber-400/80 font-bold">{compassAngle}° N</div>
          </div>
          <div className="relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-950 border border-slate-800 shadow-inner">
            <Compass 
              className="h-5.5 w-5.5 text-slate-600 transition-transform duration-500 ease-out" 
              style={{ transform: `rotate(${compassAngle}deg)` }}
            />
            {/* Compass Core Glowing Red Center Indicator */}
            <div className="absolute h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
          </div>
        </div>

        {/* Mobile Menu Toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-300 hover:text-amber-400 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer (Opaque Solid Background to prevent background text clashing) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 p-6 bg-slate-950 border border-slate-800/90 shadow-[0_10px_50px_rgba(0,0,0,0.8)] rounded-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800/40">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Navigation Logs</span>
            <span className="text-[10px] font-mono text-amber-400 font-bold">{compassAngle}° BEARING</span>
          </div>
          
          <div className="flex flex-col gap-3.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id, item.degrees)}
                className={`text-left text-sm py-2 px-3 rounded-lg font-sans transition-all flex items-center justify-between ${
                  activeSection === item.id 
                    ? "bg-slate-900/60 border border-slate-800 text-amber-400 font-medium" 
                    : "text-slate-400 hover:text-amber-400"
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] font-mono text-slate-500">{item.degrees}°</span>
              </button>
            ))}
          </div>

          <div className="mt-2 pt-4 border-t border-slate-800/40 flex justify-center">
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Compass 
                className="h-4.5 w-4.5 text-amber-400 animate-spin" 
                style={{ animationDuration: '10s' }}
              />
              <span>SAILING THE TECH GRAND LINE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
