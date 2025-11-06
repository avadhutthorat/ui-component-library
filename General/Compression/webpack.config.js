const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === "production";
  const shouldAnalyze = Boolean(env.ANALYZE);

  return {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd
        ? "static/js/[name].[contenthash].js"
        : "static/js/[name].js",
      chunkFilename: isProd
        ? "static/js/[name].[contenthash].chunk.js"
        : "static/js/[name].chunk.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: isProd && {
          removeComments: true,
          collapseWhitespace: true,
          keepClosingSlash: true,
        },
      }),
      ...(shouldAnalyze
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: "server", // interactive UI
              openAnalyzer: true, // open browser automatically
              defaultSizes: "gzip", // see gzip contribution
            }),
          ]
        : []),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },
    devtool: isProd ? "source-map" : "cheap-module-source-map",
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
      hot: true,
    },
    stats: "minimal",
  };
};
