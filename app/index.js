import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import idl from './idl.json'; // Placeholder—generate this next

const programId = new PublicKey("HqgtRykyVLCYEPWYt4HHovRiTitUyMJ1aCtsaKfoTuR6");
const connection = new Connection("https://api.devnet.solana.com");

// Placeholder IDL (generate via Anchor—see Step 2)
const idlString = `{"version":"0.1.0","name":"mirror_sync_core","instructions":[{"name":"mirror_trade","accounts":[{"name":"trader","isMut":true,"isSigner":true},{"name":"follower","isMut":true,"isSigner":false},{"name":"system_program","isMut":false,"isSigner":false}],"args":[{"name":"amount","type":"u64"}]}],"accounts":[],"errors":[],"metadata":{"address":"HqgtRykyVLCYEPWYt4HHovRiTitUyMJ1aCtsaKfoTuR6"}}`;
const idlObject = JSON.parse(idlString);

async function mirrorTrade() {
  if (window.solana) {
    const provider = new AnchorProvider(connection, window.solana, { commitment: "confirmed" });
    const program = new Program(idlObject, programId, provider);

    try {
      const amount = 1000000; // 0.001 SOL in lamports (adjust)
      const followerPubkey = new PublicKey("FOLLOWER_PUBLIC_KEY_HERE"); // Replace with follower’s key
      const tx = await program.methods.mirrorTrade(new web3.BN(amount))
        .accounts({
          trader: provider.wallet.publicKey,
          follower: followerPubkey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.log("Please connect a Solana wallet (e.g., Phantom).");
  }
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
