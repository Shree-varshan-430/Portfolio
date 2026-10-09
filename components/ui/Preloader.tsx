"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Prevent body scroll during load
    document.body.style.overflow = "hidden";

    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.floor(obj.val));
      },
      onComplete: () => {
        // Slide out loader to the top
        gsap.to(".preloader-container", {
          yPercent: -100,
          duration: 0.75,
          ease: "power3.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            onComplete();
          },
        });
      },
    });
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-[#fcfbf9] dark:bg-[#0d0f12] flex flex-col items-center justify-center text-[#18181b] dark:text-white transition-colors">
      <div className="flex flex-col items-center max-w-[300px] w-full px-6">
        {/* Logo */}
        <div className="text-4xl font-extrabold tracking-tight mb-7 flex items-center gap-1">
          <span>SV</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block animate-pulse" />
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[3px] bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-[#ea580c] to-[#fb923c] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(234,88,12,0.5)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Counter and status */}
        <div className="flex justify-between w-full text-[11px] font-mono tracking-wider text-stone-500 dark:text-stone-400">
          <span>{percent < 100 ? "INITIALIZING DIGITAL EXP..." : "SYSTEM READY"}</span>
          <span className="text-[#ea580c] font-bold">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
