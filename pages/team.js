import React from 'react';
import { ArrowLeft, Users, Shield, Vote, Wallet } from 'lucide-react';

export default function Team() {
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
              Join Community
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Team & Governance
            </h1>
            <p className="text-xl text-gray-400">Building the future of decentralized copy trading</p>
          </div>

          {/* Current Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
              <Users className="w-8 h-8 text-purple-400" />
              <span>Leadership</span>
            </h2>

            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold">
                  MS
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Solo Founder</h3>
                  <p className="text-purple-400 mb-4">Founder & Lead Developer</p>
                  <p className="text-gray-300 leading-relaxed">
                    Background in cryptocurrency trading and Solana development. Passionate about democratizing 
                    access to successful trading strategies through decentralized technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">🚀 We're Hiring!</h3>
              <p className="text-gray-300 mb-4">We're actively recruiting talented individuals to join our mission:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-400 mb-2">Technical Co-Founder</h4>
                  <p className="text-sm text-gray-400">Rust/Solana expertise required</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-400 mb-2">Lead Smart Contract Developer</h4>
                  <p className="text-sm text-gray-400">Anchor framework experience</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-400 mb-2">AI/ML Engineer</h4>
                  <p className="text-sm text-gray-400">Trading algorithm development</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </section>

          {/* Governance Model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
              <Vote className="w-8 h-8 text-cyan-400" />
              <span>DAO Governance</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Voting Mechanism</h3>
                <p className="text-gray-300 mb-6">
                  Mirror Sync uses Quadratic Voting to ensure fair participation. This prevents whale dominance 
                  and gives smaller holders meaningful influence.
                </p>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-400 mb-3">How It Works:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Cost per vote increases quadratically</li>
                    <li>• 1 vote = 1 token, 2 votes = 4 tokens, 3 votes = 9 tokens</li>
                    <li>• Encourages diverse participation</li>
                    <li>• Prevents plutocracy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Governance Scope</h3>
                <p className="text-gray-300 mb-6">
                  $MSYNC holders vote on critical platform decisions:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-white">Fee Adjustments</div>
                      <div className="text-sm text-gray-400">Platform and performance fee modifications</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-white">Feature Development</div>
                      <div className="text-sm text-gray-400">Priority roadmap items and new features</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-white">Treasury Management</div>
                      <div className="text-sm text-gray-400">Fund allocation and partnerships</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-white">Protocol Upgrades</div>
                      <div className="text-sm text-gray-400">Smart contract improvements and security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Proposal Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-bold mb-2">Submit</h4>
                  <p className="text-sm text-gray-400">Community members submit proposals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-bold mb-2">Discussion</h4>
                  <p className="text-sm text-gray-400">5-day community discussion period</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-bold mb-2">Vote</h4>
                  <p className="text-sm text-gray-400">7-day voting period for token holders</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    4
                  </div>
                  <h4 className="font-bold mb-2">Execute</h4>
                  <p className="text-sm text-gray-400">Approved proposals implemented on-chain</p>
                </div>
              </div>
            </div>
          </section>

          {/* Treasury Management */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
              <Wallet className="w-8 h-8 text-green-400" />
              <span>Treasury Management</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Initial Allocation</h3>
                <div className="text-3xl font-bold text-white mb-2">50M $MSYNC</div>
                <p className="text-sm text-gray-400">5% of total supply reserved for development and operations</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Use Cases</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Development funding</li>
                  <li>• Marketing campaigns</li>
                  <li>• Security audits</li>
                  <li>• Partnerships</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Transparency</h3>
                <p className="text-sm text-gray-400 mb-3">All treasury transactions are publicly visible on-chain</p>
                <button className="w-full px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-lg text-sm font-semibold text-green-400 hover:bg-green-500/30 transition-all">
                  View Treasury
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Shield className="w-7 h-7 text-cyan-400" />
                <span>Multi-Sig Security</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-purple-400 mb-3">Protection Mechanism</h4>
                  <p className="text-gray-300 mb-4">
                    Treasury assets are protected by a 3-of-5 multi-signature wallet, requiring approval 
                    from multiple trusted parties for any transaction.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">3/5</div>
                    <div className="text-sm text-gray-400">Signatures required for execution</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 mb-3">Signers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 bg-black/50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">
                        F
                      </div>
                      <div>
                        <div className="font-semibold">Founder</div>
                        <div className="text-xs text-gray-400">Lead Developer</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3 bg-black/50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold">
                        C
                      </div>
                      <div>
                        <div className="font-semibold">Community Rep</div>
                        <div className="text-xs text-gray-400">Elected by DAO</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3 bg-black/50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-semibold">Advisor</div>
                        <div className="text-xs text-gray-400">Security Expert</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Join Community CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the governance process and shape the future of Mirror Sync
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
                  Join Discord
                </button>
                <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all">
                  Follow on Twitter
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}