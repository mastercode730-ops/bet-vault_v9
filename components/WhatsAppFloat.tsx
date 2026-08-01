"use client";

import { MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const waLink = getWhatsAppLink("Hi BetVault, I am on your site and want to create my ID right now.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold shadow-2xl backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Instant WhatsApp Desk</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact VIP WhatsApp Support"
        className="w-14 h-14 rounded-full btn-whatsapp-glow flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group"
      >
        <MessageSquare className="w-7 h-7 fill-white stroke-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
