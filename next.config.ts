import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
