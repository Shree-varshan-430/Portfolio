"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Listen for hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.closest(".interactive-node"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trail calculation
  useEffect(() => {
    let animationFrameId: number;

    const updateTrail = () => {
      const dx = position.x - trailRef.current.x;
      const dy = position.y - trailRef.current.y;
      
      // Speed factor (0.15 for smooth lag)
      trailRef.current.x += dx * 0.15;
      trailRef.current.y += dy * 0.15;

      setTrail({ x: trailRef.current.x, y: trailRef.current.y });

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer coordinate ring with crosshair ticks */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-transform duration-200"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className={`transition-colors duration-300 ${
            isHovered ? "text-amber-400 opacity-100" : "text-slate-400 opacity-60"
          }`}
        >
          {/* Compass ring */}
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={isHovered ? "4, 2" : "none"}
          />
          {/* Compass ticks */}
          <line x1="20" y1="0" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="36" x2="20" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="20" x2="4" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="36" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Inner precise target point */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
            isHovered ? "bg-amber-400 scale-150 shadow-[0_0_10px_#fbbf24]" : "bg-slate-200 scale-100"
          }`}
        />
      </div>
    </>
  );
}
