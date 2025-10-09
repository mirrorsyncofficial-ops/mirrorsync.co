/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
        ]
      }
    ];
  },

  // www → root
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mirrorsync.co" }],
        destination: "https://mirrorsync.co/:path*",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
