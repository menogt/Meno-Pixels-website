"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "Starter Website",
    desc: "For small businesses that need a professional online presence fast.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form + WhatsApp button",
      "Basic on-page SEO",
      "Google Maps embed",
      "1 month support",
    ],
    accent: "#8B5CF6",
    popular: false,
  },
  {
    name: "Business",
    subtitle: "Business Website",
    desc: "For brands that need multiple sections, service pages, and stronger trust-building.",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "Blog or gallery section",
      "Contact forms + booking CTA",
      "Full SEO optimisation",
      "Google Business Profile setup",
      "Speed optimisation",
      "3 months support",
    ],
    accent: "#EC4899",
    popular: true,
  },
  {
    name: "E-commerce",
    subtitle: "E-commerce Launch",
    desc: "For online sellers who need a Shopify or WooCommerce store ready to sell.",
    features: [
      "Shopify or WooCommerce setup",
      "Up to 30 product listings",
      "Homepage + category pages",
      "Payment gateway integration",
      "Basic SEO for products",
      "Mobile-optimised checkout",
      "3 months support",
    ],
    accent: "#06B6D4",
    popular: false,
  },
  {
    name: "Tourism",
    subtitle: "Tourism Booking Site",
    desc: "For hotels, villas, restaurants, and tour operators that need real bookings.",
    features: [
      "Custom tourism design",
      "Full gallery with lightbox",
      "WhatsApp booking integration",
      "Availability calendar",
      "Google Maps + directions",
      "TripAdvisor / review link",
      "Multi-language ready",
      "3 months support",
    ],
    accent: "#F59E0B",
    popular: false,
  },
];

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="packages" className="section-pad relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.3), transparent 70%)", filter: "blur(100px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag">Packages</span>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            Simple packages.{" "}
            <span className="gradient-text">No hidden surprises.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Every project is priced based on scope and requirements. Get in touch for a free audit and custom quote.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative glass glass-hover gradient-border rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                p.popular ? "ring-1 ring-pink-500/30" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#EC4899,#8B5CF6)" }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className="w-8 h-8 rounded-lg mb-3"
                  style={{ background: `${p.accent}20`, border: `1px solid ${p.accent}30` }}>
                  <div className="w-full h-full rounded-lg" style={{ background: `${p.accent}30` }} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: p.accent }}>
                  {p.name}
                </div>
                <h3 className="text-lg font-bold text-white">{p.subtitle}</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
              </div>

              <div className="text-lg font-semibold text-slate-300 mb-5">
                Custom pricing based on project scope.
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: `${p.accent}20` }}>
                      <Check size={10} style={{ color: p.accent }} strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/947XXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={p.popular ? {
                  background: "linear-gradient(135deg,#EC4899,#8B5CF6)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(236,72,153,0.3)"
                } : {
                  background: `${p.accent}15`,
                  color: p.accent,
                  border: `1px solid ${p.accent}30`
                }}>
                <MessageCircle size={14} />
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
