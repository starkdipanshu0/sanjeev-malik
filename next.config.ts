import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // The blog moved from /articles to /blogs. Keep the old URLs alive so any
  // existing link or indexed page follows through instead of 404ing.
  async redirects() {
    return [
      { source: '/articles', destination: '/blogs', permanent: true },
      { source: '/articles/:slug', destination: '/blogs/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
