import { Connection, PublicKey } from '@solana/web3.js';

const programId = new PublicKey("HqgtRykyVLCYEPWYt4HHovRiTitUyMJ1aCtsaKfoTuR6");
const connection = new Connection("https://api.devnet.solana.com");

function mirrorTrade() {
  console.log("Mirroring trade to", programId.toString());
}

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Mirrorsync</h1>
      <p>Decentralized copy-trading on Solana for Myanmar.</p>
      <button onClick={mirrorTrade} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Mirror Trade (Devnet)
      </button>
      <footer style={{ marginTop: '20px' }}>
        <a href="https://github.com/mirrorsyncofficial-ops/mirrorsync.co">GitHub</a> | <a href="https://github.com/mirrorsyncofficial-ops/mirror-sync-contract">Contract</a> | Devnet: HqgtRykyVLCYEPWYt4HHovRiTitUyMJ1aCtsaKfoTuR6
      </footer>
    </div>
  );
}
