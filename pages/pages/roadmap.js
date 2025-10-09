export default function Roadmap() {
  const rows = [
    ['Waitlist form (Formspree)', 'Available'],
    ['Mobile navigation', 'Available'],
    ['Non-custodial vault contract (devnet)', 'Beta'],
    ['Real-time mirroring', 'Planned'],
    ['AI verification scoring', 'Planned'],
    ['Whitepaper v1', 'Planned'],
    ['$MSYNC token & governance', 'Planned'],
    ['Audit + mainnet', 'Planned'],
  ];
  return (
    <div style={{ color:'#fff', fontFamily:'system-ui', background:'#0f0f23', minHeight:'100vh', padding:'6rem 2rem', maxWidth:1000, margin:'0 auto' }}>
      <a href="/" style={{ color:'#22d3ee', textDecoration:'none' }}>← Back to Home</a>
      <h1 style={{ marginTop:'1rem' }}>Public Roadmap</h1>
      <p style={{ color:'#9ca3af' }}>We label everything honestly. No over-promises.</p>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign:'left', padding:'0.75rem', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>Item</th>
              <th style={{ textAlign:'left', padding:'0.75rem', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, status]) => (
              <tr key={name}>
                <td style={{ padding:'0.75rem', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>{name}</td>
                <td style={{ padding:'0.75rem', borderBottom:'1px solid rgba(255,255,255,0.06)', color: status==='Available' ? '#10b981' : status==='Beta' ? '#f59e0b' : '#9ca3af' }}>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color:'#9ca3af', marginTop:'1rem' }}>Want something prioritized? Tell us on <a href="/#waitlist" style={{ color:'#22d3ee' }}>waitlist signup</a>.</p>
    </div>
  );
}
