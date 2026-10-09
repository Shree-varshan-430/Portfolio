"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import AIAndSecurity from "@/components/sections/AIAndSecurity";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";
import ForestAtmosphere from "@/components/ui/ForestAtmosphere";
import NatureCursor from "@/components/ui/NatureCursor";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Register the GSAP ScrollTrigger plugin on client-side mount
    gsap.registerPlugin(ScrollTrigger);

    // Grab all elements with the 'gsap-reveal' class
    const reveals = document.querySelectorAll(".gsap-reveal");
    
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <NatureCursor />
      <ForestAtmosphere />
      <Navbar />
      <main className="relative z-10">
        <Hero active={!loading} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIAndSecurity />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
