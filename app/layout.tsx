import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultindia.com'),
  title: "BetVault ID Guide | Sports Betting & Account Information",
  description: "Explore BetVault information, cricket and sports betting resources, account guidance, casino information, and frequently asked questions.",
  keywords: ["Betting ID", "Cricket Betting ID", "IPL Betting 2026", "Diamond Exchange ID", "SkyExchange ID", "Instant UPI Withdrawal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-obsidian-950 text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
