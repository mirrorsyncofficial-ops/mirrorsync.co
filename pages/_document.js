import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MirrorSync",
    url: "https://mirrorsync.co",
    logo: "https://mirrorsync.co/favicon.svg",
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer support", url: "https://mirrorsync.co/contact" }
    ]
  };

  const jsonLdSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MirrorSync",
    url: "https://mirrorsync.co",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mirrorsync.co/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Html lang="en">
      <Head>
        {/* Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* If you later add a PNG: <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

        {/* Canonical + preconnects */}
        <link rel="canonical" href="https://mirrorsync.co/" />
        <link rel="preconnect" href="https://formspree.io" />

        {/* SEO */}
        <meta name="theme-color" content="#0f0f23" />
        <meta name="description" content="Solana copy trading. Non-custodial. Fees only when you profit." />

        {/* Open Graph / Twitter (using SVG for now; swap to /og.png when ready) */}
        <meta property="og:title" content="MirrorSync — Copy Profitable Traders on Solana" />
        <meta property="og:description" content="AI-verified strategies. Non-custodial. Fees only when you profit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mirrorsync.co" />
        <meta property="og:image" content="https://mirrorsync.co/og.svg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured data */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite) }} />
      </Head>
      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
