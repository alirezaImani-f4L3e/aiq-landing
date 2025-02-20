import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true
    }
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hub-apac-1.lobeobjects.space"
      }
    ]
  },
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    }
  }
};

export default nextConfig;
