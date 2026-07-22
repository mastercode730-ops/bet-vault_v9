"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Calculator, ArrowRight, DollarSign, Percent, Shield, AlertCircle, Sparkles } from "lucide-react";

export default function BetCalculator() {
  const [stake, setStake] = useState<number>(2500);
  const [odds, setOdds] = useState<number>(1.85);
  const [betType, setBetType] = useState<"back" | "lay">("back");

  // Calculations
  const totalPayout = betType === "back" ? Math.round(stake * odds) : Math.round(stake);
  const netProfit = Math.round(stake * (odds - 1));
  const roiPercentage = stake > 0 ? Math.round(((odds - 1) * 100)) : 0;

  const preFilledMessage = `Hi Bet Vault v9! I calculated my bet on the site: ${betType.toUpperCase()} position of ₹${stake} at odds ${odds}. Clean Profit: ₹${netProfit}. Please setup my bet on WhatsApp.`;
  const whatsappUrl = getWhatsAppLink(preFilledMessage);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 relative luxury-bg-mesh">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-extrabold uppercase">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ODDS & PROFIT TOOL</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Instant Bet Profit & Payout Calculator
          </h2>

          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Know your exact return down to the rupee before placing a wager. Calculate real-time Back and Lay exchange odds with zero hidden margins.
          </p>
        </div>

        {/* Calculator Main Card */}
        <div className="glass-luxury-card rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto border border-gold-500/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Inputs Column */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Position Selector */}
              <div>
                <label className="text-xs font-bold text-slate-200 block mb-2">
                  Exchange Betting Position:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBetType("back")}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all border flex items-center justify-center gap-2 ${
                      betType === "back"
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/10"
                        : "bg-obsidian-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>BACK (Win)</span>
                  </button>

                  <button
                    onClick={() => setBetType("lay")}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all border flex items-center justify-center gap-2 ${
                      betType === "lay"
                        ? "bg-rose-500/20 border-rose-500 text-rose-300 shadow-lg shadow-rose-500/10"
                        : "bg-obsidian-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>LAY (Against)</span>
                  </button>
                </div>
              </div>

              {/* Stake Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-200">
                    Stake Amount (₹):
                  </label>
                  <span className="font-mono text-base font-extrabold text-gold-400">
                    ₹{stake.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={stake}
                  onChange={(e) => setStake(Number(e.target.value))}
                  className="w-full h-2.5 bg-obsidian-900 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />

                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[1000, 2500, 5000, 10000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setStake(preset)}
                      className="py-1.5 px-2 text-[11px] font-mono font-bold rounded-lg bg-obsidian-900 border border-slate-800 text-slate-300 hover:border-gold-500/50"
                    >
                      +₹{preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decimal Odds Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-200">
                    Match Odds (Decimal Format):
                  </label>
                  <span className="font-mono text-base font-extrabold text-emerald-400">
                    {odds.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.05"
                    min="1.05"
                    max="20.0"
                    value={odds}
                    onChange={(e) => setOdds(parseFloat(e.target.value) || 1.05)}
                    className="w-full bg-obsidian-900 border border-slate-800 rounded-xl p-3 text-slate-100 font-mono text-sm font-bold focus:border-gold-400 outline-none"
                  />
                  <div className="flex items-center gap-1.5 shrink-0">
                    {[1.50, 1.85, 2.20, 3.50].map((presetOdds) => (
                      <button
                        key={presetOdds}
                        onClick={() => setOdds(presetOdds)}
                        className="py-2.5 px-2.5 text-[11px] font-mono font-bold rounded-lg bg-obsidian-900 border border-slate-800 text-slate-300 hover:border-emerald-500/50"
                      >
                        {presetOdds}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Results Display */}
            <div className="md:col-span-6 p-6 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400">ESTIMATED PAYOUT METRICS</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                  Zero Commission Cut
                </span>
              </div>

              {/* Display Metrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400 font-medium">Total Return Payout:</span>
                  <span className="font-mono text-2xl font-black text-white">
                    ₹{totalPayout.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400 font-medium">Net Clean Profit:</span>
                  <span className="font-mono text-2xl font-black text-emerald-400">
                    +₹{netProfit.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-900">
                  <span className="text-slate-400">Return on Stake (ROI):</span>
                  <span className="font-mono text-sm font-extrabold text-gold-400">
                    +{roiPercentage}% Profit Margin
                  </span>
                </div>
              </div>

              {/* Progress Visual Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Stake vs Return Ratio</span>
                  <span className="text-gold-400">1 : {odds.toFixed(2)}</span>
                </div>
                <div className="w-full h-2.5 bg-obsidian-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${Math.min(100, roiPercentage)}%` }}
                  />
                </div>
              </div>

              {/* Place Bet CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold-luxury py-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <span>Place This Exact Bet on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
