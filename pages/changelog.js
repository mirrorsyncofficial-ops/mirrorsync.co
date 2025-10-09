export default function Changelog() {
  const items = [
    ['2025-10-09', 'Landing page v2: feature modals, status badges, roadmap/changelog pages.'],
    ['2025-10-09', 'Waitlist (Formspree) integrated; mobile menu; DNS moved to new project.'],
  ];
  return (
    <div style={{ color:'#fff', fontFamily:'system-ui', background:'#0f0f23', minHeight:'100vh', padding:'6rem 2rem', maxWidth:900, margin:'0 auto' }}>
      <a href="/" style={{ color:'#22d3ee', textDecoration:'none' }}>← Back to Home</a>
      <h1 style={{ marginTop:'1rem' }}>Changelog</h1>
      <ul>
        {items.map(([date, text]) => (
          <li key={date} style={{ margin:'0.75rem 0' }}>
            <b>{date}:</b> <span style={{ color:'#9ca3af' }}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
