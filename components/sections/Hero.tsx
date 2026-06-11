"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Globe, ShoppingBag, Calendar, BarChart2, Star } from "lucide-react";

function WebsiteCard() {
  return (
    <div className="glass gradient-border rounded-2xl p-4 w-52 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#FF3B30,#DC2626)" }}>
          <Globe size={12} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white">Business Website</span>
      </div>
      <div className="space-y-1.5">
        <div className="h-2 bg-white/10 rounded-full w-full" />
        <div className="h-2 bg-white/10 rounded-full w-4/5" />
        <div className="h-2 bg-white/10 rounded-full w-3/5" />
      </div>
      <div className="mt-3 flex gap-1.5">
        <div className="h-8 flex-1 rounded-lg"
          style={{ background: "rgba(255,59,48,0.2)", border: "1px solid rgba(255,59,48,0.35)" }} />
        <div className="h-8 w-8 rounded-lg"
          style={{ background: "rgba(255,107,107,0.15)", border: "1px solid rgba(255,107,107,0.25)" }} />
      </div>
    </div>
  );
}

function EcomCard() {
  return (
    <div className="glass gradient-border rounded-2xl p-4 w-48 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#DC2626,#FF3B30)" }}>
          <ShoppingBag size={12} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white">E-commerce</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-12 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} />
        ))}
      </div>
      <div className="mt-2 h-7 rounded-lg w-full"
        style={{ background: "linear-gradient(135deg,rgba(255,59,48,0.4),rgba(220,38,38,0.3))" }} />
    </div>
  );
}

function BookingCard() {
  return (
    <div className="glass gradient-border rounded-2xl p-4 w-44 shadow-2xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#FF3B30,#DC2626)" }}>
          <Calendar size={12} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white">Booking</span>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        {["M","T","W","T","F","S","S"].map((d,i) => (
          <div key={i} className={`h-6 rounded-md flex items-center justify-center text-[9px] font-semibold ${i===2?"text-white":"text-slate-500"}`}
            style={{ background: i===2 ? "rgba(255,59,48,0.5)" : "rgba(255,255,255,0.04)" }}>
            {d}
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-400">Check-in · Check-out</div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="glass gradient-border rounded-2xl p-4 w-48 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#FF3B30,#DC2626)" }}>
          <BarChart2 size={12} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white">Growth</span>
      </div>
      <div className="flex items-end gap-1 h-12">
        {[30,50,40,70,55,85,90].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 6 ? "linear-gradient(180deg,#FF3B30,#DC2626)" : "rgba(255,255,255,0.08)"
            }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px]">
        <span className="text-slate-500">Visitors</span>
        <span className="text-emerald-400 font-semibold">+142%</span>
      </div>
    </div>
  );
}

function GoogleCard() {
  return (
    <div className="glass gradient-border rounded-2xl p-4 w-48 shadow-2xl">
      <div className="text-[10px] text-slate-400 mb-1">Google Business</div>
      <div className="font-semibold text-white text-sm mb-1">Your Business</div>
      <div className="flex items-center gap-1 mb-2">
        {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
        <span className="text-[10px] text-slate-400 ml-1">4.9 (128)</span>
      </div>
      <div className="text-[10px] text-emerald-400 font-medium">● Open Now</div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const card4Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <motion.div style={{ y: bgY }} className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0">
        <motion.div
          style={{ y: bgY, background: "radial-gradient(circle, rgba(255,59,48,0.10) 0%, rgba(220,38,38,0.05) 50%, transparent 70%)" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-pulse-glow"
        />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(255,59,48,0.3), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.3), transparent 70%)", filter: "blur(70px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24 lg:py-0">

          {/* Left */}
          <motion.div style={{ y: textY }}>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.7 }}>
              <span className="tag">🇱🇰 Meno Pixels · Sri Lanka Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.25, duration:0.8, ease:[0.22,1,0.36,1] }}
              className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Websites & Online Stores for Businesses That Want to Look{" "}
              <span className="gradient-text">Serious Online.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.7 }}
              className="mt-6 text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Meno Pixels helps tourism brands, local businesses, and online sellers build clean websites,
              e-commerce stores, and Google-ready digital presence that turns visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="https://wa.me/94783780057" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#FF3B30,#DC2626)", boxShadow: "0 8px 30px rgba(255,59,48,0.35)" }}>
                <MessageCircle size={16} />
                Get Free Website Audit
              </a>
              <a href="#services"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 text-sm glass glass-hover transition-all duration-300 hover:text-white">
                View Services <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8, duration:0.7 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {["#FF3B30","#DC2626","#FF6B6B"].map((c,i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#030303]" style={{ background: c }} />
                  ))}
                </div>
                <span>Trusted by local businesses</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                <span className="ml-1">5.0 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — cards */}
          <div className="hidden lg:block relative h-[600px]">
            <motion.div style={{ y: card1Y }} className="absolute top-8 left-4 animate-float z-10">
              <WebsiteCard />
            </motion.div>
            <motion.div style={{ y: card2Y }} className="absolute top-24 right-0 animate-float-b z-10">
              <EcomCard />
            </motion.div>
            <motion.div style={{ y: card3Y }} className="absolute bottom-28 left-12 animate-float-c z-10">
              <BookingCard />
            </motion.div>
            <motion.div style={{ y: card4Y }} className="absolute bottom-16 right-4 animate-float z-10">
              <AnalyticsCard />
            </motion.div>
            <motion.div style={{ y: card3Y }} className="absolute top-4 right-56 animate-float-b z-10">
              <GoogleCard />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full animate-pulse-glow"
              style={{ background: "radial-gradient(circle, rgba(255,59,48,0.15), transparent 70%)", filter: "blur(30px)" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-slate-600">scroll</span>
        <div className="w-px h-10 overflow-hidden">
          <motion.div className="w-full h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
            animate={{ y: ["-100%", "200%"] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" }} />
        </div>
      </motion.div>
    </section>
  );
}
