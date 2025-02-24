import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? 'standalone' : undefined,
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
  }
};

export default nextConfig;
