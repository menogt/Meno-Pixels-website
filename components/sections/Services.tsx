"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShoppingBag, MapPin, Wrench, BarChart2, FileText, Share2 } from "lucide-react";

const main = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Modern, fast, conversion-focused websites for local businesses, restaurants, service providers, and personal brands. Built to rank on Google and impress clients.",
    tags: ["WordPress", "Custom HTML/CSS", "SEO Ready", "Mobile-First"],
    gradient: "from-violet-600/20 to-purple-900/10",
    accent: "#8B5CF6",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Store Setup",
    desc: "Shopify and WooCommerce stores with product pages, homepage structure, basic SEO, and a layout designed to convert visitors into buyers — not just window shoppers.",
    tags: ["Shopify", "WooCommerce", "Product Setup", "Conversion Layout"],
    gradient: "from-pink-600/20 to-rose-900/10",
    accent: "#EC4899",
  },
  {
    icon: MapPin,
    title: "Tourism Digital Presence",
    desc: "Websites for hotels, villas, restaurants, tour operators, and travel businesses — with gallery, WhatsApp booking, Google Maps, and a clear inquiry flow that gets you direct bookings.",
    tags: ["Gallery", "WhatsApp Booking", "Google Maps", "Inquiry Flow"],
    gradient: "from-cyan-600/20 to-blue-900/10",
    accent: "#06B6D4",
  },
];

const supporting = [
  { icon: Wrench, label: "Website Maintenance" },
  { icon: BarChart2, label: "SEO Audit Reports" },
  { icon: FileText, label: "AI-powered Website Copy" },
  { icon: Share2, label: "Social Media Creatives" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag">What We Build</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            Services designed for{" "}
            <span className="gradient-text">real business results.</span>
          </h2>
        </motion.div>

        {/* Main cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {main.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass glass-hover gradient-border rounded-2xl p-7 flex flex-col transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${s.gradient}`}
                style={{ border: `1px solid ${s.accent}30` }}>
                <s.icon size={22} style={{ color: s.accent }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ background: `${s.accent}15`, color: s.accent, border: `1px solid ${s.accent}25` }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting services row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass gradient-border rounded-2xl p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Also included as add-ons</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supporting.map(s => (
              <div key={s.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)" }}>
                  <s.icon size={16} className="text-purple-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
