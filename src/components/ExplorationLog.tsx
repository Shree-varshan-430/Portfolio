"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, ArrowUpRight, Calendar, Tag } from "lucide-react";

interface Post {
  category: string;
  entryNumber: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const posts: Post[] = [
  {
    category: "Next.js & Web Dev",
    entryNumber: "LOG_024",
    date: "June 2026",
    title: "Navigating Tailwind CSS v4's CSS-First Pipeline",
    excerpt: "Exploring the core structural upgrades in Tailwind v4: removing old configs, adopting native CSS custom variables, and boosting compiler builds by 10x.",
    readTime: "4 min read",
  },
  {
    category: "AI & Automation",
    entryNumber: "LOG_019",
    date: "May 2026",
    title: "Orchestrating Self-Improving LLM Workflows",
    excerpt: "How to connect document parsing embeddings with autonomous API actions using LangChain to automate lead pipelines without writing heavy loops.",
    readTime: "6 min read",
  },
  {
    category: "SEO & Core Vitals",
    entryNumber: "LOG_011",
    date: "April 2026",
    title: "Sailing the Core Web Vitals Speed Frontier",
    excerpt: "An in-depth manual on optimizing INP (Interaction to Next Paint) metrics and structuring JSON-LD Person schemas to boost rankings in search pages.",
    readTime: "5 min read",
  },
];

export default function ExplorationLog() {
  return (
    <section id="exploration-log" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
          <BookOpen className="h-4.5 w-4.5" />
          <span>Section 06</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-slate-100">
          Blog
        </h2>
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mt-1 block">
          Exploration Log
        </span>
        <div className="h-1 w-12 bg-amber-400 rounded-full mt-2" />
        <p className="text-slate-400 text-xs font-mono max-w-sm mt-3 uppercase tracking-wider">
          Technical dispatches, research logs, and guides from the digital frontier
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.article
            key={idx}
            tabIndex={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glass-panel rounded-3xl p-6 border border-slate-800/60 overflow-hidden cursor-pointer hover:border-amber-400/30 transition-all duration-300 focus-ring flex flex-col justify-between h-full shadow-lg"
            aria-label={`Log Entry: ${post.title}`}
          >
            <div>
              {/* Journal Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/40 pb-3 mb-5 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Tag className="h-3 w-3 text-amber-500/60" />
                  <span className="uppercase text-slate-200 font-medium">{post.category}</span>
                </span>
                <span className="text-amber-450 font-bold">{post.entryNumber}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-sans text-slate-200 leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-800/40 pt-4 mt-auto">
              <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
              </span>
              
              <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 font-medium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <span>Read Log</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
