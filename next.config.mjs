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
      {
        source: '/leetcode', 
        destination: 'https://leecode.com/u/aneeshpatne',
        permanent: true,   
      },
      {
        source: '/linkedin', 
        destination: 'https://linkedin.com/in/aneeshpatne',
        permanent: true,   
      },
    ];
  },
};

export default nextConfig;
