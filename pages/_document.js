import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="description" content="Solana copy trading. Non-custodial. Fees only when you profit." />
        <meta property="og:title" content="MirrorSync — Copy Profitable Traders on Solana" />
        <meta property="og:description" content="AI-verified strategies. Non-custodial. Fees only when you profit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mirrorsync.co" />
      </Head>
      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
