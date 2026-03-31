import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/flow-plumbing", destination: "/plumbing-demo", permanent: true },
      { source: "/elite-roofing", destination: "/roofing-demo", permanent: true },
      { source: "/comfort-hvac-pros", destination: "/hvac-demo", permanent: true },
      { source: "/precision-electric", destination: "/electrical-demo", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
