import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  // register: true,
  // skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});

const nextConfig = withPWA({
  output: "export",
  images: {
    unoptimized: true, // Desativa a otimização de imagens
  },

  reactStrictMode: true,
  // swcMinify: true,
  /* config options here */
});

export default nextConfig;
