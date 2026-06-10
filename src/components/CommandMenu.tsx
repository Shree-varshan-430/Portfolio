"use client";

import { useEffect, useState, useRef } from "react";
import { Compass, Search, Keyboard, CornerDownLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandItem {
  key: string;
  name: string;
  id: string;
  description: string;
}

const commandItems: CommandItem[] = [
  { key: "1", name: "About Me", id: "captains-log", description: "Review B.Tech credentials and developer logs" },
  { key: "2", name: "Tech Stack", id: "skills-islands", description: "Explore framework capabilities and skills islands" },
  { key: "3", name: "Projects Catalog", id: "treasure-collection", description: "Inspect CRM, SEO suites, and full stack products" },
  { key: "4", name: "Experience Route", id: "grand-route", description: "View developer timeline and learning ports" },
  { key: "5", name: "Services Suite", id: "special-abilities", description: "Inspect AI solutions, SEO, and full-stack services" },
  { key: "6", name: "Hire me", id: "navigation-center", description: "Transmit message node to connect coordinates" },
];

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Listen for / key and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle menu with / key, unless user is typing in a form input
      if (e.key === "/" && !isOpen) {
        const activeEl = document.activeElement?.tagName;
        if (activeEl !== "INPUT" && activeEl !== "TEXTAREA") {
          e.preventDefault();
          setIsOpen(true);
        }
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      } else if (isOpen) {
        // Direct index selection via numbers 1-6
        if (["1", "2", "3", "4", "5", "6"].includes(e.key)) {
          const item = commandItems.find((c) => c.key === e.key);
          if (item) {
            e.preventDefault();
            jumpTo(item.id);
          }
        }
        // Navigation inside menu
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIndex((prev) => (prev + 1) % filteredItems.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredItems[activeIndex]) {
            jumpTo(filteredItems[activeIndex].id);
          }
        }
      }
    };

    const handleCustomToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-menu", handleCustomToggle);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-menu", handleCustomToggle);
    };
  }, [isOpen, search, activeIndex]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSearch("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  const filteredItems = commandItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const jumpTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glass-panel p-6 flex flex-col gap-4"
          >
            {/* Compass HUD grid decorations */}
            <div className="absolute inset-0 coordinate-grid opacity-10 pointer-events-none" />

            {/* Header / Input */}
            <div className="relative flex items-center border-b border-slate-800 pb-4">
              <Search className="absolute left-3 h-4 w-4 text-slate-500" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type to search navigation nodes..."
                className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-900/40 text-slate-200 placeholder-slate-600 text-xs font-mono border border-slate-800/80 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-2 text-slate-500 hover:text-amber-400 transition-colors p-1"
                aria-label="Close Command Menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => jumpTo(item.id)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-amber-400/10 border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.05)] text-slate-100"
                          : "bg-slate-900/10 border-transparent text-slate-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-mono text-[10px] border ${
                          isActive 
                            ? "bg-amber-400 border-amber-400 text-slate-950 font-bold" 
                            : "bg-slate-950 border-slate-800 text-slate-500"
                        }`}>
                          {item.key}
                        </div>
                        <div>
                          <div className={`text-xs font-mono font-medium ${isActive ? "text-amber-400" : "text-slate-350"}`}>
                            {item.name}
                          </div>
                          <div className="text-[10px] text-slate-500 font-sans font-light mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      
                      {isActive && (
                        <span className="flex items-center gap-1 text-[8px] font-mono text-amber-500/60 uppercase">
                          <span>Jump</span>
                          <CornerDownLeft className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-8 text-xs font-mono text-slate-600">
                  NO CHANNELS LOCATED AT THESE COORDINATES
                </div>
              )}
            </div>

            {/* Help/Key Bindings footer */}
            <div className="border-t border-slate-800/60 pt-4 flex items-center justify-between text-[8px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-semibold text-slate-400">↑↓</span>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-semibold text-slate-400">1-6</span>
                  <span>Jump Directly</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-semibold text-slate-400">Esc</span>
                  <span>Close</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Compass className="h-3 w-3 text-amber-400/60 animate-spin" style={{ animationDuration: '8s' }} />
                <span>HUD COMMANDER v1.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
