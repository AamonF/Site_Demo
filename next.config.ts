import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lawyer-demo/practice-areas/dui-dwi",
        destination: "/lawyer-demo/practice-areas/criminal-defense/dui-dwi",
        permanent: true,
      },
      {
        source: "/lawyer-demo/practice-areas/immigration",
        destination: "/lawyer-demo/practice-areas/immigration-law",
        permanent: true,
      },
      {
        source: "/lawyer-demo/practice-areas/business-litigation",
        destination: "/lawyer-demo/practice-areas",
        permanent: true,
      },
      {
        source: "/lawyer-demo/practice-areas/estate-planning",
        destination: "/lawyer-demo/practice-areas",
        permanent: true,
      },
      {
        source: "/lawyer-demo/practice-areas/workers-compensation",
        destination: "/lawyer-demo/practice-areas/personal-injury",
        permanent: true,
      },
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
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
