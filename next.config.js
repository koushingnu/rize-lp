/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: "out",
  basePath: "/toyosupit-fullbandsetlive",
  assetPrefix: "/toyosupit-fullbandsetlive",
};

module.exports = nextConfig;
