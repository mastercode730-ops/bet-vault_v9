import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact VIP Support | BetVault",
  description: "Get 24/7 direct WhatsApp support for instant ID setup, deposit recharges, and 5-minute withdrawal processing.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactForm />
    </div>
  );
}
