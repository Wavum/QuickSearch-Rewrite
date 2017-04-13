var webpack = require("webpack");

module.exports =
{
    output:
    {
        filename: "index.js"
    },
    devtool: "source-map",
    module:
    {
        loaders:
        [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: "pre",
                test: /\.ts$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                include: /src/
            }
        ]
    }
}