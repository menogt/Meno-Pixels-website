"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Audit & Discovery",
    desc: "Send your current website, Facebook page, or just your business name. I'll analyse what's working, what's broken, and what's missing — for free, before any commitment.",
    icon: "🔍",
    accent: "#FF3B30",
  },
  {
    num: "02",
    title: "Structure & Content Plan",
    desc: "We map out the pages, sections, content, and calls-to-action your site needs. AI-assisted copy is drafted at this stage so you can review before anything gets built.",
    icon: "🗂️",
    accent: "#DC2626",
  },
  {
    num: "03",
    title: "Design Preview",
    desc: "You see a visual concept before a single line of code is written. We align on look, feel, colours, and layout — no surprises at the end.",
    icon: "🎨",
    accent: "#FF6B6B",
  },
  {
    num: "04",
    title: "Build & Optimise",
    desc: "The site is built mobile-first, speed-optimised, and SEO-ready. Every page is tested across devices and screen sizes before you see it.",
    icon: "⚙️",
    accent: "#FF4444",
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "We go live, connect your domain, submit to Google Search Console, and hand over a simple guide. Post-launch support is included in every package.",
    icon: "🚀",
    accent: "#FF5555",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-pad relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag">How We Work</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            A process that keeps you{" "}
            <span className="gradient-text">in control at every step.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.3) 20%, rgba(139,92,246,0.3) 80%, transparent)" }} />

          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className="relative flex gap-6 items-start group"
              >
                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center glass gradient-border transition-all duration-300 group-hover:scale-105"
                  style={{ boxShadow: `0 0 20px ${s.accent}20` }}>
                  <span className="text-xl leading-none">{s.icon}</span>
                  <span className="text-[9px] font-bold text-slate-500 mt-0.5">{s.num}</span>
                </div>

                {/* Content */}
                <div className="glass glass-hover gradient-border rounded-2xl p-6 flex-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: s.accent }}>{s.num}</span>
                    <h3 className="font-bold text-white text-lg">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
