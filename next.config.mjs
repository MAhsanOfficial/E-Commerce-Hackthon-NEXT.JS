/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeapi.platzi.com',
        pathname: '/img/**', // Matches all images under /img/
      },
      
    ],
  },};

export default nextConfig;


