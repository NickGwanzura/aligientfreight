import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  allowedDevOrigins: ["127.0.0.1", "192.168.100.217"],
  images: { unoptimized: true },
};

export default nextConfig;
