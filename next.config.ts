import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  allowedDevOrigins: ['192.168.1.104'],
  images: {
    dangerouslyAllowSVG: true, // Required to use SVGs with next/image
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [new URL('https://biz-cdn.varzesh3.com/banners/**')],
  },
};

export default nextConfig;
