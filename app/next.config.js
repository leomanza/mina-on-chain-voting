/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    userEndpoint: "http://35.203.38.140:8080/votes"
  }
}

export default nextConfig // was module.exports = nextConfig 