"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Target, Smartphone, Palette, Cpu, HeadphonesIcon } from "lucide-react";

const points = [
  {
    icon: Layers,
    title: "Web + design + e-commerce in one place",
    desc: "You don't need to hire a separate designer, developer, and SEO person. One studio handles everything.",
    accent: "#8B5CF6",
  },
  {
    icon: Target,
    title: "Built for tourism and local businesses",
    desc: "Not a generic template shop. Meno Pixels specialises in the kinds of businesses that serve real customers in Sri Lanka.",
    accent: "#EC4899",
  },
  {
    icon: Smartphone,
    title: "Mobile-first, conversion-focused",
    desc: "Every site is built for the way people actually browse — on their phones — and designed to convert, not just look good.",
    accent: "#06B6D4",
  },
  {
    icon: Palette,
    title: "Clean modern visuals",
    desc: "No dated templates. No clip-art. Every site looks like it was designed in 2025 — because it was.",
    accent: "#F59E0B",
  },
  {
    icon: Cpu,
    title: "AI-assisted content & faster delivery",
    desc: "AI handles first drafts of copy, freeing time to focus on quality, structure, and design. Faster turnaround without cutting corners.",
    accent: "#10B981",
  },
  {
    icon: HeadphonesIcon,
    title: "Simple support after launch",
    desc: "Every package includes post-launch support. If something breaks or needs updating, you don't get left figuring it out alone.",
    accent: "#F43F5E",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="section-pad relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)", filter: "blur(100px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag">Why Meno Pixels</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            The studio built for businesses{" "}
            <span className="gradient-text">that actually want results.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover gradient-border rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}25` }}>
                <p.icon size={20} style={{ color: p.accent }} />
              </div>
              <h3 className="font-semibold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
