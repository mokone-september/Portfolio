/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["@react-email/render"],
    experimental: {
        // If you have other experimental options, keep them under `experimental`.
    },
};

module.exports = nextConfig;
