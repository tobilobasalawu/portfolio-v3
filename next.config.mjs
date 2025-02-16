/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: ".",
  assetPrefix: "/", // for github pages
};

export default nextConfig;
