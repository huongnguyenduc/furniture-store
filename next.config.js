const withFonts = require('next-fonts');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withFonts(
  withBundleAnalyzer({
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack(config, options) {
      return config;
    },
  })
);
