export default function NotFound() {
  return (
    <div style={{minHeight:"100vh",background:"#0f0f23",color:"#fff",fontFamily:"system-ui"}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"6rem 2rem",textAlign:"center"}}>
        <h1 style={{fontSize:"3rem",marginBottom:"0.5rem"}}>404 — Page Not Found</h1>
        <p style={{color:"#9ca3af"}}>The page you’re looking for doesn’t exist.</p>
        <div style={{marginTop:"1.25rem"}}>
          <a href="/" style={{padding:"0.9rem 1.25rem",borderRadius:12,
            background:"linear-gradient(135deg,#9333ea,#22d3ee)",color:"#fff",textDecoration:"none",fontWeight:700}}>Back Home</a>
          <a href="/contact" style={{marginLeft:"0.75rem",padding:"0.9rem 1.25rem",borderRadius:12,
            border:"1px solid rgba(147,51,234,0.5)",textDecoration:"none",color:"#fff"}}>Contact</a>
        </div>
      </div>
    </div>
  );
}
