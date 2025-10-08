'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Home() {
  const [state, handleSubmit] = useForm("mkgqvbkr");
  const [email, setEmail] = useState('');

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
        
        <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '2rem', background: 'linear-gradient(135deg, #a855f7, #10b9f1, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Copy Profitable Traders<br />on Solana</h1>
        
        <p style={{ fontSize: '1.5rem', color: '#9ca3af', marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>AI-verified strategies. Non-custodial security. Zero fees until you profit.</p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#fbbf24' }}>✓ Built on Solana</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#22d3ee' }}>✓ Non-Custodial</span>
        </div>
      </div>

      {/* CTA with Formspree */}
      <div style={{ padding: '6rem 2rem', textAlign: 'center', color: 'white' }}>
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
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              <input 
                id="email"
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '1.2rem 1.5rem', background: '#1f2937', border: '1px solid rgba(147,51,234,0.3)', borderRadius: '12px', color: 'white', fontSize: '1rem' }} 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              
              <button 
                type="submit"
                disabled={state.submitting}
                style={{ padding: '1.2rem 2rem', borderRadius: '12px', fontWeight: '700', border: 'none', background: state.submitting ? '#666' : 'linear-gradient(135deg, #9333ea, #22d3ee)', color: 'white', cursor: state.submitting ? 'not-allowed' : 'pointer' }}
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
