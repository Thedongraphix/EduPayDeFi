/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
  
<<<<<<< HEAD
  module.exports = nextConfig
=======
  module.exports = nextConfig
>>>>>>> 0856da589eff8f6794234a1143a4e367214c2aa1
