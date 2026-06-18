/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath can be set via env variable if deploying to username.github.io/repo-name
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
