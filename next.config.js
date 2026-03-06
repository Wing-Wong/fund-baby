/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: 'export',
  basePath: '/fund-baby',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

