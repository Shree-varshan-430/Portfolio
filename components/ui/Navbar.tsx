"use client";

import { useState, useEffect, useCallback } from "react";
import { Download, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "experience", "projects", "services", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0d0f12]/85 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-stone-200/80 dark:border-stone-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-white flex items-center gap-1 group cursor-pointer"
          aria-label="Shree Varshan Home"
        >
          <span>SV</span>
          <span className="text-[#ea580c] group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1.5" role="navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#ea580c] bg-orange-500/10"
                      : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100/70 dark:hover:bg-stone-800/70"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions (Socials + Theme Toggle + Resume) */}
        <div className="flex items-center gap-2.5">
          
          {/* GitHub & LinkedIn Links */}
          <a
            href="https://github.com/Shree-varshan-430"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-stone-600 dark:text-stone-300 hover:text-[#ea580c] hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-800 transition-all shadow-2xs"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/shree-varshan-r-aa3453383/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-stone-600 dark:text-stone-300 hover:text-[#ea580c] hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-800 transition-all shadow-2xs"
          >
            <LinkedinIcon size={16} />
          </a>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download
            id="resumeBtn"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="navToggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-all cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0d0f12]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 pb-4 shadow-xl">
          <ul className="flex flex-col px-6 pt-2 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "text-[#ea580c] bg-orange-500/10"
                        : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            
            <li className="pt-2 flex items-center gap-2">
              <a
                href="https://github.com/Shree-varshan-430"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-xs font-semibold"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shree-varshan-r-aa3453383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-xs font-semibold"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </li>

            <li className="pt-1">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#ea580c] text-white text-xs font-semibold shadow-xs"
              >
                <Download size={14} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
