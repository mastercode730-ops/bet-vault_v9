import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, HeartHandshake, Award, Users, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "About Us | Bet Vault v9 Luxury Exchange Network",
  description: "Learn why Bet Vault v9 was created to bring 100% financial transparency, instant payouts, and zero-hassle betting to Indian sports fans.",
};

export default function AboutPage() {
  const waLink = getWhatsAppLink("Hi Bet Vault team, I read your About page and want to join the VIP betting hub.");

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative luxury-bg-mesh space-y-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-extrabold uppercase">
          <Award className="w-4 h-4 text-gold-400" />
          <span>OUR STORY & PHILOSOPHY</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          Restoring Trust in <span className="text-gradient-gold">Indian Sports Betting</span>
        </h1>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          We built Bet Vault v9 because we were tired of watching genuine punters get scammed by shady bookie admins who delay payouts or disappear during IPL season.
        </p>
      </div>

      {/* Model Ambassador & Mission Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 relative">
          <div className="glass-luxury-card rounded-3xl p-6 sm:p-8 space-y-6 border border-gold-500/30 text-center sm:text-left">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Bet Vault Brand Ambassador Pooja"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                <span className="px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 font-mono text-[10px] font-black uppercase">
                  DIRECTOR OF VIP RELATIONS
                </span>
                <h3 className="font-display font-bold text-xl text-white">Pooja Sharma</h3>
                <p className="text-xs text-slate-300">"We guarantee every single withdrawal within 5 minutes flat. Period."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 text-slate-200 font-normal text-base leading-relaxed">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Built by Traders, Built for Real Bettors
          </h2>

          <p>
            When we first started betting on IPL games seven years ago, the landscape was chaotic. You had to message unverified WhatsApp numbers, deposit money into private bank accounts, and pray that the bookie wouldn't block your number after you hit a ₹50,000 accumulator.
          </p>

          <p>
            That's why we created <strong>Bet Vault v9</strong>. We established direct partnerships with master exchange servers (Diamond Exchange, SkyExchange, Lotus365, LaserBook) and automated our banking processing so payouts land in under 5 minutes without human friction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-900 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
              <span className="text-xs font-bold text-white">25,000+ Active Verified Punters</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-900 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-white">₹10+ Crore Payouts Cleared</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-gold-luxury px-8 py-4 rounded-xl text-xs font-black items-center gap-3 uppercase tracking-wide"
            >
              <MessageSquare className="w-4 h-4 fill-obsidian-950" />
              <span>Join Bet Vault VIP Network</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
