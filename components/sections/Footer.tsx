"use client";
import { Zap, Mail, Globe } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3 group">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}>
                <Zap size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                Meno<span className="gradient-text">Pixels</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs">
              Web & E-commerce Studio · Sri Lanka
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
              <a href="mailto:hello@menopixels.studio" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                <Mail size={13} />
                hello@menopixels.studio
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                <Globe size={13} />
                menopixels.studio
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Meno Pixels. All rights reserved.</span>
          <span>Built with Next.js · Tailwind · Framer Motion · 🇱🇰 Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
