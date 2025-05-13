// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables Turbopack
  },
};

module.exports = nextConfig;
