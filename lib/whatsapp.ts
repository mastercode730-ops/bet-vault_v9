const DEFAULT_PHONE = "8764465110"; // Dedicated Bet Vault WhatsApp Concierge Number: https://wa.me/8764465110

export function getWhatsAppLink(message?: string, phone: string = DEFAULT_PHONE): string {
  const encodedMsg = encodeURIComponent(
    message || "Hey Bet Vault v9! I want to create my new betting ID on your exchange. Please guide me right now."
  );
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}
