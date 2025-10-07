export default function Home() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      borderBottom: '1px solid #1A1A1A',
      padding: '24px'
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#9945FF'
    },
    hero: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '120px 24px',
      textAlign: 'center'
    },
    h1: {
      fontSize: '64px',
      fontWeight: '800',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#9945FF',
      color: '#FFFFFF',
      padding: '16px 48px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>MirrorSync</div>
        </nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.h1}>
          Copy Profitable Traders<br />on Solana
        </h1>
        <p style={{fontSize: '20px', color: '#A0A0A0', marginBottom: '48px'}}>
          AI-verified strategies. Non-custodial security. Zero fees until you profit.
        </p>
        <a href="#signup" style={styles.button}>
          Join 500+ on Waitlist →
        </a>
      </section>
    </div>
  )
}
