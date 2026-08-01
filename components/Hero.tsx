"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Zap, ArrowRight, Lock, CheckCircle2, Trophy, Clock, Sparkles, Star, PhoneCall } from "lucide-react";

export default function Hero() {
  const [selectedSport, setSelectedSport] = useState("Cricket IPL");
  const [selectedAmount, setSelectedAmount] = useState("₹1,000");
  const [selectedExchange, setSelectedExchange] = useState("Diamond Exchange");

  const customMessage = `Hello BetVault! I'd like to set up my betting ID right now.\nSport: ${selectedSport}\nDeposit: ${selectedAmount}\nExchange: ${selectedExchange}`;
  const whatsappUrl = getWhatsAppLink(customMessage);

  return (
    <section className="relative pt-8 pb-20 md:py-20 px-4 sm:px-6 overflow-hidden luxury-bg-mesh luxury-grid-pattern">
      
      {/* Background Lighting Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-5 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Copy & Model Spotlight Banner */}
        <div className="lg:col-span-7 space-y-6 text-left relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>BetVault.0 — VIP DIRECT EXCHANGE HUB</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Play on Verified Exchanges. <br className="hidden sm:inline" />
            <span className="text-gradient-gold">5-Min Payouts. Zero Hassle.</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Let's be completely honest — nobody wants to bet with random Telegram bookies who delay your withdrawal for 12 hours after a big IPL win. We created BetVault so you can open a verified master exchange ID in under 3 minutes and collect your profits directly in your UPI account.
          </p>

          {/* Featured Female Model Host Banner */}
          <div className="p-4 rounded-2xl glass-luxury-card border border-gold-500/20 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 border-gold-400/40 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Bet Vault VIP Hostess Pooja"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                ))}
                <span className="text-xs font-mono font-bold text-slate-300 ml-1">5.0 VIP Rating</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                "Your payouts are cleared in 5 minutes flat — guaranteed."
              </h4>
              <p className="text-xs text-slate-400">
                — <span className="text-gold-300 font-semibold">Pooja Sharma</span>, Head of Bet Vault VIP Concierge
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-obsidian-900/80 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">&lt; 3 Mins Setup</p>
                <p className="text-[11px] text-slate-400">Direct WhatsApp Admin</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-obsidian-900/80 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">100% Payout Security</p>
                <p className="text-[11px] text-slate-400">Verified GPay & PhonePe</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-obsidian-900/80 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">Master Exchanges</p>
                <p className="text-[11px] text-slate-400">Diamond, Sky & Lotus</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-luxury px-8 py-4 rounded-xl text-base font-black flex items-center justify-center gap-3 group tracking-wide uppercase"
            >
              <Zap className="w-5 h-5 fill-obsidian-950 stroke-obsidian-950" />
              Get Instant WhatsApp ID
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#markets"
              className="btn-outline-gold px-6 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              Explore Live Sports Markets ↓
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Betting ID Configurator */}
        <div className="lg:col-span-5 relative z-10">
          <div className="glass-luxury-card rounded-3xl p-6 sm:p-8 space-y-6 border border-gold-500/30">
            
            {/* Widget Top Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs text-gold-400 font-extrabold uppercase tracking-wider">
                  INSTANT ID CONFIGURATOR
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">v9.0 Live</span>
            </div>

            {/* Step 1: Select Sport */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                1. Select Sport or Game Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Cricket IPL", "Football", "Tennis", "Live Casino"].map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                      selectedSport === sport
                        ? "bg-gold-500/20 border-gold-400 text-gold-300 shadow-md shadow-gold-500/10"
                        : "bg-obsidian-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{sport}</span>
                    {selectedSport === sport && <CheckCircle2 className="w-4 h-4 text-gold-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Initial Deposit */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                2. Choose Initial Deposit Amount:
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {["₹500", "₹1,000", "₹5,000", "₹10,000+"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-2.5 text-center rounded-xl text-xs font-mono font-extrabold transition-all border ${
                      selectedAmount === amt
                        ? "bg-gold-500 text-obsidian-950 border-gold-400 shadow-md"
                        : "bg-obsidian-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Exchange */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                3. Choose Verified Master Exchange:
              </label>
              <select
                value={selectedExchange}
                onChange={(e) => setSelectedExchange(e.target.value)}
                className="w-full bg-obsidian-900 border border-slate-800 text-slate-100 text-xs rounded-xl p-3 font-semibold focus:border-gold-400 outline-none"
              >
                <option value="Diamond Exchange">Diamond Exchange (High Speed Live Lines)</option>
                <option value="SkyExchange">SkyExchange (Best Session & Fancy Odds)</option>
                <option value="Lotus365">Lotus365 (Live Cards & International Odds)</option>
                <option value="LaserBook">LaserBook (Auto Punter Dashboard)</option>
              </select>
            </div>

            {/* Live Config Summary Box */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                <span>ESTIMATED CREATION TIME</span>
                <span className="text-emerald-400 font-bold">⚡ Under 2 Mins</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span>Welcome Bonus:</span>
                <span className="text-gold-400 font-mono">+10% Extra Deposit Added</span>
              </div>
            </div>

            {/* Configurator WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-glow py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <PhoneCall className="w-4 h-4 fill-white" />
              Send Config & Open ID on WhatsApp
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>100% Confidential & Secure Banking Encryption</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
