"use client";

import { useState, useEffect } from "react";
import { Compass, Menu, X, Anchor, Sun, Moon, Keyboard } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

interface NavItem {
  name: string;
  id: string;
  degrees: number;
}

const navItems: NavItem[] = [
  { name: "About", id: "captains-log", degrees: 0 },
  { name: "Skills", id: "skills-islands", degrees: 72 },
  { name: "Projects", id: "treasure-collection", degrees: 144 },
  { name: "Experience", id: "grand-route", degrees: 216 },
  { name: "Services", id: "special-abilities", degrees: 288 },
  { name: "Hire me", id: "navigation-center", degrees: 330 },
];

export default function NavigationMap() {
  const [activeSection, setActiveSection] = useState("");
  const [compassAngle, setCompassAngle] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  // Intersection Observer for highlighting sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px", // triggers when section is in viewport focus
      threshold: 0.02,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          const item = navItems.find((i) => i.id === id);
          if (item) setCompassAngle(item.degrees);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-amber-400 origin-left z-50 shadow-[0_0_8px_#fbbf24]" 
        style={{ scaleX }} 
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8">
        <nav className="mx-auto max-w-7xl glass-panel rounded-2xl border border-slate-800/40 px-6 py-3.5 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {/* Monogram branding */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
              setCompassAngle(0);
            }}
            className="flex items-center gap-2 group cursor-pointer focus-ring rounded-lg p-0.5"
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
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={() => setCompassAngle(item.degrees)}
                  onMouseLeave={() => {
                    const currentItem = navItems.find((i) => i.id === activeSection);
                    if (currentItem) setCompassAngle(currentItem.degrees);
                  }}
                  className={`text-xs font-mono tracking-wider transition-all duration-300 hover:text-amber-400 cursor-pointer relative py-1 focus-ring rounded-md px-1.5 ${
                    isActive ? "text-amber-400" : "text-slate-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* HUD Interactive Control Panel (Desktop) */}
          <div className="hidden lg:flex items-center gap-3.5 pl-4 border-l border-slate-800/60">
            {/* Keyboard HUD Trigger */}
            <div className="group relative">
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("toggle-command-menu"));
                }}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-450 hover:text-amber-400 transition-colors focus-ring"
                aria-label="Open HUD Command Menu"
              >
                <Keyboard className="h-4.5 w-4.5 text-slate-400 hover:text-amber-400" />
              </button>
              <span className="absolute bottom-11 right-0 scale-90 whitespace-nowrap bg-slate-950/90 border border-slate-800/80 text-[9px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-slate-300">
                Press [/] for HUD menu
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-450 hover:text-amber-400 transition-colors focus-ring"
              aria-label="Toggle Theme Mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-slate-400 hover:text-amber-400" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-slate-400 hover:text-amber-400" />
              )}
            </button>

            <div className="text-[10px] font-mono text-slate-500 text-right leading-tight">
              <div className="text-slate-400">BEARING</div>
              <div className="text-amber-400/80 font-bold">{compassAngle}° N</div>
            </div>
            <div className="relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-950 border border-slate-800 shadow-inner">
              <Compass 
                className="h-5.5 w-5.5 text-slate-600 transition-transform duration-500 ease-out" 
                style={{ transform: `rotate(${compassAngle}deg)` }}
              />
              <div className="absolute h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
            </div>
          </div>

          {/* Mobile Controls Row */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-300 hover:text-amber-400 transition-colors focus-ring"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-slate-450 hover:text-amber-400" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-slate-450 hover:text-amber-400" />
              )}
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-300 hover:text-amber-400 transition-colors focus-ring"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setCompassAngle(item.degrees);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm py-2 px-3 rounded-lg font-sans transition-all flex items-center justify-between focus-ring ${
                    activeSection === item.id 
                      ? "bg-slate-900/60 border border-slate-800 text-amber-400 font-medium" 
                      : "text-slate-400 hover:text-amber-400"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">{item.degrees}°</span>
                </a>
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
    </>
  );
}
