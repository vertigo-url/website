import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["192.168.20.239"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
