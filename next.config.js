/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en", "cs"],
    defaultLocale: "cs",
    localeDetection: false,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
};
