import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove webpack config since we're using Turbopack
  // Polling is handled by WATCHPACK_POLLING=true environment variable
};

export default nextConfig;
