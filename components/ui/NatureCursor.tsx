"use client";

import { useEffect, useState, useRef } from "react";

export default function NatureCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Track hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("button, a, input, textarea, select, [role='button'], .cursor-pointer, .glass-panel");
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop for the lagging amber nature aura ring
    let animationFrameId: number;
    const updateRing = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };
    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${hidden ? "opacity-0" : "opacity-100"}`} aria-hidden="true">
      {/* ── Glowing Golden Firefly / Nature Dot ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#ea580c,0_0_20px_#f59e0b] will-change-transform pointer-events-none"
      />

      {/* ── Outer Nature Halo / Interactive Amber Aura Ring ── */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border border-orange-500/70 dark:border-amber-400/80 will-change-transform transition-[width,height,background-color,border-color] duration-200 pointer-events-none ${
          hovered
            ? "w-14 h-14 -ml-7 -mt-7 bg-orange-500/15 backdrop-blur-[1px] border-orange-500 shadow-[0_0_18px_rgba(234,88,12,0.4)] scale-110"
            : "w-10 h-10 bg-orange-400/5 shadow-[0_0_8px_rgba(245,158,11,0.25)]"
        } ${clicked ? "scale-90 bg-orange-600/30" : ""}`}
      />
    </div>
  );
}
