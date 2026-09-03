"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is BetVault?",
      a: "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information.",
    },
    {
      q: "How does a BetVault ID work?",
      a: "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process.",
    },
    {
      q: "How can I access BetVault?",
      a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site.",
    },
    {
      q: "What sports are available on BetVault?",
      a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability.",
    },
    {
      q: "Does BetVault provide live sports information?",
      a: "Check the site's current sports section for any live-event information and the terms that apply to its use.",
    },
    {
      q: "How can I get help with my BetVault account?",
      a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts.",
    },
    {
      q: "How do I find BetVault login information?",
      a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel.",
    },
    {
      q: "What payment options are supported?",
      a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts.",
    },
    {
      q: "What should I do if I have trouble accessing my account?",
      a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel.",
    },
    {
      q: "Where can I find the latest BetVault updates?",
      a: "Refer to BetVault's current website information and terms for the most accurate answer.",
    },
  ];

  const waLink = getWhatsAppLink("Hi BetVault team, I have a custom question about betting IDs.");

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
