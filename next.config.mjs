/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/github', 
        destination: 'https://github.com/aneeshpatne',
        permanent: true,   
      },
    ];
  },
};

export default nextConfig;
