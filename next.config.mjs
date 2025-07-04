/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    NEXT_PUBLIC_STRAPIC_JWT_TOKEN: process.env.NEXT_PUBLIC_STRAPIC_JWT_TOKEN,
  },
}

export default nextConfig
