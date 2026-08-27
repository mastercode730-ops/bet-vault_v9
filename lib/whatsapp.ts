const DEFAULT_PHONE = "918360750829"; // Dedicated Bet Vault WhatsApp Concierge Number: https://wa.me/918360750829

export function getWhatsAppLink(message?: string, phone: string = DEFAULT_PHONE): string {
  const encodedMsg = encodeURIComponent(
    message || "Hey BetVault! I want to create my new betting ID on your exchange. Please guide me right now."
  );
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}
