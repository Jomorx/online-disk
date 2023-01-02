/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      // components: path.resolve(__dirname, "components"),
      // sass: path.resolve(__dirname, "sass"),
      // static: path.resolve(__dirname, "static"),
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/drive",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
