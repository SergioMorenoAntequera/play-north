import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-pika-production-cdn-bucket.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
