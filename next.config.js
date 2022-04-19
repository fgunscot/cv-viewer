/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  assetPrefix: !debug ? 'https://fgunscot.github.io/cv-viewer/' : '',
}

module.exports = nextConfig
