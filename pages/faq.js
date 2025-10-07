import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Mirror Sync?",
          a: "Mirror Sync is the first Solana-native decentralized copy-trading platform. It allows users to automatically replicate the trades of successful traders ('Guides') while maintaining full control of their assets."
        },
        {
          q: "How do I get started?",
          a: "Connect your Solana wallet (Phantom, Solflare), browse verified Guides, select one to follow, set your investment amount, and trades will automatically mirror in real-time."
        },
        {
          q: "Do I need to transfer my funds to Mirror Sync?",
          a: "No! Mirror Sync is non-custodial. You maintain complete control of your funds at all times. We never have access to your assets."
        },
        {
          q: "What wallets are supported?",
          a: "We support all major Solana wallets including Phantom, Solflare, Ledger, and any wallet compatible with Solana's standard."
        }
      ]
    },
    {
      category: "Fees & Costs",
      questions: [
        {
          q: "What are the platform fees?",
          a: "Mirror Sync charges only 0.1% on mirrored trades. Guides receive 8-10% of your profits (not your capital). No subscription fees, no hidden costs."
        },
        {
          q: "Are there any additional costs?",
          a: "Only Solana network fees, which average $0.00025 per transaction. This is 1000x cheaper than Ethereum-based platforms."
        },
        {
          q: "How does the performance fee work?",
          a: "Guides earn 8-10% only from your profits. If you don't profit, they don't get paid. This aligns incentives perfectly."
        },
        {
          q: "Can I get fee discounts?",
          a: "Yes! Staking $MSYNC tokens provides fee discounts: 1,000 tokens = 25% off, 10,000 tokens = 50% off, 100,000 tokens = 75% off."
        }
      ]
    },
    {
      category: "Trading & Guides",
      questions: [
        {
          q: "How are Guides verified?",
          a: "Our AI scoring system evaluates traders across 5 factors: Win Rate (30%), Consistency (25%), Risk Management (20%), Volume (15%), and Longevity (10%). Minimum 6-month verified track record required."
        },
        {
          q: "Can I follow multiple Guides?",
          a: "Yes! You can diversify by following multiple Guides simultaneously, allocating different percentages of your portfolio to each."
        },
        {
          q: "How fast are trades mirrored?",
          a: "Trades are mirrored within 2 seconds thanks to Solana's 65,000+ TPS capacity. You won't miss opportunities due to lag."
        },
        {
          q: "Can I set risk limits?",
          a: "Absolutely. You can set maximum drawdown limits, stop-loss parameters, and allocation percentages to match your risk tolerance."
        },
        {
          q: "Can I stop following a Guide anytime?",
          a: "Yes, you can unsubscribe from a Guide at any time. Your positions will remain open unless you choose to close them."
        }
      ]
    },
    {
      category: "Security & Safety",
      questions: [
        {
          q: "Is Mirror Sync safe?",
          a: "Yes. We're non-custodial (you control your funds), smart contracts will be audited by reputable firms, and all code will be open-source. Multi-sig treasury protection ensures platform security."
        },
        {
          q: "What if a Guide's wallet gets hacked?",
          a: "Our AI monitoring detects unusual patterns immediately. Automatic circuit breakers pause mirroring if anomalies are detected, protecting followers."
        },
        {
          q: "Has the smart contract been audited?",
          a: "We're currently on Devnet with audits scheduled for Q1 2026 post-funding. Mainnet launch will only occur after comprehensive security audits."
        },
        {
          q: "Can I lose more than I invest?",
          a: "No. You can only lose what you allocate. Mirror Sync doesn't support leverage or margin trading that could amplify losses beyond your investment."
        }
      ]
    },
    {
      category: "$MSYNC Token",
      questions: [
        {
          q: "What is $MSYNC used for?",
          a: "$MSYNC provides fee discounts (up to 75%), revenue sharing (30% of profits to stakers), governance rights, and premium access to top traders."
        },
        {
          q: "When is the token launch?",
          a: "Token launch is planned for Q1-Q2 2026 (Phase 2: Growth). Join the waitlist to be notified."
        },
        {
          q: "What's the total supply?",
          a: "1 billion $MSYNC tokens. Distribution: 55% Community, 25% Investors, 15% Team (vested), 5% Treasury."
        },
        {
          q: "How do I earn revenue sharing?",
          a: "Stake your $MSYNC tokens to receive 30% of platform profits, distributed monthly in USDC. The more you stake, the more you earn."
        },
        {
          q: "Is there a token burn mechanism?",
          a: "Yes. We burn 25% of quarterly platform profits, permanently reducing supply and increasing scarcity."
        }
      ]
    },
    {
      category: "Platform Status",
      questions: [
        {
          q: "Is Mirror Sync live?",
          a: "We're currently in development with smart contracts deployed on Solana Devnet. Core functions are operational. Mainnet beta launch targeted for Q1-Q2 2026."
        },
        {
          q: "Can I use it now?",
          a: "Not yet on mainnet. You can join our 500+ person waitlist to get early access when we launch."
        },
        {
          q: "What's the current roadmap status?",
          a: "Phase 1 (Foundation) is in progress with smart contracts deployed. Phase 2 (Growth with token launch) begins Q1 2026. Phase 3 (Scale with mobile app) follows Q3 2026."
        },
        {
          q: "How can I stay updated?",
          a: "Join our Discord (discord.gg/mirrorsync), follow Twitter (@MirrorSyncHQ), or join the email waitlist on our homepage."
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MirrorSync
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-sm font-bold">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400">Everything you need to know about Mirror Sync</p>
          </div>

          {/* FAQ Sections */}
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, questionIndex) => {
                  const globalIndex = `${sectionIndex}-${questionIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all"
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left"
                      >
                        <span className="font-semibold text-lg pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8">
              Join our Discord community or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
                Join Discord
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}