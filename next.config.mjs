/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "motionsites.ai",
      },
      {
        protocol: "https",
        hostname: "shrug-person-78902957.figma.site",
      },
      {
        protocol: "https",
        hostname: "images.higgs.ai",
      },
    ],
  },
};

export default nextConfig;
