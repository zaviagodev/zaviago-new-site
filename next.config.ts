import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|mov)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
