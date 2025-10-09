'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Home() {
  const [state, handleSubmit] = useForm("mkgqvbkr");
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: linear-gradient(to bottom, #1a1a2e, #0f0f23, #1a1a2e); }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1.1rem !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none; }
        }
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(147,51,234,0.3);
        }
      `}</style>

      {/* Header */}
      <div style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(147,51,234,0.2)', zIndex: 50, padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MirrorSync</div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Features</a>
            <a href="#how-it-works" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '500' }}>How It Works</a>
            <a href="#waitlist" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', textDecoration: 'none', fontWeight: '600' }}>Join Waitlist</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', padding: '0.5rem' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'fixed', top: '73px', left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 40 }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'rgba(15,15,35,0.98)', backdropFilter: 'blur(20px)', padding: '2rem', borderBottom: '1px solid rgba(147,51,234,0.2)' }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '500' }}>Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '500' }}>How It Works</a>
              <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '1rem', borderRadius: '8px', background: 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.2rem', marginTop: '1rem' }}>Join Waitlist</a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{ padding: '10rem 2rem 5rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(147,51,234,0.1)', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '50px', fontSize: '0.9rem', color: '#a855f7', marginBottom: '2rem' }}>🚀 Now Live on Solana Devnet</div>
        
        <h1 className="hero-title" style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '2rem', background: 'linear-gradient(135deg, #a855f7, #10b9f1, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Copy Profitable Traders<br />on Solana</h1>
        
        <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#9ca3af', marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>AI-verified strategies. Non-custodial security. Zero fees until you profit.</p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#fbbf24' }}>✓ Built on Solana</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#22d3ee' }}>✓ Non-Custodial</span>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(135deg, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why MirrorSync?</h2>
          <p style={{ fontSize: '1.2rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>Copy trades from verified profitable traders automatically</p>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {/* Feature 1 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, rgba(147,51,234,0.1), rgba(34,211,238,0.05))', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#a855f7' }}>AI-Verified Traders</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Only top-performing traders with verified track records. Our AI continuously monitors performance and risk metrics.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(147,51,234,0.05))', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#22d3ee' }}>Non-Custodial Security</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Your keys, your crypto. Trades execute directly from your wallet. We never hold your funds.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(147,51,234,0.05))', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#fbbf24' }}>Real-Time Mirroring</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Lightning-fast execution on Solana. Copy trades in milliseconds, not minutes.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,211,238,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#22c55e' }}>Performance-Based Fees</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Zero fees until you profit. We only succeed when you succeed. Fair and transparent pricing.</p>
          </div>
        </div>
      </div>

      {/* CTA with Formspree */}
      <div id="waitlist" style={{ padding: '6rem 2rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>
          {state.succeeded ? '🎉 Welcome to the Waitlist!' : 'Stop Losing Money.<br />Start Copying Winners.'}
        </h2>
        
        {state.succeeded ? (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2rem' }}>
              Check your email! We'll notify you when we launch.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              style={{ padding: '1.2rem 2rem', borderRadius: '12px', fontWeight: '700', border: 'none', background: 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', cursor: 'pointer', fontSize: '1rem' }}
            >
              Submit Another Email
            </button>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2rem' }}>Join 500+ traders on the waitlist</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                id="email"
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: '1', minWidth: '250px', padding: '1.2rem 1.5rem', background: '#1f2937', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '12px', color: 'white', fontSize: '1rem' }} 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              
              <button 
                type="submit"
                disabled={state.submitting}
                style={{ padding: '1.2rem 2rem', borderRadius: '12px', fontWeight: '700', border: 'none', background: state.submitting ? '#666' : 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', cursor: state.submitting ? 'not-allowed' : 'pointer', minWidth: '150px' }}
              >
                {state.submitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            
            {state.errors && state.errors.length > 0 && (
              <p style={{ color: '#ef4444', marginTop: '1rem' }}>Oops! There was an error. Please try again.</p>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(147,51,234,0.2)', padding: '3rem 2rem', textAlign: 'center', color: '#9ca3af' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', background: 'linear-gradient(to right, #a855f7, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>MirrorSync</div>
        <p>© 2025 Mirror Sync. Built on Solana.</p>
      </div>
    </div>
  );
}