const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist")
};

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
    elements: path.join(
      __dirname,
      "../src/pages/ui-kit/form-elements/form-elements.js"
    ),
    cards: path.join(__dirname, "../src/pages/ui-kit/cards/cards.js"),
    "headers&footers": path.join(
      __dirname,
      "../src/pages/ui-kit/headers&footers/headers&footers.js"
    ),
    "landing-pages": path.join(
      __dirname,
      "../src/pages/website-pages/landing-pages/landing-pages.js"
    ),
    "search-room": path.join(
      __dirname,
      "../src/pages/website-pages/search-room/search-room.js"
    ),
    "room-details": path.join(
      __dirname,
      "../src/pages/website-pages/room-details/room-details.js"
    ),
    registration: path.join(
      __dirname,
      "../src/pages/website-pages/registration/registration.js"
    ),
    "sign-in": path.join(
      __dirname,
      "../src/pages/website-pages/sign-in/sign-in.js"
    ),
  },

  output: {
    filename: `js/[name].js`,
    path: PATHS.dist,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPuth: '/'
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "~": "src",
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      chunks: ["app"],
      hash: false,
      template: `${PATHS.src}/pages/ui-kit/colors&type/colors&type.pug`,
      filename: "./html/colors&type.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "elements"],
      hash: false,
      template: `${PATHS.src}/pages/ui-kit/form-elements/form-elements.pug`,
      filename: "./html/form-elements.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "cards"],
      hash: false,
      template: `${PATHS.src}/pages/ui-kit/cards/cards.pug`,
      filename: "./html/cards.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "headers&footers"],
      hash: false,
      template: `${PATHS.src}/pages/ui-kit/headers&footers/headers&footers.pug`,
      filename: "./html/headers&footers.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "landing-pages"],
      hash: false,
      template: `${PATHS.src}/pages/website-pages/landing-pages/landing-pages.pug`,
      filename: "./html/landing-pages.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "search-room"],
      hash: false,
      template: `${PATHS.src}/pages/website-pages/search-room/search-room.pug`,
      filename: "./html/search-room.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "room-details"],
      hash: false,
      template: `${PATHS.src}/pages/website-pages/room-details/room-details.pug`,
      filename: "./html/room-details.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "registration"],
      hash: false,
      template: `${PATHS.src}/pages/website-pages/registration/registration.pug`,
      filename: "./html/registration.html",
    }),

    new HtmlWebpackPlugin({
      chunks: ["app", "sign-in"],
      hash: false,
      template: `${PATHS.src}/pages/website-pages/sign-in/sign-in.pug`,
      filename: "./html/sign-in.html",
    }),

    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: "img" },
      { from: `${PATHS.src}/fonts`, to: "fonts" },
      { from: `${PATHS.src}/static`, to: "" },
    ]),

    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          chunks: ["app"],
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
  ],
};
