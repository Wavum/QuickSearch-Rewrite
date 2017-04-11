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
        [{
            test: /\.ts$/,
            loader: "awesome-typescript-loader"
        }]
    }
}