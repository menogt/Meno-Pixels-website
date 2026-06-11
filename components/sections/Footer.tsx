"use client";
import {  Mail, Globe, Phone } from "lucide-react";

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
            // REPLACE with:
            <a href="#" className="block mb-3">
              <img
                src="/logo-long.png"
                alt="Meno Pixels"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-500 max-w-xs">
              Web & E-commerce Studio · Sri Lanka
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
              <a href="mailto:menopixels@gmail.com" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                <Mail size={13} />
                menopixels@gmail.com
              </a>
              <a href="tel:+94773268999" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
              <Phone size={13} />
              +94 77 326 8999
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
