import React from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

export default function Whitepaper() {
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
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mirror Sync Whitepaper
            </h1>
            <p className="text-xl text-gray-400">"Grow Together, Rich Together"</p>
            <p className="text-gray-500 mt-2">Version 3.2 | September 2025</p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/40 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">⚠️ IMPORTANT NOTICE</h3>
            <p className="text-gray-300">
              Mirror Sync smart contract is deployed on Solana Devnet with core functionality operational.
              Platform testing phase active. Mainnet launch pending security audit and funding.
            </p>
          </div>

          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">1. Executive Summary</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">1.1 Vision Statement</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mirror Sync is the first Solana-native copy-trading platform built specifically for decentralized finance. 
              Our mission is to democratize access to successful trading strategies while maintaining transparency, security, 
              and community ownership. By enabling users to sync with verified "Guides" in real-time, Mirror Sync empowers 
              retail traders to grow together and achieve financial success in a low-cost, efficient environment powered by 
              Solana's superior blockchain infrastructure.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">1.2 The Problem</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The cryptocurrency trading landscape reveals a harsh reality: 80-90% of retail traders lose money over time. 
              This stems from critical issues:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6 ml-6">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span><strong>Information Asymmetry:</strong> Successful strategies concentrated among institutional players.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span><strong>High Barriers to Entry:</strong> Traditional platforms impose prohibitive fees and requirements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span><strong>Lack of Transparency:</strong> Opaque performance metrics and manipulated statistics.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span><strong>Centralization Risks:</strong> Custodial models expose users to platform and regulatory risks.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">1.3 Our Solution</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mirror Sync connects successful traders ("Guides") with regular investors ("Travelers") through an innovative approach:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Automated Trade Syncing</h4>
                <p className="text-sm text-gray-400">Smart contracts enable real-time, proportional strategy replication without custody.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">AI-Powered Verification</h4>
                <p className="text-sm text-gray-400">Advanced algorithms evaluate trader performance and prevent manipulation.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Transparent Economics</h4>
                <p className="text-sm text-gray-400">Only 0.1% platform fee + 8-10% performance fee. No hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Community Governance</h4>
                <p className="text-sm text-gray-400">$MSYNC token empowers platform governance and profit sharing.</p>
              </div>
            </div>
          </section>

          {/* Market Opportunity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">2. Market Opportunity</h2>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$2.62B</div>
                  <div className="text-gray-400 text-sm">Global Copy Trading Market</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50M+</div>
                  <div className="text-gray-400 text-sm">Active Crypto Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$13.38B</div>
                  <div className="text-gray-400 text-sm">Solana Ecosystem TVL</div>
                </div>
              </div>
              <p className="text-gray-300 text-center">
                We target a $500M serviceable addressable market within cryptocurrency, 
                growing at 7.6% CAGR annually.
              </p>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">3. Technical Architecture</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">3.1 Core Components</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Smart Contracts (Rust/Anchor)</h4>
                <p className="text-gray-400 text-sm mb-2">Built on Solana for optimal performance</p>
                <div className="bg-black/50 rounded p-3 font-mono text-xs text-gray-300">
                  Contract Address: TFDiX8vcvEKexK6qJY1T172y5YL19oP7k265BFT8MZP
                </div>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Frontend Application</h4>
                <p className="text-gray-400 text-sm">Mobile-first React with Phantom wallet integration</p>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">AI Integration</h4>
                <p className="text-gray-400 text-sm">TensorFlow.js machine learning for real-time verification</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">3.2 How It Works</h3>
            <ol className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span>Platform monitors Guide wallets using Bitquery API for real-time DEX data</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span>When Guide trades, smart contract scales and executes mirrors via Solana RPC</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span>AI analyzes on-chain data to update scores in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span>Integration with Raydium, Orca, and Jupiter for trade execution</span>
              </li>
            </ol>
          </section>

          {/* AI Verification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">4. AI-Powered Trader Verification</h2>
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">No More Fake Trading Gurus</h3>
              <p className="text-gray-300 mb-4">
                Our AI Scoring System eliminates manipulated screenshots and cherry-picked results. 
                We require a minimum 6-month verified track record.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="py-3 px-4 text-purple-400">Analysis Factor</th>
                    <th className="py-3 px-4 text-purple-400">Weight</th>
                    <th className="py-3 px-4 text-purple-400">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Win Rate Analysis</td>
                    <td className="py-3 px-4 text-cyan-400">30%</td>
                    <td className="py-3 px-4 text-sm">Percentage of profitable trades, adjusted for market conditions</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Consistency Tracking</td>
                    <td className="py-3 px-4 text-cyan-400">25%</td>
                    <td className="py-3 px-4 text-sm">Standard deviation of monthly returns, drawdown recovery</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Risk Management</td>
                    <td className="py-3 px-4 text-cyan-400">20%</td>
                    <td className="py-3 px-4 text-sm">Maximum drawdown analysis and position sizing</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Volume Verification</td>
                    <td className="py-3 px-4 text-cyan-400">15%</td>
                    <td className="py-3 px-4 text-sm">Real trading volume, ensuring Guide trades at scale</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Longevity Assessment</td>
                    <td className="py-3 px-4 text-cyan-400">10%</td>
                    <td className="py-3 px-4 text-sm">Track record duration and market adaptation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Tokenomics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">5. $MSYNC Tokenomics</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Total Supply</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  1,000,000,000
                </div>
                <div className="text-gray-400 text-sm mt-2">$MSYNC Tokens</div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Community</span>
                    <span className="font-bold text-purple-400">55% (550M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investors</span>
                    <span className="font-bold text-cyan-400">25% (250M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Team</span>
                    <span className="font-bold text-green-400">15% (150M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Treasury</span>
                    <span className="font-bold text-yellow-400">5% (50M)</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Staking Benefits</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="py-3 px-4 text-purple-400">$MSYNC Staked</th>
                    <th className="py-3 px-4 text-purple-400">Fee Discount</th>
                    <th className="py-3 px-4 text-purple-400">Other Benefits</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">1,000</td>
                    <td className="py-3 px-4 text-cyan-400">25%</td>
                    <td className="py-3 px-4 text-sm">-</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">10,000</td>
                    <td className="py-3 px-4 text-cyan-400">50%</td>
                    <td className="py-3 px-4 text-sm">-</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">100,000</td>
                    <td className="py-3 px-4 text-cyan-400">75%</td>
                    <td className="py-3 px-4 text-sm">Premium access to AI 90+ traders, VIP support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="font-bold text-green-400 mb-2">Revenue Sharing</h4>
              <p className="text-gray-300">30% of platform profits distributed monthly to stakers in USDC</p>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">6. Roadmap</h2>
            <div className="space-y-4">
              {[
                { phase: "Phase 1: Foundation", quarter: "Q4 2025", status: "In Progress" },
                { phase: "Phase 2: Growth", quarter: "Q1-Q2 2026", status: "Upcoming" },
                { phase: "Phase 3: Scale", quarter: "Q3-Q4 2026", status: "Planned" },
                { phase: "Phase 4: Expansion", quarter: "2027+", status: "Planned" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold">{item.phase}</h4>
                      <p className="text-gray-400">{item.quarter}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      item.status === 'In Progress' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Projections */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-purple-500/20 pb-4">7. Financial Projections</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="py-3 px-4 text-purple-400">Metric</th>
                    <th className="py-3 px-4 text-purple-400">Year 1</th>
                    <th className="py-3 px-4 text-purple-400">Year 2</th>
                    <th className="py-3 px-4 text-purple-400">Year 3</th>
                    <th className="py-3 px-4 text-purple-400">Year 5</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Active Users</td>
                    <td className="py-3 px-4">5,000</td>
                    <td className="py-3 px-4">25,000</td>
                    <td className="py-3 px-4">75,000</td>
                    <td className="py-3 px-4">150,000</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Total Value Locked</td>
                    <td className="py-3 px-4">$10M</td>
                    <td className="py-3 px-4">$50M</td>
                    <td className="py-3 px-4">$150M</td>
                    <td className="py-3 px-4">$250M</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-4 font-semibold">Platform Revenue</td>
                    <td className="py-3 px-4">$100K</td>
                    <td className="py-3 px-4">$500K</td>
                    <td className="py-3 px-4">$1.5M</td>
                    <td className="py-3 px-4">$2.5M</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Token Market Cap</td>
                    <td className="py-3 px-4 text-cyan-400">$5M</td>
                    <td className="py-3 px-4 text-cyan-400">$25M</td>
                    <td className="py-3 px-4 text-cyan-400">$75M</td>
                    <td className="py-3 px-4 text-cyan-400">$150M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <div className="bg-red-500/10 border-2 border-red-500/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ FULL DISCLAIMER</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• This is NOT financial advice.</li>
                <li>• Mirror Sync is in DEVELOPMENT PHASE - no operational platform exists yet.</li>
                <li>• Cryptocurrency trading involves substantial risk of loss.</li>
                <li>• No guarantees of returns, platform success, or token value.</li>
                <li>• Past performance of Guides does not guarantee future results.</li>
                <li>• Users may lose all invested capital.</li>
                <li>• Consult legal and financial advisors before any investment decisions.</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-2 text-gray-400">
              <p><strong>Website:</strong> mirrorsync.co</p>
              <p><strong>Email:</strong> mirrorsyncofficial@gmail.com</p>
              <p><strong>Discord:</strong> discord.gg/mirrorsync</p>
              <p><strong>Twitter:</strong> @MirrorSyncHQ</p>
            </div>
            <p className="text-gray-500 mt-6 text-sm">Version 3.2 | September 2025</p>
            <p className="text-gray-500 text-sm">© 2025 Mirror Sync. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
}