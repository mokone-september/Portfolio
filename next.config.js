/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental.serverComponentsExternalPackages and use serverExternalPackages instead
  serverExternalPackages: ['@react-email/render'],
  
  // If you need images configuration, uncomment and fix this section:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      }
    ]
  }
}

module.exports = nextConfig
