import webpack from "webpack"

import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins ({paths}) {

    return [
        new HtmlWebpackPlugin({
            title: "Pet Pizza",
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:8].css',
            chunkFilename: 'styles/[name].[contenthash:8].css'
        }),
    ]
}