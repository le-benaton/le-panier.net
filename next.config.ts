import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
