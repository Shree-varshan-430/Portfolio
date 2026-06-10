"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import OceanBackground from "@/components/OceanBackground";
import NavigationMap from "@/components/NavigationMap";
import Hero from "@/components/Hero";
import CaptainsLog from "@/components/CaptainsLog";
import SkillsIslands from "@/components/SkillsIslands";
import TreasureCollection from "@/components/TreasureCollection";
import GrandRoute from "@/components/GrandRoute";
import SpecialAbilities from "@/components/SpecialAbilities";
import ExplorationLog from "@/components/ExplorationLog";
import NavigationCenter from "@/components/NavigationCenter";
import CommandMenu from "@/components/CommandMenu";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  // Initialize Lenis Smooth Scroll on Mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Custom Nautical HUD Crosshair Cursor */}
      <CustomCursor />

      {/* Canvas coordinates and particle background */}
      <OceanBackground />

      {/* Floating HUD Navigation header */}
      <NavigationMap />
      
      {/* HUD Keyboard Shortcut Command Menu */}
      <CommandMenu />

      {/* Floating Back to Top Compass Trigger */}
      <BackToTop />
      
      {/* Main sections stack */}
      <main className="relative w-full z-10 flex flex-col gap-12 md:gap-20">
        <Hero />
        <CaptainsLog />
        <SkillsIslands />
        <TreasureCollection />
        <GrandRoute />
        <SpecialAbilities />
        <ExplorationLog />
        <NavigationCenter />
      </main>
    </>
  );
}
