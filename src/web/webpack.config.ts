import * as path from "path";
import { Configuration } from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const webpackConfig: Configuration = {
  entry: path.resolve(__dirname, "index.tsx"),
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo at Kazoo",
      template: path.resolve(__dirname, "entry.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default webpackConfig;
