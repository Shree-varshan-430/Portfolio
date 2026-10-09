"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    Icon: GithubIcon,
    href: "https://github.com/Shree-varshan-430",
    label: "GitHub",
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/shree-varshan-r-aa3453383/",
    label: "LinkedIn",
  },
  {
    Icon: Mail,
    href: "mailto:shreevarshan.dev@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#0d0f12] transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-white inline-flex items-center gap-1"
            >
              <span>SV</span>
              <span className="text-[#ea580c]">.</span>
            </a>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-normal">
              Building secure Digital Experience with code &amp; Ai.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(href);
                }}
                className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-[#ea580c] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-stone-200/90 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-[#ea580c] hover:border-[#ea580c] hover:bg-orange-50/50 dark:hover:bg-stone-800 transition-all duration-200 shadow-2xs"
              >
                <Icon size={17} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-stone-200/90 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-[#ea580c] hover:border-[#ea580c] transition-all cursor-pointer shadow-2xs"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} R. Shree Varshan. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Developed by</span>
            <a
              href="https://aibuildinfra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea580c] hover:text-[#f97316] font-extrabold hover:underline transition-colors"
            >
              AI Build Infra
            </a>
          </div>
          <p className="font-mono text-[11px]">SaaS Architecture • MCP Protocol • Defense-in-Depth</p>
        </div>
      </div>
    </footer>
  );
}
