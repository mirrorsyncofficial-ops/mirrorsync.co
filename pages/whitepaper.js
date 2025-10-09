export default function Whitepaper() {
  return (
    <div style={{ color:'#fff', fontFamily:'system-ui', background:'#0f0f23', minHeight:'100vh', padding:'6rem 2rem', maxWidth:900, margin:'0 auto' }}>
      <a href="/" style={{ color:'#22d3ee', textDecoration:'none' }}>← Back to Home</a>
      <h1 style={{ marginTop:'1rem' }}>MirrorSync Whitepaper (Working Draft)</h1>
      <p style={{ color:'#9ca3af' }}>
        We’re writing this in public. Sections will appear as they’re ready. No promises beyond what’s shipped.
      </p>
      <ul>
        <li>Vision & Problem — <b>In progress</b></li>
        <li>Architecture (Solana, Programs, DEX routes) — <b>Planned</b></li>
        <li>AI Verification — <b>Planned</b></li>
        <li>Token ($MSYNC) — <b>Planned</b></li>
        <li>Security & Audits — <b>Planned</b></li>
      </ul>
      <p style={{ color:'#9ca3af' }}>Want early access? <a href="/#waitlist" style={{ color:'#22d3ee' }}>Join the waitlist</a>.</p>
    </div>
  );
}
