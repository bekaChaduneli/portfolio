import createNextIntlPlugin from "next-intl/plugin";
import withPlugins from "next-compose-plugins";
import withTM from "next-transpile-modules";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "standalone",

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(mp3|wav|ogg)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/sounds",
            outputPath: "static/sounds",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      }
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default withPlugins(
  [withNextIntl, withTM(["@types/howler"])],
  nextConfig
);
