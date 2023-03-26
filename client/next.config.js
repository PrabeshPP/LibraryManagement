/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains : ['localhost', 'res.cloudinary.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cloudinary.com',
    //     port: '3000',
    //     pathname : '/dprpcrqdb/**',
    //   },
    // ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
