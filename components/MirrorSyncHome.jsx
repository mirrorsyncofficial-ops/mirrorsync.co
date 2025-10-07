export default function MirrorSyncHome() {
  return (
    <div>
      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .container { min-height: 100vh; background: linear-gradient(to bottom, #1a1a2e 0%, #0f0f23 50%, #1a1a2e 100%); color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .header { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(147,51,234,0.2); z-index: 50; padding: 1.5rem 2rem; }
        .nav { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; background: linear-gradient(to right, #a855f7, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero { padding: 10rem 2rem 5rem; text-align: center; max-width: 1200px; margin: 0 auto; }
        .badge { display: inline-block; padding: 0.5rem 1.5rem; background: rgba(147,51,234,0.1); border: 1px solid rgba(147,51,234,0.3); border-radius: 50px; font-size: 0.9rem; color: #a855f7; margin-bottom: 2rem; }
        h1 { font-size: 4.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 2rem; background: linear-gradient(135deg, #a855f7 0%, #22d3ee 50%, #10b981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .subtitle { font-size: 1.5rem; color: #9ca3af; margin-bottom: 3rem; max-width: 800px; margin-left: auto; margin-right: auto; }
        .trust-badges { display: flex; gap: 2rem; justify-content: center; margin: 2rem 0; flex-wrap: wrap; }
        .trust-badge { display: flex; align-items: center; gap: 0.5rem; font-weight: 600; }
        .buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn { display: inline-block; padding: 1.2rem 3rem; border-radius: 12px; font-weight: 700; font-size: 1.1rem; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; }
        .btn-primary { background: linear-gradient(135deg, #9333ea, #22d3ee); color: white; box-shadow: 0 10px 40px rgba(147,51,234,0.4); }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 60px rgba(147,51,234,0.6); }
        .btn-secondary { border: 2px solid #9333ea; color: white; background: transparent; }
        .btn-secondary:hover { background: rgba(147,51,234,0.1); }
        .stats { padding: 4rem 2rem; background: linear-gradient(90deg, rgba(147,51,234,0.15), rgba(34,211,238,0.15)); border-top: 1px solid rgba(147,51,234,0.2); border-bottom: 1px solid rgba(147,51,234,0.2); }
        .stats-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem; text-align: center; }
        .stat-value { font-size: 3rem; font-weight: 900; background: linear-gradient(to right, #a855f7, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem; }
        .stat-label { color: #9ca3af; font-size: 0.95rem; }
        .section { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; }
        .section h2 { font-size: 3.5rem; font-weight: 800; text-align: center; margin-bottom: 4rem; }
        .grid { display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .card { background: linear-gradient(135deg, rgba(147,51,234,0.08), rgba(34,211,238,0.08)); border: 1px solid rgba(147,51,234,0.2); border-radius: 16px; padding: 2.5rem; transition: all 0.3s; }
        .card:hover { border-color: rgba(147,51,234,0.5); transform: translateY(-5px); }
        .card h3 { font-size: 1.5rem; font-weight: 700; margin: 1.5rem 0 1rem; }
        .card p { color: #9ca3af; line-height: 1.7; }
        .number { font-size: 4rem; font-weight: 900; background: linear-gradient(to right, #a855f7, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1rem; }
        .cta-section { padding: 6rem 2rem; text-align: center; }
        .email-form { display: flex; gap: 1rem; max-width: 600px; margin: 2rem auto; }
        .email-input { flex: 1; padding: 1.2rem 1.5rem; background: #1f2937; border: 1px solid rgba(147,51,234,0.3); border-radius: 12px; color: white; font-size: 1rem; }
        .email-input::placeholder { color: #6b7280; }
        .email-input:focus { outline: none; border-color: #9333ea; }
        footer { border-top: 1px solid rgba(147,51,234,0.2); padding: 3rem 2rem; text-align: center; color: #9ca3af; }
        @media (max-width: 768px) { 
          h1 { font-size: 2.5rem; } 
          .email-form { flex-direction: column; }
          .section h2 { font-size: 2.5rem; }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <nav className="nav">
            <div className="logo">MirrorSync</div>
          </nav>
        </header>

        <section className="hero">
          <div className="badge">🚀 Now Live on Solana Devnet</div>
          <h1>Copy Profitable Traders<br />on Solana</h1>
          <p className="subtitle">AI-verified strategies. Non-custodial security. Zero fees until you profit.</p>
          
          <div className="trust-badges">
            <span className="trust-badge" style={{color: '#fbbf24'}}>⚡ Built on Solana</span>
            <span className="trust-badge" style={{color: '#22d3ee'}}>🔒 Non-Custodial</span>
            <span className="trust-badge" style={{color: '#10b981'}}>✓ AI-Verified</span>
          </div>

          <div className="buttons">
            <button className="btn btn-primary">Join 500+ on Waitlist →</button>
            <button className="btn btn-secondary">View Whitepaper</button>
          </div>
        </section>

        <section className="stats">
          <div className="stats-grid">
            <div><div className="stat-value">$2.6B</div><div className="stat-label">Global Market</div></div>
            <div><div className="stat-value">65K+</div><div className="stat-label">TPS</div></div>
            <div><div className="stat-value">$0.00025</div><div className="stat-label">Avg Fee</div></div>
            <div><div className="stat-value">500+</div><div className="stat-label">Traders</div></div>
          </div>
        </section>

        <section className="section">
          <h2>How It Works</h2>
          <div className="grid">
            <div className="card">
              <div className="number">1</div>
              <h3>Choose Guide</h3>
              <p>AI-verified traders with 6-month track records.</p>
            </div>
            <div className="card">
              <div className="number">2</div>
              <h3>Set Investment</h3>
              <p>You keep custody. We never touch your funds.</p>
            </div>
            <div className="card">
              <div className="number">3</div>
              <h3>Auto-Mirror</h3>
              <p>Trades mirror in under 2 seconds.</p>
            </div>
            <div className="card">
              <div className="number">4</div>
              <h3>Keep Profits</h3>
              <p>10% to Guide, 0.1% platform fee.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Stop Losing Money.<br />Start Copying Winners.</h2>
          <p style={{fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2rem'}}>Join 500+ traders on the waitlist</p>
          <form className="email-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="email-input" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Join Waitlist</button>
          </form>
        </section>

        <footer>
          <div className="logo" style={{marginBottom: '1rem'}}>MirrorSync</div>
          <p>© 2025 Mirror Sync. Built on Solana.</p>
        </footer>
      </div>
    </div>
  )
}