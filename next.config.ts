import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1525751-5907573.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
