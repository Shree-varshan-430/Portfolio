"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ForestAtmosphere() {
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinates (-1 to 1) from viewport center
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = normX;
      targetY = normY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animateParallax = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateParallax);
    };

    animationFrameId = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* ── Base Ambient Sunbeams & Fireflies Reacting to Mouse ── */}
      <div
        className="absolute inset-0 transition-transform duration-75 will-change-transform"
        style={{
          transform: `translate3d(${offset.x * 18}px, ${offset.y * 18}px, 0)`,
        }}
      >
        {/* Soft Golden Sunbeam Highlight */}
        <div className="absolute -top-24 left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-amber-300/20 via-orange-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-orange-300/15 via-amber-200/10 to-transparent rounded-full blur-3xl" />

        {/* ── Realistic Forest Insects with Mouse Reactivity ── */}
        
        {/* Firefly 1 */}
        <div
          className="absolute top-[18%] left-[15%] animate-firefly-1"
          style={{ transform: `translate3d(${offset.x * -25}px, ${offset.y * -25}px, 0)` }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_12px_#f59e0b,0_0_24px_#f97316] animate-glow-pulse" />
        </div>

        {/* Firefly 2 */}
        <div
          className="absolute top-[35%] right-[22%] animate-firefly-2"
          style={{ transform: `translate3d(${offset.x * -35}px, ${offset.y * -35}px, 0)` }}
        >
          <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_10px_#facc15,0_0_20px_#ea580c] animate-glow-pulse" style={{ animationDelay: "1.2s" }} />
        </div>

        {/* Firefly 3 */}
        <div
          className="absolute top-[55%] left-[28%] animate-firefly-3"
          style={{ transform: `translate3d(${offset.x * -20}px, ${offset.y * -20}px, 0)` }}
        >
          <div className="w-3 h-3 rounded-full bg-orange-300 shadow-[0_0_14px_#f97316,0_0_28px_#ea580c] animate-glow-pulse" style={{ animationDelay: "2.4s" }} />
        </div>

        {/* Firefly 4 */}
        <div
          className="absolute top-[72%] right-[14%] animate-firefly-1"
          style={{ transform: `translate3d(${offset.x * -30}px, ${offset.y * -30}px, 0)`, animationDelay: "4s" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24,0_0_24px_#d97706] animate-glow-pulse" style={{ animationDelay: "0.8s" }} />
        </div>

        {/* Firefly 5 */}
        <div
          className="absolute top-[85%] left-[45%] animate-firefly-2"
          style={{ transform: `translate3d(${offset.x * -40}px, ${offset.y * -40}px, 0)`, animationDelay: "6s" }}
        >
          <div className="w-2 h-2 rounded-full bg-yellow-200 shadow-[0_0_10px_#fef08a,0_0_20px_#f59e0b] animate-glow-pulse" style={{ animationDelay: "1.8s" }} />
        </div>

        {/* ── Butterfly 1: Fluttering Monarch Butterfly Gliding With Mouse Parallax ── */}
        <div
          className="absolute top-[22%] left-[10%] animate-butterfly-flight-1"
          style={{ transform: `translate3d(${offset.x * -45}px, ${offset.y * -45}px, 0)` }}
        >
          <svg
            className="w-9 h-9 text-[#ea580c] drop-shadow-[0_2px_10px_rgba(234,88,12,0.5)] animate-wing-flap"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path d="M24 24 C20 12, 6 10, 4 20 C2 28, 14 34, 24 26 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="1" className="opacity-90" />
            <path d="M24 26 C18 32, 10 38, 12 42 C14 46, 22 38, 24 28 Z" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" className="opacity-80" />
            <path d="M24 24 C28 12, 42 10, 44 20 C46 28, 34 34, 24 26 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="1" className="opacity-90" />
            <path d="M24 26 C30 32, 38 38, 36 42 C34 46, 26 38, 24 28 Z" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" className="opacity-80" />
            <ellipse cx="24" cy="26" rx="2" ry="8" fill="#431407" />
            <path d="M24 18 Q20 12 18 10 M24 18 Q28 12 30 10" stroke="#431407" strokeWidth="1.2" />
          </svg>
        </div>

        {/* ── Butterfly 2: Golden Wood Nymph Butterfly ── */}
        <div
          className="absolute top-[60%] right-[12%] animate-butterfly-flight-2"
          style={{ transform: `translate3d(${offset.x * -35}px, ${offset.y * -35}px, 0)` }}
        >
          <svg
            className="w-8 h-8 text-[#f59e0b] drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)] animate-wing-flap"
            style={{ animationDuration: "0.22s" }}
            viewBox="0 0 48 48"
            fill="none"
          >
            <path d="M24 24 C21 14, 8 12, 6 22 C4 29, 15 33, 24 26 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" className="opacity-90" />
            <path d="M24 24 C27 14, 40 12, 42 22 C44 29, 33 33, 24 26 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" className="opacity-90" />
            <ellipse cx="24" cy="26" rx="1.8" ry="7" fill="#451a03" />
          </svg>
        </div>

        {/* ── Dragonfly: Swift Dragonfly Reacting to Cursor ── */}
        <div
          className="absolute top-[42%] left-[40%] animate-dragonfly-hover"
          style={{ transform: `translate3d(${offset.x * -55}px, ${offset.y * -55}px, 0)` }}
        >
          <svg
            className="w-12 h-12 drop-shadow-[0_2px_12px_rgba(22,101,52,0.4)] animate-dragonfly-tilt"
            viewBox="0 0 64 64"
            fill="none"
          >
            <ellipse cx="22" cy="28" rx="16" ry="3.5" transform="rotate(-15 22 28)" fill="rgba(254, 215, 170, 0.7)" stroke="#ea580c" strokeWidth="0.8" />
            <ellipse cx="42" cy="28" rx="16" ry="3.5" transform="rotate(15 42 28)" fill="rgba(254, 215, 170, 0.7)" stroke="#ea580c" strokeWidth="0.8" />
            <ellipse cx="24" cy="34" rx="13" ry="2.8" transform="rotate(-25 24 34)" fill="rgba(187, 247, 208, 0.7)" stroke="#16a34a" strokeWidth="0.8" />
            <ellipse cx="40" cy="34" rx="13" ry="2.8" transform="rotate(25 40 34)" fill="rgba(187, 247, 208, 0.7)" stroke="#16a34a" strokeWidth="0.8" />
            <ellipse cx="32" cy="26" rx="2.5" ry="3" fill="#15803d" />
            <path d="M32 29 L32 54" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="30.5" cy="24" r="1.2" fill="#ca8a04" />
            <circle cx="33.5" cy="24" r="1.2" fill="#ca8a04" />
          </svg>
        </div>

        {/* ── Drifting Leaves with Parallax ── */}
        <div
          className="absolute top-[12%] left-[45%] animate-drift-leaf-1"
          style={{ transform: `translate3d(${offset.x * 20}px, ${offset.y * 20}px, 0)` }}
        >
          <svg className="w-5 h-5 text-orange-600/80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C8 7, 4 14, 8 19 C12 24, 20 20, 22 14 C24 8, 16 2, 12 2 Z" />
          </svg>
        </div>
        <div
          className="absolute top-[75%] right-[25%] animate-drift-leaf-1"
          style={{ transform: `translate3d(${offset.x * 25}px, ${offset.y * 25}px, 0)`, animationDelay: "5s" }}
        >
          <svg className="w-4.5 h-4.5 text-emerald-700/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C8 7, 4 14, 8 19 C12 24, 20 20, 22 14 C24 8, 16 2, 12 2 Z" />
          </svg>
        </div>

      </div>
    </div>
  );
}
