"use client";

import { Flame, TrendingUp, ShieldAlert, Activity } from "lucide-react";

export default function Ticker() {
  const tickerItems = [
    { match: "India vs Australia (3rd T20)", teamA: "IND 1.82", teamB: "AUS 2.05", status: "LIVE NOW" },
    { match: "Mumbai Indians vs CSK", teamA: "MI 1.90", teamB: "CSK 1.92", status: "IPL FANCY OPEN" },
    { match: "Real Madrid vs Barcelona", teamA: "RMA 2.10", teamB: "BAR 3.20", status: "EL CLASICO TONIGHT" },
    { match: "Novak Djokovic vs Carlos Alcaraz", teamA: "NOV 1.70", teamB: "CAR 2.15", status: "WIMBLETON FINAL" },
    { match: "England vs Pakistan (ODI)", teamA: "ENG 1.65", teamB: "PAK 2.30", status: "OPEN FOR BETS" },
  ];

  return (
    <div className="bg-obsidian-950 border-y border-gold-500/20 py-3 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        
        {/* Ticker Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-extrabold uppercase">
          <Activity className="w-3.5 h-3.5 animate-pulse text-gold-400" />
          <span>LIVE ODDS TICKER</span>
        </div>

        {/* Marquee Container */}
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap text-xs">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 shrink-0 bg-obsidian-900/60 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-200">{item.match}</span>
              <span className="font-mono text-emerald-400 font-extrabold">{item.teamA}</span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-gold-400 font-extrabold">{item.teamB}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300">
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
