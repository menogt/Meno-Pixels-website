"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play, Globe } from "lucide-react";

const webProjects = [
  {
    title: "WanderRoute",
    subtitle: "AI-Powered Sri Lanka Trip Planner",
    desc: "An AI-driven travel planner that generates personalised Sri Lanka itineraries in seconds. Built with React, TypeScript, and Groq's LLM API with PDF export.",
    url: "https://wanderroute.netlify.app/",
    tags: ["React", "TypeScript", "AI / Groq", "Tailwind"],
    accent: "#8B5CF6",
    category: "Web App",
  },
  {
    title: "WanderQuest",
    subtitle: "Tour Booking Platform",
    desc: "A fully designed tour booking website concept for Sri Lanka travel brands — with tour listings, booking flows, and a clean conversion-focused layout.",
    url: "https://wanderquest-tour-booking.vercel.app/",
    tags: ["Next.js", "Booking UI", "Tourism", "Vercel"],
    accent: "#06B6D4",
    category: "Tourism",
  },
  {
    title: "Meno Arena",
    subtitle: "Gaming Hub Platform",
    desc: "A dark-themed gaming platform UI featuring esports tournament listings, leaderboards, and a community-focused layout built for the MLBB gaming niche.",
    url: "https://meno-arena.vercel.app/",
    tags: ["React", "Gaming UI", "Dark Theme", "Vercel"],
    accent: "#EC4899",
    category: "Gaming",
  },
];

const videoProjects = [
  {
    title: "Digital Marketing Agency Promo",
    desc: "Motion graphics promo for a digital marketing agency — AI voiceover, dynamic text reveals, and brand identity motion.",
    url: "https://www.youtube.com/shorts/wagatGentJw",
    thumb: "https://img.youtube.com/vi/wagatGentJw/hqdefault.jpg",
    accent: "#8B5CF6",
  },
  {
    title: "Hotel Booking Site Promo",
    desc: "Promotional short video for a hotel booking platform with smooth UI mockup animations and motion graphics.",
    url: "https://www.youtube.com/shorts/9wn5Ji7Y9HA",
    thumb: "https://img.youtube.com/vi/9wn5Ji7Y9HA/hqdefault.jpg",
    accent: "#06B6D4",
  },
  {
    title: "E-Commerce UI Mockup Animation",
    desc: "Full UI mockup animation and vector motion for an e-commerce platform — showcasing product cards, cart flow, and checkout.",
    url: "https://www.youtube.com/watch?v=fj4X9E_dRQc",
    thumb: "https://img.youtube.com/vi/fj4X9E_dRQc/maxresdefault.jpg",
    accent: "#EC4899",
  },
  {
    title: "E-Commerce Style Promo Video",
    desc: "High-energy promo video sample in e-commerce style — fast cuts, product highlights, and branded motion overlays.",
    url: "https://www.youtube.com/watch?v=lDl2oOGEckY",
    thumb: "https://img.youtube.com/vi/lDl2oOGEckY/maxresdefault.jpg",
    accent: "#F59E0B",
  },
  {
    title: "E-Commerce Vector Animation",
    desc: "Clean vector animation for an e-commerce brand — smooth transitions, illustrated product scenes, and motion storytelling.",
    url: "https://www.youtube.com/watch?v=I-ifqjG53xw",
    thumb: "https://img.youtube.com/vi/I-ifqjG53xw/maxresdefault.jpg",
    accent: "#8B5CF6",
  },
  {
    title: "Website Promo Video",
    desc: "Promotional video designed to showcase a website launch — screen recordings, animated overlays, and branded transitions.",
    url: "https://www.youtube.com/watch?v=UzdwLQtLVYQ",
    thumb: "https://img.youtube.com/vi/UzdwLQtLVYQ/maxresdefault.jpg",
    accent: "#06B6D4",
  },
  {
    title: "Knife Promo Short",
    desc: "Fast-paced product promo short for a knife brand — dramatic lighting effects, sharp cuts, and strong product focus.",
    url: "https://www.youtube.com/shorts/O12OTBM2qcU",
    thumb: "https://img.youtube.com/vi/O12OTBM2qcU/hqdefault.jpg",
    accent: "#EC4899",
  },
  {
    title: "TikTok / YouTube Gaming Reels",
    desc: "Gaming reel content for TikTok and YouTube Shorts — MLBB highlights, meme edits, and fast-format entertainment edits.",
    url: "#",
    thumb: "",
    accent: "#F59E0B",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<"web" | "video">("web");

  return (
    <section id="work" className="section-pad relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="tag">Our Work</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            Projects built with{" "}
            <span className="gradient-text">purpose & precision.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="glass rounded-xl p-1 flex gap-1">
            {[
              { id: "web", label: "🌐 Web Projects" },
              { id: "video", label: "🎬 Motion & Video" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as "web" | "video")}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  tab === t.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                style={tab === t.id ? {
                  background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
                  boxShadow: "0 4px 15px rgba(139,92,246,0.3)"
                } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Web Projects */}
        {tab === "web" && (
          <div className="grid md:grid-cols-3 gap-6">
            {webProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass glass-hover gradient-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
              >
                {/* Mock browser preview */}
                <div className="relative h-44 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.accent}15, ${p.accent}05)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe size={48} style={{ color: p.accent, opacity: 0.3 }} />
                  </div>
                  {/* Browser chrome top bar */}
                  <div className="absolute top-0 left-0 right-0 px-3 py-2 flex items-center gap-1.5" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <div className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-slate-500 px-2 py-0.5 font-mono truncate">
                      {p.url.replace("https://", "")}
                    </div>
                  </div>
                  <span className="absolute top-8 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                    style={{ background: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}30` }}>
                    {p.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white">{p.title}</h3>
                  <p className="text-xs text-purple-400 font-semibold mb-2">{p.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}25` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: p.accent }}>
                    <ExternalLink size={14} />
                    View Live Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Video Projects */}
        {tab === "video" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videoProjects.map((v, i) => (
              <motion.a
                key={v.title}
                href={v.url !== "#" ? v.url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass glass-hover gradient-border rounded-2xl overflow-hidden block transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-36 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${v.accent}20, #030305)` }}>
                  {v.thumb ? (
                    <img src={v.thumb} alt={v.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play size={32} style={{ color: v.accent, opacity: 0.5 }} />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.9)" }}>
                      <Play size={16} className="text-black ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-white leading-tight mb-1">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{v.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
