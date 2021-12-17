const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: {
        "index": "./src/index.js",
    },
    output: {
        publicPath: `chrome-extension://__MSG_@@extension_id__/`
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|ico)$/,
                type: "asset/resource",
            }
        ],
    },
    resolve: {
        extensions: [".js", ".css"],
    },
    plugins: [
        new MiniCssExtractPlugin({
        }),
    ],
};
