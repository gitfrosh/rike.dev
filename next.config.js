/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  // images: {
  //   domains: [
  //     'www.notion.so',
  //     'notion.so',
  //     'images.unsplash.com',
  //     'pbs.twimg.com'
  //   ],
  //   formats: ['image/avif', 'image/webp']
  // },
  reactStrictMode: false,
  // webpack5: true,import ReactGA from 'react-ga';

  webpack: (config) => {
    config.resolve.fallback = { dns: false, fs: false, net: false, tls: false, http2: false, dgram: false };
    return config;
  },
  experimental: {
    appDir: false,
  },
});
