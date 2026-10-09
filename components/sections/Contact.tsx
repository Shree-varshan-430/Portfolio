"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Send, MessageSquare, CheckCircle, Sparkles, Sunset } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const contactLinks = [
  {
    id: "contactGitHub",
    Icon: GithubIcon,
    label: "GitHub Profile",
    value: "github.com/Shree-varshan-430",
    href: "https://github.com/Shree-varshan-430",
  },
  {
    id: "contactLinkedIn",
    Icon: LinkedinIcon,
    label: "LinkedIn Network",
    value: "linkedin.com/in/shree-varshan-r",
    href: "https://www.linkedin.com/in/shree-varshan-r-aa3453383/",
  },
  {
    id: "contactEmail",
    Icon: Mail,
    label: "Direct Email",
    value: "shreevarshan.dev@gmail.com",
    href: "mailto:shreevarshan.dev@gmail.com",
  },
  {
    id: "contactMessage",
    Icon: MessageSquare,
    label: "Project Inquiries",
    value: "Open for SaaS, MCP & AI Builds",
    href: "https://www.linkedin.com/in/shree-varshan-r-aa3453383/",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden transition-colors text-stone-900 dark:text-white">
      
      {/* ── BIOME SCENARIO: ALPINE MOUNTAIN SUNSET & EVENING FIREFLIES ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/mountain_sunset_vista.jpg"
          alt="Alpine Mountain Sunset Vista with Evening Fireflies"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75 dark:opacity-50 scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/60 via-amber-50/50 to-orange-100/70 dark:from-[#0c0e12]/80 dark:via-[#0c0e12]/70 dark:to-[#0c0e12]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gsap-reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase text-[#ea580c] mb-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill shadow-2xs">
            <Sunset size={13} className="text-[#ea580c]" />
            Sunset Mountain Vista • Direct Collaboration
          </div>
          <h2 className="gsap-reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white mb-3 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
              Secure &amp; Intelligent
            </span>
          </h2>
          <p className="gsap-reveal opacity-0 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Looking to architect a production SaaS platform, develop custom MCP server integrations, or build a secure AI-powered platform? Let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 gsap-reveal opacity-0 space-y-4">
            <h3 className="font-extrabold text-xl text-stone-900 dark:text-white mb-1">
              Direct Engineering Channels
            </h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 font-normal">
              Connect directly via GitHub or LinkedIn, or transmit a project inquiry through the secure message console.
            </p>

            <div className="space-y-3.5">
              {contactLinks.map(({ id, Icon, label, value, href }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-stone-200/90 dark:border-stone-800 hover:border-[#ea580c] group transition-all duration-200 shadow-xs hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-stone-800 group-hover:bg-[#ea580c] group-hover:text-white flex items-center justify-center text-[#ea580c] transition-all duration-200 shadow-2xs">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-stone-500 dark:text-stone-400 font-semibold">{label}</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#ea580c] transition-colors duration-200 truncate">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 gsap-reveal opacity-0">
            <div className="p-7 sm:p-9 rounded-3xl glass-panel border border-stone-200/90 dark:border-stone-800 shadow-xl">
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 sm:space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-900/70 text-stone-900 dark:text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmailInput" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contactEmailInput"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-900/70 text-stone-900 dark:text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactSubject" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Project Scope / Architecture
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Multi-Tenant SaaS / Custom MCP Server / AI Web Application"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-900/70 text-stone-900 dark:text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Project Details &amp; Requirements
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your goals, tech stack preferences, timeline, or collaboration ideas..."
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-900/70 text-stone-900 dark:text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contactSubmit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Transmit Project Inquiry</span>
                  <Send size={16} />
                </button>

                {submitted && (
                  <div
                    id="formSuccess"
                    role="alert"
                    aria-live="polite"
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold"
                  >
                    <CheckCircle size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Inquiry transmitted successfully! I will review your requirements and respond shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
