import PaymentSection from '@/components/PaymentSection';
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Markets from "@/components/Markets";
import BetCalculator from "@/components/BetCalculator";
import TrustFeatures from "@/components/TrustFeatures";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "http://betvaultid.com/#website",
        "url": "http://betvaultid.com/",
        "name": "BetVault",
        "inLanguage": "en"
      },
      {
        "@type": "Organization",
        "@id": "http://betvaultid.com/#organization",
        "name": "BetVault",
        "url": "http://betvaultid.com/"
      },
      {
        "@type": "WebPage",
        "@id": "http://betvaultid.com/#webpage",
        "url": "http://betvaultid.com/",
        "name": "BetVault ID Guide | Sports Betting & Account Information",
        "description": "Explore BetVault information, cricket and sports betting resources, account guidance, casino information, and frequently asked questions.",
        "isPartOf": {
          "@id": "http://betvaultid.com/#website"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "http://betvaultid.com/#faq",
        "url": "http://betvaultid.com/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is BetVault?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
            }
          },
          {
            "@type": "Question",
            "name": "How does a BetVault ID work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process."
            }
          },
          {
            "@type": "Question",
            "name": "How can I access BetVault?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
            }
          },
          {
            "@type": "Question",
            "name": "What sports are available on BetVault?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
            }
          },
          {
            "@type": "Question",
            "name": "Does BetVault provide live sports information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get help with my BetVault account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find BetVault login information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
            }
          },
          {
            "@type": "Question",
            "name": "What payment options are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I have trouble accessing my account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find the latest BetVault updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Refer to BetVault's current website information and terms for the most accurate answer."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <Ticker />
      <PaymentSection />
      <Markets />
      <BetCalculator />
      <TrustFeatures />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
