import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this dir — a stray lockfile exists in the parent
  // Projects/ folder, which Turbopack would otherwise infer as the root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
