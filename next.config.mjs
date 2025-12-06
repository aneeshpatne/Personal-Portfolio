/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/aneeshpatne",
        permanent: true,
      },
      {
        source: "/leetcode",
        destination: "https://leetcode.com/u/aneeshpatne",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/aneeshpatne",
        permanent: true,
      },
    ];
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
