import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import MinimizerPlugin from "minimizer-webpack-plugin";

const { cssMinify } = webpack.css.syntax;
const { htmlMinify } = webpack.html.syntax;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: "./src/index.js",

  optimization: {
    minimize: true,

    minimizer: [
      new MinimizerPlugin({
        test: /\.(?:[cm]?js|css|html|json)(\?.*)?$/i,

        minify: [
          { implementation: MinimizerPlugin.terserMinify },
          { implementation: cssMinify },
          { implementation: htmlMinify },
          { implementation: MinimizerPlugin.jsonMinify },
        ],
      }),
    ],
  },

  devServer: {
    port: 8080,
    open: true,
    hot: true,
    watchFiles: ["src/**/*.html"],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp|avif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};

export default config;
