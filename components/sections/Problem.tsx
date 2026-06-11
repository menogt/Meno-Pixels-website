"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WifiOff, Smartphone, Calendar, MapPin } from "lucide-react";

const problems = [
  {
    icon: WifiOff,
    title: "No proper website",
    desc: "Customers can't find you, don't trust you, and choose competitors who look more professional online.",
    color: "#FF3B30",
  },
  {
    icon: Smartphone,
    title: "Poor mobile experience",
    desc: "70%+ of travelers browse on mobile. A slow, broken mobile site means lost bookings before they start.",
    color: "#DC2626",
  },
  {
    icon: Calendar,
    title: "No booking or inquiry flow",
    desc: "Making customers copy a phone number and call manually costs you every spontaneous booking.",
    color: "#FF6B6B",
  },
  {
    icon: MapPin,
    title: "Weak Google presence",
    desc: "If you don't show up on Google Maps and Search, you don't exist to the tourists actively looking.",
    color: "#FF4444",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-pad relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag">The Problem</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            Your business may be losing customers{" "}
            <span className="gradient-text">before they even message you.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Outdated websites, missing Google presence, slow mobile pages, and unclear contact options
            make customers choose someone else — every single day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass glass-hover gradient-border rounded-2xl p-6 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}
              >
                <p.icon size={20} style={{ color: p.color }} />
              </div>
              <h3 className="font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
