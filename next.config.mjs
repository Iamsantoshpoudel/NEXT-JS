/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        // Add experimental Turbo settings here
      },
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match .svg files
        use: ["@svgr/webpack"], // Use @svgr/webpack to handle them
      });
      return config;
    },
  };
  
  export default nextConfig;
  