"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Shield, Zap, Menu, X, MessageSquare, Sparkles, UserCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const waLink = getWhatsAppLink("Hey BetVault, I want to create my instant betting ID now.");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 ${
      scrolled ? "glass-nav-pill py-2.5 shadow-2xl" : "bg-obsidian-950/80 backdrop-blur-md border-b border-white/5"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-600 flex items-center justify-center text-obsidian-950 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-all">
            <Shield className="w-5 h-5 fill-obsidian-950 stroke-obsidian-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-tight text-white">
                BET<span className="text-gradient-gold">VAULT</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/40 rounded-full animate-pulse">
                v9.0 VIP
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              LUXURY BETTING NETWORK
            </p>
          </div>
        </Link>

        {/* Live Bettors Counter */}
        <div className="hidden lg:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/20 text-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200 font-medium">4,812 Players Online</span>
          <span className="text-gold-400 font-mono text-[11px] font-bold border-l border-slate-700 pl-2">
            IPL & Casino Live
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gold-400 transition-colors">
            About Us
          </Link>
          <a href="/#markets" className="hover:text-gold-400 transition-colors">
            Markets
          </a>
          <a href="/#calculator" className="hover:text-gold-400 transition-colors">
            Odds Calc
          </a>
          <Link href="/blog" className="hover:text-gold-400 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gold-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* WhatsApp Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-luxury px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 tracking-wide uppercase"
          >
            <Zap className="w-4 h-4 fill-obsidian-950 stroke-obsidian-950" />
            Get Instant ID
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-obsidian-900 border border-slate-800 text-slate-200 hover:text-gold-400 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-4 border-t border-slate-800/80 px-2 pb-5 space-y-3 bg-obsidian-950/95 backdrop-blur-xl rounded-2xl p-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-obsidian-900 text-xs mb-2 border border-slate-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-200 font-medium">4,812 Bettors Online Right Now</span>
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            About Us
          </Link>
          <a
            href="/#markets"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            Sports & Casino Markets
          </a>
          <a
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            Odds & Profit Calculator
          </a>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            Blog Articles & Tips
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-obsidian-900 font-semibold text-sm"
          >
            VIP Contact Support
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp-glow mt-4 py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-extrabold"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Instant WhatsApp ID Setup
          </a>
        </div>
      )}
    </header>
  );
}
