export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #1a1a2e, #0f0f23, #1a1a2e)',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          background: 'rgba(147,51,234,0.1)',
          border: '1px solid rgba(147,51,234,0.3)',
          borderRadius: '50px',
          fontSize: '0.9rem',
          color: '#a855f7',
          marginBottom: '2rem'
        }}>
          🚀 Now Live on Solana Devnet
        </div>

        <h1 style={{
          fontSize: '4rem',
          fontWeight: '900',
          lineHeight: '1.1',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #a855f7, #22d3ee, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Copy Profitable Traders<br />on Solana
        </h1>

        <p style={{
          fontSize: '1.5rem',
          color: '#9ca3af',
          marginBottom: '3rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          AI-verified strategies. Non-custodial security. Zero fees until you profit.
        </p>

        <button style={{
          padding: '1.2rem 3rem',
          borderRadius: '12px',
          fontWeight: '700',
          fontSize: '1.1rem',
          cursor: 'pointer',
          border: 'none',
          background: 'linear-gradient(135deg, #9333ea, #22d3ee)',
          color: 'white',
          boxShadow: '0 10px 40px rgba(147,51,234,0.4)'
        }}>
          Join 500+ on Waitlist →
        </button>
      </div>
    </div>
  )
}