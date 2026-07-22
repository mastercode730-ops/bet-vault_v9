"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to receive my withdrawal into my UPI account?",
      a: "Our average payout processing time is under 5 minutes. Once you submit a withdrawal request or message our 24/7 WhatsApp VIP desk, our system verifies your balance and dispatches funds directly via GPay, PhonePe, Paytm, or IMPS bank transfer.",
    },
    {
      q: "What is the minimum deposit required to get started?",
      a: "You can create your betting ID with a starting deposit as low as ₹500. We encourage new punters to test small deposits and test our instant withdrawal process right after.",
    },
    {
      q: "Which master exchanges do you provide access to?",
      a: "We provide verified, direct master panel IDs for Diamond Exchange, SkyExchange, Lotus365, and LaserBook. All IDs come with unfiltered live market lines and high-speed odds.",
    },
    {
      q: "Are my personal details and financial transactions private?",
      a: "100% confidential. All communication and banking validations are protected under 256-bit SSL encryption. We never share punter data with external aggregators.",
    },
    {
      q: "What happens if an IPL match is interrupted or cancelled due to rain?",
      a: "All match bets follow official exchange rules. If a match is declared void or abandonded, staked amounts are instantly refunded back to your betting balance without deductions.",
    },
  ];

  const waLink = getWhatsAppLink("Hi Bet Vault v9 team, I have a custom question about betting IDs.");

  return (
    <section className="py-20 px-4 sm:px-6 relative luxury-bg-mesh">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-extrabold uppercase">
            <HelpCircle className="w-4 h-4 text-gold-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Clear Answers to Common Betting Questions
          </h2>

          <p className="text-slate-300 text-base font-normal max-w-xl mx-auto">
            Everything you need to know about instant deposits, withdrawal speed, exchange lines, and account security.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-luxury-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-white text-base sm:text-lg hover:text-gold-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800 text-center sm:flex sm:items-center sm:justify-between gap-4 space-y-4 sm:space-y-0">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-white text-base">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-400 font-normal">Our VIP support team is online on WhatsApp to assist you directly.</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-gold-luxury px-6 py-3 rounded-xl text-xs font-extrabold items-center justify-center gap-2 uppercase tracking-wide shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-obsidian-950" />
            <span>Ask Admin on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
