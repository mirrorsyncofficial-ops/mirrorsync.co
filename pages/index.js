'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';

// Honest status map — edit as you ship: available | beta | planned
const FEATURE_STATUS = {
  aiVerification: 'planned',
  nonCustodial: 'beta',
  realTimeMirroring: 'planned',
  perfFees: 'available',
};
// Optional devnet demo link (leave empty to route clicks to waitlist)
const DEVNET_DEMO = '';

function StatusBadge({ status }) {
  const styles = {
    base: { display: 'inline-block', padding: '0.25rem 0.6rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 800, border: '1px solid', marginLeft: '0.5rem' },
    available: { color: '#10b981', borderColor: 'rgba(16,185,129,0.5)', background: 'rgba(16,185,129,0.12)' },
    beta: { color: '#f59e0b', borderColor: 'rgba(245,158,11,0.5)', background: 'rgba(245,158,11,0.12)' },
    planned: { color: '#9ca3af', borderColor: 'rgba(156,163,175,0.5)', background: 'rgba(156,163,175,0.12)' },
  };
  return <span style={{ ...styles.base, ...(styles[status]||styles.planned) }}>{status.toUpperCase()}</span>;
}

export default function Home() {
  const [state, handleSubmit] = useForm('mkgqvbkr'); // your Formspree ID
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const openModal = (p) => setModal(p);
  const closeModal = () => setModal(null);

  useEffect(() => {
    const close = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  const Section = ({ id, children, style }) => (
    <section id={id} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', ...style }}>{children}</section>
  );
  const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: 'white' }}>
      <style jsx>{`
        * { box-sizing: border-box; }
        html, body, #__next { height: 100%; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: linear-gradient(to bottom, #0f0f23, #1a1a2e 40%, #0f0f23); }
        a { color: inherit; }
        @media (max-width: 768px) { .desktop-nav { display: none; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none; } }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(147,51,234,0.25); border-radius: 16px; padding: 1.5rem; }
        .chip { display: inline-block; padding: 0.5rem 1rem; border-radius: 999px; background: rgba(147,51,234,0.12); border: 1px solid rgba(147,51,234,0.3); color: #a855f7; font-weight: 600; font-size: 0.9rem; }
        .gradientText { background: linear-gradient(135deg, #a855f7, #10b9f1, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .btnPrimary { padding: 1rem 1.5rem; border: 0; border-radius: 12px; font-weight: 700; background: linear-gradient(135deg, #9333ea, #22d3ee); color: white; cursor: pointer; }
        .muted { color: #9ca3af; }
        .featureCard { cursor: pointer; transition: transform .12s ease, border-color .12s ease; }
        .featureCard:hover { transform: translateY(-2px); border-color: rgba(147,51,234,0.5); }
        .modalBackdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(2px); z-index: 80; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .modalBody { width: 100%; max-width: 560px; background: rgba(15,15,35,0.98); border: 1px solid rgba(147,51,234,0.35); border-radius: 16px; padding: 1.25rem; }
      `}</style>

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(147,51,234,0.2)', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }} className="gradientText">MirrorSync</div>
          </a>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#features" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Features</a>
            <a href="#how-it-works" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>How It Works</a>
            <a href="#pricing" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Pricing</a>
            <a href="/whitepaper" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Whitepaper</a>
            <a href="/roadmap" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Roadmap</a>
            <a href="/changelog" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Changelog</a>
            <a href="/contact" className="muted" style={{ textDecoration: 'none', fontWeight: 600 }}>Contact</a>
            <a href="#waitlist" className="btnPrimary" style={{ textDecoration: 'none' }}>Join Waitlist</a>
          </nav>

          {/* Mobile button */}
          <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 0, color: 'white', fontSize: '1.75rem', padding: '0.25rem 0.5rem', cursor: 'pointer' }}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ borderTop: '1px solid rgba(147,51,234,0.2)' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
              {[
                ['#features','Features'],
                ['#how-it-works','How It Works'],
                ['#pricing','Pricing'],
                ['/whitepaper','Whitepaper'],
                ['/roadmap','Roadmap'],
                ['/changelog','Changelog'],
                ['/contact','Contact'],
                ['#waitlist','Join Waitlist'],
              ].map(([href,label]) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', padding: '0.75rem 0', textAlign: 'center', fontWeight: 700 }}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: '72px' }} />

      {/* Hero */}
      <Section id="hero" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <span className="chip">🚀 Devnet prep — building in public</span>
        <h1 style={{ fontSize: '3.2rem', lineHeight: 1.1, fontWeight: 900, margin: '1rem 0 1rem' }} className="gradientText">
          Copy Profitable Traders<br />on Solana
        </h1>
        <p className="muted" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          AI-verified strategies. Non-custodial security. Fees only when you profit.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span style={{ fontWeight: 700, color: '#fbbf24' }}>✓ Built on Solana</span>
          <span style={{ fontWeight: 700, color: '#22d3ee' }}>✓ Non-Custodial</span>
          <span style={{ fontWeight: 700, color: '#34d399' }}>✓ Performance-Based Fees</span>
        </div>
        <a href="#waitlist" className="btnPrimary" style={{ textDecoration: 'none' }}>Join the Waitlist</a>
      </Section>

      {/* Features (click opens modal) */}
      <Section id="features" style={{ paddingTop: '2rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.75rem' }}>Why MirrorSync?</h2>
        <p className="muted" style={{ marginBottom: '1.25rem' }}>Click any card for details. We label what’s live, in beta, or planned.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { k:'aiVerification', icon:'🤖', title:'AI-Verified Traders', desc:'Scoring to filter luck and surface consistent performance.' },
            { k:'nonCustodial', icon:'🔒', title:'Non-Custodial', desc:'Funds stay in your wallet. Smart contracts execute your intent.' },
            { k:'realTimeMirroring', icon:'⚡', title:'Real-Time Mirroring', desc:'Near-instant execution across followers with on-chain settlement.' },
            { k:'perfFees', icon:'💰', title:'Fees Only on Profit', desc:'Execution 0.10% + 10% performance (8% Guide / 2% platform).' },
          ].map(({k,icon,title,desc}) => (
            <button key={k} className="card featureCard" onClick={() => openModal({ k, title, desc, status: FEATURE_STATUS[k] })} style={{ textAlign: 'left', background:'transparent' }}>
              <div style={{ fontSize: '2rem' }}>{icon}</div>
              <h3 style={{ margin: '0.75rem 0', fontSize: '1.15rem' }}>
                {title} <StatusBadge status={FEATURE_STATUS[k]} />
              </h3>
              <p className="muted" style={{ lineHeight: 1.6 }}>{desc}</p>
            </button>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works">
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            ['1','Connect','Link your Solana wallet. No deposits needed.'],
            ['2','Select','Choose a verified Guide that matches your risk.'],
            ['3','Allocate','Pick allocation and risk limits.'],
            ['4','Copy','Trades mirror automatically. You stay in control.'],
          ].map(([step,title,desc]) => (
            <div key={step} className="card" style={{ textAlign: 'center' }}>
              <div className="chip" style={{ marginBottom: '0.75rem' }}>Step {step}</div>
              <h3 style={{ margin: 0 }}>{title}</h3>
              <p className="muted" style={{ marginTop: '0.5rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Pricing</h2>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div><h3 style={{ marginTop: 0 }}>Execution Fee</h3><p className="muted">0.10% per mirrored trade</p></div>
          <div><h3 style={{ marginTop: 0 }}>Performance Fee</h3><p className="muted">10% of profits — 8% Guide / 2% platform</p></div>
          <div><h3 style={{ marginTop: 0 }}>Example</h3><p className="muted">$1,000 profit → $80 to Guide, $20 platform, $900 you</p></div>
        </div>
        <p className="muted" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>Notes: Fees may change after audit and mainnet launch.</p>
      </Section>

      {/* Waitlist (Formspree) */}
      <Section id="waitlist" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.1rem', fontWeight: 900, marginBottom: '0.75rem' }}>
          {state.succeeded ? '🎉 Welcome to the Waitlist!' : 'Stop Losing Money. Start Copying Winners.'}
        </h2>
        {state.succeeded ? (
          <>
            <p className="muted" style={{ marginBottom: '1.25rem' }}>Check your email! We’ll notify you when we launch.</p>
            <button onClick={() => window.location.reload()} className="btnPrimary">Submit Another Email</button>
          </>
        ) : (
          <>
            <p className="muted" style={{ marginBottom: '1.25rem' }}>Join early access — limited beta invites.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="hidden" name="source" value="waitlist_home" />
              {/* spam honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <input
                id="email" type="email" name="email" placeholder="Enter your email"
                value={email} onChange={(e) => setEmail(e.target.value)} required
                style={{ flex:'1', minWidth:'240px', padding:'1rem 1.25rem', background:'#111827',
                  border:'1px solid rgba(147,51,234,0.35)', borderRadius:'12px', color:'white', fontSize:'1rem' }}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <button type="submit" disabled={state.submitting} className="btnPrimary" style={{ minWidth: 160 }}>
                {state.submitting ? 'Joining…' : 'Join Waitlist'}
              </button>
            </form>
            {state.errors && state.errors.length > 0 && (
              <p style={{ color: '#ef4444', marginTop: '0.75rem' }}>Oops! There was an error. Please try again.</p>
            )}
          </>
        )}
      </Section>

      {/* Footer (no socials) */}
      <footer style={{ borderTop: '1px solid rgba(147,51,234,0.2)', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div className="gradientText" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.25rem' }}>MirrorSync</div>
        <p className="muted" style={{ marginBottom: '1rem' }}>© {new Date().getFullYear()} Mirror Sync. Building in public.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap:'wrap' }}>
          <a href="/contact" className="card" style={{ textDecoration:'none' }}>Contact</a>
          <a href="#waitlist" className="card" style={{ textDecoration:'none' }}>Join Waitlist</a>
          <a href="/changelog" className="card" style={{ textDecoration:'none' }}>Changelog</a>
          <a href="/roadmap" className="card" style={{ textDecoration:'none' }}>Roadmap</a>
        </div>
        <p className="muted" style={{ marginTop:'0.75rem', fontSize:'0.85rem' }}>
          Transparency: Some features are in <b>Beta</b> or <b>Planned</b>. We clearly label availability and never over-promise.
        </p>
      </footer>

      {/* Modal */}
      {modal && (
        <div className="modalBackdrop" onClick={closeModal} role="dialog" aria-modal="true" aria-label={modal.title}>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h3 style={{ margin:0 }}>{modal.title} <StatusBadge status={modal.status} /></h3>
              <button onClick={closeModal} aria-label="Close" style={{ background:'none', border:0, color:'#fff', fontSize:'1.25rem', cursor:'pointer' }}>✕</button>
            </div>
            <p className="muted" style={{ marginTop:'0.75rem' }}>{modal.desc}</p>
            <div style={{ display:'flex', gap:'0.75rem', marginTop:'1rem' }}>
              {modal.status === 'available' && DEVNET_DEMO ? (
                <a href={DEVNET_DEMO} target="_blank" rel="noreferrer" className="btnPrimary" style={{ textDecoration:'none' }}>Open Devnet Demo</a>
              ) : (
                <button className="btnPrimary" onClick={() => { closeModal(); jumpTo('waitlist'); }}>Request Access</button>
              )}
              <a href="/roadmap" className="card" style={{ textDecoration:'none' }}>View Roadmap</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
