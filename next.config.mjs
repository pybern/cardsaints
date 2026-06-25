/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // We only ever serve our own, locally-generated placeholder SVGs.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
