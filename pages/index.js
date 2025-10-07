export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: linear-gradient(to bottom, #1a1a2e, #0f0f23, #1a1a2e); }
      `}</style>

      {/* Header */}
      <div style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(147,51,234,0.2)', zIndex: 50, padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MirrorSync</div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '10rem 2rem 5rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(147,51,234,0.1)', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '50px', fontSize: '0.9rem', color: '#a855f7', marginBottom: '2rem' }}>🚀 Now Live on Solana Devnet</div>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '2rem', background: 'linear-gradient(135deg, #a855f7, #22d3ee, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Copy Profitable Traders<br />on Solana</h1>
        <p style={{ fontSize: '1.5rem', color: '#9ca3af', marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>AI-verified strategies. Non-custodial security. Zero fees until you profit.</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#fbbf24' }}>⚡ Built on Solana</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#22d3ee' }}>🔒 Non-Custodial</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#10b981' }}>✓ AI-Verified</span>
        </div>
        <button style={{ padding: '1.2rem 3rem', borderRadius: '12px', fontWeight: '700', fontSize: '1.1rem', border: 'none', background: 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', cursor: 'pointer', boxShadow: '0 10px 40px rgba(147,51,234,0.4)' }}>Join 500+ on Waitlist →</button>
      </div>

      {/* Stats */}
      <div style={{ padding: '4rem 2rem', background: 'linear-gradient(90deg, rgba(147,51,234,0.15), rgba(34,211,238,0.15))', borderTop: '1px solid rgba(147,51,234,0.2)', borderBottom: '1px solid rgba(147,51,234,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center', color: 'white' }}>
          <div><div style={{ fontSize: '3rem', fontWeight: '900', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>$2.6B</div><div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>Global Market</div></div>
          <div><div style={{ fontSize: '3rem', fontWeight: '900', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>65K+</div><div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>TPS</div></div>
          <div><div style={{ fontSize: '3rem', fontWeight: '900', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>$0.00025</div><div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>Avg Fee</div></div>
          <div><div style={{ fontSize: '3rem', fontWeight: '900', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>500+</div><div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>Traders</div></div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem' }}>How It Works</h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {[
            { num: '1', title: 'Choose Guide', desc: 'AI-verified traders with 6-month track records.' },
            { num: '2', title: 'Set Investment', desc: 'You keep custody. We never touch your funds.' },
            { num: '3', title: 'Auto-Mirror', desc: 'Trades mirror in under 2 seconds.' },
            { num: '4', title: 'Keep Profits', desc: '10% to Guide, 0.1% platform fee.' }
          ].map((step, i) => (
            <div key={i} style={{ background: 'linear-gradient(135deg, rgba(147,51,234,0.08), rgba(34,211,238,0.08))', border: '1px solid rgba(147,51,234,0.2)', borderRadius: '16px', padding: '2.5rem', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '4rem', fontWeight: '900', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '1.5rem 0 1rem' }}>{step.title}</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.7' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '6rem 2rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Stop Losing Money.<br />Start Copying Winners.</h2>
        <p style={{ fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2rem' }}>Join 500+ traders on the waitlist</p>
        <div style={{ display: 'flex', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '1.2rem 1.5rem', background: '#1f2937', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '12px', color: 'white', fontSize: '1rem' }} />
          <button style={{ padding: '1.2rem 2rem', borderRadius: '12px', fontWeight: '700', border: 'none', background: 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', cursor: 'pointer' }}>Join Waitlist</button>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(147,51,234,0.2)', padding: '3rem 2rem', textAlign: 'center', color: '#9ca3af' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>MirrorSync</div>
        <p>© 2025 Mirror Sync. Built on Solana.</p>
      </div>
    </div>
  )
}