/** @type {import('next').NextConfig} */
const nextConfig = {
    // Moved from experimental.serverComponentsExternalPackages
    // to the top-level `serverExternalPackages` option in newer Next.js.
    serverExternalPackages: [
        '@react-email/render',
    ],
    // If you have other experimental options, keep them under `experimental`.
    experimental: {
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
    }
}

module.exports = nextConfig
