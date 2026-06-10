"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-pad relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Glow behind */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.15), rgba(236,72,153,0.08), transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass gradient-border rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #EC4899, transparent 70%)", transform: "translate(-30%, 30%)" }} />

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <span className="tag mb-6 inline-flex">
              <Sparkles size={12} /> Free Audit
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-5"
          >
            Ready to make your business look{" "}
            <span className="gradient-text">serious online?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-slate-400 text-lg leading-relaxed mb-4 max-w-2xl mx-auto"
          >
            Send your current website, Facebook page, or business name.
            I'll review it and tell you exactly what can be improved — no cost, no commitment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="text-sm text-slate-500 mb-8"
          >
            Tourism businesses · Local shops · E-commerce · Service providers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/947XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                boxShadow: "0 8px 30px rgba(37,211,102,0.3)"
              }}
            >
              <MessageCircle size={20} />
              Get Free Audit on WhatsApp
            </a>
            <a href="#services"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300 text-base glass glass-hover transition-all duration-300 hover:text-white">
              View Services <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
