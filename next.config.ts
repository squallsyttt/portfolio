import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  devIndicators: false,
  images: {
    // 启用图片优化格式
    formats: ["image/webp", "image/avif"],
    // 允许的图片尺寸
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 启用危险允许SVG
    dangerouslyAllowSVG: true,
    // 内容安全策略
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
