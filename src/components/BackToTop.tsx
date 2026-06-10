"use client";

import { useEffect, useState } from "react";
import { Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 h-10 w-10 md:h-12 md:w-12 rounded-full border border-slate-800 bg-slate-950/90 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center shadow-lg transition-colors cursor-pointer group focus-ring glass-panel"
          aria-label="Scroll to top of the page"
          title="Scroll to Top"
        >
          <Compass className="h-5 w-5 md:h-5.5 md:w-5.5 group-hover:rotate-180 transition-transform duration-500 ease-out" />
          
          {/* Subtle text label that floats above on hover */}
          <span className="absolute bottom-12 scale-90 whitespace-nowrap bg-slate-950/90 border border-slate-800/80 text-[8px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-amber-400 font-semibold tracking-wider uppercase">
            RETURN TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
