const webpack = require("webpack");

const Dotenv = require("dotenv-webpack");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const VENDOR_LIBS = ["react", "react-dom"];

var config = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash]-[id].js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"], // note the sequence!
        test: /\.css$/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.s[ac]ss$/i,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    // new FaviconsWebpackPlugin("./favicon.ico"),
    new Dotenv(),
  ],
  devServer: {
    port: 3000,
  },
  devtool: "source-map",
};

module.exports = config;
