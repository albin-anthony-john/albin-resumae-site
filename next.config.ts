import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  devIndicators: false,
  poweredByHeader: false,
  agentRules: false,
};

export default nextConfig;
