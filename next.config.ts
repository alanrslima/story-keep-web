import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desativa a otimização de imagens
  },
  /* config options here */
};

export default nextConfig;
