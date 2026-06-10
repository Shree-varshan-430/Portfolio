"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, FileText, Compass, CheckCircle2 } from "lucide-react";

export default function NavigationCenter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("sending");
    // Simulate API round-trip delay
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="navigation-center" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <Compass className="h-4.5 w-4.5" />
          <span>Section 07</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          Navigation Center: Connect with Shree Varshan
        </h2>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          Establish contact coordinates to set sail for collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Contact Coordinates & Resume */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 coordinate-grid opacity-15 pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div>
              <h3 className="text-xl font-heading font-semibold text-slate-100 tracking-wide">
                Set Sail For Collaboration
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light mt-2">
                Whether you want to build a full-stack SaaS product, optimize your website's search footprint, construct AI automations, or recruit a new crew member, I am ready to navigate.
              </p>
            </div>

             {/* Email Coordinate */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Digital Mailbox</div>
                <a href="mailto:shreevarshan35@gmail.com" className="text-sm font-sans text-slate-200 hover:text-amber-400 transition-colors font-medium focus-ring rounded-lg p-0.5">
                  shreevarshan35@gmail.com
                </a>
              </div>
            </div>

            {/* Resume Catalog download */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Credentials Log</div>
                {/* Print-friendly PDF anchor */}
                <a 
                  href="/resume.pdf" 
                  download="Shree_Varshan_Resume.pdf"
                  className="text-sm font-sans text-slate-200 hover:text-amber-400 transition-colors font-medium flex items-center gap-1 focus-ring rounded-lg p-0.5"
                >
                  <span>Download Tech Ledger (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Coordinates & Monogram Footer */}
          <div className="mt-12 pt-6 border-t border-slate-800/40 space-y-4 relative z-10">
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Voyage Links</div>
            
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 focus-ring"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 focus-ring"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 focus-ring"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
            
            <div className="text-[8px] font-mono text-slate-600 mt-4 leading-tight">
              LAT: 10.8505° N / LON: 78.6856° E // REGISTRY: VARSHAN // MADE IN 2026
            </div>
          </div>
        </div>

        {/* Right Column: Coordinate Transmission Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-mono text-slate-300 flex items-center gap-2 mb-2 pb-3 border-b border-slate-800/60">
              <Compass className="h-4.5 w-4.5 text-amber-400" />
              <span>TRANSMIT_COORDINATES</span>
            </h3>

            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                [COORDINATE: SENDER_NAME]
              </label>
              <input
                type="text"
                required
                disabled={status !== "idle"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name or vessel registry..."
                className="w-full h-11 px-4 rounded-xl bg-slate-950/80 border border-slate-850 text-slate-200 text-xs font-sans placeholder-slate-600 transition-all duration-300 disabled:opacity-50 focus-ring focus:border-amber-400/60"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                [COORDINATE: EMAIL_ADDRESS]
              </label>
              <input
                type="email"
                required
                disabled={status !== "idle"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your return coordinates..."
                className="w-full h-11 px-4 rounded-xl bg-slate-950/80 border border-slate-850 text-slate-200 text-xs font-sans placeholder-slate-600 transition-all duration-300 disabled:opacity-50 focus-ring focus:border-amber-400/60"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                [COORDINATE: LOG_PAYLOAD]
              </label>
              <textarea
                required
                disabled={status !== "idle"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your transmission payload details here..."
                rows={5}
                className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-850 text-slate-200 text-xs font-sans placeholder-slate-600 transition-all duration-300 resize-none disabled:opacity-50 focus-ring focus:border-amber-400/60"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status !== "idle" || !name || !email || !message}
              className={`btn-primary focus-ring w-full h-11 uppercase font-mono text-xs tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed ${
                status === "success"
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:from-emerald-400 hover:to-emerald-500"
                  : status === "sending"
                  ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                  : ""
              }`}
            >
              {status === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>TRANSMISSION COMPLETE</span>
                </>
              ) : status === "sending" ? (
                <>
                  <Compass className="h-4 w-4 animate-spin" />
                  <span>TRANSMITTING DATA...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>LAUNCH MESSAGE NODE</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
