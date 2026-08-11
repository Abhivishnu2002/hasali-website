import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Allow PNG files (from the generated cosmetology image)
    dangerouslyAllowSVG: false,
  },
  // Compress responses
  compress: true,
  // Remove powered-by header
  poweredByHeader: false,
};

export default nextConfig;
